package com.company.shoppingmall.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.company.shoppingmall.dto.InventoryDto;
import com.company.shoppingmall.dto.InventorySearchDto;
import com.company.shoppingmall.mapper.InventoryMapper;

@Service
public class InventoryService {
    private final InventoryMapper inventoryMapper;

    public InventoryService(InventoryMapper inventoryMapper) {
        this.inventoryMapper = inventoryMapper;
    }
    // 재고 목록 조회
    public List<InventoryDto> getInventoryList(InventorySearchDto searchDto) {
        return inventoryMapper.selectInventoryList(searchDto);
    }

    // 재고 상세 조회
    public InventoryDto getInventoryDetail(Long productId, String warehouseId) {
        return inventoryMapper.selectInventoryDetail(productId, warehouseId);
    }

    // 재고 수량 수정
    @Transactional
    public int updateInventoryQuantities(List<InventoryDto> inventoryDtos, boolean forceUpdate) {
        if (inventoryDtos == null || inventoryDtos.isEmpty()) {
            return 0;
        }
        // 재고 수량이 감소하는 경우 주문 항목 존재 여부 확인
        for (InventoryDto inventoryDto : inventoryDtos) {
            Long originalQuantity = inventoryDto.getOriginalQuantity();
            Long newQuantity = inventoryDto.getQuantity();
            
            if (originalQuantity == null || newQuantity == null) {
                continue;
            }
            if (newQuantity < originalQuantity
                && !forceUpdate //
                && inventoryMapper.countOrderItemsByProductId(inventoryDto.getProductId()) > 0) {
                return -200;
            }
        }
        // 재고 수량 업데이트 또는 이동 처리
        for (InventoryDto inventoryDto : inventoryDtos) {
            String originalWarehouseId = nvl(inventoryDto.getOriginalWarehouseId());
            String warehouseId = nvl(inventoryDto.getWarehouseId());
            // 창고 이동이 필요한 경우
            if (!originalWarehouseId.isEmpty() && !originalWarehouseId.equals(warehouseId)) {
                // 이동할 수량 계산
                Long moveQuantity = inventoryDto.getQuantity() == null ? 0L : inventoryDto.getQuantity();
                inventoryMapper.resetInventoryQuantity(inventoryDto.getProductId(), originalWarehouseId);
                // 이동할 창고에 재고가 이미 존재하는 경우 수량 업데이트 
                if (inventoryMapper.countInventory(inventoryDto.getProductId(), warehouseId) > 0) {
                    inventoryMapper.addInventoryQuantity(inventoryDto.getProductId(), warehouseId, moveQuantity);
                } else { //이동할 창고에 재고가 없는 경우 새로 추가
                    InventoryDto newInventoryDto = new InventoryDto();
                    newInventoryDto.setProductId(inventoryDto.getProductId());
                    newInventoryDto.setWarehouseId(warehouseId);
                    newInventoryDto.setQuantity(moveQuantity);
                    inventoryMapper.insertInventory(newInventoryDto);
                }
                continue;
            }

            inventoryMapper.updateInventoryQuantity(inventoryDto);
        }

        return 0;
    }

    private String nvl(String value) {
        return value == null ? "" : value.trim();
    }
}

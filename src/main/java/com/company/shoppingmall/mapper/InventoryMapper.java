package com.company.shoppingmall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.company.shoppingmall.dto.InventoryDto;
import com.company.shoppingmall.dto.InventorySearchDto;

@Mapper
public interface InventoryMapper {
    // 재고 목록 조회
    List<InventoryDto> selectInventoryList(InventorySearchDto searchDto);

    // 재고 상세 조회
    InventoryDto selectInventoryDetail(@Param("productId") Long productId,
                                       @Param("warehouseId") String warehouseId);

    // 재고 수정
    void updateInventoryQuantity(InventoryDto inventoryDto);

    // 제품별 주문 항목 수 카운트
    int countOrderItemsByProductId(@Param("productId") Long productId);

    // 재고 수량 초기화
    void resetInventoryQuantity(@Param("productId") Long productId,
                                @Param("warehouseId") String warehouseId);
    // 재고 존재 여부 확인
    int countInventory(@Param("productId") Long productId,
                       @Param("warehouseId") String warehouseId);
    // 재고 수량 추가
    void addInventoryQuantity(@Param("productId") Long productId,
                              @Param("warehouseId") String warehouseId,
                              @Param("quantity") Long quantity);
    // 재고 이동
    void insertInventory(InventoryDto inventoryDto);
}

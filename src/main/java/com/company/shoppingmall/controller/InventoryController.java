package com.company.shoppingmall.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.shoppingmall.dto.InventoryDto;
import com.company.shoppingmall.dto.InventorySearchDto;
import com.company.shoppingmall.service.InventoryService;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class InventoryController {
    private final InventoryService inventoryService;

    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    // 재고 목록 조회
    @PostMapping("/InvenList")
    public void getInventoryList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCond = inData.getDataSet("ds_cond");

        InventorySearchDto searchDto = new InventorySearchDto();
        if (dsCond != null && dsCond.getRowCount() > 0) {
            searchDto.setCategoryId(parseLong(dsCond.getString(0, "categoryId")));
            searchDto.setProductName(nvl(dsCond.getString(0, "productName")));
            searchDto.setWarehouseName(nvl(dsCond.getString(0, "warehouseName")));
            searchDto.setRegionId(parseLong(dsCond.getString(0, "regionId")));
            searchDto.setCountryId(nvl(dsCond.getString(0, "countryId")));
            searchDto.setLocationId(parseLong(dsCond.getString(0, "locationId")));
        }

        List<InventoryDto> list = inventoryService.getInventoryList(searchDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsInven = new DataSet("ds_inven");
        dsInven.addColumn("categoryId", DataTypes.LONG, 256);
        dsInven.addColumn("categoryName", DataTypes.STRING, 256);
        dsInven.addColumn("productId", DataTypes.LONG, 256);
        dsInven.addColumn("productName", DataTypes.STRING, 256);
        dsInven.addColumn("regionId", DataTypes.LONG, 256);
        dsInven.addColumn("regionName", DataTypes.STRING, 256);
        dsInven.addColumn("countryId", DataTypes.STRING, 256);
        dsInven.addColumn("countryName", DataTypes.STRING, 256);
        dsInven.addColumn("locationId", DataTypes.LONG, 256);
        dsInven.addColumn("locationName", DataTypes.STRING, 256);
        dsInven.addColumn("warehouseId", DataTypes.STRING, 256);
        dsInven.addColumn("warehouseName", DataTypes.STRING, 256);
        dsInven.addColumn("description", DataTypes.STRING, 256);

        for (InventoryDto dto : list) {
            int row = dsInven.newRow();
            dsInven.set(row, "categoryId", dto.getCategoryId());
            dsInven.set(row, "categoryName", nvl(dto.getCategoryName()));
            dsInven.set(row, "productId", dto.getProductId());
            dsInven.set(row, "productName", nvl(dto.getProductName()));
            dsInven.set(row, "regionId", dto.getRegionId());
            dsInven.set(row, "regionName", nvl(dto.getRegionName()));
            dsInven.set(row, "countryId", nvl(dto.getCountryId()));
            dsInven.set(row, "countryName", nvl(dto.getCountryName()));
            dsInven.set(row, "locationId", dto.getLocationId());
            dsInven.set(row, "locationName", nvl(dto.getLocationName()));
            dsInven.set(row, "warehouseId", dto.getWarehouseId());
            dsInven.set(row, "warehouseName", nvl(dto.getWarehouseName()));
            dsInven.set(row, "description", nvl(dto.getDescription()));
        }

        outData.addDataSet(dsInven);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 재고 상세 조회
    @PostMapping("/inventory")
    public void getInventoryDetail(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCond = inData.getDataSet("ds_cond");

        Long productId = null;
        String warehouseId = "";

        if (dsCond != null && dsCond.getRowCount() > 0) {
            productId = parseLong(dsCond.getString(0, "productId"));
            warehouseId = nvl(dsCond.getString(0, "warehouseId"));
        }

        InventoryDto dto = inventoryService.getInventoryDetail(productId, warehouseId);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsInven = new DataSet("ds_inven");
        dsInven.addColumn("warehouseId", DataTypes.STRING, 256);
        dsInven.addColumn("categoryId", DataTypes.STRING, 256);
        dsInven.addColumn("categoryName", DataTypes.STRING, 256);
        dsInven.addColumn("regionId", DataTypes.STRING, 256);
        dsInven.addColumn("regionName", DataTypes.STRING, 256);
        dsInven.addColumn("countryId", DataTypes.STRING, 256);
        dsInven.addColumn("countryName", DataTypes.STRING, 256);
        dsInven.addColumn("locationId", DataTypes.STRING, 256);
        dsInven.addColumn("locationName", DataTypes.STRING, 256);
        dsInven.addColumn("description", DataTypes.STRING, 256);
        dsInven.addColumn("price", DataTypes.STRING, 256);
        dsInven.addColumn("productName", DataTypes.STRING, 256);
        dsInven.addColumn("productId", DataTypes.STRING, 256);
        dsInven.addColumn("warehouseName", DataTypes.STRING, 256);
        dsInven.addColumn("quantity", DataTypes.STRING, 256);

        if (dto != null) {
            int row = dsInven.newRow();
            dsInven.set(row, "warehouseId", nvl(dto.getWarehouseId()));
            dsInven.set(row, "categoryId", dto.getCategoryId() == null ? "" : String.valueOf(dto.getCategoryId()));
            dsInven.set(row, "categoryName", nvl(dto.getCategoryName()));
            dsInven.set(row, "regionId", dto.getRegionId() == null ? "" : String.valueOf(dto.getRegionId()));
            dsInven.set(row, "regionName", nvl(dto.getRegionName()));
            dsInven.set(row, "countryId", nvl(dto.getCountryId()));
            dsInven.set(row, "countryName", nvl(dto.getCountryName()));
            dsInven.set(row, "locationId", dto.getLocationId() == null ? "" : String.valueOf(dto.getLocationId()));
            dsInven.set(row, "locationName", nvl(dto.getLocationName()));
            dsInven.set(row, "description", nvl(dto.getDescription()));
            dsInven.set(row, "price", dto.getPrice() == null ? "" : dto.getPrice().toPlainString());
            dsInven.set(row, "productName", nvl(dto.getProductName()));
            dsInven.set(row, "productId", dto.getProductId() == null ? "" : String.valueOf(dto.getProductId()));
            dsInven.set(row, "warehouseName", nvl(dto.getWarehouseName()));
            dsInven.set(row, "quantity", dto.getQuantity() == null ? "" : String.valueOf(dto.getQuantity()));
        }

        outData.addDataSet(dsInven);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 재고 수량 수정
    @PostMapping("/inventory/quantity")
    public void updateWarehouseQuantity(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsInven = inData.getDataSet("ds_inven");
        DataSet dsOrigin = inData.getDataSet("ds_origin");
        VariableList inVar = inData.getVariableList();
        boolean forceUpdate = false;

        // 삭제 컨펌
        if (inVar != null) {
            forceUpdate = "Y".equalsIgnoreCase(nvl(inVar.getString("forceUpdate")))
                || "true".equalsIgnoreCase(nvl(inVar.getString("forceUpdate")));
        }

        List<InventoryDto> inventoryDtos = new java.util.ArrayList<>();
        if (dsInven != null && dsInven.getRowCount() > 0) {
            for (int i = 0; i < dsInven.getRowCount(); i++) {
                InventoryDto inventoryDto = new InventoryDto();
                inventoryDto.setProductId(parseLong(dsInven.getString(i, "productId")));
                inventoryDto.setWarehouseId(nvl(dsInven.getString(i, "warehouseId")));
                inventoryDto.setQuantity(parseLong(dsInven.getString(i, "quantity")));

                if (dsOrigin != null && dsOrigin.getRowCount() > i) {
                    inventoryDto.setOriginalWarehouseId(nvl(dsOrigin.getString(i, "ogWarehouseId")));
                    inventoryDto.setOriginalQuantity(parseLong(dsOrigin.getString(i, "ogQuantity")));
                } else {
                    inventoryDto.setOriginalWarehouseId(nvl(dsInven.getString(i, "originalWarehouseId")));
                    inventoryDto.setOriginalQuantity(parseLong(dsInven.getString(i, "originalQuantity")));
                }

                inventoryDtos.add(inventoryDto);
            }
        }

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        int resultCode = inventoryService.updateInventoryQuantities(inventoryDtos, forceUpdate);
        outVar.add("ErrorCode", resultCode);
        if (resultCode == -200) {
            outVar.add("ErrorMsg", "주문목록에 상품이 있습니다, 그래도 수량을 변경하시겠습니까?");
        } else {
            outVar.add("ErrorMsg", "SUCC");
        }

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    private String nvl(String value) {
        return value == null ? "" : value.trim();
    }

    private Long parseLong(String value) {
        String trimmed = nvl(value);
        if (trimmed.isEmpty()) {
            return null;
        }
        return Long.valueOf(trimmed);
    }
}

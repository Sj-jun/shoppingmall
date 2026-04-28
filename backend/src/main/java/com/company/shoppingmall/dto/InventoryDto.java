package com.company.shoppingmall.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InventoryDto {
    private Long categoryId;
    private String categoryName;
    private Long productId;
    private String productName;
    private Long regionId;
    private String regionName;
    private String countryId;
    private String countryName;
    private Long locationId;
    private String locationName;
    private String warehouseId;
    private String warehouseName;
    private String originalWarehouseId;
    private String description;
    private Long quantity;
    private Long originalQuantity;
    private BigDecimal price;
}

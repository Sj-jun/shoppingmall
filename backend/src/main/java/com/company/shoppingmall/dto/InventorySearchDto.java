package com.company.shoppingmall.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InventorySearchDto {
    private Long categoryId;
    private String productName;
    private String warehouseName;
    private Long regionId;
    private String countryId;
    private Long locationId;
}

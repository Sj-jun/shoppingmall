package com.company.shoppingmall.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class WarehouseSearchDto {
    private Long regionId;
    private String countryId;
    private Long locationId;
}

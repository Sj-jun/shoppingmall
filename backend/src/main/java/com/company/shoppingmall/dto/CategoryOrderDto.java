package com.company.shoppingmall.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryOrderDto {
    private Long productId;
    private String productName;
    private Long orderCount;
    private BigDecimal totalOrderQuantity;
    private BigDecimal totalOrderPrice;
}

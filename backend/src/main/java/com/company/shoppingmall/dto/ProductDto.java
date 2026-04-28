package com.company.shoppingmall.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {
    private Long productId;
    private String productName;
    private Long categoryId;
    private BigDecimal price;
    private Long quantity;
    private Long minQuantity;
    private Long maxQuantity;
    private String description;

}

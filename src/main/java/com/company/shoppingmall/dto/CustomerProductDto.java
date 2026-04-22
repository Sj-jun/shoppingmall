package com.company.shoppingmall.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerProductDto {
    private Long productId;
    private String productName;
    private BigDecimal price;
    private BigDecimal quantity;
}

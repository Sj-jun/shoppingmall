package com.company.shoppingmall.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerOrderDto {
    private Long orderId;
    private Long itemId;
    private Long productId;
    private String orderDate;
    private String productName;
    private BigDecimal quantity;
    private BigDecimal price;
    private BigDecimal totalPrice;
}

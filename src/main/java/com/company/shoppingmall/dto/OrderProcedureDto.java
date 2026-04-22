package com.company.shoppingmall.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderProcedureDto {
    private Long orderId;
    private Long itemId;
    private String customerName;
    private Long productId;
    private BigDecimal quantity;
    private BigDecimal unitPrice;
}

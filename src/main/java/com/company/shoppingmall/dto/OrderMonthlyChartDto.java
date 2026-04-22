package com.company.shoppingmall.dto;

import java.math.BigDecimal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderMonthlyChartDto {
    private String name;
    private String year;
    private String month;
    private BigDecimal quantity;
}

package com.company.shoppingmall.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryMonthlyOrderDto {
    private Long categoryId;
    private String categoryName;
    private String productName;
    private String fromDate;
    private String toDate;
    private String year;
    private String month;
    private Long quantity;
}

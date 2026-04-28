package com.company.shoppingmall.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CategoryDto {
    private Long categoryId;
    private String categoryName;
    private Long productCount;
}

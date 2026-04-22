package com.company.shoppingmall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.company.shoppingmall.dto.CategoryDto;
import com.company.shoppingmall.dto.CategoryMonthlyOrderDto;
import com.company.shoppingmall.dto.CategoryOrderDto;

@Mapper
public interface CategoryMapper {
    List<CategoryDto> selectCategoryList();

    List<CategoryDto> countProductsByCategory(CategoryDto categoryDto);

    List<CategoryOrderDto> selectCategoryOrders(Long categoryId);

    List<CategoryMonthlyOrderDto> selectMonthlyOrdersByCategory(CategoryMonthlyOrderDto conditionDto);

    int countCategoryName(CategoryDto categoryDto);

    void saveCategory(CategoryDto categoryDto);
}

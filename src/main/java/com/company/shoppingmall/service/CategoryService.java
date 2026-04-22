package com.company.shoppingmall.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.company.shoppingmall.dto.CategoryDto;
import com.company.shoppingmall.dto.CategoryMonthlyOrderDto;
import com.company.shoppingmall.dto.CategoryOrderDto;
import com.company.shoppingmall.mapper.CategoryMapper;

@Service
public class CategoryService {
    private final CategoryMapper categoryMapper;

    public CategoryService(CategoryMapper categoryMapper) {
        this.categoryMapper = categoryMapper;
    }

    // 카테고리 목록 조회
    public List<CategoryDto> getCategoryList() {
        return categoryMapper.selectCategoryList();
    }

    // 카테고리별 상품 수 조회
    public List<CategoryDto> countProductsByCategory(CategoryDto categoryDto) {
        return categoryMapper.countProductsByCategory(categoryDto);
    }

    // 카테고리별 주문 조회
    public List<CategoryOrderDto> getCategoryOrders(Long categoryId) {
        return categoryMapper.selectCategoryOrders(categoryId);
    }

    public List<CategoryMonthlyOrderDto> getMonthlyOrdersByCategory(CategoryMonthlyOrderDto conditionDto) {
        return categoryMapper.selectMonthlyOrdersByCategory(conditionDto);
    }

    // 카테고리 저장
    public int saveCategory(CategoryDto categoryDto) {
        if (categoryDto == null) {
            return 0;
        }

        // 중복된 카테고리 이름이 있는지 확인
        int duplicateCount = categoryMapper.countCategoryName(categoryDto);
        if (duplicateCount > 0) {
            return -100;
        }

        categoryMapper.saveCategory(categoryDto);

        return 0;
    }
}

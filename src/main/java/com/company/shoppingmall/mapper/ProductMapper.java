package com.company.shoppingmall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.company.shoppingmall.dto.ProductDto;

@Mapper
public interface ProductMapper {

    // 제품 저장
    void insertProduct(ProductDto productDto);

    // 모든 창고에 재고 0 삽입
    void insertInventoriesForAllWarehouses(Long productId);

    // 제품 목록 조회
    List<ProductDto> selectProductList();

    // 제품 상세 조회
    ProductDto ProductDetail(Long productId);

    // 제품 수정
    void updateProduct(ProductDto productDto);

    // 제품 재고 수량 수정
    void updateProductQuantity(ProductDto productDto);

    // 제품 주문 존재 여부 확인
    int countOrderItemsByProductId(Long productId);

    // 제품 주문 항목 삭제
    void deleteOrderItemsByProductId(Long productId);

    // 제품 삭제
    void deleteProduct(Long productId);
} 

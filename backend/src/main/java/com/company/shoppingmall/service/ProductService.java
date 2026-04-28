package com.company.shoppingmall.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.company.shoppingmall.dto.ProductDto;
import com.company.shoppingmall.mapper.ProductMapper;

@Service
public class ProductService {
    
    private final ProductMapper productMapper;

    public ProductService(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }

    @Transactional
    public void insertProduct(ProductDto productDto) {
        // 상품 정보 저장
        productMapper.insertProduct(productDto);
        // 모든 창고에 재고 0 
        productMapper.insertInventoriesForAllWarehouses(productDto.getProductId());
    }
    // 상품 목록 조회
    public List<ProductDto> getProductList() {
        return productMapper.selectProductList();
    }
    // 상품 상세 조회
    public ProductDto getProductDetail(Long productId) {
        return productMapper.ProductDetail(productId);
    }
    // 상품 수정
    public void updateProduct(ProductDto productDto) {
        productMapper.updateProduct(productDto);
    }

    // 상품 재고 수량 수정
    @Transactional
    public void updateProductQuantity(ProductDto productDto) {
        productMapper.updateProductQuantity(productDto);
    }

    // 상품 주문 존재 여부 확인
    public boolean hasOrderItems(Long productId) {
        return productMapper.countOrderItemsByProductId(productId) > 0;
    }
    
    // 상품 삭제
    @Transactional
    public void deleteProduct(Long productId) {
        // 상품과 관련된 주문 항목 삭제
        productMapper.deleteOrderItemsByProductId(productId);
        // 상품 삭제
        productMapper.deleteProduct(productId);
    }
}

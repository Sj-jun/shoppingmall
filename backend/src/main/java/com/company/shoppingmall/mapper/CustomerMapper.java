package com.company.shoppingmall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.company.shoppingmall.dto.CustomerOrderDto;
import com.company.shoppingmall.dto.CustomerProductDto;

@Mapper
public interface CustomerMapper {
    // 고객 이름으로 고객 존재 여부 확인
    int countCustomersByName(String name);

    // 고객 이름으로 고객 ID 조회
    Long selectCustomerIdByName(String name);

    // 고객 상품 목록 조회
    List<CustomerProductDto> selectProductListForCustomer();

    // 고객 주문 목록 조회
    List<CustomerOrderDto> selectOrdersByCustomerId(Long customerId);
}

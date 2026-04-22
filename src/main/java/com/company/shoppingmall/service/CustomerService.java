package com.company.shoppingmall.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.company.shoppingmall.dto.CustomerOrderDto;
import com.company.shoppingmall.dto.CustomerProductDto;
import com.company.shoppingmall.mapper.CustomerMapper;

@Service
public class CustomerService {

    private final CustomerMapper customerMapper;

    public CustomerService(CustomerMapper customerMapper) {
        this.customerMapper = customerMapper;
    }

    // 고객 이름으로 고객 존재 여부 확인
    public boolean existsCustomerByName(String name) {
        return customerMapper.countCustomersByName(name) > 0;
    }

    // 고객 이름으로 고객 ID 조회
    public Long getCustomerIdByName(String name) {
        return customerMapper.selectCustomerIdByName(name);
    }

    // 고객 상품 목록 조회
    public List<CustomerProductDto> getProductListForCustomer() {
        return customerMapper.selectProductListForCustomer();
    }

    // 고객 주문 목록 조회
    public List<CustomerOrderDto> getOrdersByCustomerId(Long customerId) {
        return customerMapper.selectOrdersByCustomerId(customerId);
    }
}

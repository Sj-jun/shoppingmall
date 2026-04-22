package com.company.shoppingmall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.company.shoppingmall.dto.CustomerOrderDto;
import com.company.shoppingmall.dto.OrderMonthlyChartDto;
import com.company.shoppingmall.dto.OrderProcedureDto;

@Mapper
public interface OrderMapper {

    // 주문 생성 프로시저 호출
    void callCustomerOrderProcedure(OrderProcedureDto orderProcedureDto);

    // 주문 상태를 '배송 완료'로 업데이트
    void updateOrderStatusToShipped(Long orderId);

    // 주문 항목 삭제
    void deleteOrderItem(CustomerOrderDto orderItem);

    // 주문 항목 수 카운트  
    int countOrderItems(Long orderId);

    // 주문 상태를 '주문 취소'로 업데이트
    void updateOrderStatusToCanceled(Long orderId);

    List<CustomerOrderDto> selectCompleteOrdersByCustomerName(String name);

    List<OrderMonthlyChartDto> selectMonthlyOrderQuantity(OrderMonthlyChartDto conditionDto);
}

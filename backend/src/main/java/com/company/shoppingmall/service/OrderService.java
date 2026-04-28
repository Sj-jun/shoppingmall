package com.company.shoppingmall.service;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.company.shoppingmall.dto.CustomerOrderDto;
import com.company.shoppingmall.dto.OrderMonthlyChartDto;
import com.company.shoppingmall.dto.OrderProcedureDto;
import com.company.shoppingmall.mapper.OrderMapper;

@Service
public class OrderService {

    private final OrderMapper orderMapper;

    public OrderService(OrderMapper orderMapper) {
        this.orderMapper = orderMapper;
    }
    
    // 주문 제출
    @Transactional
    public Long submitOrder(String customerName, List<CustomerOrderDto> orderItems) {
        Long newOrderId = null; //새 주문 생성 시 부여
        Long lastProcessedOrderId = null; //마지막으로 처리된 주문 ID (신규 또는 기존)

        //중복 주문번호 제거
        // 입력 순서 유지
        // 같은 주문번호에 대해 상태 업데이트를 여러 번 하지 않으려는 목적
        Set<Long> pendingOrderIds = new LinkedHashSet<>(); //처리된 기존 주문 ID 저장
        
        // 주문 항목 처리
        for (CustomerOrderDto item : orderItems) {

            // 기존 주문 항목인지 확인
            boolean existingOrderItem = item != null && item.getOrderId() != null && item.getItemId() != null;

            OrderProcedureDto procedureDto = new OrderProcedureDto();
            // 기존 주문 항목인 경우 해당 주문 ID와 항목 ID를 사용
            if (existingOrderItem) {
                procedureDto.setOrderId(item.getOrderId());
                procedureDto.setItemId(item.getItemId());
            } else { //그렇지 않으면 새 주문 ID를 사용
                procedureDto.setOrderId(newOrderId);
                procedureDto.setItemId(null);
            }
            procedureDto.setCustomerName(customerName);
            procedureDto.setProductId(item.getProductId());
            procedureDto.setQuantity(item.getQuantity());
            procedureDto.setUnitPrice(item.getPrice());

            // 저장 프로시저 호출
            orderMapper.callCustomerOrderProcedure(procedureDto);

            // 기존 주문 항목이 처리된 경우 해당 주문 ID를 보류(PENDING) 목록에 추가
            if (existingOrderItem) {
                pendingOrderIds.add(item.getOrderId());
                lastProcessedOrderId = item.getOrderId();
            // 새 주문이 생성된 경우 새 주문 ID를 저장
            } else {
                newOrderId = procedureDto.getOrderId();
                lastProcessedOrderId = newOrderId;
            }
        }
        // 보류 중인 기존 주문과 새로 생성된 주문 모두 배송(SHIPPED) 상태로 업데이트
        for (Long pendingOrderId : pendingOrderIds) {
            orderMapper.updateOrderStatusToShipped(pendingOrderId);
        }
        // 새로 생성된 주문이 있는 경우 해당 주문도 배송 상태로 업데이트
        if (newOrderId != null) {
            orderMapper.updateOrderStatusToShipped(newOrderId);
        }
        return newOrderId != null ? newOrderId : lastProcessedOrderId;
    }
    
    // 주문 취소 (주문 항목 삭제)
    @Transactional
    public void deleteOrderItems(List<CustomerOrderDto> deleteItems) {
        Set<Long> touchedOrderIds = new LinkedHashSet<>();

        // 주문 항목 삭제 및 관련 주문 ID 수집
        for (CustomerOrderDto item : deleteItems) {
            orderMapper.deleteOrderItem(item);
            if (item != null && item.getOrderId() != null) {
                touchedOrderIds.add(item.getOrderId());
            }
        }

        // 삭제 후 주문 항목이 없는 주문은 주문 상태를 취소(CANCELED)로 업데이트
        for (Long orderId : touchedOrderIds) {
            if (orderMapper.countOrderItems(orderId) == 0) {
                orderMapper.updateOrderStatusToCanceled(orderId);
            }
        }
    }

    public List<CustomerOrderDto> getCompleteOrders(String customerName) {
        return orderMapper.selectCompleteOrdersByCustomerName(customerName);
    }

    public List<OrderMonthlyChartDto> getMonthlyOrderQuantity(OrderMonthlyChartDto conditionDto) {
        return orderMapper.selectMonthlyOrderQuantity(conditionDto);
    }
}

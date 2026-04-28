package com.company.shoppingmall.controller;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.shoppingmall.dto.CustomerOrderDto;
import com.company.shoppingmall.dto.OrderMonthlyChartDto;
import com.company.shoppingmall.service.OrderService;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    // 주문 제출
    @PostMapping("/orders/submit")
    public void submitOrder(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        VariableList inVar = inData.getVariableList();
        DataSet dsOrder = inData.getDataSet("ds_order");

        String name = inVar == null ? "" : nvl(inVar.getString("name"));

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();

        try {
            List<CustomerOrderDto> orderItems = new java.util.ArrayList<>();
            if (dsOrder != null) {
                for (int i = 0; i < dsOrder.getRowCount(); i++) {
                    CustomerOrderDto dto = new CustomerOrderDto();
                    dto.setOrderId(parseLong(dsOrder.getString(i, "orderId")));
                    dto.setItemId(parseLong(dsOrder.getString(i, "itemId")));
                    dto.setProductId(parseLong(dsOrder.getString(i, "productId")));
                    dto.setProductName(nvl(dsOrder.getString(i, "productName")));
                    dto.setQuantity(parseBigDecimal(dsOrder.getString(i, "quantity")));
                    dto.setPrice(parseBigDecimal(dsOrder.getString(i, "price")));
                    dto.setTotalPrice(parseBigDecimal(dsOrder.getString(i, "totalPrice")));
                    orderItems.add(dto);
                }
            }

            Long orderId = orderService.submitOrder(name, orderItems);

            outVar.add("ErrorCode", 0);
            outVar.add("ErrorMsg", "SUCC");
            outVar.add("orderId", orderId == null ? "" : String.valueOf(orderId));
        } catch (Exception e) {
            String dbMessage = extractDatabaseMessage(e);
            if (!dbMessage.isEmpty()) {
                outVar.add("ErrorCode", -100);
                outVar.add("ErrorMsg", dbMessage);
            } else {
                outVar.add("ErrorCode", -500);
                outVar.add("ErrorMsg", "주문 처리 중 오류가 발생했습니다.");
            }
        }

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 주문 항목 삭제
    @PostMapping("/order/deleteProduct")
    public void deleteOrderProduct(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsDelete = inData.getDataSet("ds_delete");

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();

        try {
            List<CustomerOrderDto> deleteItems = new java.util.ArrayList<>();
            if (dsDelete != null) {
                for (int i = 0; i < dsDelete.getRowCount(); i++) {
                    CustomerOrderDto dto = new CustomerOrderDto();
                    dto.setOrderId(parseLong(dsDelete.getString(i, "orderId")));
                    dto.setItemId(parseLong(dsDelete.getString(i, "itemId")));
                    dto.setProductId(parseLong(dsDelete.getString(i, "productId")));
                    deleteItems.add(dto);
                }
            }
            orderService.deleteOrderItems(deleteItems);

            outVar.add("ErrorCode", 0);
            outVar.add("ErrorMsg", "SUCC");
        } catch (Exception e) {
            String dbMessage = extractDatabaseMessage(e);
            if (!dbMessage.isEmpty()) {
                outVar.add("ErrorCode", -100);
                outVar.add("ErrorMsg", dbMessage);
            } else {
                outVar.add("ErrorCode", -500);
                outVar.add("ErrorMsg", "삭제 처리 중 오류가 발생했습니다.");
            }
        }

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    @PostMapping("/orders/complete")
    public void getCompleteOrders(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        VariableList inVar = inData.getVariableList();
        String name = inVar == null ? "" : nvl(inVar.getString("name"));

        List<CustomerOrderDto> list = orderService.getCompleteOrders(name);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsComplete = new DataSet("ds_complete");
        dsComplete.addColumn("productId", DataTypes.STRING, 256);
        dsComplete.addColumn("orderDate", DataTypes.STRING, 256);
        dsComplete.addColumn("productName", DataTypes.STRING, 256);
        dsComplete.addColumn("quantity", DataTypes.STRING, 256);
        dsComplete.addColumn("totalPrice", DataTypes.STRING, 256);
        dsComplete.addColumn("itemId", DataTypes.STRING, 256);
        dsComplete.addColumn("orderId", DataTypes.STRING, 256);
        dsComplete.addColumn("price", DataTypes.STRING, 256);

        for (CustomerOrderDto dto : list) {
            int row = dsComplete.newRow();
            dsComplete.set(row, "productId", dto.getProductId() == null ? "" : String.valueOf(dto.getProductId()));
            dsComplete.set(row, "orderDate", nvl(dto.getOrderDate()));
            dsComplete.set(row, "productName", nvl(dto.getProductName()));
            dsComplete.set(row, "quantity", dto.getQuantity() == null ? "" : dto.getQuantity().toPlainString());
            dsComplete.set(row, "totalPrice", dto.getTotalPrice() == null ? "" : dto.getTotalPrice().toPlainString());
            dsComplete.set(row, "itemId", dto.getItemId() == null ? "" : String.valueOf(dto.getItemId()));
            dsComplete.set(row, "orderId", dto.getOrderId() == null ? "" : String.valueOf(dto.getOrderId()));
            dsComplete.set(row, "price", dto.getPrice() == null ? "" : dto.getPrice().toPlainString());
        }

        outData.addDataSet(dsComplete);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    @PostMapping("/orders/monthly")
    public void getMonthlyOrderQuantity(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCond = inData.getDataSet("ds_cond");

        OrderMonthlyChartDto conditionDto = new OrderMonthlyChartDto();
        if (dsCond != null && dsCond.getRowCount() > 0) {
            String name = nvl(dsCond.getString(0, "name"));
            if (name.isEmpty()) {
                name = nvl(dsCond.getString(0, "customerName"));
            }
            conditionDto.setName(name);
            conditionDto.setYear(nvl(dsCond.getString(0, "year")));
        }

        List<OrderMonthlyChartDto> list = orderService.getMonthlyOrderQuantity(conditionDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsChart = new DataSet("ds_chart");
        dsChart.addColumn("year", DataTypes.STRING, 256);
        dsChart.addColumn("month", DataTypes.STRING, 256);
        dsChart.addColumn("quantity", DataTypes.STRING, 256);

        for (OrderMonthlyChartDto dto : list) {
            int row = dsChart.newRow();
            dsChart.set(row, "year", nvl(dto.getYear()));
            dsChart.set(row, "month", nvl(dto.getMonth()));
            dsChart.set(row, "quantity", dto.getQuantity() == null ? "0" : dto.getQuantity().stripTrailingZeros().toPlainString());
        }

        outData.addDataSet(dsChart);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    private String nvl(String value) {
        return value == null ? "" : value.trim();
    }

    private Long parseLong(String value) {
        String trimmed = nvl(value);
        if (trimmed.isEmpty()) {
            return null;
        }
        return Long.valueOf(trimmed);
    }

    private BigDecimal parseBigDecimal(String value) {
        String trimmed = nvl(value);
        if (trimmed.isEmpty()) {
            return null;
        }
        return new BigDecimal(trimmed);
    }

    private String extractDatabaseMessage(Throwable throwable) {
        Throwable current = throwable;
        while (current != null) {
            if (current instanceof SQLException) {
                return nvl(current.getMessage());
            }
            current = current.getCause();
        }
        return "";
    }
}

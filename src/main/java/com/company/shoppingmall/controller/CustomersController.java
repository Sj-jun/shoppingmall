package com.company.shoppingmall.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.shoppingmall.dto.CustomerOrderDto;
import com.company.shoppingmall.dto.CustomerProductDto;
import com.company.shoppingmall.service.CustomerService;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class CustomersController {

    private final CustomerService customerService;

    public CustomersController(CustomerService customerService) {
        this.customerService = customerService;
    }

    // 로그인 처리
    @RequestMapping("/login")
    public void login(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        VariableList inVar = inData.getVariableList();

        String name = inVar == null ? "" : nvl(inVar.getString("name"));

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();

        DataSet dsProduct = new DataSet("ds_product");
        dsProduct.addColumn("productId", DataTypes.STRING, 256);
        dsProduct.addColumn("productName", DataTypes.STRING, 256);
        dsProduct.addColumn("price", DataTypes.STRING, 256);
        dsProduct.addColumn("quantity", DataTypes.STRING, 256);

        DataSet dsOrder = new DataSet("ds_order");
        dsOrder.addColumn("orderId", DataTypes.STRING, 256);
        dsOrder.addColumn("itemId", DataTypes.STRING, 256);
        dsOrder.addColumn("productId", DataTypes.STRING, 256);
        dsOrder.addColumn("productName", DataTypes.STRING, 256);
        dsOrder.addColumn("quantity", DataTypes.STRING, 256);
        dsOrder.addColumn("price", DataTypes.STRING, 256);
        dsOrder.addColumn("totalPrice", DataTypes.STRING, 256);

        if (name.isEmpty() || !customerService.existsCustomerByName(name)) {
            outVar.add("ErrorCode", -100);
            outVar.add("ErrorMsg", "존재하지 않는 고객명입니다.");
        } else {
            outVar.add("ErrorCode", 0);
            outVar.add("ErrorMsg", "SUCC");

            Long customerId = customerService.getCustomerIdByName(name);
            List<CustomerProductDto> products = customerService.getProductListForCustomer();
            List<CustomerOrderDto> orders = customerService.getOrdersByCustomerId(customerId);

            for (CustomerProductDto dto : products) {
                int row = dsProduct.newRow();
                dsProduct.set(row, "productId", dto.getProductId() == null ? "" : String.valueOf(dto.getProductId()));
                dsProduct.set(row, "productName", nvl(dto.getProductName()));
                dsProduct.set(row, "price", decimalToString(dto.getPrice()));
                dsProduct.set(row, "quantity", decimalToString(dto.getQuantity()));
            }

            for (CustomerOrderDto dto : orders) {
                int row = dsOrder.newRow();
                dsOrder.set(row, "orderId", dto.getOrderId() == null ? "" : String.valueOf(dto.getOrderId()));
                dsOrder.set(row, "itemId", dto.getItemId() == null ? "" : String.valueOf(dto.getItemId()));
                dsOrder.set(row, "productId", dto.getProductId() == null ? "" : String.valueOf(dto.getProductId()));
                dsOrder.set(row, "productName", nvl(dto.getProductName()));
                dsOrder.set(row, "quantity", decimalToString(dto.getQuantity()));
                dsOrder.set(row, "price", decimalToString(dto.getPrice()));
                dsOrder.set(row, "totalPrice", decimalToString(dto.getTotalPrice()));
            }
        }

        outData.addDataSet(dsProduct);
        outData.addDataSet(dsOrder);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    private String nvl(String value) {
        return value == null ? "" : value.trim();
    }

    private String decimalToString(BigDecimal value) {
        return value == null ? "0" : value.stripTrailingZeros().toPlainString();
    }
}

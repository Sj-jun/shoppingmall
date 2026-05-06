package com.company.shoppingmall.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.company.shoppingmall.dto.CategoryDto;
import com.company.shoppingmall.dto.CategoryMonthlyOrderDto;
import com.company.shoppingmall.dto.CategoryOrderDto;
import com.company.shoppingmall.service.CategoryService;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
@RestController
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    // 카테고리 목록 조회
    @RequestMapping(value = "/categoryList", method = {RequestMethod.GET, RequestMethod.POST})
    public void getCategoryList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        List<CategoryDto> list = categoryService.getCategoryList();

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsCategory = new DataSet("ds_category");
        dsCategory.addColumn("categoryId", DataTypes.STRING, 256);
        dsCategory.addColumn("categoryName", DataTypes.STRING, 256);
        
        int firstRow = dsCategory.newRow();
        dsCategory.set(firstRow, "categoryId", "");
        dsCategory.set(firstRow, "categoryName", "-전체-");

        for (CategoryDto dto : list) {
            int row = dsCategory.newRow();
            dsCategory.set(row, "categoryId", String.valueOf(dto.getCategoryId()));
            dsCategory.set(row, "categoryName", nvl(dto.getCategoryName()));
        }

        outData.addDataSet(dsCategory);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 카테고리 저장
    @PostMapping("/category/save")
    public void saveCategory(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCategory = inData.getDataSet("ds_category");
        CategoryDto categoryDto = null;
        if (dsCategory != null && dsCategory.getRowCount() > 0) {
            categoryDto = new CategoryDto();
            categoryDto.setCategoryName(nvl(dsCategory.getString(0, "categoryName")));
        }

        int resultCode = categoryService.saveCategory(categoryDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", resultCode);
        // 에러 코드 띄우기 
        if (resultCode == -100) {
            outVar.add("ErrorMsg", "같은 카테고리명은 저장할 수 없습니다.");
        } else {
            outVar.add("ErrorMsg", "SUCC");
        }

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 카테고리별 상품 수 조회
    @RequestMapping(value = "/category/products", method = {RequestMethod.GET, RequestMethod.POST})
    public void countProductsByCategory(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCategoryIn = inData.getDataSet("ds_category");

        CategoryDto categoryDto = new CategoryDto();
        if (dsCategoryIn != null && dsCategoryIn.getRowCount() > 0) {
            categoryDto.setCategoryId(parseLong(dsCategoryIn.getString(0, "categoryId")));
            categoryDto.setCategoryName(nvl(dsCategoryIn.getString(0, "categoryName")));
        }

        List<CategoryDto> list = categoryService.countProductsByCategory(categoryDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsCategory = new DataSet("ds_category");
        dsCategory.addColumn("categoryId", DataTypes.STRING, 256);
        dsCategory.addColumn("categoryName", DataTypes.STRING, 256);
        dsCategory.addColumn("productCount", DataTypes.STRING, 256);

        for (CategoryDto dto : list) {
            int row = dsCategory.newRow();
            dsCategory.set(row, "categoryId", dto.getCategoryId() == null ? "" : String.valueOf(dto.getCategoryId()));
            dsCategory.set(row, "categoryName", nvl(dto.getCategoryName()));
            dsCategory.set(row, "productCount", dto.getProductCount() == null ? "0" : String.valueOf(dto.getProductCount()));
        }

        outData.addDataSet(dsCategory);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 카테고리별 주문 조회
    @PostMapping("/category/orders")
    public void getCategoryOrders(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        VariableList inVar = inData.getVariableList();

        Long categoryId = null;
        if (inVar != null) {
            categoryId = parseLong(inVar.getString("categoryId"));
        }

        List<CategoryOrderDto> list = categoryService.getCategoryOrders(categoryId);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsOrder = new DataSet("ds_order");
        dsOrder.addColumn("productId", DataTypes.STRING, 256);
        dsOrder.addColumn("productName", DataTypes.STRING, 256);
        dsOrder.addColumn("orderCount", DataTypes.STRING, 256);
        dsOrder.addColumn("totalOrderQuantity", DataTypes.STRING, 256);
        dsOrder.addColumn("totalOrderPrice", DataTypes.STRING, 256);

        for (CategoryOrderDto dto : list) {
            int row = dsOrder.newRow();
            dsOrder.set(row, "productId", dto.getProductId() == null ? "" : String.valueOf(dto.getProductId()));
            dsOrder.set(row, "productName", nvl(dto.getProductName()));
            dsOrder.set(row, "orderCount", dto.getOrderCount() == null ? "0" : String.valueOf(dto.getOrderCount()));
            dsOrder.set(row, "totalOrderQuantity", dto.getTotalOrderQuantity() == null ? "0" : dto.getTotalOrderQuantity().toPlainString());
            dsOrder.set(row, "totalOrderPrice", dto.getTotalOrderPrice() == null ? "0" : dto.getTotalOrderPrice().toPlainString());
        }

        outData.addDataSet(dsOrder);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    @PostMapping("/category/month")
    public void getMonthlyOrdersByCategory(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCond = inData.getDataSet("ds_cond");

        CategoryMonthlyOrderDto conditionDto = new CategoryMonthlyOrderDto();
        if (dsCond != null && dsCond.getRowCount() > 0) {
            conditionDto.setCategoryId(parseLong(dsCond.getString(0, "categoryId")));
            conditionDto.setProductName(nvl(dsCond.getString(0, "productName")));
            conditionDto.setFromDate(normalizeDate(dsCond.getString(0, "fromDate")));
            conditionDto.setToDate(normalizeDate(dsCond.getString(0, "toDate")));
        }

        List<CategoryMonthlyOrderDto> list = categoryService.getMonthlyOrdersByCategory(conditionDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsOrder = new DataSet("ds_order");
        dsOrder.addColumn("categoryId", DataTypes.STRING, 256);
        dsOrder.addColumn("categoryName", DataTypes.STRING, 256);
        dsOrder.addColumn("productName", DataTypes.STRING, 256);
        dsOrder.addColumn("year", DataTypes.STRING, 256);
        dsOrder.addColumn("quantity", DataTypes.STRING, 256);
        dsOrder.addColumn("month", DataTypes.STRING, 256);

        for (CategoryMonthlyOrderDto dto : list) {
            int row = dsOrder.newRow();
            dsOrder.set(row, "categoryId", dto.getCategoryId() == null ? "" : String.valueOf(dto.getCategoryId()));
            dsOrder.set(row, "categoryName", nvl(dto.getCategoryName()));
            dsOrder.set(row, "productName", nvl(dto.getProductName()));
            dsOrder.set(row, "year", nvl(dto.getYear()));
            dsOrder.set(row, "quantity", dto.getQuantity() == null ? "0" : String.valueOf(dto.getQuantity()));
            dsOrder.set(row, "month", nvl(dto.getMonth()));
        }

        outData.addDataSet(dsOrder);

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

    private String normalizeDate(String value) {
        String trimmed = nvl(value);
        if (trimmed.isEmpty()) {
            return null;
        }
        if (trimmed.length() == 8) {
            return trimmed;
        }
        return trimmed.replace("-", "");
    }

    
}

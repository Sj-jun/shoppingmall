package com.company.shoppingmall.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.company.shoppingmall.dto.ProductDto;
import com.company.shoppingmall.service.ProductService;

import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // 상품 목록 조회
    @RequestMapping(value = "/product/list", method = {RequestMethod.GET, RequestMethod.POST})
    public void getProductList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        List<ProductDto> list = productService.getProductList();

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsProduct = new DataSet("ds_allProduct");
        dsProduct.addColumn("productId", DataTypes.STRING, 256);
        dsProduct.addColumn("productName", DataTypes.STRING, 256);
        dsProduct.addColumn("categoryId", DataTypes.STRING, 256);
        dsProduct.addColumn("minQuantity", DataTypes.STRING, 256);
        dsProduct.addColumn("maxQuantity", DataTypes.STRING, 256);

        for (ProductDto dto : list) {
            int row = dsProduct.newRow();
            dsProduct.set(row, "productId", dto.getProductId() == null ? "" : String.valueOf(dto.getProductId()));
            dsProduct.set(row, "productName", nvl(dto.getProductName()));
            dsProduct.set(row, "categoryId", dto.getCategoryId() == null ? "" : String.valueOf(dto.getCategoryId()));
            dsProduct.set(row, "minQuantity", dto.getMinQuantity() == null ? "0" : String.valueOf(dto.getMinQuantity()));
            dsProduct.set(row, "maxQuantity", dto.getMaxQuantity() == null ? "0" : String.valueOf(dto.getMaxQuantity()));
        }

        outData.addDataSet(dsProduct);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }
    //상품 등록
    @PostMapping("/product/insert")
    public void insertProduct(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {

        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsProduct = inData.getDataSet("ds_product");

        ProductDto productDto = new ProductDto();
        if (dsProduct != null && dsProduct.getRowCount() > 0) {

            productDto.setCategoryId(parseLong(dsProduct.getString(0, "categoryId")));
            productDto.setProductName(nvl(dsProduct.getString(0, "productName")));
            productDto.setPrice(parseBigDecimal(dsProduct.getString(0, "price")));
            productDto.setDescription(nvl(dsProduct.getString(0, "description")));
        }
        productService.insertProduct(productDto);


        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsProductId = new DataSet("ds_product");
        dsProductId.addColumn("productId", DataTypes.STRING, 256);

        //등록된 제품의 아이디를 데이터셋에 담아 응답(focus 위해)
        int row = dsProductId.newRow();
        dsProductId.set(row, "productId", String.valueOf(productDto.getProductId()));

        outData.addDataSet(dsProductId);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //상품 상세 조회
    @PostMapping("/product/detail")
    public void getProductDetail(HttpServletRequest request, HttpServletResponse response) throws Exception {

        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        VariableList inVar = inData.getVariableList();
        
        //한 상품의 아이디로 정보 조회
        Long productId = Long.valueOf(inVar.getLong("productId"));

        ProductDto dto = productService.getProductDetail(productId);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsProduct = new DataSet("ds_product");

        dsProduct.addColumn("productId", DataTypes.STRING, 256);
        dsProduct.addColumn("productName", DataTypes.STRING, 256);
        dsProduct.addColumn("price", DataTypes.STRING, 256);
        dsProduct.addColumn("categoryId", DataTypes.STRING, 256);
        dsProduct.addColumn("description", DataTypes.STRING, 256);

        if (dto != null) {
            int row = dsProduct.newRow();

            dsProduct.set(row, "productId", String.valueOf(dto.getProductId()));
            dsProduct.set(row, "productName", dto.getProductName());
            dsProduct.set(row, "price", String.valueOf(dto.getPrice()));
            dsProduct.set(row, "categoryId", String.valueOf(dto.getCategoryId()));
            dsProduct.set(row, "description", dto.getDescription());
        }

        outData.addDataSet(dsProduct);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 상품 수정
    @PostMapping("/product/update")
    public void updateProduct(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsProduct = inData.getDataSet("ds_product");

        ProductDto productDto = new ProductDto();
        if (dsProduct != null && dsProduct.getRowCount() > 0) {

            productDto.setProductId(parseLong(dsProduct.getString(0, "productId")));
            productDto.setCategoryId(parseLong(dsProduct.getString(0, "categoryId")));
            productDto.setProductName(nvl(dsProduct.getString(0, "productName")));
            productDto.setPrice(parseBigDecimal(dsProduct.getString(0, "price")));
            productDto.setDescription(nvl(dsProduct.getString(0, "description")));
        }
        productService.updateProduct(productDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 상품 재고 수량 수정
    @PostMapping("/product/quantity")
    public void updateProductQuantity(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsProduct = inData.getDataSet("ds_product");

        ProductDto productDto = new ProductDto();
        if (dsProduct != null && dsProduct.getRowCount() > 0) {
            productDto.setCategoryId(parseLong(dsProduct.getString(0, "categoryId")));
            productDto.setProductId(parseLong(dsProduct.getString(0, "productId")));
            productDto.setQuantity(parseLong(dsProduct.getString(0, "quantity")));
        }

        productService.updateProductQuantity(productDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 상품 삭제
    @PostMapping("/product/delete")
    public void deleteProduct(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();
        PlatformData inData = platformRequest.getData();
        DataSet dsProduct = inData.getDataSet("ds_product");
        VariableList inVar = inData.getVariableList();

        Long productId = null;
        boolean forceDelete = false;

        if (inVar != null) {
            forceDelete = "Y".equalsIgnoreCase(nvl(inVar.getString("forceDelete")))
                || "true".equalsIgnoreCase(nvl(inVar.getString("forceDelete")));
        }

        if (dsProduct != null && dsProduct.getRowCount() > 0) {
            productId = parseLong(dsProduct.getString(0, "productId"));
        }

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();

        if (productId == null) {
            outVar.add("ErrorCode", -1);
            outVar.add("ErrorMsg", "productId is required");
        } else if (!forceDelete && productService.hasOrderItems(productId)) {
            outVar.add("ErrorCode", -200);
            outVar.add("ErrorMsg", "주문 중인 상품이 있습니다. 삭제하시겠습니까?");
        } else {
            productService.deleteProduct(productId);
            outVar.add("ErrorCode", 0);
            outVar.add("ErrorMsg", "SUCC");
        }

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
}

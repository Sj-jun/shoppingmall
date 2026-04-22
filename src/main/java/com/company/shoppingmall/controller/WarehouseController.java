package com.company.shoppingmall.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.company.shoppingmall.dto.CountryDto;
import com.company.shoppingmall.dto.LocationDto;
import com.company.shoppingmall.dto.RegionDto;
import com.company.shoppingmall.dto.WarehouseDto;
import com.company.shoppingmall.dto.WarehouseSearchDto;
import com.company.shoppingmall.service.WarehouserService;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
public class WarehouseController {

    private final WarehouserService warehouserService;

    public WarehouseController(WarehouserService warehouserService) {
        this.warehouserService = warehouserService;
    }

    //지역 리스트 조회
    @RequestMapping(value = "/regionList", method = {RequestMethod.GET, RequestMethod.POST})
    public void getRegionList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        List<RegionDto> list = warehouserService.getRegionList();

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsRegion = new DataSet("ds_region");
        dsRegion.addColumn("regionId", DataTypes.STRING, 256);
        dsRegion.addColumn("regionName", DataTypes.STRING, 256);

        int firstRow = dsRegion.newRow();
        dsRegion.set(firstRow, "regionId", "");
        dsRegion.set(firstRow, "regionName", "-전체-");

        for (RegionDto dto : list) {
            int row = dsRegion.newRow();
            dsRegion.set(row, "regionId", String.valueOf(dto.getRegionId()));
            dsRegion.set(row, "regionName", nvl(dto.getRegionName()));
        }

        outData.addDataSet(dsRegion);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //국가 리스트 조회
    @PostMapping("/countryList")
    public void getCountryList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCond = inData.getDataSet("ds_cond");

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        if (dsCond != null && dsCond.getRowCount() > 0) {
            WarehouseSearchDto searchDto = new WarehouseSearchDto();
            searchDto.setRegionId(parseLong(dsCond.getString(0, "regionId")));
            searchDto.setCountryId(nvl(dsCond.getString(0, "countryId")));
            searchDto.setLocationId(parseLong(dsCond.getString(0, "locationId")));

            List<CountryDto> list = warehouserService.getCountryList(searchDto);

            DataSet dsCountry = new DataSet("ds_country");
            dsCountry.addColumn("countryId", DataTypes.STRING, 256);
            dsCountry.addColumn("countryName", DataTypes.STRING, 256);
            dsCountry.addColumn("regionId", DataTypes.STRING, 256);

            int firstRow = dsCountry.newRow();
            dsCountry.set(firstRow, "countryId", "");
            dsCountry.set(firstRow, "countryName", "-전체-");
            dsCountry.set(firstRow, "regionId", searchDto.getRegionId() == null ? "" : String.valueOf(searchDto.getRegionId()));

            for (CountryDto dto : list) {
                int row = dsCountry.newRow();
                dsCountry.set(row, "countryId", nvl(dto.getCountryId()));
                dsCountry.set(row, "countryName", nvl(dto.getCountryName()));
                dsCountry.set(row, "regionId", String.valueOf(dto.getRegionId()));
            }

            outData.addDataSet(dsCountry);
        }
        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //국가 리스트 전체 조회(그리드 콤보 용)
    @GetMapping("/countryListAll")
    public void getCountryListAll(HttpServletRequest request, HttpServletResponse response) throws Exception {
        List<CountryDto> list = warehouserService.getCountryListAll();

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsCountry2 = new DataSet("ds_country2");
        dsCountry2.addColumn("countryId", DataTypes.STRING, 256);
        dsCountry2.addColumn("countryName", DataTypes.STRING, 256);
        dsCountry2.addColumn("regionId", DataTypes.STRING, 256);

        int firstRow = dsCountry2.newRow();
        dsCountry2.set(firstRow, "countryId", "");
        dsCountry2.set(firstRow, "countryName", "-전체-");
        dsCountry2.set(firstRow, "regionId", "");

        for (CountryDto dto : list) {
            int row = dsCountry2.newRow();
            dsCountry2.set(row, "countryId", nvl(dto.getCountryId()));
            dsCountry2.set(row, "countryName", nvl(dto.getCountryName()));
            dsCountry2.set(row, "regionId", String.valueOf(dto.getRegionId()));
        }

        outData.addDataSet(dsCountry2);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //위치 리스트 조회
    @PostMapping("/locationList")
    public void getLocationList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCond = inData.getDataSet("ds_cond");

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        if (dsCond != null && dsCond.getRowCount() > 0) {
            WarehouseSearchDto searchDto = new WarehouseSearchDto();
            searchDto.setRegionId(parseLong(dsCond.getString(0, "regionId")));
            searchDto.setCountryId(nvl(dsCond.getString(0, "countryId")));
            searchDto.setLocationId(parseLong(dsCond.getString(0, "locationId")));

            List<LocationDto> list = warehouserService.getLocationList(searchDto);

            DataSet dsLocation = new DataSet("ds_location");
            dsLocation.addColumn("locationId", DataTypes.STRING, 256);
            dsLocation.addColumn("locationName", DataTypes.STRING, 256);
            dsLocation.addColumn("address", DataTypes.STRING, 256);
            dsLocation.addColumn("postalCode", DataTypes.STRING, 256);
            dsLocation.addColumn("city", DataTypes.STRING, 256);
            dsLocation.addColumn("state", DataTypes.STRING, 256);
            dsLocation.addColumn("countryId", DataTypes.STRING, 256);
            dsLocation.addColumn("chk", DataTypes.STRING, 256);

            int firstRow = dsLocation.newRow();
            dsLocation.set(firstRow, "locationId", "");
            dsLocation.set(firstRow, "locationName", "-전체-");
            dsLocation.set(firstRow, "countryId", nvl(searchDto.getCountryId()));
            dsLocation.set(firstRow, "address", "");
            dsLocation.set(firstRow, "postalCode", "");
            dsLocation.set(firstRow, "city", "");
            dsLocation.set(firstRow, "state", "");
            dsLocation.set(firstRow, "chk", "0");

            for (LocationDto dto : list) {
                int row = dsLocation.newRow();
                dsLocation.set(row, "locationId", String.valueOf(dto.getLocationId()));
                dsLocation.set(row, "locationName", nvl(dto.getLocationName()));
                dsLocation.set(row, "address", nvl(dto.getAddress()));
                dsLocation.set(row, "postalCode", nvl(dto.getPostalCode()));
                dsLocation.set(row, "city", nvl(dto.getCity()));
                dsLocation.set(row, "state", nvl(dto.getState()));
                dsLocation.set(row, "countryId", nvl(dto.getCountryId()));
                dsLocation.set(row, "chk", "0");
            }

            outData.addDataSet(dsLocation);
        }


        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    ///위치 리스트 전체 조회(그리드 콤보 용)
    @GetMapping("/locationListAll")
    public void getLocationListAll(HttpServletRequest request, HttpServletResponse response) throws Exception {
        List<LocationDto> list = warehouserService.getLocationListAll();

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsLocation2 = new DataSet("ds_location2");
        dsLocation2.addColumn("locationId", DataTypes.STRING, 256);
        dsLocation2.addColumn("locationName", DataTypes.STRING, 256);
        dsLocation2.addColumn("address", DataTypes.STRING, 256);
        dsLocation2.addColumn("postalCode", DataTypes.STRING, 256);
        dsLocation2.addColumn("city", DataTypes.STRING, 256);
        dsLocation2.addColumn("state", DataTypes.STRING, 256);
        dsLocation2.addColumn("countryId", DataTypes.STRING, 256);
        dsLocation2.addColumn("chk", DataTypes.STRING, 256);

        int firstRow = dsLocation2.newRow();
        dsLocation2.set(firstRow, "locationId", "");
        dsLocation2.set(firstRow, "locationName", "-전체-");
        dsLocation2.set(firstRow, "countryId", "");
        dsLocation2.set(firstRow, "address", "");
        dsLocation2.set(firstRow, "postalCode", "");
        dsLocation2.set(firstRow, "city", "");
        dsLocation2.set(firstRow, "state", "");
        dsLocation2.set(firstRow, "chk", "0");

        for (LocationDto dto : list) {
            int row = dsLocation2.newRow();
            dsLocation2.set(row, "locationId", String.valueOf(dto.getLocationId()));
            dsLocation2.set(row, "locationName", nvl(dto.getLocationName()));
            dsLocation2.set(row, "address", nvl(dto.getAddress()));
            dsLocation2.set(row, "postalCode", nvl(dto.getPostalCode()));
            dsLocation2.set(row, "city", nvl(dto.getCity()));
            dsLocation2.set(row, "state", nvl(dto.getState()));
            dsLocation2.set(row, "countryId", nvl(dto.getCountryId()));
            dsLocation2.set(row, "chk", "0");
        }

        outData.addDataSet(dsLocation2);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //창고 리스트 조회
    @RequestMapping(value = "/warehouses", method = {RequestMethod.GET, RequestMethod.POST})
    public void getWarehouseList(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCond = inData.getDataSet("ds_cond");

        WarehouseSearchDto searchDto = new WarehouseSearchDto();
        if (dsCond != null && dsCond.getRowCount() > 0) {
            searchDto.setRegionId(parseLong(dsCond.getString(0, "regionId")));
            searchDto.setCountryId(nvl(dsCond.getString(0, "countryId")));
            searchDto.setLocationId(parseLong(dsCond.getString(0, "locationId")));
        }

        List<WarehouseDto> list = warehouserService.getWarehouseList(searchDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsWarehouse = new DataSet("ds_warehouse");
        dsWarehouse.addColumn("warehouseId", DataTypes.STRING, 256);
        dsWarehouse.addColumn("regionName", DataTypes.STRING, 256);
        dsWarehouse.addColumn("countryName", DataTypes.STRING, 256);
        dsWarehouse.addColumn("locationName", DataTypes.STRING, 256);
        dsWarehouse.addColumn("regionId", DataTypes.LONG, 256);
        dsWarehouse.addColumn("countryId", DataTypes.STRING, 256);
        dsWarehouse.addColumn("locationId", DataTypes.LONG, 256);
        dsWarehouse.addColumn("warehouseName", DataTypes.STRING, 256);
        dsWarehouse.addColumn("chk", DataTypes.STRING, 256);

        for (WarehouseDto dto : list) {
            int row = dsWarehouse.newRow();
            dsWarehouse.set(row, "warehouseId", dto.getWarehouseId());
            dsWarehouse.set(row, "regionName", nvl(dto.getRegionName()));
            dsWarehouse.set(row, "countryName", nvl(dto.getCountryName()));
            dsWarehouse.set(row, "locationName", nvl(dto.getLocationName()));
            dsWarehouse.set(row, "regionId", dto.getRegionId());
            dsWarehouse.set(row, "countryId", nvl(dto.getCountryId()));
            dsWarehouse.set(row, "locationId", dto.getLocationId());
            dsWarehouse.set(row, "warehouseName", nvl(dto.getWarehouseName()));
            dsWarehouse.set(row, "chk", "0");
        }

        outData.addDataSet(dsWarehouse);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //창고 저장
    @PostMapping("/warehouses/save")
    public void saveWarehouse(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsWarehouse = inData.getDataSet("ds_warehouse");

        List<WarehouseDto> warehouseDtos = new java.util.ArrayList<>();
        if (dsWarehouse != null && dsWarehouse.getRowCount() > 0) {
            for (int i = 0; i < dsWarehouse.getRowCount(); i++) {
                WarehouseDto warehouseDto = new WarehouseDto();
                warehouseDto.setWarehouseId(nvl(dsWarehouse.getString(i, "warehouseId")));
                warehouseDto.setRegionId(parseLong(dsWarehouse.getString(i, "regionId")));
                warehouseDto.setCountryId(nvl(dsWarehouse.getString(i, "countryId")));
                warehouseDto.setLocationId(parseLong(dsWarehouse.getString(i, "locationId")));
                warehouseDto.setWarehouseName(nvl(dsWarehouse.getString(i, "warehouseName")));
                warehouseDtos.add(warehouseDto);
            }
        }

        List<WarehouseDto> savedWarehouses = warehouserService.saveWarehouses(warehouseDtos);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsResult = new DataSet("ds_saved");
        dsResult.addColumn("warehouseId", DataTypes.STRING, 256);

        for (WarehouseDto savedWarehouse : savedWarehouses) {
            int row = dsResult.newRow();
            dsResult.set(row, "warehouseId", savedWarehouse.getWarehouseId());
        }

        outData.addDataSet(dsResult);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }
    //창고 삭제
    @PostMapping("/warehouses/delete")
    public void deleteWarehouse(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {

        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsWarehouse = inData.getDataSet("ds_delete");
        //데이터셋에서 창고 아이디 추출 후 삭제
        List<String> warehouseIds = new java.util.ArrayList<>();
        if (dsWarehouse != null) {
            for (int i = 0; i < dsWarehouse.getRowCount(); i++) {
                String warehouseId = nvl(dsWarehouse.getString(i, "warehouseId"));
                if (!warehouseId.isEmpty()) {
                    warehouseIds.add(warehouseId);
                }
            }
        }
        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        int resultCode = warehouserService.deleteWarehouses(warehouseIds);
        outVar.add("ErrorCode", resultCode);
        if (resultCode == -100) {
            outVar.add("ErrorMsg", "재고 수량이 1 이상인 창고는 삭제할 수 없습니다.");
        } else {
            outVar.add("ErrorMsg", "SUCC");
        }

        //응답은 성공 여부만 전달하면 된다.
        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //위치 저장(추가/수정)
    @PostMapping("/locations/save")
    public void saveLocation(HttpServletRequest request, HttpServletResponse response) throws Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsLocation = inData.getDataSet("ds_location");

        List<LocationDto> locationDtos = new java.util.ArrayList<>();
        if (dsLocation != null && dsLocation.getRowCount() > 0) {
            for (int i = 0; i < dsLocation.getRowCount(); i++) {
                LocationDto locationDto = new LocationDto();
                locationDto.setLocationId(parseLong(dsLocation.getString(i, "locationId")));
                locationDto.setAddress(nvl(dsLocation.getString(i, "locationName")));
                locationDto.setPostalCode(nvl(dsLocation.getString(i, "postalCode")));
                locationDto.setCity(nvl(dsLocation.getString(i, "city")));
                locationDto.setState(nvl(dsLocation.getString(i, "state")));
                locationDto.setCountryId(nvl(dsLocation.getString(i, "countryId")));
                locationDtos.add(locationDto);
            }
        }

        List<LocationDto> savedLocations = warehouserService.saveLocations(locationDtos);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsResult = new DataSet("ds_location2");
        dsResult.addColumn("locationId", DataTypes.LONG, 256);

        for (LocationDto savedLocation : savedLocations) {
            int row = dsResult.newRow();
            dsResult.set(row, "locationId", savedLocation.getLocationId());
        }

        outData.addDataSet(dsResult);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //위치 삭제
    @PostMapping("/locations/delete")
    public void deleteLocation(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {
        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsLocation = inData.getDataSet("ds_delete");

        List<Long> locationIds = new java.util.ArrayList<>();
        if (dsLocation != null) {
            for (int i = 0; i < dsLocation.getRowCount(); i++) {
                String locationId = nvl(dsLocation.getString(i, "locationId"));
                if (!locationId.isEmpty()) {
                    locationIds.add(Long.valueOf(locationId));
                }
            }
        }

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();

        int resultCode = warehouserService.deleteLocations(locationIds);
        outVar.add("ErrorCode", resultCode);

        //해당 위치에 연결된 창고가 있어 삭제 불가
        if (resultCode == -100) {
            outVar.add("ErrorMsg", "해당 위치에 연결된 창고가 있어 삭제할 수 없습니다.");
        } else {
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
}

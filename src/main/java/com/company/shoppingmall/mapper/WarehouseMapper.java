package com.company.shoppingmall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.company.shoppingmall.dto.CountryDto;
import com.company.shoppingmall.dto.LocationDto;
import com.company.shoppingmall.dto.RegionDto;
import com.company.shoppingmall.dto.WarehouseDto;
import com.company.shoppingmall.dto.WarehouseSearchDto;

@Mapper
public interface WarehouseMapper {

    // 지역 목록 조회
    List<RegionDto> selectRegionList();

    // 국가 목록 조회
    List<CountryDto> selectCountryList(WarehouseSearchDto searchDto);

    // 모든 국가 목록 조회
    List<CountryDto> selectCountryListAll();

    // 위치 목록 조회
    List<LocationDto> selectLocationList(WarehouseSearchDto searchDto);

    // 모든 위치 목록 조회
    List<LocationDto> selectLocationListAll();

    // 위치 저장
    void saveLocation(LocationDto locationDto);

    // 위치 업데이트
    void updateLocation(LocationDto locationDto);

    // 창고 목록 조회
    List<WarehouseDto> selectWarehouseList(WarehouseSearchDto searchDto);

    // 창고 저장
    void saveWarehouse(WarehouseDto warehouseDto);

    // 창고 업데이트
    void updateWarehouse(WarehouseDto warehouseDto);

    // 창고별 재고 수량 조회
    int countWarehousesByInventory(List<String> warehouseIds);

    // 창고 삭제
    void deleteWarehouses(List<String> warehouseIds);

    // 위치별 재고 수량 조회
    int countLocationsByWarehouse(List<Long> locationIds);

    // 위치 삭제
    void deleteLocations(List<Long> locationIds);
}

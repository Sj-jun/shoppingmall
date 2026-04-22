package com.company.shoppingmall.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.company.shoppingmall.dto.CountryDto;
import com.company.shoppingmall.dto.LocationDto;
import com.company.shoppingmall.dto.RegionDto;
import com.company.shoppingmall.dto.WarehouseDto;
import com.company.shoppingmall.dto.WarehouseSearchDto;
import com.company.shoppingmall.mapper.WarehouseMapper;

@Service
public class WarehouserService {
    private final WarehouseMapper warehouseMapper;

    public WarehouserService(WarehouseMapper warehouseMapper) {
        this.warehouseMapper = warehouseMapper;
    }

    // 지역 목록 조회
    public List<RegionDto> getRegionList() {
        return warehouseMapper.selectRegionList();
    }

    // 국가 목록 조회
    public List<CountryDto> getCountryList(WarehouseSearchDto searchDto) {
        return warehouseMapper.selectCountryList(searchDto);
    }

    // 전체 국가 목록 조회
    public List<CountryDto> getCountryListAll() {
        return warehouseMapper.selectCountryListAll();
    }

    // 위치 목록 조회
    public List<LocationDto> getLocationList(WarehouseSearchDto searchDto) {
        return warehouseMapper.selectLocationList(searchDto);
    }

    // 전체 위치 목록 조회
    public List<LocationDto> getLocationListAll() {
        return warehouseMapper.selectLocationListAll();
    }

    // 위치 저장
    public List<LocationDto> saveLocations(List<LocationDto> locationDtos) {
        List<LocationDto> savedLocations = new ArrayList<>();

        if (locationDtos == null || locationDtos.isEmpty()) {
            return savedLocations;
        }
        // 위치 저장 또는 업데이트 처리
        for (LocationDto locationDto : locationDtos) {
            if (locationDto.getLocationId() != null) {
                warehouseMapper.updateLocation(locationDto);
            } else {
                warehouseMapper.saveLocation(locationDto);
            }

            savedLocations.add(locationDto);
        }

        return savedLocations;
    }

    // 창고 목록 조회
    public List<WarehouseDto> getWarehouseList(WarehouseSearchDto searchDto) {
        return warehouseMapper.selectWarehouseList(searchDto);
    }

    // 창고 저장
    public List<WarehouseDto> saveWarehouses(List<WarehouseDto> warehouseDtos) {
        List<WarehouseDto> savedWarehouses = new ArrayList<>();

        // 입력 검증
        if (warehouseDtos == null || warehouseDtos.isEmpty()) {
            return savedWarehouses;
        }

        // 창고 저장 또는 업데이트 처리
        for (WarehouseDto warehouseDto : warehouseDtos) {
            if (warehouseDto.getWarehouseId() != null && !warehouseDto.getWarehouseId().isBlank()) {
                warehouseMapper.updateWarehouse(warehouseDto);
            } else {
                warehouseMapper.saveWarehouse(warehouseDto);
            }

            savedWarehouses.add(warehouseDto);
        }

        return savedWarehouses;
    }

    // 단일 창고 저장
    public void saveWarehouse(WarehouseDto warehouseDto) {
        if (warehouseDto.getWarehouseId() != null && !warehouseDto.getWarehouseId().isBlank()) {
            warehouseMapper.updateWarehouse(warehouseDto);
            return;
        }

        warehouseMapper.saveWarehouse(warehouseDto);
    }

    // 창고 삭제
    public int deleteWarehouses(List<String> warehouseIds) {
        if (warehouseIds == null || warehouseIds.isEmpty()) {
            return 0;
        }

        // 창고에 재고가 존재하는지 확인(삭제 방지)
        int inventoryCount = warehouseMapper.countWarehousesByInventory(warehouseIds);
        if (inventoryCount > 0) {
            return -100;
        }

        warehouseMapper.deleteWarehouses(warehouseIds);
        return 0;
    }
    
    // 위치 삭제
    @Transactional
    public int deleteLocations(List<Long> locationIds) {
        if (locationIds == null || locationIds.isEmpty()) {
            return 0;
        }

        // 위치에 창고가 존재하는지 확인(삭제 방지)
        int warehouseCount = warehouseMapper.countLocationsByWarehouse(locationIds);
        if (warehouseCount > 0) {
            return -100;
        }
        warehouseMapper.deleteLocations(locationIds);
        return 0;
    }
}

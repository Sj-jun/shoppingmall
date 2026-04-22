package com.company.shoppingmall.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.company.shoppingmall.dto.CommonCodeDto;
import com.company.shoppingmall.dto.EmployeeDto;
import com.company.shoppingmall.dto.EmployeeSearchConditionDto;
import com.company.shoppingmall.dto.ManagerDto;

@Mapper
public interface EmployeeMapper {
    // 직원 목록 조회
    List<EmployeeDto> selectEmployeeList(EmployeeSearchConditionDto cond);

    List<EmployeeDto> employeeSearchManager(EmployeeSearchConditionDto cond);

    // 직원 상세 조회
    EmployeeDto selectEmployeeDetail(Long employeeId);

    // 관리자 목록 조회
    List<ManagerDto> selectManagerList();

    // 직책 목록 조회
    List<CommonCodeDto> selectJobList();

    void insertEmployee(EmployeeDto employeeDto);
    void updateEmployee(EmployeeDto employeeDto);
    void deleteEmployee(Long employeeId);
}

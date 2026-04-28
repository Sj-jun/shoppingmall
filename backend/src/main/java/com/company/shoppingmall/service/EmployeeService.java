package com.company.shoppingmall.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.company.shoppingmall.dto.CommonCodeDto;
import com.company.shoppingmall.dto.EmployeeDto;
import com.company.shoppingmall.dto.EmployeeSearchConditionDto;
import com.company.shoppingmall.dto.ManagerDto;
import com.company.shoppingmall.mapper.EmployeeMapper;

@Service
public class EmployeeService {

    private final EmployeeMapper employeeMapper;

    public EmployeeService(EmployeeMapper employeeMapper) {
        this.employeeMapper = employeeMapper;
    }

    // 직원 목록 조회
    public List<EmployeeDto> getEmployeeList(EmployeeSearchConditionDto cond) {
        return employeeMapper.selectEmployeeList(cond);
    }

    public List<EmployeeDto> employeeSearchManager(EmployeeSearchConditionDto cond) {
        return employeeMapper.employeeSearchManager(cond);
    }

    // 직원 상세 조회
    public EmployeeDto getEmployeeDetail(Long employeeId) {
        return employeeMapper.selectEmployeeDetail(employeeId);
    }
    // 관리자 목록 조회
    public List<ManagerDto> getManagerList() {
        return employeeMapper.selectManagerList();
    }
    // 직업 목록 조회
    public List<CommonCodeDto> getJobList() {
        return employeeMapper.selectJobList();
    }
    // 직원 생성
    public void createEmployee(EmployeeDto employeeDto) {
        employeeMapper.insertEmployee(employeeDto);
    }
    // 직원 수정
    public void updateEmployee(EmployeeDto employeeDto) {
        employeeMapper.updateEmployee(employeeDto);
    }
    // 직원 삭제
    public void deleteEmployee(Long employeeId) {
        employeeMapper.deleteEmployee(employeeId);
    }
}

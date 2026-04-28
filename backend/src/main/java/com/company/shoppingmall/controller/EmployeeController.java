package com.company.shoppingmall.controller;

import java.io.IOException;
import java.util.List;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.company.shoppingmall.dto.CommonCodeDto;
import com.company.shoppingmall.dto.EmployeeDto;
import com.company.shoppingmall.dto.EmployeeSearchConditionDto;
import com.company.shoppingmall.dto.ManagerDto;
import com.company.shoppingmall.service.EmployeeService;
import com.nexacro.xapi.data.DataSet;
import com.nexacro.xapi.data.DataTypes;
import com.nexacro.xapi.data.PlatformData;
import com.nexacro.xapi.data.VariableList;
import com.nexacro.xapi.tx.HttpPlatformRequest;
import com.nexacro.xapi.tx.HttpPlatformResponse;


@RestController
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //팝업 직원 상세 정보
    @PostMapping("/employees/detail")
    public void getEmployeeDetail(HttpServletRequest request, HttpServletResponse response) throws Exception {

        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        VariableList inVar = inData.getVariableList();
        
        //한 직원의 아이디로 정보 조회
        Long employeeId = Long.valueOf(inVar.getLong("employeeId"));

        EmployeeDto dto = employeeService.getEmployeeDetail(employeeId);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsEmployee = new DataSet("ds_employee");

        dsEmployee.addColumn("employeeId", DataTypes.STRING, 256);
        dsEmployee.addColumn("firstName", DataTypes.STRING, 256);
        dsEmployee.addColumn("lastName", DataTypes.STRING, 256);
        dsEmployee.addColumn("email", DataTypes.STRING, 256);
        dsEmployee.addColumn("emailId", DataTypes.STRING, 256);
        dsEmployee.addColumn("emailDomain", DataTypes.STRING, 256);
        dsEmployee.addColumn("phone", DataTypes.STRING, 256);
        dsEmployee.addColumn("managerId", DataTypes.STRING, 256);
        dsEmployee.addColumn("managerName", DataTypes.STRING, 256);
        dsEmployee.addColumn("hireDate", DataTypes.STRING, 256);
        dsEmployee.addColumn("jobTitle", DataTypes.STRING, 256);

        if (dto != null) {
            int row = dsEmployee.newRow();

            dsEmployee.set(row, "employeeId", String.valueOf(dto.getEmployeeId()));
            dsEmployee.set(row, "firstName", dto.getFirstName());
            dsEmployee.set(row, "lastName", dto.getLastName());
            dsEmployee.set(row, "email", dto.getEmail());
            dsEmployee.set(row, "emailId", dto.getEmailId());
            dsEmployee.set(row, "emailDomain", dto.getEmailDomain());
            dsEmployee.set(row, "phone", dto.getPhone());
            dsEmployee.set(row, "managerId", String.valueOf(dto.getManagerId()));
            dsEmployee.set(row, "managerName", dto.getManagerName());
            dsEmployee.set(row, "hireDate", dto.getHireDate());
            dsEmployee.set(row, "jobTitle", dto.getJobTitle());
        }

        outData.addDataSet(dsEmployee);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //직책 목록
    @RequestMapping(value = "/employees/common", method = {RequestMethod.GET, RequestMethod.POST})
    public void getEmployeeCommonData(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {

        List<CommonCodeDto> jobList = employeeService.getJobList();

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsJob = new DataSet("ds_job");
        dsJob.addColumn("code", DataTypes.STRING, 256);
        dsJob.addColumn("name", DataTypes.STRING, 256);

        for (CommonCodeDto dto : jobList) {
            int row = dsJob.newRow();
            dsJob.set(row, "code", nvl(dto.getCode()));
            dsJob.set(row, "name", nvl(dto.getName()));
        }

        outData.addDataSet(dsJob);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //관리자 목록
    @RequestMapping(value = "/managerList", method = {RequestMethod.GET, RequestMethod.POST})
    public void getManagerList(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {

        List<ManagerDto> list = employeeService.getManagerList();
        
        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsManager = new DataSet("ds_manager");
        dsManager.addColumn("managerId", DataTypes.STRING, 256);
        dsManager.addColumn("managerName", DataTypes.STRING, 256);

        //첫 행을 -전체-로 추가
        int firstRow = dsManager.newRow();
        dsManager.set(firstRow, "managerId", "");
        dsManager.set(firstRow, "managerName", "-전체- ");

        for (ManagerDto dto : list) {
            int row = dsManager.newRow();
            dsManager.set(row, "managerId", dto.getManagerId() == null ? "" : String.valueOf(dto.getManagerId()));
            dsManager.set(row, "managerName", nvl(dto.getManagerName()));
        }

        outData.addDataSet(dsManager);
        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // 직원 목록 검색
    @PostMapping("/employees")
    public void getEmployeeList(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {

        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCond = inData.getDataSet("ds_cond");

        EmployeeSearchConditionDto cond = new EmployeeSearchConditionDto();

        /*검색 조건을 데이터셋에서 추출 후 dto에 담는다.*/
        if (dsCond != null && dsCond.getRowCount() > 0) {
            cond.setEmployeeName(nvl(dsCond.getString(0, "employeeName")));
            cond.setHireDateFrom(nvl(dsCond.getString(0, "hireDateFrom")));
            cond.setHireDateTo(nvl(dsCond.getString(0, "hireDateTo")));
            cond.setManagerId(nvl(dsCond.getString(0, "managerId")));
        }



        List<EmployeeDto> list = employeeService.getEmployeeList(cond);
;
        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsEmployees = new DataSet("ds_employees");
        dsEmployees.addColumn("employeeId", DataTypes.STRING, 256);
        dsEmployees.addColumn("jobTitle", DataTypes.STRING, 256);
        dsEmployees.addColumn("employeeName", DataTypes.STRING, 256);
        dsEmployees.addColumn("email", DataTypes.STRING, 256);
        dsEmployees.addColumn("hireDate", DataTypes.STRING, 256);
        dsEmployees.addColumn("managerName", DataTypes.STRING, 256);

        //검색된 직원 목록을 데이터셋에 추가
        for (EmployeeDto dto : list) {
            int row = dsEmployees.newRow();
            dsEmployees.set(row, "employeeId", dto.getEmployeeId() == null ? "" : String.valueOf(dto.getEmployeeId()));
            dsEmployees.set(row, "jobTitle", nvl(dto.getJobTitle()));
            dsEmployees.set(row, "employeeName", nvl(dto.getEmployeeName()));
            dsEmployees.set(row, "email", nvl(dto.getEmail()));
            dsEmployees.set(row, "hireDate", nvl(dto.getHireDate()));
            dsEmployees.set(row, "managerName", nvl(dto.getManagerName()));
        }

        outData.addDataSet(dsEmployees);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //직원 등록
    @PostMapping("/employees/popupCombdo")
    public void employeeSearchManager(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {

        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsCond = inData.getDataSet("ds_cond");

        EmployeeSearchConditionDto cond = new EmployeeSearchConditionDto();

        if (dsCond != null && dsCond.getRowCount() > 0) {
            String managerName = nvl(dsCond.getString(0, "managerId"));

            cond.setEmployeeName(nvl(dsCond.getString(0, "employeeName")));
            cond.setHireDateFrom(nvl(dsCond.getString(0, "hireDateFrom")));
            cond.setHireDateTo(nvl(dsCond.getString(0, "hireDateTo")));
            //프론트에서 -전체-, -선택- 같은 표시 문자열이 그대로 넘어오는 경우를 대비한 처리
            cond.setManagerId(managerName.startsWith("-") ? "" : managerName);
        }

        List<EmployeeDto> list = employeeService.employeeSearchManager(cond);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsEmployees = new DataSet("ds_employees");
        dsEmployees.addColumn("employeeId", DataTypes.STRING, 256);
        dsEmployees.addColumn("jobTitle", DataTypes.STRING, 256);
        dsEmployees.addColumn("employeeName", DataTypes.STRING, 256);
        dsEmployees.addColumn("email", DataTypes.STRING, 256);
        dsEmployees.addColumn("hireDate", DataTypes.STRING, 256);
        dsEmployees.addColumn("managerName", DataTypes.STRING, 256);

        for (EmployeeDto dto : list) {
            int row = dsEmployees.newRow();
            dsEmployees.set(row, "employeeId", dto.getEmployeeId() == null ? "" : String.valueOf(dto.getEmployeeId()));
            dsEmployees.set(row, "jobTitle", nvl(dto.getJobTitle()));
            dsEmployees.set(row, "employeeName", nvl(dto.getEmployeeName()));
            dsEmployees.set(row, "email", nvl(dto.getEmail()));
            dsEmployees.set(row, "hireDate", nvl(dto.getHireDate()));
            dsEmployees.set(row, "managerName", nvl(dto.getManagerName()));
        }

        outData.addDataSet(dsEmployees);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    @PostMapping("/employees/create")
    public void createEmployee(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {

        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsEmployee = inData.getDataSet("ds_employee");

        EmployeeDto employeeDto = new EmployeeDto();

        //데이터셋에서 직원 정보를 추출 후 dto에 담는다.
        if (dsEmployee != null && dsEmployee.getRowCount() > 0) {
            employeeDto.setFirstName(nvl(dsEmployee.getString(0, "firstName")));
            employeeDto.setLastName(nvl(dsEmployee.getString(0, "lastName")));
            employeeDto.setEmail(nvl(dsEmployee.getString(0, "email")));
            employeeDto.setPhone(nvl(dsEmployee.getString(0, "phone")));
            employeeDto.setHireDate(nvl(dsEmployee.getString(0, "hireDate")));
            employeeDto.setJobTitle(nvl(dsEmployee.getString(0, "jobTitle")));
            employeeDto.setManagerId(parseLong(dsEmployee.getString(0, "managerId")));
        }

        employeeService.createEmployee(employeeDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        DataSet dsEmployeeId = new DataSet("ds_employee");
        dsEmployeeId.addColumn("employeeId", DataTypes.STRING, 256);

        //등록된 직원의 아이디를 데이터셋에 담아 응답(focus 위해)
        int row = dsEmployeeId.newRow();
        dsEmployeeId.set(row, "employeeId", employeeDto.getEmployeeId() == null ? "" : String.valueOf(employeeDto.getEmployeeId()));

        outData.addDataSet(dsEmployeeId);

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //직원 수정
    @PostMapping("/employees/update")
    public void updateEmployee(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {

        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        DataSet dsEmployee = inData.getDataSet("ds_employee");

        EmployeeDto employeeDto = new EmployeeDto();
        //데이터셋의 직원 정보를 추출 후 dto에 담는다.
        if (dsEmployee != null && dsEmployee.getRowCount() > 0) {
            employeeDto.setEmployeeId(parseLong(dsEmployee.getString(0, "employeeId")));
            employeeDto.setFirstName(nvl(dsEmployee.getString(0, "firstName")));
            employeeDto.setLastName(nvl(dsEmployee.getString(0, "lastName")));
            employeeDto.setEmail(nvl(dsEmployee.getString(0, "email")));
            employeeDto.setPhone(nvl(dsEmployee.getString(0, "phone")));
            employeeDto.setHireDate(nvl(dsEmployee.getString(0, "hireDate")));
            employeeDto.setJobTitle(nvl(dsEmployee.getString(0, "jobTitle")));
            employeeDto.setManagerId(parseLong(nvl(dsEmployee.getString(0, "managerId"))));
        }

        employeeService.updateEmployee(employeeDto);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    //직원 삭제
    @PostMapping("/employees/delete")
    public void deleteEmployee(HttpServletRequest request, HttpServletResponse response) throws IOException, Exception {

        HttpPlatformRequest platformRequest = new HttpPlatformRequest(request.getInputStream());
        platformRequest.receiveData();

        PlatformData inData = platformRequest.getData();
        VariableList inVar = inData.getVariableList();

        //데이터셋에서 직원 아이디 추출 후 삭제
        Long employeeId = Long.valueOf(inVar.getLong("employeeId"));
        
        employeeService.deleteEmployee(employeeId);

        PlatformData outData = new PlatformData();
        VariableList outVar = outData.getVariableList();
        outVar.add("ErrorCode", 0);
        outVar.add("ErrorMsg", "SUCC");

        //응답은 성공 여부만 전달하면 된다.
        HttpPlatformResponse platformResponse = new HttpPlatformResponse(response);
        platformResponse.setData(outData);
        platformResponse.sendData();
    }

    // null 값을 빈 문자열로 변환하는 유틸 메서드
    private String nvl(String value) {
        return value == null ? "" : value.trim();
    }

    // 문자열을 Long으로 변환하는 유틸 메서드 (빈 문자열은 null로 처리)
    private Long parseLong(String value) {
        String trimmed = nvl(value);
        if (trimmed.isEmpty()) {
            return null;
        }
        return Long.valueOf(trimmed);
    }
}

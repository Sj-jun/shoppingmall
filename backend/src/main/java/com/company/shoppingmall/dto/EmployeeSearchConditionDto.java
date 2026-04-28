
package com.company.shoppingmall.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeSearchConditionDto {

    private String employeeName;
    private String hireDateFrom;
    private String hireDateTo;
    private String managerId;

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getHireDateFrom() {
        return hireDateFrom;
    }

    public void setHireDateFrom(String hireDateFrom) {
        this.hireDateFrom = hireDateFrom;
    }

    public String getHireDateTo() {
        return hireDateTo;
    }

    public void setHireDateTo(String hireDateTo) {
        this.hireDateTo = hireDateTo;
    }

    public String getManagerId() {
        return managerId;
    }

    public void setManagerId(String managerId) {
        this.managerId = managerId;
    }

}

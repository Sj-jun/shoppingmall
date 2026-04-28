package com.company.shoppingmall.dto;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ManagerDto {

    private Long managerId;
    private String managerName;

    public Long getManagerId() {
        return managerId;
    }

    public void setManagerId(Long managerId) {
        this.managerId = managerId;
    }

    public String getManagerName() {
        return managerName;
    }

    public void setManagerName(String managerName) {
        this.managerName = managerName;
    }   
    
}

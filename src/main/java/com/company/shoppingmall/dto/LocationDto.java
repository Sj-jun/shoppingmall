package com.company.shoppingmall.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LocationDto {
    private Long locationId;
    private String locationName;
    private String address;
    private String postalCode;
    private String city;
    private String state;
    private String countryId;
}

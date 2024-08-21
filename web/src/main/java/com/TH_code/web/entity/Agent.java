package com.TH_code.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String property_tile;
    private String property_type;
    private Integer price;
    private String location;
    private String availability;
    private Double dimensions;
    private String property_description;
    private String bedroom_type;

}

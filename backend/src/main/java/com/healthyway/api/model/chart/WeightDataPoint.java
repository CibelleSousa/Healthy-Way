package com.healthyway.api.model.chart;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class WeightDataPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String label;
    
    @Column(name = "weight_value") 
    private double value; 
}
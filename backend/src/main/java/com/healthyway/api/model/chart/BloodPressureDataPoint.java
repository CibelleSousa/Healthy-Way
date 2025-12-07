package com.healthyway.api.model.chart;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class BloodPressureDataPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String label;
    private int previousMonth;
    private int currentMonth;
}
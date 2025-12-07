package com.healthyway.api.model.chart;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class CaloricDataPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "calendar_month")
    private String month;

    private int protein;
    private int carbs;
    private int fats;
    private int total;
}
package com.healthyway.api.model.medical;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class LabExam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String date;
    private String result;
    private String status;
}
package com.healthyway.api.model.medical;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Complaint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String date;
    private String complaint; 
    private String status;    
}
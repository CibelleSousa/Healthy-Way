package com.healthyway.api.model;

import com.healthyway.api.model.chart.BloodPressureDataPoint;
import com.healthyway.api.model.chart.CaloricDataPoint;
import com.healthyway.api.model.chart.WeightDataPoint;
import com.healthyway.api.model.medical.Complaint;
import com.healthyway.api.model.medical.LabExam;
import com.healthyway.api.model.stats.*;
import jakarta.persistence.*;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data // 1. O Lombok cria Getters, Setters e toString automaticamente
@Entity // 2. Isso vira uma tabela no banco de dados (H2)
public class Athlete {

    @Id // 3. Diz que este campo é a Chave Primária (PK)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 4. O banco gera o ID (Auto Increment)
    private Long id;

    private String name;
    private String photoUrl;
    private int age;
    private double weight;
    private double height;
    
    private String focus;
    private String gender;
    private String level; 
    private String status;

    @Embedded
    private PerformanceMetrics performanceMetrics;

    @Embedded
    private BodyComposition bodyComposition;

    @Embedded
    private DailyStatus dailyStatus;

    @Embedded
    private HormonalLevels hormonalLevels;

    @Embedded
    private Availability availabilityLast30Days;

    @ElementCollection
    private List<String> medicalConditions = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "athlete_id")
    private List<Complaint> complaintHistory = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "athlete_id")
    private List<LabExam> labExams = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "athlete_id")
    private List<WeightDataPoint> weightHistory = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "athlete_id")
    private List<BloodPressureDataPoint> bloodPressureHistory = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "athlete_id")
    private List<CaloricDataPoint> caloricIntakeHistory = new ArrayList<>();

}
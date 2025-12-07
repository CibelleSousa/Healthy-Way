package com.healthyway.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

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

}
package com.healthyway.api.repository;

import com.healthyway.api.model.Athlete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // Diz ao Spring: "Isso aqui gerencia o banco de dados"
public interface AthleteRepository extends JpaRepository<Athlete, Long> {
    // O JpaRepository já nos dá métodos prontos como:
    // .save(), .findAll(), .findById(), .deleteById()
}
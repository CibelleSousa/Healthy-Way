package com.healthyway.api.service;

import com.healthyway.api.model.Athlete;
import com.healthyway.api.repository.AthleteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service // 1. Diz ao Spring: "Esta classe contém regras de negócio"
public class AthleteService {

    // 2. Injeção de Dependência: Precisamos do Repository aqui dentro
    private final AthleteRepository repository;

    public AthleteService(AthleteRepository repository) {
        this.repository = repository;
    }

    // 3. Método para listar todos
    public List<Athlete> findAll() {
        return repository.findAll(); // O JpaRepository já faz o SELECT * FROM athlete
    }
}
package com.healthyway.api.service;

import com.healthyway.api.model.Athlete;
import com.healthyway.api.repository.AthleteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    // 4. Método para lista pelo ID
    public Optional<Athlete> findById(Long id) {
        // O 'Optional' é uma caixa que pode ter um Atleta ou estar vazia (se não achar)
        return repository.findById(id); 
    }
}
package com.healthyway.api.controller;

import com.healthyway.api.model.Athlete;
import com.healthyway.api.service.AthleteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/athletes") // 1. Define a rota base: http://localhost:8080/athletes
public class AthleteController {

    private final AthleteService service;

    public AthleteController(AthleteService service) {
        this.service = service;
    }

    @GetMapping // 2. Quando alguém acessar GET /athletes...
    public List<Athlete> listarTodos() {
        return service.findAll(); // ...chama o serviço e retorna a lista em JSON
    }
}
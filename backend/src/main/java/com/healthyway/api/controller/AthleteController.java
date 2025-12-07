package com.healthyway.api.controller;

import com.healthyway.api.model.Athlete;
import com.healthyway.api.service.AthleteService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{id}") // O {id} é uma variável na URL
    public ResponseEntity<Athlete> buscarPorId(@PathVariable Long id) {
        // @PathVariable pega o número da URL e joga na variável 'id'
        
        return service.findById(id)
                .map(record -> ResponseEntity.ok().body(record)) // Se achou, retorna 200 OK com o atleta
                .orElse(ResponseEntity.notFound().build()); // Se não achou, retorna 404 Not Found
    }
}
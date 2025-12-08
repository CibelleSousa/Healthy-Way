package com.healthyway.api.controller;

import com.healthyway.api.model.Athlete;
import com.healthyway.api.service.AthleteService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

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

    @PostMapping // Responde a POST /athletes
    public ResponseEntity<Athlete> criar(@RequestBody Athlete athlete) {
        // @RequestBody: Pega o JSON do corpo da requisição e transforma em Objeto Java
        Athlete novoAtleta = service.create(athlete);
        // Retorna status 201 Created e o objeto criado
        return ResponseEntity.status(HttpStatus.CREATED).body(novoAtleta);
    }

    @PutMapping("/{id}") // Responde a PUT /athletes/id
    public ResponseEntity<Athlete> atualizar(@PathVariable Long id, @RequestBody Athlete athlete) {
        
        Athlete atletaAtualizado = service.update(id, athlete);
        
        return ResponseEntity.ok(atletaAtualizado);
    }

    @DeleteMapping("/{id}") // Responde a DELETE /athletes/id
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build(); // Retorna código 204 (Sucesso sem conteúdo)
    }
}
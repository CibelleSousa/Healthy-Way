package com.healthyway.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // 1. Diz ao Spring: "Essa classe vai responder requisições Web (JSON)"
@RequestMapping("/hello") // 2. Diz: "Qualquer endereço que comece com /hello vem pra cá"
public class HelloController {

    @GetMapping // 3. Diz: "Se for um GET (abrir no navegador), execute isso"
    public String digaOla() {
        return "Olá, Mundo! O Backend Spring Boot está ON! 🚀";
    }
}
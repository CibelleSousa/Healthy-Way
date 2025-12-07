package com.healthyway.api.model.stats;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor // Necessário para o JPA
@AllArgsConstructor // Facilita criar com "new PerformanceMetrics(...)"
@Embeddable // <--- A MÁGICA: Diz "Eu não sou uma tabela, sou parte de outra"
public class PerformanceMetrics {
    private int stamina;
    private int strength;
    private int power;
    private int speed;
    private int agility;
    private int mobility;
}
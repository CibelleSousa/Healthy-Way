package com.healthyway.api.model.stats;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class BodyComposition {
    private double fatPercentage;
    private double musclePercentage;
    // O peso (weight) já está na classe Athlete principal, deixamos lá.
}
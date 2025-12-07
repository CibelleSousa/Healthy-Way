package com.healthyway.api.model.stats;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class Availability {
    private int fitPercentage;
    private int fitDays;
    private int restrictedDays;
    private int injuredDays;
}
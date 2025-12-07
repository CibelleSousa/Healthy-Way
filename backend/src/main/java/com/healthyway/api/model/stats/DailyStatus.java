package com.healthyway.api.model.stats;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class DailyStatus {
    private int hydration;     // %
    private int muscleFatigue; // %
    private int sleepQuality;  // %
}
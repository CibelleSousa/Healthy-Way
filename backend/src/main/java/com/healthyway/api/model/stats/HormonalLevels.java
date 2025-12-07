package com.healthyway.api.model.stats;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class HormonalLevels {

    @Embedded
    @AttributeOverride(name = "value", column = @Column(name = "cortisol_value"))
    @AttributeOverride(name = "status", column = @Column(name = "cortisol_status"))
    private HormonalMarker cortisol;

    @Embedded
    @AttributeOverride(name = "value", column = @Column(name = "testosterone_value"))
    @AttributeOverride(name = "status", column = @Column(name = "testosterone_status"))
    private HormonalMarker testosterone;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Embeddable
    public static class HormonalMarker {
        private double value;
        private String status;
    }
}
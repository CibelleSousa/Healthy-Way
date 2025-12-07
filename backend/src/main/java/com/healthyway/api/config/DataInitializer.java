package com.healthyway.api.config;

import com.healthyway.api.model.Athlete;
import com.healthyway.api.repository.AthleteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class DataInitializer implements CommandLineRunner {

    private final AthleteRepository repository;

    public DataInitializer(AthleteRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        
        if (repository.count() == 0) {
            System.out.println("🌱 Populando banco de dados com 15 atletas...");

            List<Athlete> athletes = Arrays.asList(
                createAthlete("Lebron James", "LebronProfile.png", 35, 95, 206, "Força", "M", "Sênior", "Ok"),
                createAthlete("Marta Vieira da Silva", "MartaProfile.png", 38, 60, 163, "Força", "F", "Sênior", "Ok"),
                createAthlete("Stephen Curry", "StephenProfile.png", 37, 84, 188, "Força", "M", "Sênior", "Lesionado"),
                createAthlete("Russell Westbrook", "WestbrookProfile.png", 37, 91, 193, "Força", "M", "Sênior", "Ok"),
                createAthlete("Luka Dončić", "LukaProfile.png", 26, 104, 201, "Recu.", "M", "Júnior", "Restringido"),
                createAthlete("Nikola Jokić", "NikolaProfile.png", 30, 129, 211, "Recu.", "M", "Sênior", "Ok"),
                createAthlete("Ana Clara Souza", "MartaProfile.png", 24, 58, 165, "Recu.", "F", "Júnior", "Ok"),
                createAthlete("Bruno Alves", "StephenProfile.png", 29, 82, 185, "Recu.", "M", "Sênior", "Restringido"),
                createAthlete("Carlos Eduardo Lima", "LebronProfile.png", 27, 125, 208, "Recu.", "M", "Sênior", "Ok"),
                createAthlete("Daniela Ribeiro", "MartaProfile.png", 31, 62, 170, "Emag.", "F", "Sênior", "Lesionado"),
                createAthlete("Felipe Costa", "NikolaProfile.png", 25, 90, 190, "Emag.", "M", "Júnior", "Ok"),
                createAthlete("Gabriel Martins", "WestbrookProfile.png", 23, 100, 198, "Emag.", "M", "Júnior", "Ok"),
                createAthlete("Helena Oliveira", "MartaProfile.png", 28, 65, 175, "Emag.", "F", "Sênior", "Restringido"),
                createAthlete("Lucas Pereira", "WestbrookProfile.png", 33, 98, 202, "Emag.", "M", "Sênior", "Ok"),
                createAthlete("Rafael Mendes", "LebronProfile.png", 22, 79, 180, "Emag.", "F", "Júnior", "Ok")
            );

            repository.saveAll(athletes);
            System.out.println("✅ Dados inseridos com sucesso!");
        }
    }

    // Método auxiliar para criar o atleta de forma mais limpa
    private Athlete createAthlete(String name, String photo, int age, double weight, double height, String focus, String gender, String level, String status) {
        Athlete a = new Athlete();
        a.setName(name);
        a.setPhotoUrl(photo);
        a.setAge(age);
        a.setWeight(weight);
        a.setHeight(height);
        a.setFocus(focus);
        a.setGender(gender);
        a.setLevel(level);
        a.setStatus(status);
        return a;
    }
}
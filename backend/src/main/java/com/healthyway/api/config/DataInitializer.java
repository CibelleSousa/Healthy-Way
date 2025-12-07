package com.healthyway.api.config;

import com.healthyway.api.model.Athlete;
import com.healthyway.api.model.chart.BloodPressureDataPoint;
import com.healthyway.api.model.chart.CaloricDataPoint;
import com.healthyway.api.model.chart.WeightDataPoint;
import com.healthyway.api.model.medical.Complaint;
import com.healthyway.api.model.medical.LabExam;
import com.healthyway.api.model.stats.Availability;
import com.healthyway.api.model.stats.BodyComposition;
import com.healthyway.api.model.stats.DailyStatus;
import com.healthyway.api.model.stats.HormonalLevels;
import com.healthyway.api.model.stats.PerformanceMetrics;
import com.healthyway.api.repository.AthleteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
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
        
        // Só popula se o banco estiver vazio
        if (repository.count() == 0) {
            System.out.println("🌱 Populando banco de dados com 15 atletas e dados complexos...");

            List<Athlete> athletes = new ArrayList<>();

            // ==========================================
            // 1. LEBRON JAMES (DADOS COMPLETOS)
            // ==========================================
            Athlete lebron = createBaseAthlete("Lebron James", "LebronProfile.png", 35, 95, 206, "Força", "M", "Sênior", "Ok");
            
            // Stats Específicos
            lebron.setPerformanceMetrics(new PerformanceMetrics(80, 100, 90, 70, 80, 60));
            lebron.setBodyComposition(new BodyComposition(18.0, 69.0));
            lebron.setDailyStatus(new DailyStatus(75, 20, 80));
            lebron.setAvailabilityLast30Days(new Availability(75, 22, 5, 3));
            
            // Hormônios
            HormonalLevels lebronHormones = new HormonalLevels();
            lebronHormones.setCortisol(new HormonalLevels.HormonalMarker(400, "Bom"));
            lebronHormones.setTestosterone(new HormonalLevels.HormonalMarker(800, "Muito Bom"));
            lebron.setHormonalLevels(lebronHormones);

            // Condições Médicas
            lebron.setMedicalConditions(Arrays.asList("Bronquite Asmática", "Diagnóstico de DM 1", "Daltonismo"));

            // --- LISTAS DE HISTÓRICO (Igual ao Mock) ---

            // Histórico de Peso
            lebron.getWeightHistory().addAll(Arrays.asList(
                createWeightPoint("1 Out", 74.0),
                createWeightPoint("3 Out", 74.5),
                createWeightPoint("7 Out", 75.0),
                createWeightPoint("10 Out", 74.0),
                createWeightPoint("14 Out", 80.0),
                createWeightPoint("20 Out", 73.0),
                createWeightPoint("23 Out", 71.5),
                createWeightPoint("27 Out", 74.0),
                createWeightPoint("30 Out", 79.0)
            ));

            // Histórico de Pressão Arterial
            lebron.getBloodPressureHistory().addAll(Arrays.asList(
                createBPPoint("18/09", 110, 100),
                createBPPoint("20/09", 115, 120),
                createBPPoint("02/10", 100, 90),
                createBPPoint("16/10", 118, 125)
            ));

            // Ingestão Calórica
            lebron.getCaloricIntakeHistory().addAll(Arrays.asList(
                createCaloricPoint("JAN", 1000, 500, 300, 1800),
                createCaloricPoint("FEV", 1200, 700, 400, 2300),
                createCaloricPoint("MAR", 1500, 1000, 500, 3000),
                createCaloricPoint("ABR", 1800, 1200, 600, 3600),
                createCaloricPoint("MAI", 1900, 1300, 650, 3850),
                createCaloricPoint("JUN", 1600, 1100, 550, 3250)
            ));

            // Queixas
            lebron.getComplaintHistory().addAll(Arrays.asList(
                createComplaint("25/10/2025", "Dor leve no joelho após corrida", "Solucionada"),
                createComplaint("01/10/2025", "Cansaço excessivo durante treinos", "A revisar"),
                createComplaint("20/09/2025", "Desconforto na lombar ao levantar peso", "Pendente"),
                createComplaint("16/09/2025", "Falta de ar em exercícios intensos", "Solucionada"),
                createComplaint("12/09/2025", "Tontura ocasional após esforço", "Solucionada")
            ));

            // Exames
            lebron.getLabExams().addAll(Arrays.asList(
                createExam("10/11/2025", "1500 U/L", "Urgente"),
                createExam("02/10/2025", "12 U/L", "Urgente"),
                createExam("07/09/2025", "100 U/L", "Ok"),
                createExam("15/08/2025", "535 U/L", "Atenção")
            ));

            athletes.add(lebron);

            // ==========================================
            // 2. OUTROS ATLETAS (DADOS BÁSICOS)
            // ==========================================
            
            athletes.add(createBaseAthlete("Marta Vieira da Silva", "MartaProfile.png", 38, 60, 163, "Força", "F", "Sênior", "Ok"));
            
            Athlete curry = createBaseAthlete("Stephen Curry", "StephenProfile.png", 37, 84, 188, "Força", "M", "Sênior", "Lesionado");
            // Exemplo de como adicionar status específico para outro atleta
            curry.setAvailabilityLast30Days(new Availability(0, 0, 0, 30)); 
            athletes.add(curry);

            athletes.add(createBaseAthlete("Russell Westbrook", "WestbrookProfile.png", 37, 91, 193, "Força", "M", "Sênior", "Ok"));
            
            Athlete luka = createBaseAthlete("Luka Dončić", "LukaProfile.png", 26, 104, 201, "Recu.", "M", "Júnior", "Restringido");
            luka.setAvailabilityLast30Days(new Availability(50, 15, 15, 0));
            athletes.add(luka);

            athletes.add(createBaseAthlete("Nikola Jokić", "NikolaProfile.png", 30, 129, 211, "Recu.", "M", "Sênior", "Ok"));
            athletes.add(createBaseAthlete("Ana Clara Souza", "MartaProfile.png", 24, 58, 165, "Recu.", "F", "Júnior", "Ok"));
            
            Athlete bruno = createBaseAthlete("Bruno Alves", "StephenProfile.png", 29, 82, 185, "Recu.", "M", "Sênior", "Restringido");
            bruno.setMedicalConditions(Arrays.asList("Asma leve"));
            athletes.add(bruno);

            athletes.add(createBaseAthlete("Carlos Eduardo Lima", "LebronProfile.png", 27, 125, 208, "Recu.", "M", "Sênior", "Ok"));
            
            Athlete daniela = createBaseAthlete("Daniela Ribeiro", "MartaProfile.png", 31, 62, 170, "Emag.", "F", "Sênior", "Lesionado");
            daniela.setMedicalConditions(Arrays.asList("Torção no tornozelo"));
            athletes.add(daniela);

            athletes.add(createBaseAthlete("Felipe Costa", "NikolaProfile.png", 25, 90, 190, "Emag.", "M", "Júnior", "Ok"));
            athletes.add(createBaseAthlete("Gabriel Martins", "WestbrookProfile.png", 23, 100, 198, "Emag.", "M", "Júnior", "Ok"));
            
            Athlete helena = createBaseAthlete("Helena Oliveira", "MartaProfile.png", 28, 65, 175, "Emag.", "F", "Sênior", "Restringido");
            athletes.add(helena);

            Athlete lucas = createBaseAthlete("Lucas Pereira", "WestbrookProfile.png", 33, 98, 202, "Emag.", "M", "Sênior", "Ok");
            lucas.setMedicalConditions(Arrays.asList("Rinite"));
            athletes.add(lucas);

            athletes.add(createBaseAthlete("Rafael Mendes", "LebronProfile.png", 22, 79, 180, "Emag.", "F", "Júnior", "Ok"));

            // Salva tudo no banco
            repository.saveAll(athletes);
            System.out.println("✅ Todos os 15 atletas inseridos com sucesso!");
        }
    }

    // --- MÉTODOS AUXILIARES PARA CRIAR OBJETOS RÁPIDO ---

    private Athlete createBaseAthlete(String name, String photo, int age, double weight, double height, String focus, String gender, String level, String status) {
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
        
        // Valores padrão para não ficar null
        a.setPerformanceMetrics(new PerformanceMetrics(50, 50, 50, 50, 50, 50));
        a.setBodyComposition(new BodyComposition(15.0, 40.0));
        a.setDailyStatus(new DailyStatus(100, 0, 100));
        a.setAvailabilityLast30Days(new Availability(100, 30, 0, 0));
        
        // Hormônios padrão
        HormonalLevels h = new HormonalLevels();
        h.setCortisol(new HormonalLevels.HormonalMarker(200, "Bom"));
        h.setTestosterone(new HormonalLevels.HormonalMarker(500, "Bom"));
        a.setHormonalLevels(h);

        return a;
    }

    private WeightDataPoint createWeightPoint(String label, double value) {
        WeightDataPoint wp = new WeightDataPoint();
        wp.setLabel(label);
        wp.setValue(value);
        return wp;
    }

    private BloodPressureDataPoint createBPPoint(String label, int prev, int curr) {
        BloodPressureDataPoint bp = new BloodPressureDataPoint();
        bp.setLabel(label);
        bp.setPreviousMonth(prev);
        bp.setCurrentMonth(curr);
        return bp;
    }

    private CaloricDataPoint createCaloricPoint(String month, int p, int c, int f, int t) {
        CaloricDataPoint cp = new CaloricDataPoint();
        cp.setMonth(month);
        cp.setProtein(p);
        cp.setCarbs(c);
        cp.setFats(f);
        cp.setTotal(t);
        return cp;
    }

    private Complaint createComplaint(String date, String text, String status) {
        Complaint c = new Complaint();
        c.setDate(date);
        c.setComplaint(text);
        c.setStatus(status);
        return c;
    }

    private LabExam createExam(String date, String res, String status) {
        LabExam e = new LabExam();
        e.setDate(date);
        e.setResult(res);
        e.setStatus(status);
        return e;
    }
}
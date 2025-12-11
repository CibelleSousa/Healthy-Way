import Athlete from "../core/models/athlete.model";
import AthleteBd from "../core/models/athlete.modelBD";
import { mockBPData, mockWeightHistory, mockCaloricData, mockComplaints, mockLabExams } from "./healthCharts.mock";

export const ATHLETE_PROFILE_MOCK_BD: AthleteBd = {
  // Informações Básicas
  name: 'Lebron James',
  photoUrl: 'LebronProfile.png',
  age: 35,
  weight: 95,
  height: 206, // cm
  focus: 'Força',
  level: 'Sênior',
  gender: 'M',
  status: 'Ok',
  medicalConditions: [
    'Bronquite Asmática',
    'Diagnóstico de DM 1',
    'Daltonismo'
  ],

  // input.JPG (Radar, Donuts, Stats)
  performanceMetrics: {
    stamina: 80,
    strength: 100,
    power: 90,
    speed: 70,
    agility: 80,
    mobility: 60,
  },
  dailyStatus: {
    hydration: 75,
    muscleFatigue: 20,
    sleep: 80,
  },
  bodyComposition: {
    weight: 95,
    fat: 18,
    muscle: 69,
  },

  // input2.JPG (Tabelas e Gráficos de Linha/Barra)
  complaintHistory: mockComplaints,
  bloodPressureHistory: mockBPData,
  weightHistory: mockWeightHistory,
  caloricIntakeHistory: mockCaloricData,

  // input3.JPG (Exames, Hormônios, Disponibilidade)
  labExams: mockLabExams,
  hormonalLevels: {
    cortisol: { value: 400, status: 'Bom' },
    testosterone: { value: 800, status: 'Muito Bom' }
  },
  availabilityLast30Days: {
    fitPercentage: 70,
    fitDays: 21,
    restrictedDays: 4,
    injuredDays: 5
  }
};
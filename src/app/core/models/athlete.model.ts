import { PerformanceMetrics, DailyStatus, BodyComposition, Complaint, LabExam } from "./healthData.model";
import { TimeSeriesDataPoint, BloodPressureDataPoint, CaloricIntakeDataPoint, HormonalLevel, Availability } from "./healthChartData.model";

type levelType = 'Sênior' | 'Júnior'
type statusType = 'Ok' | 'Lesionado' | 'Restringido'

export default interface Athlete {
  id: number;
  name: string;
  photoUrl: string;
  age: number;
  weight: number;
  height: number;
  level: levelType;
  status: statusType;
  medicalConditions: string[];

  // Dados do Perfil Detalhado
  performanceMetrics?: PerformanceMetrics;
  dailyStatus?: DailyStatus;
  bodyComposition?: BodyComposition;
  complaintHistory?: Complaint[];
  bloodPressureHistory?: BloodPressureDataPoint[];
  weightHistory?: TimeSeriesDataPoint[];
  caloricIntakeHistory?: CaloricIntakeDataPoint[];
  labExams?: LabExam[];
  hormonalLevels?: {
    cortisol: HormonalLevel;
    testosterone: HormonalLevel;
  };
  availabilityLast30Days?: Availability;
}
export interface PerformanceMetrics {
  stamina: number;
  strength: number;
  power: number;
  speed: number;
  agility: number;
  mobility: number;
}

export interface DailyStatus {
  hydration: number;
  muscleFatigue: number;
  sleep: number;
}

export interface BodyComposition {
  weight: number;
  fat: number;
  muscle: number;
}

export type ComplaintStatus = 'Solucionada' | 'A revisar' | 'Pendente';

export interface Complaint {
  date: string;
  complaint: string; // A queixa em si
  status: ComplaintStatus;
}

export type ExamStatus = 'Urgente' | 'Ok' | 'Atenção';

export interface LabExam {
  date: string;
  result: string;
  status: ExamStatus;
}
export interface TimeSeriesDataPoint {
  label: string;
  value: number;
}

export interface BloodPressureDataPoint {
  label: string;
  previousMonth: number;
  currentMonth: number;
}

export interface CaloricIntakeDataPoint {
  month: string;
  protein: number;
  carbs: number;
  fats: number;
  total: number;
}

export type HormonalStatus = 'Muito Bom' | 'Bom' | 'Abaixo da Média';

export interface HormonalLevel {
  value: number;
  status: HormonalStatus;
}

export interface Availability {
  fitPercentage: number;
  fitDays: number;
  restrictedDays: number;
  injuredDays: number;
}
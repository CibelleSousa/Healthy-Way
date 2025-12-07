import { Complaint, LabExam } from "../core/models/healthData.model";
import { TimeSeriesDataPoint, BloodPressureDataPoint, CaloricIntakeDataPoint, HormonalLevel, Availability } from "../core/models/healthChartData.model";

const mockWeightHistory: TimeSeriesDataPoint[] = [
  { label: '1 Out', value: 74 },
  { label: '3 Out', value: 74.5 },
  { label: '7 Out', value: 75 },
  { label: '10 Out', value: 74 },
  { label: '14 Out', value: 80 },
  { label: '20 Out', value: 73 },
  { label: '23 Out', value: 71.5 },
  { label: '27 Out', value: 74 },
  { label: '30 Out', value: 79 },
];

const mockBPData: BloodPressureDataPoint[] = [
  { label: '18/09', previousMonth: 110, currentMonth: 100 },
  { label: '20/09', previousMonth: 115, currentMonth: 120 },
  { label: '02/10', previousMonth: 100, currentMonth: 90 },
  { label: '16/10', previousMonth: 118, currentMonth: 125 },
];

const mockCaloricData: CaloricIntakeDataPoint[] = [
  { month: 'JAN', protein: 1000, carbs: 500, fats: 300, total: 1800 },
  { month: 'FEV', protein: 1200, carbs: 700, fats: 400, total: 2300 },
  { month: 'MAR', protein: 1500, carbs: 1000, fats: 500, total: 3000 },
  { month: 'ABR', protein: 1800, carbs: 1200, fats: 600, total: 3600 },
  { month: 'MAI', protein: 1900, carbs: 1300, fats: 650, total: 3850 },
  { month: 'JUN', protein: 1600, carbs: 1100, fats: 550, total: 3250 },
  { month: 'JUL', protein: 1700, carbs: 1150, fats: 580, total: 3430 },
  { month: 'AGO', protein: 1750, carbs: 1180, fats: 600, total: 3530 },
  { month: 'SET', protein: 1650, carbs: 1120, fats: 560, total: 3330 },
  { month: 'OUT', protein: 1800, carbs: 1250, fats: 610, total: 3660 },
  { month: 'NOV', protein: 1850, carbs: 1280, fats: 630, total: 3760 },
  { month: 'DEZ', protein: 1950, carbs: 1350, fats: 680, total: 3980 }
];

const mockComplaints: Complaint[] = [
  { date: '25/10/2025', complaint: 'Dor leve no joelho após corrida', status: 'Solucionada' },
  { date: '01/10/2025', complaint: 'Cansaço excessivo durante treinos', status: 'A revisar' },
  { date: '20/09/2025', complaint: 'Desconforto na lombar ao levantar peso', status: 'Pendente' },
  { date: '16/09/2025', complaint: 'Falta de ar em exercícios intensos', status: 'Solucionada' },
  { date: '12/09/2025', complaint: 'Tontura ocasional após esforço', status: 'Solucionada' },
];

const mockLabExams: LabExam[] = [
  { date: '10/11/2025', result: '1500 U/L', status: 'Urgente' },
  { date: '02/10/2025', result: '12 U/L', status: 'Urgente' },
  { date: '07/09/2025', result: '100 U/L', status: 'Ok' },
  { date: '15/08/2025', result: '535 U/L', status: 'Atenção' },
];

export {mockWeightHistory, mockBPData, mockCaloricData, mockComplaints, mockLabExams};
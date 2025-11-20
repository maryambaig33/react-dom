export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  CHAT = 'CHAT',
  SETTINGS = 'SETTINGS'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isError?: boolean;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  uv: number;
}

export interface AnalyticsStat {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}
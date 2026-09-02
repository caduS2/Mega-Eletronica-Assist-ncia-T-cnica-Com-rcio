import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  chips: string[];
  icon: LucideIcon;
  imageUrl?: string;
  commonDefects?: string[];
  timeframe?: string;
  warranty?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  comment: string;
  rating: number;
  source: string;
}

export interface StatisticItem {
  id: string;
  value: string;
  numericTarget?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface EvaluationFormData {
  nome: string;
  telefone: string;
  equipamento: string;
  marcaModelo: string;
  descricao: string;
}

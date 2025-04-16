export interface Transaction {
  id: string;
  amount: number;
  date: Date;
  description: string;
  category: string;
}

export interface Budget {
  category: string;
  amount: number;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export const DEFAULT_CATEGORIES: Category[] = [
  { id: '1', name: 'Housing', color: 'hsl(var(--chart-1))' },
  { id: '2', name: 'Transportation', color: 'hsl(var(--chart-2))' },
  { id: '3', name: 'Food', color: 'hsl(var(--chart-3))' },
  { id: '4', name: 'Utilities', color: 'hsl(var(--chart-4))' },
  { id: '5', name: 'Entertainment', color: 'hsl(var(--chart-5))' },
];
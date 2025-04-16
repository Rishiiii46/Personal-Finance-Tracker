"use client"

import { useState } from 'react';
import { Budget, Transaction, DEFAULT_CATEGORIES } from '@/lib/types';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface BudgetManagerProps {
  budgets: Budget[];
  onUpdateBudget: (budget: Budget) => void;
  transactions: Transaction[];
}

export default function BudgetManager({ budgets, onUpdateBudget, transactions }: BudgetManagerProps) {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!category || !amount) {
      toast.error("Please fill in all fields");
      return;
    }

    const budget: Budget = {
      category,
      amount: parseFloat(amount)
    };

    onUpdateBudget(budget);
    toast.success("Budget updated successfully");
    
    // Reset form
    setCategory('');
    setAmount('');
  };

  const getCategoryExpenses = (categoryName: string) => {
    return transactions
      .filter(t => t.category === categoryName)
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const getBudgetProgress = (categoryName: string) => {
    const budget = budgets.find(b => b.category === categoryName);
    if (!budget) return 0;
    
    const expenses = getCategoryExpenses(categoryName);
    return Math.min((expenses / budget.amount) * 100, 100);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-3">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {DEFAULT_CATEGORIES.map((cat) => (
              <SelectItem key={cat.id} value={cat.name}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          type="number"
          placeholder="Budget Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button type="submit">Set Budget</Button>
      </form>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {DEFAULT_CATEGORIES.map((cat) => {
          const budget = budgets.find(b => b.category === cat.name);
          const expenses = getCategoryExpenses(cat.name);
          const progress = getBudgetProgress(cat.name);

          return (
            <Card key={cat.id}>
              <CardHeader>
                <CardTitle className="text-sm font-medium">{cat.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Spent: ${expenses.toFixed(2)}</span>
                    <span>Budget: ${budget?.amount.toFixed(2) || '0.00'}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  {progress >= 100 && (
                    <p className="text-sm text-destructive">Budget exceeded!</p>
                  )}
                  {progress >= 80 && progress < 100 && (
                    <p className="text-sm text-yellow-500">Approaching budget limit!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
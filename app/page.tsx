"use client"

import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from '@/components/Dashboard';
import TransactionList from '@/components/TransactionList';
import BudgetManager from '@/components/BudgetManager';
import { Transaction, Budget } from '@/lib/types';

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budgets, setBudgets] = useState<Budget[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const updateBudget = (budget: Budget) => {
    const exists = budgets.find(b => b.category === budget.category);
    if (exists) {
      setBudgets(budgets.map(b => b.category === budget.category ? budget : b));
    } else {
      setBudgets([...budgets, budget]);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-primary">Personal Finance Visualizer</h1>
        
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="budgets">Budgets</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <Dashboard transactions={transactions} budgets={budgets} />
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="p-6">
              <TransactionList 
                transactions={transactions}
                onAdd={addTransaction}
                onDelete={deleteTransaction}
              />
            </Card>
          </TabsContent>

          <TabsContent value="budgets" className="space-y-6">
            <Card className="p-6">
              <BudgetManager 
                budgets={budgets}
                onUpdateBudget={updateBudget}
                transactions={transactions}
              />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
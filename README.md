# Personal Finance Visualizer

A modern web application for tracking personal finances, built with Next.js and featuring a beautiful dark theme interface.

## Features

### Dashboard
- Visual representation of spending patterns
- Monthly expenses tracking with bar charts
- Category distribution pie charts
- Real-time budget tracking
- Summary cards with key financial metrics

### Transaction Management
- Add, edit, and delete transactions
- Categorize transactions
- Date-based filtering
- Detailed transaction history

### Budget Management
- Set category-wise budgets
- Visual progress tracking
- Budget vs actual comparison
- Alerts for budget thresholds
- Predefined expense categories

## Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Date Handling**: date-fns
- **Notifications**: Sonner
- **Theme**: Dark mode by default

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-finance-visualizer.git
```

2. Install dependencies:
```bash
cd personal-finance-visualizer
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app directory
├── components/          # React components
│   ├── ui/             # UI components from shadcn/ui
│   ├── Dashboard.tsx   # Dashboard component
│   ├── BudgetManager.tsx # Budget management
│   └── TransactionList.tsx # Transaction handling
├── lib/                # Utilities and types
└── public/            # Static assets
```

## Deployment

The application is deployed on Vercel and can be accessed at: [Your Deployment URL]

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
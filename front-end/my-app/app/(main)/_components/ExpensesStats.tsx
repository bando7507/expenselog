"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { Expenses, Expense } from '../types/types';

// interface Props {
//   expenses: Expenses;
// }

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ExpensesStats = ({ expenses }: any) => {
  const getMonthYear = (date: string): string => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  //   const expensesByMonth: { [key: string]: number } = {};
  //   expenses.forEach((expense: any) => {
  //     const monthYear = getMonthYear(expense.date);
  //     expensesByMonth[monthYear] =
  //       (expensesByMonth[monthYear] || 0) + expense.amount;
  //   });

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const chartData = {
    labels,
    datasets: [
      {
        label: "Total des dépenses par mois: ",
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      {/* <h2>Statistiques des dépenses par mois :</h2> */}

      <div>
        {/* <h3>Graphique des dépenses par mois :</h3> */}
        <Line
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value, index, values) {
                    return value + "€";
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ExpensesStats;

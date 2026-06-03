import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

export default function DashboardPieChart({
  totalBalance,
  totalIncome,
  totalExpense,
}) {
  const data = [
    { name: "Income", amount: totalIncome },
    { name: "Expense", amount: totalExpense },
    { name: "Balance", amount: totalBalance },
  ];
  const colors = ["#16A34A", "#DC2626", "#0891B2"];
  const hasData = data.some((item) => item.amount > 0);

  return (
    <div className="w-full bg-white text-zinc-800 p-4 rounded shadow">
      <h1 className="text-lg md:text-2xl font-semibold mb-5">
        Finence Overview
      </h1>
      {hasData ? (
        <ResponsiveContainer width="100%" height={295}>
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={130}
              innerRadius={90}
              labelLine={false}
            >
              {data?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <div className="h-73.75 flex items-center justify-center text-red-600">
          No Finance Data Available.
        </div>
      )}
    </div>
  );
}

import { useContext, useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Bar,
} from "recharts";
import { AppContext } from "../../context/AppContext";
import { prepareBarChart } from "../../utils/helper";

export default function IncomeBarChart() {
  // useContext
  const { incomeData } = useContext(AppContext);

  // useState
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [chartData, setChartData] = useState([]);

  // useEffect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect
  useEffect(() => {
    const result = prepareBarChart(incomeData);
    const limitedData = isMobile ? result?.slice(0, 5) : result?.slice(0, 12);
    setChartData(limitedData);
  }, [incomeData, isMobile]);

  return (
    <div className="bg-white">
      {chartData?.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid stroke="none" />
            <XAxis
              dataKey="monthName"
              tick={{ fontSize: 13, fontWeight: "600", fill: "#27272a" }}
              stroke="none"
            />
            <Tooltip />
            <Bar
              type="monotone"
              dataKey="amount"
              stroke="none"
              fill="#0891B2"
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="h-75 flex items-center justify-center text-red-600">
           No Income Chart Data Available.
        </div>
      )}
    </div>
  );
}

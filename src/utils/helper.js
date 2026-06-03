import moment from "moment";

// prepareBarChart
export const prepareBarChart = (data) => {
  const monthlyMap = {};

  data.forEach((item) => {
    const monthKey = moment(item?.date).format("MMM YYYY");
    if (!monthlyMap[monthKey]) {
      monthlyMap[monthKey] = 0;
    }
    monthlyMap[monthKey] += item?.amount || 0;
  });

  // Convert to array format for recharts
  const chartData = Object.keys(monthlyMap).map((month) => ({
    monthName: month,
    amount: monthlyMap[month],
  }));

  return chartData;
};

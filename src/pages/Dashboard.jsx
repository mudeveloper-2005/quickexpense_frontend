import { useContext, useEffect } from "react";
import { IoCardOutline, IoWalletOutline } from "react-icons/io5";
import { LuHandCoins } from "react-icons/lu";
import { AppContext } from "../context/AppContext";
import axiosInstance from "../utils/axiosInstance";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
import DashboardCardInfo from "../components/Dashboard/DashboardCardInfo";
import DashboardRecentTransaction from "../components/Dashboard/DashboardRecentTransaction";
import DashboardPieChart from "../components/Dashboard/DashboardPieChart";

export default function Dashboard() {
  // useContext
  const { dashboardData, setDashboardData } = useContext(AppContext);

  // getDashboard
  const getDashboard = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/dashboard");
      if (response?.data) {
        setDashboardData(response?.data?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect
  useEffect(() => {
    getDashboard();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <Bottombar />
      <section className="ml-0 md:ml-56 lg:ml-65 second-container px-3 py-4 mb-20 md:mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          <DashboardCardInfo
            icon={<IoCardOutline />}
            lebal={"Total Balance"}
            value={dashboardData?.totalBalance}
            bgColor={"bg-cyan-600"}
          />
          <DashboardCardInfo
            icon={<IoWalletOutline />}
            lebal={"Total Income"}
            value={dashboardData?.totalIncome}
            bgColor={"bg-green-600"}
          />
          <DashboardCardInfo
            icon={<LuHandCoins />}
            lebal={"Total Expense"}
            value={dashboardData?.totalExpense}
            bgColor={"bg-red-600"}
            hideDelete
          />
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-2 md:gap-4 mt-4">
          <DashboardRecentTransaction
            recentTransaction={dashboardData?.recentTransaction}
          />
          <DashboardPieChart
            totalBalance={dashboardData?.totalBalance}
            totalIncome={dashboardData?.totalIncome}
            totalExpense={dashboardData?.totalExpense}
          />
        </div>
      </section>
    </>
  );
}

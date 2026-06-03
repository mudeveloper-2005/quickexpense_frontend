import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import axiosInstance from "../utils/axiosInstance";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
import IncomeOverview from "../components/Income/IncomeOverview";
import IncomeList from "../components/Income/IncomeList";

export default function Income() {
  // useContext
  const { incomeData, setIncomeData } = useContext(AppContext);

  // getIncome
  const getIncome = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/income/get");
      if (response?.data) {
        setIncomeData(response?.data?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // deleteIncome
  const deleteIncome = async (id) => {
    try {
      await axiosInstance.delete(`/api/v1/income/${id}`);

      // remove from UI instantly
      setIncomeData((prev) => prev.filter((item) => item._id !== id));
      toast.success("Delete income successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // useEffect
  useEffect(() => {
    getIncome();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <Bottombar />
      <section className="ml-0 md:ml-56 lg:ml-65 second-container px-3 py-4 mb-20 md:mb-0">
        <IncomeOverview />
        <IncomeList incomeData={incomeData} deleteIncome={deleteIncome} />
      </section>
    </>
  );
}

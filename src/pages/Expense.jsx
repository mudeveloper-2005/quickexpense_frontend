import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Bottombar from "../components/Bottombar";
import ExpenseOverview from "../components/Expense/ExpenseOverview";
import ExpenseList from "../components/Expense/ExpenseList";

export default function Expense() {
  // useContext
  const { expenseData, setExpenseData } = useContext(AppContext);

  // getExpense
  const getExpense = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/expense/get");
      if (response?.data) {
        setExpenseData(response?.data?.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // deleteExpense
  const deleteExpense = async (id) => {
    try {
      await axiosInstance.delete(`/api/v1/expense/${id}`);

      // remove from UI instantly
      setExpenseData((prev) => prev.filter((item) => item._id !== id));
      toast.success("Delete income successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  // useEffect
  useEffect(() => {
    getExpense();
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <Bottombar />
      <section className="ml-0 md:ml-56 lg:ml-65 second-container px-3 py-4 mb-20 md:mb-0">
        <ExpenseOverview />
        <ExpenseList expenseData={expenseData} deleteExpense={deleteExpense} />
      </section>
    </>
  );
}

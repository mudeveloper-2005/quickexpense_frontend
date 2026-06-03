import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "./context/AppContext";
import LoginSignupPopup from "./components/LoginSignupPopup";
import AddIncomePopup from "./components/Income/AddIncomePopup";
import IncomeDownloadPopup from "./components/Income/IncomeDownloadPopup";
import AddExpensePopup from "./components/Expense/AddExpensePopup";
import ExpenseDownloadPopup from "./components/Expense/ExpenseDownloadPopup";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expense from "./pages/Expense";

export default function App() {
  const {
    loginSignupPopup,
    addIncomePopup,
    incomeDownloadPopup,
    addExpensePopup,
    expenseDownloadPopup,
  } = useContext(AppContext);

  return (
    <>
      <ToastContainer />
      {loginSignupPopup ? <LoginSignupPopup /> : <></>}
      {addIncomePopup ? <AddIncomePopup /> : <></>}
      {incomeDownloadPopup ? <IncomeDownloadPopup /> : <></>}
      {addExpensePopup ? <AddExpensePopup /> : <></>}
      {expenseDownloadPopup ? <ExpenseDownloadPopup /> : <></>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/income"
          element={
            <ProtectedRoute>
              <Income />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expense"
          element={
            <ProtectedRoute>
              <Expense />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

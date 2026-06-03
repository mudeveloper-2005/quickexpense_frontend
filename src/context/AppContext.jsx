import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currLoginSignup, setCurrLoginSignup] = useState("Login");
  const [loginSignupPopup, setLoginSignupPopup] = useState(false);
  const [dashboardData, setDashboardData] = useState([]);
  const [addIncomePopup, setAddIncomePopup] = useState(false);
  const [incomeData, setIncomeData] = useState([]);
  const [incomeDownloadPopup, setIncomeDownloadPopup] = useState(false);
  const [addExpensePopup, setAddExpensePopup] = useState(false);
  const [expenseData, setExpenseData] = useState([]);
  const [expenseDownloadPopup, setExpenseDownloadPopup] = useState(false);

  const value = {
    currLoginSignup,
    setCurrLoginSignup,
    loginSignupPopup,
    setLoginSignupPopup,
    dashboardData,
    setDashboardData,
    addIncomePopup,
    setAddIncomePopup,
    incomeData,
    setIncomeData,
    incomeDownloadPopup,
    setIncomeDownloadPopup,
    addExpensePopup,
    setAddExpensePopup,
    expenseData,
    setExpenseData,
    expenseDownloadPopup,
    setExpenseDownloadPopup,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContextProvider;

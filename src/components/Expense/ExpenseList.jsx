import { useContext } from "react";
import { FiDownload } from "react-icons/fi";
import moment from "moment";
import { AppContext } from "../../context/AppContext";
import TransactionCard from "../TransactionCard";

export default function ExpenseList({ expenseData, deleteExpense }) {
  const { setExpenseDownloadPopup } = useContext(AppContext);

  return (
    <div className="w-full bg-white text-zinc-800 px-3 md:px-4 py-3 md:py-4 rounded shadow">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-lg md:text-2xl font-semibold">All Expense</h1>
        <button
          className="flex items-center gap-x-1 bg-zinc-200 px-2 md:px-2.5 py-1.5 md:py-2.5 rounded cursor-pointer"
          onClick={() => setExpenseDownloadPopup(true)}
        >
          <FiDownload className="md:text-lg text-zinc-800" />
          <h5 className="text-sm text-zinc-800 md:text-base font-semibold">
            Download
          </h5>
        </button>
      </div>
      {expenseData?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {expenseData?.map((expense) => (
            <TransactionCard
              key={expense?._id}
              icon={expense?.icon}
              source={expense?.source}
              date={moment(expense?.date).format("Do MMM YYYY")}
              amount={expense?.amount}
              type="expense"
              onDelete={() => deleteExpense(expense?._id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center text-red-600">
          No Expense Data Available.
        </div>
      )}
    </div>
  );
}

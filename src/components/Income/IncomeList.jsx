import { useContext } from "react";
import { FiDownload } from "react-icons/fi";
import moment from "moment";
import { AppContext } from "../../context/AppContext";
import TransactionCard from "../TransactionCard";

export default function IncomeList({ incomeData, deleteIncome }) {
  const { setIncomeDownloadPopup } = useContext(AppContext);

  return (
    <div className="w-full bg-white text-zinc-800 px-3 md:px-4 py-3 md:py-4 rounded shadow">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-lg md:text-2xl font-semibold">All Income</h1>
        <button
          className="flex items-center gap-x-1 bg-zinc-200 px-2 md:px-2.5 py-1.5 md:py-2.5 rounded cursor-pointer"
          onClick={() => setIncomeDownloadPopup(true)}
        >
          <FiDownload className="md:text-lg text-zinc-800" />
          <h5 className="text-sm text-zinc-800 md:text-base font-semibold">
            Download
          </h5>
        </button>
      </div>
      {incomeData?.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {incomeData?.map((income) => (
            <TransactionCard
              key={income?._id}
              icon={income?.icon}
              source={income?.source}
              date={moment(income?.date).format("Do MMM YYYY")}
              amount={income?.amount}
              type="income"
              onDelete={() => deleteIncome(income?._id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center text-red-600">
          No Income Data Available.
        </div>
      )}
    </div>
  );
}

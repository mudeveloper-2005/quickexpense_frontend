import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { AppContext } from "../../context/AppContext";
import IncomeBarChart from "./IncomeBarChart";

export default function IncomeOverview() {
  const { setAddIncomePopup } = useContext(AppContext);

  return (
    <div className="w-full bg-white text-zinc-800 px-3 md:px-4 py-3 md:py-4 rounded shadow mb-4">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-lg md:text-2xl font-semibold">Income Overview</h1>
        <button
          className="flex items-center gap-x-1 bg-cyan-200 text-cyan-800 px-2 md:px-2.5 py-1.5 md:py-2.5 rounded cursor-pointer"
          onClick={() => setAddIncomePopup(true)}
        >
          <FaPlus className="md:text-lg" />
          <h5 className="text-sm md:text-base font-semibold">Income</h5>
        </button>
      </div>
      <IncomeBarChart />
    </div>
  );
}

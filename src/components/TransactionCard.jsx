import { MdOutlineDoNotDisturb } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

export default function TransactionCard({
  icon,
  source,
  date,
  amount,
  type,
  onDelete,
  hideDelete,
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-1.5">
        <div className="bg-zinc-200 p-1.5 rounded-full">
          {icon ? (
            <img src={icon} alt="Image" className="w-8" />
          ) : (
            <MdOutlineDoNotDisturb className="text-3xl" />
          )}
        </div>
        <div className="max-w-42.5">
          <h2 className="text-sm md:text-base font-semibold leading-5">
            {source}
          </h2>
          <p className="text-xs md:text-sm font-medium text-zinc-400">{date}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        {!hideDelete && (
          <RiDeleteBinLine
            className="text-lg text-zinc-500 cursor-pointer"
            onClick={onDelete}
          />
        )}
        <div
          className={`flex items-center gap-x-1 ${type === "income" ? "bg-green-300 text-green-900" : "bg-red-300 text-red-900"} p-1 rounded`}
        >
          <h3 className="text-sm font-semibold">
            {type === "income" ? `+ ₹${amount}` : `- ₹${amount}`}
          </h3>
          {type === "income" ? <HiTrendingUp /> : <HiTrendingDown />}
        </div>
      </div>
    </div>
  );
}

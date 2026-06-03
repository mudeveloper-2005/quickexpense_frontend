import moment from "moment";
import TransactionCard from "../TransactionCard";

export default function DashboardRecentTransaction({ recentTransaction }) {
  return (
    <div className="w-full h-95 bg-white text-zinc-800 p-4 rounded shadow">
      <h1 className="text-lg md:text-2xl font-semibold mb-5">
        Recent Transaction
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {recentTransaction?.length > 0 ? (
          recentTransaction
            ?.slice(0, 5)
            ?.map((transaction) => (
              <TransactionCard
                key={transaction?._id}
                icon={transaction?.icon}
                source={transaction?.source}
                date={moment(transaction?.date).format("Do MMM YYYY")}
                amount={transaction?.amount}
                type={transaction?.type}
                hideDelete
              />
            ))
        ) : (
          <div className="h-73.75 flex items-center justify-center text-red-600">
            No Recent Transactions.
          </div>
        )}
      </div>
    </div>
  );
}

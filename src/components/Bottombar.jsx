import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoWalletOutline, IoSettingsOutline } from "react-icons/io5";
import { LuHandCoins } from "react-icons/lu";

export default function Bottombar() {
  return (
    <section className="md:hidden fixed left-0 right-0 bottom-0 bg-white text-zinc-800 custom-shadow z-50">
      <div className="flex items-center justify-between px-3 py-3">
        <NavLink
          to="/dashboard"
          className="flex flex-col items-center rounded small-active"
        >
          <RxDashboard className="text-2xl" />
          <h2 className="text-sm font-semibold">Dashboard</h2>
        </NavLink>
        <NavLink
          to="/income"
          className="flex flex-col items-center rounded small-active"
        >
          <IoWalletOutline className="text-2xl" />
          <h2 className="text-sm font-semibold">Income</h2>
        </NavLink>
        <NavLink
          to="/expense"
          className="flex flex-col items-center rounded small-active"
        >
          <LuHandCoins className="text-2xl" />
          <h2 className="text-sm font-semibold">Expense</h2>
        </NavLink>
        <NavLink
          to="/"
          className="flex flex-col items-center rounded small-active"
        >
          <IoSettingsOutline className="text-2xl" />
          <h2 className="text-sm font-semibold">Setting</h2>
        </NavLink>
      </div>
    </section>
  );
}

import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoWalletOutline } from "react-icons/io5";
import { LuHandCoins, LuLogOut } from "react-icons/lu";

export default function Sidebar() {
  const navigate = useNavigate();

  // handleLogout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <aside className="hidden md:block fixed top-0 left-0 bottom-0 w-56 lg:w-65 bg-white text-zinc-800 p-4">
      <Link to="/dashboard" className="text-2xl anton-regular py-6">
        Quick
        <span className="text-cyan-600 text-2xl anton-regular">Expense</span>
      </Link>
      <div className="flex flex-col items-start gap-2 mt-10">
        <NavLink
          to="/dashboard"
          className="w-full flex items-center gap-x-4 py-3 px-4 rounded large-active"
        >
          <RxDashboard className="text-2xl" />
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </NavLink>
        <NavLink
          to="/income"
          className="w-full flex items-center gap-x-4 py-3 px-4 rounded large-active"
        >
          <IoWalletOutline className="text-2xl" />
          <h2 className="text-lg font-semibold">Income</h2>
        </NavLink>
        <NavLink
          to="/expense"
          className="w-full flex items-center gap-x-4 py-3 px-4 rounded large-active"
        >
          <LuHandCoins className="text-2xl" />
          <h2 className="text-lg font-semibold">Expense</h2>
        </NavLink>
        <button
          className="w-full flex items-center gap-x-4 py-3 px-4 rounded text-red-600 cursor-pointer"
          onClick={handleLogout}
        >
          <LuLogOut className="text-2xl" />
          <h2 className="text-lg font-semibold">Logout</h2>
        </button>
      </div>
    </aside>
  );
}

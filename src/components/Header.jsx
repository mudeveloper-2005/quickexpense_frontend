import { Link, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";

export default function Header() {
  const navigate = useNavigate();

  // handleLogout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="md:hidden sticky top-0 left-0 right-0 bg-white text-zinc-800 shadow z-50">
      <div className="flex items-center justify-between px-3 md:px-4 py-3">
        <div className="flex items-center gap-x-1.5">
          <Link to="/dashboard" className="text-2xl anton-regular">
            Quick
            <span className="text-cyan-600 text-2xl anton-regular">
              Expense
            </span>
          </Link>
        </div>
        <LuLogOut className="text-2xl cursor-pointer" onClick={handleLogout} />
      </div>
    </header>
  );
}

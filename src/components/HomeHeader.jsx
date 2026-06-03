import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function HomeHeader() {
  const { setCurrLoginSignup, setLoginSignupPopup } = useContext(AppContext);
  const token = localStorage.getItem("token");

  return (
    <header className="sticky top-0 left-0 right-0 bg-white text-zinc-800 shadow">
      <div className="first-container mx-auto px-3 md:px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl anton-regular">
          Quick
          <span className="text-cyan-600 text-2xl anton-regular">Expense</span>
        </Link>
        <div className="flex items-center gap-4">
          {!token ? (
            <button
              className="bg-cyan-600 text-white font-semibold px-3 md:px-4 py-2 rounded cursor-pointer"
              onClick={() => {
                setCurrLoginSignup("Login");
                setLoginSignupPopup(true);
              }}
            >
              Login
            </button>
          ) : (
            <Link
              to="/dashboard"
              className="bg-cyan-200 text-cyan-900 font-semibold px-3 md:px-4 py-2 rounded cursor-pointer"
            >
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

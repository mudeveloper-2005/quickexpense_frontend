import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import HomeHeader from "../components/HomeHeader";
import hero_img from "../assets/hero-bg.png";

export default function Home() {
  const { setCurrLoginSignup, setLoginSignupPopup } = useContext(AppContext);

  return (
    <>
      <HomeHeader />
      <section className="first-container mx-auto px-3 md:px-4 py-20 flex flex-col md:flex-row items-center justify-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-4">
            Welcome to <span className="text-cyan-600">Quick Expense</span>
          </h1>
          <p className="text-zinc-600 text-center mb-4">
            Take control of your finances with easy expense tracking, clear
            insights, and real-time updates that help you budget smarter, reduce
            waste, and achieve your financial goals faster.
          </p>
          <div className="flex items-center justify-center">
            <button
              className="bg-cyan-600 text-white font-semibold px-3 md:px-4 py-2 rounded cursor-pointer"
              onClick={() => {
                setCurrLoginSignup("Create Account");
                setLoginSignupPopup(true);
              }}
            >
              Get started
            </button>
          </div>
        </div>
        <img src={hero_img} alt="Hero Image" className="w-full md:w-1/2" />
      </section>
    </>
  );
}

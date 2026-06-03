import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import axiosInstance from "../utils/axiosInstance";

export default function LoginSignupPopup() {
  const navigate = useNavigate();

  // useContext
  const { currLoginSignup, setCurrLoginSignup, setLoginSignupPopup } =
    useContext(AppContext);

  // useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || (currLoginSignup !== "Login" && !name)) {
      return toast.error("All fields are required");
    }

    try {
      if (currLoginSignup === "Login") {
        const response = await axiosInstance.post("/api/v1/user/login", {
          email,
          password,
        });
        if (response?.data?.token) {
          localStorage.setItem("token", response?.data?.token);
          toast.success("Login successfully");
          setLoginSignupPopup(false);
          navigate("/dashboard");
        }
      } else {
        await axiosInstance.post("/api/v1/user/register", {
          name,
          email,
          password,
        });
        toast.success("Account created successfully");
        setCurrLoginSignup("Login");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="absolute top-0 left-0 bottom-0 right-0 bg-zinc-800/60 flex items-center justify-center px-3 py-3 z-50">
      <div
        className={`w-full ${currLoginSignup === "Login" ? "md:w-100" : "md:w-160"} bg-white text-zinc-800 p-4 rounded relative`}
      >
        {currLoginSignup === "Login" ? (
          <h1 className="text-2xl font-medium text-center mb-3">Login</h1>
        ) : (
          <h1 className="text-2xl font-medium">Create an account</h1>
        )}
        {currLoginSignup === "Login" ? (
          <></>
        ) : (
          <p className="text-sm font-medium text-zinc-500 mb-5">
            To track expenses and manage finances easily in Quick Expense
          </p>
        )}
        <IoClose
          className="absolute top-3 right-3 text-2xl cursor-pointer"
          onClick={() => setLoginSignupPopup(false)}
        />
        <form onSubmit={handleSubmit}>
          {currLoginSignup === "Login" ? (
            <></>
          ) : (
            <div className="w-full flex items-center justify-center mb-4 md:mb-6 cursor-pointer">
              <div className="bg-cyan-100 text-cyan-600 p-5 rounded-full">
                <FiUser className="text-5xl" />
              </div>
            </div>
          )}
          <div className="flex items-center flex-col md:flex-row md:gap-4">
            {currLoginSignup === "Login" ? (
              <></>
            ) : (
              <div className="w-full flex flex-col mb-4">
                <label htmlFor="name" className="font-semibold mb-0.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Del"
                  className="w-full bg-zinc-200 outline-none py-3 px-3 font-semibold rounded"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="w-full flex flex-col mb-4">
              <label htmlFor="email" className="font-semibold mb-0.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="johndel@gmail.com"
                className="w-full bg-zinc-200 outline-none py-3 px-3 font-semibold rounded"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="w-full flex items-center justify-between mb-0.5">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              {currLoginSignup === "Login" ? (
                <Link
                  to="/"
                  className="text-sm font-semibold text-cyan-600 underline"
                >
                  Forgot Password?
                </Link>
              ) : (
                <></>
              )}
            </div>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full bg-zinc-200 outline-none py-3 px-3 font-semibold rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white outline-none py-3 px-3 font-semibold rounded mb-4 cursor-pointer"
          >
            {currLoginSignup}
          </button>
          {currLoginSignup === "Login" ? (
            <p className="font-medium ">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-cyan-600 font-semibold underline cursor-pointer"
                onClick={() => setCurrLoginSignup("Create Account")}
              >
                SignUp
              </button>
            </p>
          ) : (
            <p className="font-medium ">
              Already have an account?{" "}
              <button
                type="button"
                className="text-cyan-600 font-semibold underline cursor-pointer"
                onClick={() => setCurrLoginSignup("Login")}
              >
                Login
              </button>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

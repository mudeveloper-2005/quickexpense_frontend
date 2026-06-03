import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";
import axiosInstance from "../../utils/axiosInstance";
import EmojiPickerPopup from "../EmojiPickerPopup";

export default function AddExpensePopup() {
  // useContext
  const { setAddExpensePopup, setExpenseData } = useContext(AppContext);

  // useState
  const [icon, setIcon] = useState("");
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // handleAddExpense
  const handleAddExpense = async (e) => {
    e.preventDefault();
    if ((!source, !amount, !date)) {
      return toast.error("All fields are required");
    }

    try {
      const response = await axiosInstance.post("/api/v1/expense/add", {
        icon,
        source,
        amount,
        date,
      });
      if (response?.data?.data) {
        setExpenseData((prev) =>
          [response?.data?.data, ...prev].sort(
            (a, b) => new Date(b.date) - new Date(a.date),
          ),
        );
      }
      toast.success("Add expense successfully");
      setAddExpensePopup(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="fixed top-0 left-0 bottom-0 right-0 bg-zinc-800/60 flex items-center justify-center px-3 py-3 z-50">
      <div className="w-full md:w-145 bg-white text-zinc-800 p-4 rounded relative">
        <h1 className="text-2xl font-medium mb-6">Add Expense</h1>
        <IoClose
          className="absolute top-2 right-2 text-2xl cursor-pointer"
          onClick={() => setAddExpensePopup(false)}
        />
        <form onSubmit={handleAddExpense}>
          <EmojiPickerPopup icon={icon} onSelect={(emoji) => setIcon(emoji)} />
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="source" className="font-semibold mb-0.5">
              Expense Source
            </label>
            <input
              type="text"
              id="source"
              placeholder="Salary, House Rent, etc"
              className="w-full bg-zinc-200 outline-none py-2.5 px-3 font-semibold rounded"
              onChange={(e) => setSource(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="amount" className="font-semibold mb-0.5">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="w-full bg-zinc-200 outline-none py-2.5 px-3 font-semibold rounded"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="date" className="font-semibold mb-0.5">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full bg-zinc-200 outline-none py-2.5 px-3 font-semibold rounded"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="w-full flex items-center justify-end">
            <button
              type="submit"
              className="bg-cyan-600 text-white outline-none py-2 px-3 font-semibold rounded mt-2 cursor-pointer"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

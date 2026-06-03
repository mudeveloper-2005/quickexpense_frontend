import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";
import axiosInstance from "../../utils/axiosInstance";

export default function ExpenseDownloadPopup() {
  // useContext
  const { setExpenseDownloadPopup } = useContext(AppContext);

  // useState
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  // handleDownload
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.get(
        `/api/v1/expense/downloadexcel?from=${from}&to=${to}`,
        {
          responseType: "blob",
        },
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `expense_details ${from}-${to}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
      toast.success("Downloaded successfully");
      setExpenseDownloadPopup(false);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="fixed top-0 left-0 bottom-0 right-0 bg-zinc-800/60 flex items-center justify-center px-3 py-3 z-50">
      <div className="w-full md:w-120 bg-white text-zinc-800 p-4 rounded relative">
        <h1 className="text-xl font-medium text-center mb-6">
          Download Expense
        </h1>
        <IoClose
          className="absolute top-2 right-2 text-2xl cursor-pointer"
          onClick={() => setExpenseDownloadPopup(false)}
        />
        <form onSubmit={handleDownload}>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="from" className="font-semibold mb-0.5">
              From
            </label>
            <input
              type="date"
              name="from"
              id="from"
              className="w-full bg-zinc-200 outline-none py-2.5 px-3 font-semibold rounded"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor="to" className="font-semibold mb-0.5">
              To
            </label>
            <input
              type="date"
              name="to"
              id="to"
              className="w-full bg-zinc-200 outline-none py-2.5 px-3 font-semibold rounded"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white outline-none py-2 px-3 font-semibold rounded mt-2 cursor-pointer"
          >
            Download
          </button>
        </form>
      </div>
    </section>
  );
}

export default function DashboardCardInfo({ icon, lebal, value, bgColor }) {
  return (
    <div className="w-full bg-white text-zinc-800 flex items-center gap-x-4 p-4 rounded shadow">
      <div className={`${bgColor} text-white p-2.5 rounded-full text-3xl`}>
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-zinc-600">{lebal}</h3>
        <h1 className="text-xl font-semibold">₹{value ?? 0}</h1>
      </div>
    </div>
  );
}

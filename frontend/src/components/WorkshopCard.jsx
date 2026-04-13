export default function WorkshopCard({ title, date, seats, category }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 border border-gray-100 flex flex-col justify-between">
      <div>
        <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
          {category}
        </span>
        <h3 className="text-base font-bold text-gray-800 mt-3 mb-2">{title}</h3>
        <p className="text-sm text-gray-500">📅 {date}</p>
        <p className="text-sm text-gray-500 mt-1">🪑 {seats} seats left</p>
      </div>
      <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 text-sm font-semibold transition">
        Book Now
      </button>
    </div>
  );
}

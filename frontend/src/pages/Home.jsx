import Hero from "../components/Hero";
import WorkshopCard from "../components/WorkshopCard";

const workshops = [
  { title: "Python for Beginners", date: "May 20, 2026", seats: 15, category: "Python" },
  { title: "Scilab Basics", date: "May 22, 2026", seats: 8, category: "Scilab" },
  { title: "OpenFOAM CFD", date: "June 1, 2026", seats: 5, category: "CFD" },
  { title: "eSim Circuit Design", date: "June 5, 2026", seats: 12, category: "eSim" },
  { title: "Django Web Dev", date: "June 10, 2026", seats: 20, category: "Python" },
  { title: "OpenModelica", date: "June 15, 2026", seats: 9, category: "Modelica" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Workshops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <WorkshopCard key={i} {...w} />
          ))}
        </div>
      </section>
    </main>
  );
}


export default function HeroSection() {
  return (
    <section className="px-8 py-20 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">
        Manage Your Team Efficiently
      </h1>
      <p className="text-xl text-slate-300 mb-10">
        Track Employees, Tasks & Complaints All in One Place
      </p>
      <div className="flex gap-4 justify-center">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
          Get Started
        </button>
        <button className="px-8 py-3 bg-transparent text-white border-2 border-slate-400 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}
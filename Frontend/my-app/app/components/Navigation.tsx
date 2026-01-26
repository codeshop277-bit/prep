import { Check } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-slate-700/50 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
          <Check className="w-6 h-6 text-white" strokeWidth={3} />
        </div>
        <span className="text-2xl font-bold text-white">StaffTrack</span>
      </div>
      <div className="flex gap-4">
        <button className="px-6 py-2 text-white hover:text-blue-300 transition-colors">
          Login
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
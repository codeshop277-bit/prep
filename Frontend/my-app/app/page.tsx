import Navigation from "./components/Navigation";
import HeroSection from ".//components/HeroSection";
import DashboardCards from ".//components/DashboardCards";
import FeaturesSection from ".//components/FeaturesSection";
import EmployeeInsights from ".//components/EmployeeInsights";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800">
      <Navigation />
      <HeroSection />
      <DashboardCards />
      <FeaturesSection />
      <EmployeeInsights />
    </div>
  );
}
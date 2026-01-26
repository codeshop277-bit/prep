import { Users, ClipboardCheck, MessageSquare } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    { icon: Users, title: "Track Employees" },
    { icon: ClipboardCheck, title: "Monitor Tasks" },
    { icon: MessageSquare, title: "Manage Complaints" },
  ];

  return (
    <section className="px-8 py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-600 rounded-full mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}   
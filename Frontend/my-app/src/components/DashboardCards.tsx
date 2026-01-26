export default function DashboardCards() {
  const employees = [
    { name: "John Doe", role: "Project Manager", salary: "$80,000" },
    { name: "Sarah Lee", role: "Designer", salary: "$65,000" },
    { name: "Michael Smith", role: "Developer", salary: "$75,000" },
  ];

  const taskStats = [
    { label: "Completed", percentage: 68, color: "bg-blue-500" },
    { label: "In Progress", percentage: 22, color: "bg-blue-500" },
    { label: "Pending", percentage: 10, color: "bg-slate-400" },
  ];

  return (
    <section className="px-8 pb-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Employee Overview */}
        <div className="bg-slate-700/60 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold text-white mb-4">
            Employee Overview
          </h3>
          <div className="space-y-4">
            {employees.map((emp, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-slate-200 rounded-lg p-4"
              >
                <div className="w-12 h-12 rounded-full bg-slate-400"></div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">{emp.name}</div>
                  <div className="text-sm text-slate-600">{emp.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-600">{emp.role}</div>
                  <div className="font-semibold text-slate-900">
                    {emp.salary}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Status */}
        <div className="bg-slate-700/60 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold text-white mb-6">Task Status</h3>
          <div className="space-y-6">
            {taskStats.map((task, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-white mb-2">
                  <span>{task.label}</span>
                  <span className="font-semibold">{task.percentage}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${task.color}`}
                    style={{ width: `${task.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="h-16 bg-slate-600/50 rounded"></div>
            <div className="h-16 bg-slate-600/50 rounded"></div>
          </div>
        </div>

        {/* Complaints & Issues */}
        <div className="bg-slate-700/60 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold text-white mb-4">
            Complaints & Issues
          </h3>
          <div className="space-y-4">
            <div className="text-white">
              <span className="font-semibold">Pending Complaints:</span> 5
            </div>
            <div className="text-white mb-6">
              <span className="font-semibold">Resolved Complaints:</span> 18
            </div>
            <button className="w-full px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-500 transition-colors">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
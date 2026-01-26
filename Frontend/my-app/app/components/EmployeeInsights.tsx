export default function EmployeeInsights() {
  const employees = [
    {
      name: "Angela Brown",
      role: "Marketing Lead",
      task: "Social Media Campaign",
      status: "In Progress",
      complaints: "No Issues",
    },
  ];

  return (
    <section className="px-8 pb-20 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Employee Insights</h2>
      <div className="bg-slate-700/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl">
        <table className="w-full">
          <thead className="bg-slate-800/50">
            <tr className="text-left text-slate-300">
              <th className="px-6 py-4 font-semibold">Employee</th>
              <th className="px-6 py-4 font-semibold">Task Assigned</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Complaints</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr key={idx} className="border-t border-slate-600">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-400"></div>
                    <div>
                      <div className="font-semibold text-white">{emp.name}</div>
                      <div className="text-sm text-slate-400">{emp.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-300">{emp.task}</td>
                <td className="px-6 py-4">
                  <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm">
                    {emp.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-300">{emp.complaints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// features/employees/components/EmployeeList.tsx
"use client"
import { useEmployees } from '../hooks/useEmployee';

export function EmployeeList() {
  const { employees, isLoading, error } = useEmployees();

  if (isLoading) {
    return <div className="text-center py-8">Loading employees...</div>;
  }

//   if (error) {
//     return <div className="text-red-600 py-8">Error: {error}</div>;
//   }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Position
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Department
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900 border-b">
                {employee.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border-b">
                {employee.email}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border-b">
                {employee.position}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border-b">
                {employee.department}
              </td>
              <td className="px-6 py-4 text-sm border-b">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    employee.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {employee.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// features/employees/api/employeesApi.ts

import type { Employee, EmployeesResponse } from '../types/employee.types';

export async function getEmployees(): Promise<Employee[]> {
  const response = await fetch(`${'http://localhost:3001/employee/list'}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Add auth token if needed
      // 'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }

  const data: EmployeesResponse = await response.json();
  return data.employee;
}
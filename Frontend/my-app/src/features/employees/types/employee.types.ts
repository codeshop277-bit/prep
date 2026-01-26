// features/employees/types/employee.types.ts

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: string;
  department: string;
  joinDate: string;
  status: 'active' | 'inactive';
}

export interface EmployeesResponse {
  data: Employee[];
  total: number;
}
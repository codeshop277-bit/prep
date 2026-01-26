// features/employees/types/employee.types.ts

export interface Employee {
  employee_id: Number;
  first_name: string;
  last_name: string;
  occupation: string;
  salary: string;
  dept_id: string;
}

export interface EmployeesResponse {
  employee: Employee[];
}
// features/employees/hooks/useEmployees.ts
// Manages data fetching state and logic
"use client";
import { useQuery } from '@tanstack/react-query';
import { getEmployees } from '../api/employeeApi';

export function useEmployees() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    employees: data ?? [],
    isLoading,
    error,
    refetch,
  };
}
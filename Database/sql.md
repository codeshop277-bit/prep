
CREATE PROCEDURE large_salaries() LANGUAGE SQL AS $$
SELECT * FROM employee_salary WHERE salary >=50000;
$$;

CREATE OR REPLACE FUNCTION large_salary()
RETURNS TABLE (
    -- specify your column names and types here
    -- for example:
    employee_id INT,
    first_name VARCHAR,
    salary NUMERIC
)
LANGUAGE SQL
AS $$
    SELECT employee_id, first_name, salary 
    FROM employee_salary 
    WHERE salary >= 50000;
$$;

SELECT * FROM large_salary()

$$- Delimeter - start and end of query

CREATE OR REPLACE FUNCTION large_salaries()
RETURNS SETOF employee_salary
LANGUAGE SQL
AS $$
    SELECT * FROM employee_salary WHERE salary >= 50000;
$$;

CREATE OR REPLACE FUNCTION emp_salary(emp_id int)
RETURNS SETOF employee_salary
LANGUAGE SQL
AS $$
    SELECT * FROM employee_salary WHERE employee_id = emp_id;
$$;
SELECT * FROM emp_salary(1);
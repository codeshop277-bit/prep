# Select
SELECT * FROM employee_demographics
SELECT first_name, age FROM employee_demographics

# Calculation 
SELECT first_name, age, age+10 FROM employee_demographics
# PEMDAS - Order of arithmetic operation in sql
Paranthesism multiplacation, division, addidtion, subtraction
SELECT first_name, age, (age+10) * 10 FROM employee_demographics

# DISTINCT
SELECT DISTINCT gender from employee_demographics

# WHERE - acts as filter
SELECT * FROM employee_salary WHERE  employee_id = 2
SELECT * FROM employee_salary WHERE  salary < 50000
SELECT * FROM employee_demographics WHERE  birth_date > '1980-01-01' AND birth_date < '1985-01-01'
SELECT * FROM employee_demographics WHERE  birth_date > '1980-01-01' AND birth_date < '1985-01-01' AND age = 40
SELECT * FROM employee_demographics WHERE  birth_date > '1980-01-01' OR  age >= 40 AND gender != 'male'

# Like - Partial Match
% - anything(after query)
_ - ('a__')specifes no of char 
('a__%')-- 2 char after that anything 
SELECT * FROM employee_salary WHERE first_name LIKE 'R%'
SELECT * FROM employee_salary WHERE first_name LIKE 'R__'

# Group BY
Nested rows
SELECT gender from employee_demographics GROUP BY gender
SELECT gender, AVG(age) from employee_demographics GROUP BY gender

# Aggregate functions
Should be used in GROUP BY
SELECT gender, AVG(age), MAX(age), MIN(age), COUNT(age) from employee_demographics GROUP BY gender

# Order BY  - sorts asc/desc
SELECT * FROM employee_demographics ORDER BY first_name ASC;
SELECT * FROM employee_demographics ORDER BY gender, age ASC;

# Having
When aggregate functions are executed in group by WHERE triggers before group by and throws error
Here, HAVING can be used since it executes after group by
SELECT gender, AVG(age) from employee_demographics GROUP BY gender HAVING avg(age) > 40;

SELECT occupation, AVG(salary) FROM employee_salary  WHERE occupation LIKE '%manager%' GROUP BY occupation HAVING AVG(salary) > 75000;

# LIMIT - returns no of rows
SELECT * FROM employee_demographics ORDER BY age DESC LIMIT 3
SELECT * FROM employee_demographics ORDER BY age DESC OFFSET 2 LIMIT 2;
# Offset - starts after specified position

# Alliasing
SELECT gender, AVG(age) AS avg_age from employee_demographics GROUP BY gender HAVING avg_age > 40;

# JOINS - 
# INNER JOIN - returns common rows
SELECT * from employee_demographics  INNER JOIN employee_salary
	ON employee_demographics.employee_id = employee_salary.employee_id;
    SELECT * from employee_demographics AS dem  INNER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id;

# LEFT OUTER JOIN - 
Pulls everything from left table and if any data doesn;t matich in right table it returns null row in right
      SELECT * from employee_demographics AS dem  LEFT OUTER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id;
# RIGHT OUTER JOIN -
Pulls everything from right  table and if any data doesn;t matich in left table it returns null row in left
  SELECT * from employee_demographics AS dem  RIGHT OUTER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id;
# SELF JOIN -
Used for mapping inside same table 
SELECT * FROM employee_salary emp1 JOIN employee_salary emp2 ON 
emp1.employee_id = emp2.employee_id;
SELECT * FROM employee_salary emp1 JOIN employee_salary emp2 ON 
emp1.employee_id + 1 = emp2.employee_id;

SELECT emp1.employee_id AS emp_santa,
emp1.first_name AS first_name_santa,
emp1.last_name AS last_name_santa,
emp2.employee_id AS emp_santa,
emp2.first_name AS first_name_santa,
emp2.last_name AS last_name_santa
FROM employee_salary emp1 JOIN employee_salary emp2 ON 
emp1.employee_id +1 = emp2.employee_id;

# JOINING MULTIPLE TABLES
    SELECT * from employee_demographics AS dem  INNER JOIN employee_salary AS sal
	ON dem.employee_id = sal.employee_id INNER JOIN parks_departments AS dep ON sal.dept_id = dep.department_id;

# UNION - Clubs rows
SELECT first_name, gender FROM employee_demographics 
UNION 
SELECT last_name, occupation FROM employee_salary;

SELECT first_name, gender FROM employee_demographics 
UNION ALL
SELECT last_name, occupation FROM employee_salary;
ALL- includes duplicates    

SELECT first_name, last_name, 'OLD MAN' AS LABEL FROM employee_demographics
WHERE age >= 50 AND gender = 'Male'
UNION
SELECT first_name, last_name, 'OLD LADY' AS LABEL FROM employee_demographics
WHERE age > 40 AND gender = 'Female' UNION
SELECT first_name, last_name, 'HIGHLY PAID' AS LABEL FROM employee_salary
WHERE salary > 70000 ORDER BY first_name, last_name;

# STRING Functions
LENGTH - SELECT first_name, LENGTH(first_name) AS LEN from employee_demographics
UPPER - SELECT first_name, UPPER(first_name) AS Up from employee_demographics
LOWER - SELECT first_name, LOWER(first_name) AS Low from employee_demographics
TRIM - Removes leading and trailing whitespaces
LTRIM - Removes only leading whitespaces
RTRIM - Removes only trailing whitespaces
LEFT - Restricts to specified char limit from left
SELECT first_name, LEFT(first_name, 2) AS Trim from employee_demographics
RIGHT - SImilar to left but restricts from right
SUB STRING - similar to js, starts trimming from mentioned index and count 
SELECT first_name, SUBSTRING(first_name, 3,2) AS Trim from employee_demographics
3- starting index; 2 - no of chars
REPLACE - SELECT first_name, REPLACE(first_name, 'A', 'z') AS Repla from employee_demographics

LOCATE only in sql
SELECT first_name, LOCATE('a', first_name) AS Repla from employee_demographics
In postgress
SELECT first_name, POSITION('a' IN first_name) AS Repla from employee_demographics

CONCAT - SELECT first_name, last_name, CONCAT(first_name, ' ', last_name) AS Con from employee_demographics

# CASE Statements
SELECT first_name, last_name, 
CASE	
	WHEN age <= 30  THEN 'Young'
	END
from employee_demographics

SELECT first_name, last_name, age,
CASE	
	WHEN age <= 30  THEN 'Young'
	WHEN age >=50 THEN 'OLD'
	WHEN age  BETWEEN 31 AND 49 THEN 'Spot ON'
	END AS age_bracket
from employee_demographics

SELECT first_name, last_name,  dept_id, salary,
CASE	
	WHEN salary<=50000  THEN (salary * 1.05 )
	WHEN salary>50000  THEN (salary * 1.07 )
	END AS revised_salary,
CASE 
	WHEN dept_id = 6 THEN (salary * 1.10 )
END AS bonus
from employee_salary
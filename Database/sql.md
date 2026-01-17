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
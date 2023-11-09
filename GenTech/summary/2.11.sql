
-- Задача 1
-- Выполните запрос, который выведет все название департаментов, а также города,
-- в которых базируются департмаменты

select
	t1.department_name,
    t2.city
from departments t1
left join locations t2
on t1.location_id = t2.location_id;

-- Задача 2
-- Выполните запрос, котоырй выведет имена и фамилии сотрудников, название департментов,
-- а также почтовый код департмента в одной выоборке
select
	t1.first_name,
    t1.last_name,
    t2.department_name,
    t3.postal_code
from employees t1
inner join departments t2
on t1.department_id = t2.department_id
inner join locations t3
on t2.location_id = t3.location_id;

-- Задача 3
-- Выведите название департмаентов, в которых нет сотрудников
-- Примечание: отсутствие записи под manager_id - это не гарантия отсутствия сотрудников в департаменте
select
	t1.department_name
from departments t1
left join employees t2
on t1.department_id = t2.department_id
where t2.department_id is null;

select
	department_name
from departments
where department_id not in (select department_id from employees where department_id is not null);

-- Задача 4
-- Посчитайте количество департаментов, в которых есть сотрудники
select
	count(distinct department_id)
from employees;

select 
	count(distinct t1.department_id) as count_department
from departments t1
left join employees t2
on t1.department_id = t2.department_id
where t2.department_id is not null;

select
	count(department_name) as count_department
from departments
where department_id in (
select 
	department_id 
from employees 
where department_id is not null);

-- Задача 5
-- Посчитайте среднее количество сотрудников работающие во всех дпепартаментов (ранжируя данные по департаменту)
-- Примечание: сотрудников без департамента не считаем

SELECT
 round(avg(empl_cnt))
FROM (
 SELECT
  count(*) as empl_cnt,
  department_id
 FROM employees
 WHERE department_id IS NOT NULL 
 GROUP BY department_id
) t1
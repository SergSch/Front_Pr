-- ПРАКТИКА 

-- 1. Выведите пассажиров, которые хоть раз летали на самолете, зарегистрированном в России.
-- Вывести : id (клиента), name (клиента)
select
	t1.id,
    t1.name
from clients t1
inner join tickets t2
on t1.id = t2.client_id
inner join trips t3
on t2.trip_id = t3.id
inner join airliners t4
on t3.airliner_id = t4.id
where country = 'russia';

-- 1. Выведите пары покупателей и обслуживших их продавцов из одного города.
-- Вывести: sname, cname, city
select
	t1.cname,
    t3.sname,
    t3.city
from customers t1
inner join orders t2
on t1.cust_id = t2.cust_id
inner join sellers t3
on t2.sell_id = t3.sell_id
where t1.city = t3.city;

-- 2. Выведите города, хотя бы один покупатель из которых сделал покупку на более чем 80% от максимальной стоимости.
-- Вывести : city.
select
	t1.city
from customers t1
inner join orders t2
on t1.cust_id = t2.cust_id
where t2.amt > (select max(amt) * 0.8 from orders);


-- 1. Вывести максимальный возраст среди покупателей по каждой из стран

select
 country,
 max(age)
from customers
group by country;

  -- 2. Вывести количество покупателей из каждой страны
SELECT 
	country,
	count(*) as customers_cnt
FROM Customers
group by country;

-- 3. Вывести имя/фамилию покупателя (-ей), являющегося (-щимися) самым молодым по своей стране
SELECT 
	first_name,
    last_name
FROM Customers t1
inner join (
  select
  	country,
  	min(age) as min_age
  from customers
  group by country
 ) t2
 on t1.country = t2.country
where t1.age = t2.min_age;

-- 1. Найти кол-во сотрудников в каждом департаменте.
-- Вывести два поля - айди департамента и кол-во сотрудников в нем
select
	department_id,
    count(*) as cnt_employees
from employees
group by department_id;


-- 2. Найти кол-во сотрудников в каждом департаменте.
-- Вывести два поля - название департамента и кол-во сотрудников в нем
select
	t2.department_name,
    count(*) as cnt_employees
from employees t1
inner join departments t2
on t1.department_id = t2.department_id
group by t2.department_name;

select
	count(*),
    department_id
from employees
group by department_id;


-- 3. Найти сотрудников (имя, фамилия, зп), у которых наибольшая зп в их департаменте

-- найти макс зп в каждом департаменте

select
 department_id,
    max(salary) as max_salary
from employees
group by department_id;

-- приджоинить результат к таблице с сотрудниками
-- найти сотрудников, чья зп равна макс из выборки

select
 t1.first_name,
    t1.last_name,
    t1.salary
from employees t1
inner join (
 select
  department_id,
  max(salary) as max_salary
 from employees
 group by department_id
) t2
on t1.department_id = t2.department_id
where t1.salary = t2.max_salary;

-- ДЗ
-- *1. Найти название департамента, в котором работает больше всего сотрудников

select
	department_id
from (
select
	count(*) as empl_cnt,
    department_id
from employees
group by department_id
) t1
where empl_cnt = (
	select
		max(empl_cnt)
	from (
    select
		count(*) as empl_cnt,
        department_id
        from employees
        group by department_id
        ) t1
);

-- --------------

with tmp as (
select
	count(*) as empl_cnt,
    department_id
from employees
group by department_id
)
select 
	department_id
from tmp
where empl_cnt = (select max(empl_cnt) from tmp);

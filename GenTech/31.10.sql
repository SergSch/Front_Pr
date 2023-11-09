-- Агрегационные функции (+ группировка)

-- 1. Найти сумму возрастов всех покупателей

select
 sum(age) as sum_age
from customers;


-- 2. Найти средний возраст покупателей

select
 avg(age) as avg_age
from customers;


-- 3. Найти минимальный возраст среди всех покупателей

select
 min(age) as min_age
from customers;

-- 4. Найти максимальный возраст среди всех покупателей

select
 max(age) as max_age
from customers;

-- 5. Найти количество всех покупателей


select
 count(*) as customers_cnt
from customers;


/*
update customers
set age = null
where customer_id = 5;
*/

-- 6. Найти самых младших покупателей (имя, фамилия, возраст)
-- 6. Найти покупателей (имя, фамилия, возраст), чей возраст равен минимальному

select
 first_name,
    last_name,
    age
from customers
where age = (select min(age) from customers);

-- 7. Найти покупателей (имя, фамилия, возраст, страна) из USA и UK, чей возраст выше среднего
SELECT 
	first_name,
    last_name,
    age,
    country
FROM Customers
where age > (select avg(age) from customers)
and country in ('USA', 'UK');

-- 1. Найти сотрудников (имя, фамилия, зп), которые зарабатывают меньше всех
select
	first_name,
    last_name,
    salary
from employees
where salary = (select min(salary) from employees);

-- 2. Найти сотрудников (имя, фамилия, зп), которые зарабатывают меньше среднего по компании и работают в департаментах (90, 100, 60)
select
	first_name,
    last_name,
    salary
from employees
where salary < (select avg(salary) from employees)
and department_id in (90, 100, 60);

-- 3. Найти сотрудников (имя, фамилия, зп), которые зарабатывают меньше среднего по компании и работают в департаментах ('Executive', 'Finance', 'IT')

select
 t1.first_name,
    t1.last_name,
    t1.salary
from employees t1
inner join departments t2
on t1.department_id = t2.department_id
where salary < (select avg(salary) from employees)
and t2.department_name in ('Executive', 'Finance', 'IT');

select
	first_name,
    last_name,
    salary
from employees
where salary < (select avg(salary) from employees)
and department_id in (
select
	department_id
from departments
where department_name in ('Executive', 'Finance', 'It')
);

-- 4. Вывести сотрудников (имя, фамилия, job_id), работающих на должностях 'Finance Manager', 'Programmer', 'Sales Manager'

select
	t1.first_name,
    t1.last_name,
    t1.job_id
from employees t1
inner join jobs t2
on t1.job_id = t2.job_id
where t2.job_title in ('Finance manager', 'Programmer', 'Sales Manager');

select
	first_name,
    last_name,
    job_id
from employees
where job_id in  (
select 
	job_id
from jobs
where job_title in ('Finance manager', 'Programmer', 'Sales Manager')
);

-- ПРАКТИКА (БД airport)

use airport;

-- 1. Вывести пассажиров, которые хоть раз летали первым классом.
-- Вывести : clients.id, clients.name

select
 id,
    name
from clients
where id in (
 select
  client_id
 from tickets
    where service_class = 'FirstClass'
);

select
	t1.name,
    t1.id
from clients t1
inner join tickets t2
on t1.id = t2.client_id
where t2.service_class = 'firstClass';

-- 2. Вывести количество Надежд ('Nadezhda') на самолетах в пути (departed).
-- Вывести: hope_count
select
	count(*) as 'houp_count'
from clients t1
inner join tickets t2
on t1.id = t2.client_id
inner join trips t3
on t2.trip_id = t3.id
where t3.status = 'departed'
and t1.name like 'Nadezhda%';

-- 3. Найдите билеты на рейсы из аэропорта Саратова (код аэропорта RTW). 
-- В выборке должен присутствовать один атрибут - id.

select
 t1.id
from tickets t1
inner join trips t2
on t1.trip_id = t2.id
where t2.departure = 'RTW';

select
 id
from tickets
where trip_id in (
 select
  id
 from trips
    where departure = 'RTW'
);

-- 4. Найдите самолеты, построенные позже 1990 года и хотя бы раз слетавшие в Домодедово (код аэропорта DME).
-- В выборке должны присутствовать три атрибута: id, model_name, production_year.

select
	t1.id,
    t1.model_name,
    t1.production_year
from airliners t1
inner join trips t2
on t1.id = t2.airliner_id
where t1.production_year > 1990
and t2.arrival = 'dme';

select
	id,
    model_name,
    production_year
from airliners
where production_year > 1990
and id in (
select
	airliner_id
from trips
where arrival = 'dme'
);

-- 5. Найдите задержанные рейсы на самолеты с дальностью полета меньше 10000 километров.
-- В выборке должен присутствовать один атрибут - id.

select
	t1.id
from trips t1
inner join airliners t2
on t1.airliner_id = t2.id
where t2.range_ < 10000
and status = 'delayed';

select
	id
from trips
where status = 'delayed'
and airliner_id in (
select
	id
from airliners
where range_ < 10000
);

-- ДЗ (БД airport)
-- 1. Вывести количество рейсов, сделанных на самолетах белого цвета.
-- Вывести : count
select
	count(t1.trip_code) as count_trips
from trips t1
inner join airliners t2
on t1.airliner_id = t2.id
where t2.color = 'white';

-- 2. Определите клиентов, которые пользуются оператором МТС в Мурманской области (коды оператора 911, 981) и летали первым классом на самолетах, зарегистрированных не в России.
-- В выборке должен присутствовать один атрибут : id.

select
 t1.id
from clients t1
inner join tickets t2
on t1.id = t2.client_id
inner join trips t3
on t2.trip_id = t3.id
inner join airliners t4
on t3.airliner_id = t4.id
where (t1.phone like '+7911%' or t1.phone like '+7981%')
and t2.service_class = 'FirstClass'
and t4.country <> 'Russia';

-- *3. Выведите возрастную категорию пассажиров, купивших билет в бизнес- или первый класс. 
-- Возрастные категории следующие : < 18 - Ребенок; 18-50 - Взрослый; > 50 Пожилой.
-- В выборке должны присутствовать два атрибута: id, age_category

select
	t1.id,
    case
		when t1.age < 18 then 'Child'
        when t1.age between 18 and 50 then 'Adult'
        else 'Old'
	end as age_category
from clients t1
inner join tickets t2
on t1.id = t2.client_id
where t2.service_class in ('business', 'firstClass');

select
 id,
    case
  when age < 18 then 'Ребенок'
        when age between 18 and 50 then 'Взрослый'
        else 'Пожилой'
    end as age_category
from clients
where id in (
 select
  client_id
 from tickets
 where service_class in ('Business', 'FirstClass')
);

-- *4. Вывести максимальную цену на билет среди рейсов на самолеты с максимальной дальностью полета.
-- Вывести : max_price

select
	max(t1.price) as max_price
from tickets t1
inner join trips t2
on t1.trip_id = t2.id
inner join airliners t3
on t2.airliner_id = t3.id
where t3.range_ = (select max(range_) from airliners);
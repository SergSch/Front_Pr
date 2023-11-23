-- 1. Выведите среднюю цену билета для каждого класса обслуживания. 
-- Исключите из рассмотрения билеты, для которых класс обслуживания неизвестен (NULL). 
-- Исключите из выборки билеты рейсов FYHVSSGY и FYMKPDZC. 
-- Отсортируйте выборку по возрастанию средней цены.
-- В выборке должно присутствовать два атрибута — service_class, avg_price.
select
	service_class,
    avg(price) as avg_price
from tickets
where service_class is not null
and trip_id not in ('FYHVSSGY', 'FYMKPDZC')
group by service_class
order by avg_price;

-- 2. Разделите самолеты на ближне-, средне- и дальнемагистральные. 
-- Ближнемагистральными будем считать самолеты, дальность полета которых > 1000 км и <= 2500 км. 
-- Среднемагистральными — с дальностью полета > 2500 км и <= 6000 км. 
-- Дальнемагистральными — с дальностью полета > 6000 км. 
-- Для каждой категории определите средний год выпуска самолетов.
-- Исключите из выборки самолеты, у которых максимальная дальность полета <= 1000 км или данных о дальности полета нет.
-- В столбце с категорией самолета укажите значения short-haul, medium-haul, long-haul для ближне-, средне- и дальнемагистральных самолетов соответственно. 
-- В выборке должны присутствовать три атрибута — category, avg_year.
select
	case
		when range_ between 1000 and 2500 then 'short-haul'
        when range_ between 2500 and 6000 then 'medium-haul'
        when range_ > 6000 then 'long-haul'
	end as category,
    avg(production_year) as avg_year
from airliners
where range_ > 1000
and range_ is not null
group by category;

-- 3. Для каждого пассажира найдите билеты, стоимость которых составляет более 60% от максимальной стоимости билета, купленного данным пассажиром. 
-- Отсортируйте выборку по идентификатору клиента.
-- В выборке должно присутствовать два атрибута — client_id, id.
select
	client_id,
    id
from tickets
where price > (select max(price * 0.6) from tickets)
order by client_id;

-- 4. Выведите разность средней стоимости билетов на рейс с идентификатором 8RF8OIOVFR и средней стоимости всех билетов.
-- В выборке должен присутствовать один атрибут — diff.

select
 avg(price) - (select avg(price) from tickets) as diff
from tickets
where trip_id = '8RF8OIOVFR';

select
	(select
 avg(price)
from tickets
where trip_id = '8RF8OIOVFR')
- (select 
		avg(price) 
	from tickets)
as diff;

-- 5. Найдите пассажира, имя которого Denis, а фамилия начинается на S. 
-- Кроме того известно, что номер его телефона имеет вид +7XXX0700202. 
-- Три цифры начиная со второй неизвестны и заменены на X. В базе имя клиента хранится в формате 'Имя Фамилия'.
-- В выборке должны присутствовать два атрибута — id и name.
select
	id,
    name
from clients
where name like 'Denis S%'
and phone like '+7___0700202';

-- 6. Руководство авиакомпании снизило цены на билеты рейсов OZAO28DLFP, 5QMWLJ4SOC и 8RF8OIOVFR. 
-- Скидка на билет экономкласса (Economy) составила 15%, на билет первого класса (FirstClass) — 10%, а на билет комфорт-класса (PremiumEconomy) — 20%.
-- Найдите затраты авиакомпании на акцию, то есть разность стоимости всех билетов и стоимости всех билетов с учетом скидки.
-- В выборке должен присутствовать один атрибут — expenses.

select
	sum(
    case 
		when service_class = 'Economy' then price * 0.15
        when service_class = 'FirstClass' then price * 0.1
        when service_class = 'PremiumEconomy' then price * 0.2
	end
    ) as expenses
from tickets
where trip_id in('OZAO28DLFP', '5QMWLJ4SOC', '8RF8OIOVFR');

-- ----------------Having---------------------

-- 1. Найти средний возраст в каждой из стран
select
 country,
    avg(age) as avg_age
from customers
group by country;

-- 2. Вывести средний возраст только тех стран, средний возраст которых больше или равен 25
select
 country,
    avg(age) as avg_age
from customers
group by country
having avg(age) >= 25;

-- 1. Найти департаменты, в которых работает больше 10 сотрудников.
-- Вывести: айди департамента и кол-во сотрудников в нем
select
	department_id,
    count(*) as cnt_employees
from employees
group by department_id
having cnt_employees > 10;


-- 2. Найти департаменты, в которых работает больше 10 сотрудников.
-- Вывести: название департамента и кол-во сотрудников в нем
select
	t2.department_name,
    count(*) as cnt_employees
from employees t1
inner join departments t2
on t1.department_id = t2.department_id
group by department_name
having cnt_employees > 10;

-- 3. Вывести айди департаментов, в которых работает количество сотрудников выше среднего
select
	department_id,
    count(*)
from employees
group by department_id
having count(*) > (
	select
	avg(cnt_employees) as avg_cnt
from (
	select
		department_id,
		count(*) as cnt_employees
	from employees
	where department_id is not null
	group by department_id
) t1
);

-- 4. Вывести названия департаментов, в которых работает количество сотрудников выше среднего

select
 t2.department_name
from employees t1
inner join departments t2
on t1.department_id = t2.department_id
group by t2.department_name
having count(*) > (
 select
  avg(employees_cnt) as avg_cnt
 from (
  select
   department_id,
   count(*) as employees_cnt
  from employees
  where department_id is not null
  group by department_id
 ) t1
);

-- ДЗ (БД hr)

-- 1. Разделить всех сотрудников по зарплате. 
-- Если сотрудник получает меньше 10 тыс, то обозначить его как 'low'. 
-- Если между 10 и 20 тыс (вкл) - 'middle'
-- Если больше 20 тыс - 'high'
-- Вывести имя/фамилию, зп и поле salary_class

select
	first_name,
    last_name,
    salary,
	case
		when salary < 10000 then 'low'
        when salary between 10000 and 20000 then 'middle'
        when salary > 20000 then 'high'
	end as salary_class
from employees
order by salary;


-- 2. Разделить всех сотрудников по фамилии.
-- Если фамилия содержит букву A, то сотрудник войдет в группу 'A' 
-- Если фамилия не содержит букву A, то сотрудник войдет в группу 'B' 
-- Вывести имя/фамилию и поле lastname_class
select
	first_name,
    last_name,
	case
		when last_name like '%a%' then 'A'
        when last_name not like '%a%' then 'B'
	end as lastname_class
from employees;


-- *3. Найти сумму зп тех сотрудников, кто зарабатывает больше 10000
-- Вывести одно значение - sum
select
	sum(salary) as sum
from employees
where salary > 10000;

select
	sum(
		case
			when salary <= 10000 then 0
			else salary
		end
	) as sum
from employees;


-- *4. Найти департаменты в которых есть работники, зарабатывающие больше 10 000. 
-- В результате выборки формируются два поля (department_id и поле со значениями 1 или 0). 
-- 1 - если в департаменте есть хотя бы один сотрудник с зп больше 10000, 0 - если таких сотрудников нет

select
	department_id,
    max(
		case
			when salary > 10000 then 1
            else 0
        end
    ) as salary_index
from employees
group by department_id;

-- * 5. Найти департаменты в которых ВСЕ работники зарабатывают больше 10 000. 
-- В результате выборки формируются два поля (department_id и поле со значениями 1 или 0)
-- 1 - если в департаменте ВСЕ сотрудники имеют зп больше 10000, 0 - если не все

select
	department_id,
    min(
		case
			when salary > 10000 then 1
            else 0
        end
    ) as salary_i
from employees
group by department_id;

SELECT 
  department_id,
  CASE
    WHEN COUNT(*) = SUM(CASE WHEN salary > 10000 THEN 1 ELSE 0 END) THEN 1
    ELSE 0
  END AS salary_index
FROM employees
GROUP BY department_id;
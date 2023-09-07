-- 1. Найти сотрудников (имя, фамилия, номер телефона), чей номер содержит 45
select
	first_name,
  last_name,
  phone_numeric
from employees
where phone_numeric like '%45%';


-- 2. Найти сотрудников (имя, фамилия, зарплата), чья фамилия начинается на букву D и содержит букву A и зарабатывающие больше 5000
select
	first_name, 
  last_name,
  salary
from employees
where last_name like 'd%a%'
and salary > 5000;


-- 3. Найти сотрудников (имя, фамилия, job_id, зарплата) с job_id IT_PROG, FI_ACCOUNT, ST_CLERK, зарабатывающих между 7000 и 12000 и чья фамилия содержит буквы A и O
select
	first_name, 
  last_name,
  job_id,
  salary
from employees
where job_id in ('IT_PROG', 'FI_ACCOUNT', 'ST_CLERK')
and salary between 7000 and 12000
and (last_name like '%a%' and last_name like '%o%');

-- and (last_name like '%a%o%' or last_name like '%o%a%')


-- 4. Вывести всех сотрудников (имя, фамилия, зп) отсортированными по зарплате в порядке возрастания
select
	first_name,
  last_name,
  salary
from employees
order by salary asc;


-- 5. Вывести всех сотрудников (имя, фамилия, зп) отсортированными по зарплате в порядке убывания
select
	first_name,
  last_name,
  salary
from employees
order by salary desc;


-- 6. Вывести всех сотрудников (имя, фамилия, зп) отсортированными по фамилии в алфавитном порядке
select
	first_name,
  last_name,
  salary
from employees
order by last_name;

-- 7. Вывести всех сотрудников (имя, фамилия, зп) отсортированными по возрастанию зарплаты. Если зп одинаковая, то отсортировать по фамилии в алфавитном порядке

select
	first_name,
  last_name,
  salary
from employees
order by salary, last_name;


-- 8. Вывести всех сотрудников (имя, фамилия, зп), зарабатывающих от 7 до 12 тыс, отсортированными по убыванию зарплаты. Если зп одинаковая, то отсортировать по фамилии в алфавитном порядке
select
	first_name,
  last_name,
  salary
from employees
where salary between 7000 and 12000
order by salary desc, last_name;



-- ПРАКТИКА
-- 1. Выведите коды всех рейсов, в рамках которых воздушные судна вылетели из Москвы и в данный момент находятся в воздухе (статус таких рейсов —  departed). Коды аэропортов Москвы: SVO, VKO, DME.
-- В выборке должен присутствовать один атрибут — trip_code.


select
	trip_code
from trips
where departure in ('SVO', 'VKO', 'DME')
and status = 'Departed';


-- 2. Выведите бортовые номера и дальность полета всех ближне- и дальнемагистральных самолетов. Примечание: ближнемагистральными считайте те, дальность полета которых > 1000 км и <= 2500 км. Дальнемагистральными — с дальностью полета >= 6000 км.
-- В выборке должны присутствовать два атрибута — side_number и range.

select
	side_number,
  range
from airliners
where (range > 1000 and range <= 2500)
or range >= 6000;


-- 3. Выведите идентификаторы билетов бизнес-класса дешевле 65 000 и экономкласса дороже 15 000. Исключите из выборки билеты рейсов VR5SF5YIWN, OZAO28DLFP и LL4S1G8PQW, так как для них ценовая политика не меняется.
-- В выборке должен присутствовать один атрибут — id.

select
	id
from tickets
where ((service_class = 'Business' and price < 65000) or (service_class = 'Economy' and price > 15000))
and trip_id not in ('VR5SF5YIWN', 'OZAO28DLFP', 'LL4S1G8PQW');



-- 4. Номера некоторых билетов рейса RL6EC4YWB1 внесены в базу некорректно: два последних символа билетов номер UE01H8UCJQXX введены неправильно. То есть на месте символов XX находятся некорректные значения. Номера некоторых билетов имеют значение NULL. Найдите идентификаторы пассажиров всех некорректно введенных билетов.
-- В выборке должен присутствовать один атрибут — client_id.

select
	client_id
from tickets
where trip_id = 'RL6EC4YWB1'
and id <> 'UE01H8UCJQXX'
and (id like 'UE01H8UCJQ__' or id is null);


-- 5. Отсортируйте данные о билетах в зависимости от цены по возрастанию. Если некоторые билеты имеют одинаковую цену, отсортируйте вхождения по trip_id по убыванию. Если и цена, и trip_id одинаковые, отсортируйте вхождения по номеру билета по возрастанию.
-- В выборке должны присутствовать три атрибута — id, trip_id, price.

select
	id,
  trip_id,
  price
from tickets
order by price, trip_id desc, id;


-- 6. Определите имена и фамилии пассажиров, чьи идентификаторы заканчиваются на RCB или FCV, а номера телефонов не начинаются на +705.
-- В выборке должен присутствовать один атрибут — name.

select 
	name
from clients
where (id like '%RCB' or id like '%FCV')
and phone not like '+705%';


-- ДЗ на 12.09
-- Ссылка на песочницу https://www.programiz.com/sql/online-compiler/
-- Ссылка на скрипт по созданию таблиц https://github.com/NelliEfr/MySQL_databases/blob/main/airport.txt

-- 1. Руководство авиалиний рассматривает подходящий самолет для рейса Москва — Томск. Зная, что расстояние между городами составляет 3610 км, сотрудники рассчитали допустимую дальность полета самолета для данного рейса — 4200 км.
-- Напишите запрос, который определит модели самолета c максимальной дальностью полета равна 4200.
-- В выборке должен присутствовать один атрибут — model_name.
select 
	model_name
from Airliners
where range <= 4200;

-- 2. Найдите данные обо всех билетах с классом обслуживания не Economy и не Business. Таблица tickets может содержать значения NULL. 
-- В выборке должны присутствовать два атрибута — id, trip_id.
select 
	id,
    trip_id
from Tickets
where service_class not in ('Economy', 'Business');

-- 3. Для каждого самолета модели Cessna 172 выведите дальность полета. Имя столбца с результатом должно быть max_distance.
-- В выборке должен присутствовать один атрибут — max_distance.
select 
	range
from Airliners
where model_name like 'Cessna 172';

-- 4. Менеджеры авиакомпании потребовали выяснить количество различных моделей самолетов. Выведите все доступные модели, исключая дубликаты.
-- В выборке должен присутствовать один атрибут — model_name.
select distinct
	model_name
from Airliners;

-- 5. Напишите запрос, который выведет id клиентов, чье значение атрибута name начинается на Daria.
-- В выборке должен присутствовать один атрибут — id.
select 
	id
from Clients
where name like 'Daria%';
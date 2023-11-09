-- Task 1 
-- Посчитайте количество билетов для всех указанных в таблице классов перелета

select
	count(*),
    service_class
from tickets
group by service_class;

-- Выведти класс перелта, у которого наибольшее количество билетов в таблице tickets

with tmp as (
	select
		count(*) as tickets_cnt,
        service_class
	from tickets
    group by service_class
)
select 
    service_class
from tmp
where tickets_cnt = (select max(tickets_cnt) from tmp);


-- Выведите моедли самолетов, у которых общая допустимая дистанция будет больше 
-- чем среднее значение дистацнии всех саомлетов в таблице airlines

select distinct
    model_name
from airliners
where range_ > (select avg(range_) from airliners);

-- Посчиайте количество самолетов, приходящие на каждый год производства (начиная с 2003 года)
select
	count(*),
    production_year
from airliners
where production_year > 2003
group by production_year;
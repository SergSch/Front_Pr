-- 1. Выведите список имен покупателей, которые совершили покупку. Предусмотрите в выборке номер заказа.
-- В выборке должно присутствовать два атрибута — cname, order_id.

select
	t1.cname,
    t2.order_id
from customers t1
inner join orders t2
on t1.cust_id = t2.cust_id;


-- 2. Выведите список имен покупателей, продавцов и итоговую сумму заказа.
-- В выборке должны присутствовать три атрибута — cname, sname, amt.

select
	t1.cname,
    t2.amt,
    t3.sname
from customers t1
inner join orders t2
on t1.cust_id = t2.cust_id
inner join sellers t3
on t2.sell_id = t3.sell_id;

-- 3. Выведите имена всех продавцов. 
-- Предусмотрите также в выборке имена их боссов, сформировав атрибут boss_name.
-- Если у сотрудника нет босса, то в boss_name должно быть null.
-- В выборке должно присутствовать два атрибута — sname, boss_name.

select
	t1.sname,
    t2.sname as boss_name
from sellers t1
left join sellers t2
on t1.boss_id = t2.sell_id;

-- 1. Вывести имя/фамилию сотрудника и имя/фамилию его менеджера 
-- Если у сотрудника нет менеджера, то должно быть null в полях для менеджера.
-- Вывести 4 поля - employee_firstname, employee_lastname, manager_firstname, manager_lastname
select
	t1.first_name as employee_firstname,
    t1.last_name as employee_lastname,
    t2.first_name as manager_firstname,
    t2.last_name as manager_lastname
from employees t1
left join employees t2
on t1.manager_id = t2.employee_id;

-- 2. Вывести сотрудников (имя и фамилию, зп), которые зарабатывают больше своего менеджера 
-- Вывести три поля - имя и фамилию, зп сотрудника
select
	t1.first_name as employee_firstname,
    t1.last_name as employee_lastname,
    t1.salary
from employees t1
left join employees t2
on t1.manager_id = t2.employee_id
where t1.salary > t2.salary;

-- 5. Выведите имена покупателей, которые сделали более одной покупки.
-- В выборке должно присутствовать два атрибута — cname, cnt (количество покупок)
select
	t1.cname,
    count(t2.cust_id) as cnt
from customers t1
inner join orders t2
on t1.cust_id = t2.cust_id
group by t1.cname
having cnt > 1;

select
 t1.cname,
    t2.cnt
from customers t1
inner join (
 select
  cust_id,
        count(*) as cnt
 from orders
    group by cust_id
) t2
on t1.cust_id = t2.cust_id
where t2.cnt > 1;

-- 4. Для каждого сотрудника выведите разницу между коммисионными его босса и его собственными. 
-- Если у сотрудника босса нет, выведите NULL.
-- Вывести : sname, difference.
select
	t1.sname,
    t2.comm - t1.comm as difference
from sellers t1
left join sellers t2
on t1.boss_id = t2.sell_id;

-- 5. Вывести имена продавцов, у которых коммиссионные выше, чем у их боссов. 
-- Вывести: sname
select
	t1.sname
from sellers t1
left join sellers t2
on t1.boss_id = t2.sell_id
where t1.comm > t2.comm;

-- 6. Вывести имена покупателей, которые совершили только одну покупку.
-- Вывести: cname, orders_cnt
select
	t1.cname,
    count(*) as orders_cnt
from customers t1
inner join orders t2
on t1.cust_id = t2.cust_id
group by t1.cname
having orders_cnt = 1;

select
	t1.cname,
   t2.orders_cnt
from customers t1
inner join (
	select
		cust_id,
        count(*) as orders_cnt
	from orders
    group by cust_id
    having orders_cnt = 1
) t2
on t1.cust_id = t2.cust_id;

-- ---==================================================

-- РАБОТА С ДАТОЙ И ВРЕМЕНЕМ

-- Типы данных
-- date - дата в формате 'YYYY-MM-DD'
-- time - время в формате 'hh:mm:ss'
-- datetime - дата и время в формате 'YYYY-MM-DD hh:mm:ss'
-- year - год в формате YYYY


-- Функции для работы с датой и временем 

-- now() - возвращает текущие дату и время

select now() as today;

-- curdate() - возвращает текущую дату

select curdate() as today;

-- curtime() - возвращает текущее время

select curtime() as now;

-- weekday() - возвращает порядковый номер дня недели 
-- 0 = Monday, 1 = Tuesday, 2 = Wednesday, 3 = Thursday, 4 = Friday, 5 = Saturday, 6 = Sunday

select weekday('2023-12-05'); -- 1

-- dayofweek() - возвращает порядковый номер дня недели 
-- 1 = Sunday, 2 = Monday, 3 = Tuesday, 4 = Wednesday, 5 = Thursday, 6 = Friday, 7 = Saturday

select dayofweek('2023-12-05'); -- 3

select dayname(now())

-- 1. Найти покупки, которые были сделаны в марте
-- Вывести: order_id, odate

select
 order_id,
    odate
from orders
where month(odate) = 3;

select
 order_id,
    odate
from orders
where monthname(odate) = 'March';

-- 2. Найти покупки, которые были совершены в промежуток между 30/04/2022 и 14/06/2022 (вкл)
-- Вывести: order_id, odate

select
 order_id,
    odate
from orders
where date(odate) between '2022-04-30' and '2022-06-14';

-- 3. Найти кол-во покупок в июне
-- Вывести orders_cnt
select
	count(*) as orders_cnt
from orders
where month(odate) = 6;

select
	count(*) as orders_cnt
from orders
where monthname(odate) = 'june';

-- 5. Вывести продавцов, оформивших заказ на наибольшую сумму в период с марта 2022 по май 2022
-- Вывести: sell_id, odate, amt
select
	sell_id,
    odate,
    amt
from orders 
where amt = (select 
				max(amt) 
			from orders
            where date(odate) between '2022-03-01' and '2022-05-31'
);

-- 6. Вывести продавцов, оформивших заказ на наибольшую сумму в период с марта 2022 по май 2022
-- Вывести: sname, odate, amt
select
	t1.sname,
    t2.odate,
    t2.amt
from sellers t1
inner join orders t2
on t1.sell_id = t2.sell_id
where t2.amt = (select 
				max(amt) 
			from orders
            where date(odate) between '2022-03-01' and '2022-05-31'
);


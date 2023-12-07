-- 1. Выведите имена покупателей, которые сделали заказ. 
-- Предусмотрите в выборке также имена продавцов.
-- Примечание: покупатели и продавцы должны быть из разных городов.
-- В выборке должно присутствовать два атрибута — cname, sname.
select distinct
	t1.cname,
    t2.sname
from customers t1
inner join orders t3
on t1.cust_id = t3.cust_id
inner join sellers t2
on t2.sell_id = t3.sell_id
where t1.city <> t2.city;

-- 2. Выведите имена продавцов, которые обслуживали покупателей с максимальным рейтингом.
-- Вывести: sname.
select distinct
    t3.sname
from customers t1
inner join orders t2
on t1.cust_id = t2.cust_id
inner join sellers t3
on t2.sell_id = t3.sell_id
where t1.rating = (
 select
  max(t1.rating)
 from customers t1
 inner join orders t2
 on t1.cust_id = t2.cust_id
);

-- 3. Выведите города, хотя бы один покупатель из которых сделал покупку на более чем 80% от максимальной стоимости.
-- Вывести : city.
select
	t1.city
from customers t1
inner join orders t2
on t1.cust_id = t2.cust_id
where t2.amt > (select max(amt) * 0.8 from orders);

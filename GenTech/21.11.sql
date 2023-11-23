-- 1. Найти сумму возрастов всех, кто старше 25 лет (>25). 
-- Предложить два варианта решения задачи.

select
 sum(age) as sum_age
from customers
where age > 25;

select
 sum(
     case
        when age > 25 then age
        else 0
       end
    ) as sum_age
from customers;

-- 2. Найти сумму потраченных средств на товары, стоимость которых выше 350
-- Предложить вариант решения задачи через case

select
	sum(
		case
			when amount <= 350 then 0
			else amount
		end
	) as sum_amount
from orders;

-- 3. Найти среднее значение потраченных средств на товары, стоимость которых выше 350
-- Предложить вариант решения задачи через case

select
 avg(
     case
        when amount > 350 then amount
       end
    ) as avg_amount
from orders;

-- 1. Выведите имена покупателей, которые сделали более одной покупки.
-- В выборке должно присутствовать два атрибута — cname, cnt (количество покупок)
select
	t1.cname,
    count(*) as cnt
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
    having cnt > 1
    ) t2
on t1.cust_id = t2.cust_id;
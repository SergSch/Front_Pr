-- написать запрос, который выводит кол-во мужчин и женщин поля  gender cnt

select
	gender,
    count(id) as cnt
from customers
group by gender;

-- написать запрос, который выводит название самого дорогого товара
select
	name,
    price
from products
where price = (select max(price) from products);

-- написать запрос, который выводит название самого дорогого и самого дешевого товара

select
	name
from products
where price in (
			(select max(price) from products),
            (select min(price) from products)
);

-- написать запрос, который выводит имя и фамилию покупателя и кол-во заказов у каждого
-- НЕ ГРУППИРОВАТЬ ПО ИМЕНИ И ФАМИЛИИ

SELECT 
	t1.first_name,
    t1.last_name,
    t2.cnt
FROM customers t1
left join (
	SELECT
		customer_id,
        count(customer_id) as cnt
	from orders
    group by customer_id
) t2
on t1.id = t2.customer_id;

-- написать запрос, который выводит название товара и его цену 
-- при каждом варианте программы лояльности
select
	t1.name as product_name,
    t2.program_name,
    round(t1.price - t1.price / 100 * t2.discount, 2) as price
from products t1
cross join loyalty_programs t2;
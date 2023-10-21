-- написать запрос, которвый выводит имя и телефон поставщика, 
-- чей товар закончился
select distinct
    t1.name,
    t1.phone
from suppliers t1
inner join products t2
on t1.id = t2.supplier_id
where t2.amount like 0;

-- написать запрос, который выводит имя и фамилию покупателя и процент скидки
-- если у покупателя скидки нет, то в данном поле должно быть значение 0
select
	t1.first_name,
    t1.last_name,
    case
		when t2.discount is null
			then 0
		else t2.discount
	end as discount
from customers t1
left join loyalty_programs t2
on t1.loyalty_program_id = t2.id;
-- ---------------равно===
select
	t1.first_name,
    t1.last_name,
    coalesce(t2.discount, 0) as discount
from customers t1
left join loyalty_programs t2
on t1.loyalty_program_id = t2.id;

-- вывести названия товаров, которые ни разу не заказывались
select
	t1.name
from products t1
left join order_details t2
on t1.id = t2.product_id
where t2.id is null;

-- вывести названия товаров, которые ни разу не оплачивали
select distinct
	t1.name
from products t1
left join order_details t2
on t1.id = t2.product_id
left join orders t3
on t2.order_id = t3.id
and t3.paid_flg = 'Y'
where t3.id is null;

-- написать запрос, который выводит имя и фамилию покупателя, у которого
-- есть неоплаченные заказы
select distinct
	t1.first_name,
    t1.last_name
from customers t1
inner join orders t2
on t1.id = t2.customer_id
where t2.paid_flg like 'N';
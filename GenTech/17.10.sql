-- вывести названия департаментов, которые находятся в городах, которые начинаются на South
-- к прежней выборке добавить вывод названия страны
-- добавить в выборку название региона
select 
    t1.department_name,
    t2.city,
    t3.country_name,
    t4.region_name
from departments t1
inner join locations t2
on t1.location_id = t2.location_id
inner join countries t3
on t2.country_id = t3.country_id
inner join regions t4
on t3.region_id = t4.region_id
where t2.city like 'South%';

-- написать запрос, который выводит название депаратментов, в которых нет ни одного 
-- сотрудника
select 
    t1.department_name,
    t2.department_id
from departments t1
left join employees t2
on t1.department_id = t2.department_id
where t2.employee_id is null;

-- написать запрос, который выводит job_title которого нет ни у одного сотрудника
select 
    t1.job_title
from jobs t1
left join employees t2
on t1.job_id = t2.job_id
where t2.emloyee_id is null;

-- вывести имя и фамилию покупател и идентификаторы заказов
select 
    t1.first_name,
    t1.last_name,
    t2.id
from customers t1
inner join orders t2
on t1.id = t2.customer_id;

-- вывести имя и фамилию покупателей, которые не сделали ни одного заказа

select 
    t1.first_name,
    t1.last_name
from customers t1
left join orders t2
on t1.id = t2.customer_id
where t2.id is null;

-- написать запрос, который выводит название продуктов, которые заказывали хотябы один раз
select distinct
    t1.name
from products t1
inner join order_details t2
on t1.id = t2.id;

-- написать запрос, который выводит имя и фамилию покупателя, который хотябы раз заказывал "T-shirt"
select 
    t1.first_name,
    t1.last_name
from customers t1
inner join orders t2
on t1.id = t2.customer_id
inner join order_details t3
on t2.id = t3.order_id
inner join products t4
on t3.product_id = t4.id
where t4.name = 'T-shirt';
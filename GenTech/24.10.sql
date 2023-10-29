
select
	max(salary) as max_salary,  -- максимальное значение
    min(salary) as min_salary,  -- минимальное значение
    avg(salary) as avg_salary,  -- среднее значение
    sum(salary) as sum_salary,  -- сумма 
    count(salary) as count_salary   -- значение не null
from employees;


-- найти кол-во не NULL job_id
select 
	count(job_id) as count_job
from jobs;

-- найти максимальное значение max_salary и минимальное значение min_salary
select
	max(max_salary) as max_max_salary,
    min(min_salary) as min_max_salary
from jobs;

--вывести сотрудника с макс зарплатой
select
	first_name,
    last_name
from employees
where salary = (select max(salary) from employees);

-- вывести сотрудников, у которых зп меньше средней
select
	first_name,
    last_name
from employees
where salary < (select avg(salary) from employees);

-- вывести департаменты, в которых нет сотрудников (решить через подзапрос)
select
	department_name
from departments
where department_id not in (select 
		department_id 
	from employees
	where department_id is not null
);

-- группировка для расчета средней зарплаты по job_id
select
	job_id,
    avg(salary)
from employees
group by job_id;


-- найти максимальную зп для каждого департамента. 
-- вывести department_id и max_salary
select
	department_id,
    max(salary) as max_salary
from employees
group by department_id;

select
	t1.department_name,
    t2.max_salary
from departments t1
inner join (
	select
	department_id,
    max(salary) as max_salary
	from employees
	group by department_id
) t2
on t1.department_id = t2.department_id;

-- вывести job_title и avg_salary
select
	t1.job_title,
    t2.avg_salary
from jobs t1
inner join (
	select
    job_id,
    avg(salary) as avg_salary
	from employees
	group by job_id
) t2
on t1.job_id = t2.job_id;

-- найти название самого дорогого товара
select
	name
from products
where price = (select max(price) from products);

-- сформировать выборку, которая содержит 
-- customer_id 
-- price - цена товара, который быз заказан данным покупателем 
-- product_count - кол-во товара в заказе
select
	t1.customer_id,
    t2.product_count,
    t3.price
from orders t1
inner join order_details t2
on t1.id = t2.order_id
inner join products t3
on t2.product_id = t3.id;

-- написать запрос, который выведит customer_id и общую сумму заказов

select
	t1.customer_id,
    sum(t2.product_count * t3.price) as total_price
from orders t1
inner join order_details t2
on t1.id = t2.order_id
inner join products t3
on t2.product_id = t3.id
group by t1.customer_id;

-- написать запрос, который выведит first_name и last_name и общую сумму заказов
select
	t1.first_name,
    t1.last_name,
    coalesce(t2.total_price, 0) as total_price
from customers t1
left join (
	select
		t1.customer_id,
        sum(t2.product_count * t3.price) as total_price
        from orders t1
        inner join order_details t2
        on t1.id = t2.order_id
        inner join products t3
        on t2.product_id = t3.id
        group by t1.customer_id
) t2
on t1.id = t2.customer_id;

-- найти кол-во оплаченых заказов и не оплаченых
-- вывести поля 
-- paid_flg 
-- cnt
select
	paid_flg,
    count(id) as cnt
from orders
group by paid_flg;

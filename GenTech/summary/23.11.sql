
select
	concat(substr(first_name, 1, 1), '. ', last_name)
from employees;

-- ------------------------------------------
-- length(column) функция, которая возвращает длину строки
-- replace(column, previoussubstring, newsubstring) - функция, которая заменяет одну подстроку на другую
-- instr(column, substring) - возвращает индекс начала указанной подстроки
-- substr(column, startIndex, countChar) - возвращает указанную подстроку по индексу

-- 1.Сформируйте поле, которое указывает последние 4 цифры номера телефона сотрудника
select
	substr(phone_NUMERIC, -4) 
from employees;

-- 2.Уберите в телефоне символ .
select
	replace(phone_NUMERIC, '.', ' ')
from employees;

-- 3.Определите работников с самым длинным email адресом
select
 length(email),
    first_name
from employees
WHERE length(email) = (select max(length(email)) from employees);


-- 4.Сформируйте поле с именем и фамилией сотрудника
select
	concat(first_name, ' ', last_name)
from employees;

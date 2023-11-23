-- Задача 1. 
-- Выведите название департментов а также новый атрибут manager_info, который будет формировать значение по услвию: 
-- Если менеджер не привзяан к департменту, сформируйте значение "Менеджера нет", в противном случае "Менеджер есть"

select
	department_name,
    case
		when manager_id is null then 'Менеджера нет'
        else 'Менеджер есть'
	end as 'manager_info'
from departments;

-- Задача 2 
-- Выведите название департементов, значение id локации а также новый атрибут location_info
-- который будет формировать значение по условию
-- Если значение айди локации будет меньше или равен 1800, тогда необходимо сформировать значение "Близко"
-- Если значение будет больше 1800 но меньше 2700, тогда "Не далеко". 
-- В противном случае "Далеко"
select
	department_name,
    department_id,
    location_id,
    case
		when location_id <= 1800 then 'Близко'
        when location_id > 1800 and location_id < 2700 then 'Не далеко'
        else 'Далеко'
	end as 'location_info'
from departments;
	
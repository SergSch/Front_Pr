-- 1 Задание
-- Сформируйте новое поле, которое будет передвать значение гендера в бинарном виде
-- Если пол мужской - указать значение 0, если женский - значение 1

select
	gender,
	case
		when substr(gender, 1, 1) = 'm' then 0
        else 1
	end as new_gender
from datasource;
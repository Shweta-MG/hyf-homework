
1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

use Week1;
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ('Wash clothes now', 'Title says it all That you want to wash the clothes', '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2, 1);

2. Change the title of a task
3. Change a task due date
4. Change a task status
5. Mark a task as complete

use Week1;
Select * from task;

use Week1;
Update task SET 
title = 'This is updated as part of completing home again ',
due_date = '2017-10-20 10:54:16',
status_id = 3
WHERE id=10;

6. Get all the tasks assigned to users whose email ends in @spotify.com
use Week1;
Select email from user WHERE email LIKE '%@spotify.com';

7. Get all the tasks for 'Donald Duck' with status 'Not started'
use Week1;
Select name, description, created, updated, due_date from task right JOIN user on user.id = task.user_id WHERE name = 'Donald Duck';



8. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)


9. Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)


10. Delete a task
USE Week1;
DELETE FROM task WHERE id = 1;

use Week1;
Select * from task;
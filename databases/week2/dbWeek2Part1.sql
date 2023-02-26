USE hyfHomeworkWeek1;
SELECT * FROM task;
SELECT * FROM status;
-- Part 1: Working with tasks
Write the following sql queries:

-- 1.a Add a task -attributes: title, description, created, updated, due_date, status_id, user_id
USE hyfHomeworkWeek1;
INSERT INTO 
task
(title, description, created, updated, due_date, status_id, user_id)
VALUES 
('Do Databse Homework', 'Database week2 homework to be completed', '2017-12-25 9:45:10', '2017-12-26 19:45:10', '2017-12-29 20:45:10', 2, 1);



-- 1.b Change the title of a task
USE hyfHomeworkWeek1;
UPDATE 
task 
SET 
title = '	Buy drinks for the birthday party' 
WHERE 
id = 13;


-- 1.c Change a task due date
USE hyfHomeworkWeek1;
UPDATE 
task 
SET 
created = '2017-10-06 20:45:10'
WHERE 
id = 13;


-- 1.d Change a task status
-- 1.e Mark a task as complete
USE hyfHomeworkWeek1;
UPDATE 
task 
SET 
status_id = 3
WHERE 
id = 13;

-- 1.f Delete a task
USE hyfHomeworkWeek1;
DELETE FROM
task
WHERE
id = 36;

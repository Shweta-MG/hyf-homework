--Dropped old databse because, few entries were deleted or modified.
DROP DATABASE hyfHomeworkWeek1;

--Created new database.
CREATE DATABASE  hyfHomeworkWeek1;
USE hyfHomeworkWeek1;

-- Retrieving tables for detailed reference
USE hyfHomeworkWeek1;
SELECT * FROM user;
SELECT * FROM task;
SELECT * FROM status;


--1. Select the names and phones of all users;
USE hyfHomeworkWeek1;
SELECT name As 'List of names', phone As 'List of phone numbers'
FROM user;


--2. Select the name of the user with id=10;
USE hyfHomeworkWeek1;
SELECT name As 'List of names'
FROM user
WHERE id=10;

--3. Find how many users exist in the database;
USE hyfHomeworkWeek1;
SELECT COUNT(*) As 'Number of Users'
FROM user;


--4. Select the names of the first 5 users in the database;
USE hyfHomeworkWeek1;
SELECT name As 'Name of Users'
FROM user
LIMIT 5;

--5. Select the names of the last 3 users in the database;
USE hyfHomeworkWeek1;
SELECT name As 'Name of Users'
FROM user
ORDER BY name 
DESC
LIMIT 3;


--6. Sum all the ids in the user table;
USE hyfHomeworkWeek1;
SELECT SUM(user.id) AS 'Total of IDs'
FROM user;

--7. Select all users and order them alphabetically by name;
USE hyfHomeworkWeek1;
USE hyfHomeworkWeek1;
SELECT name As 'Name of Users'
FROM user
ORDER BY name;

--8. Find all tasks that include SQL either on the title or on the description;
USE hyfHomeworkWeek1;
SELECT *
FROM task
WHERE 
  title LIKE '%SQL%'
  OR
  description LIKE '%SQL%';

--9. Find the title of all tasks that the user Maryrose is responsible for;
USE hyfHomeworkWeek1;
SELECT task.title, user.id
FROM task
INNER JOIN user ON task.user_id = user.id
WHERE user.name LIKE '%Maryrose %';

--10. Find how many tasks each user is responsible for;
USE hyfHomeworkWeek1;
SELECT name, COUNT(user_id)
FROM user
JOIN task ON user_id = user.id
GROUP BY user_id;


--1.1 Find how many tasks with a status=Done each user is responsible for;
USE hyfHomeworkWeek1;
SELECT user.id, user.name, COUNT(task.id)
FROM user
JOIN task ON task.user_id = user.id
JOIN status ON status.id = task.status_id
WHERE status.name = 'Done'
GROUP BY user_id;
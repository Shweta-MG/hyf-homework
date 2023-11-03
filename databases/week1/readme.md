https://github.com/HackYourFuture-CPH/databases/blob/main/lesson1/lesson-data.sql


Write the following sql queries:

1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
2. Change the title of a task
3. Change a task due date
4. Change a task status
5. Mark a task as complete
================================================
6. Get all the tasks assigned to users whose email ends in @spotify.com
7. Get all the tasks for 'Donald Duck' with status 'Not started'
8. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
9. Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)

10. Delete a task




-- 1. Select the names and phones of all users;
SELECT name, phone FROM user;
-- 2. Select the name of the user with id=10;
SELECT name FROM user WHERE id=10;
-- 3. Find how many users exist in the database;
SELECT COUNT(id) FROM user;
-- 4. Select the names of the first 5 users in the database;
SELECT name FROM user ORDER BY id ASC LIMIT 5;
-- 5. Select the names of the last 3 users in the database;
SELECT name FROM user ORDER BY id DESC LIMIT 3;
-- 6. Sum all the ids in the user table;
SELECT SUM(id) FROM user;
-- 7. Select all users and order them alphabetically by name;
SELECT * FROM user ORDER BY name ASC;
-- 8. Find all tasks that include SQL either on the title or on the description; -- Note % vs _
SELECT * FROM task WHERE title LIKE '%SQL%' OR description LIKE '%SQL%'; 

-- 9. Find the title of all tasks that the user Maryrose is responsible for;
SELECT title FROM task LEFT JOIN user ON task.user_id = user.id WHERE user.name LIKE 'Maryrose%';

-- 10. Find how many tasks each user is responsible for;
SELECT name, COUNT(user_id) FROM user JOIN task ON user_id = user.id GROUP BY user_id;

-- 11. Find how many tasks with a status=Done each user is responsible for;
SELECT user.id, user.name, COUNT(task.id)
FROM user JOIN task ON task.user_id = user.id
     JOIN status ON status.id = task.status_id
    WHERE status.name = 'Done'
    GROUP BY user.id
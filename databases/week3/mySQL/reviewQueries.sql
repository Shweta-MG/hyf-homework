--Get all review
USE MealSharing;
SELECT * FROM review

--Add a new review
USE MealSharing;
INSERT INTO review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) 
VALUES 
(4, 'Amazingly good', 'Awesome food and wecoming host', 1, 5, '2022-02-02');

--Get a review with any id, fx 1
USE MealSharing;
SELECT * FROM review 
WHERE id = 2;

--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
USE MealSharing;
UPDATE review 
SET meal_id = 1
WHERE id = 2;

--Delete a review with any id, fx 1
USE MealSharing;
DELETE FROM review
WHERE id = 4;
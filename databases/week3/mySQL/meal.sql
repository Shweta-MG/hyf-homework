--Get all meals
USE MealSharing;
SELECT * FROM meal

--Add a new meal
USE MealSharing;
INSERT INTO meal (
  `id`, `title`, `description`, `location`, 
  `when`, `max_reservations`, `price`, 
  `created_date`) 
VALUES 
(4, 'Dosha with Sambhar', 'Delicious South Indian dish', 'Aarhus', '2023-04-01 07:30:00', 3, 200, '2023-03-01');


--Get a meal with any id, fx 1
USE MealSharing;
SELECT * FROM meal 
WHERE id = 3;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
USE MealSharing;
UPDATE meal 
SET price = 1500
WHERE id = 2;

--Delete a meal with any id, fx 1
USE MealSharing;
DELETE FROM meal 
WHERE id = 4;
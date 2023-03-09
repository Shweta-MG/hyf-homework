--Get all reservation
USE MealSharing;
SELECT * FROM reservation

--Add a new reservation
USE MealSharing;
INSERT INTO reservation (
  `id`, `number_of_guests`, `meal_id`, 
  `created_date`, `contact_phonenumber`, 
  `contact_name`, `contact_email`
) 
VALUES 
(4, 2, 2, '2023-03-04', '22334455', 'Mads', 'mads@gmail.com');

--Get a reservation with any id, fx 1
USE MealSharing;
SELECT * FROM reservation 
WHERE id = 2;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
USE MealSharing;
UPDATE reservation 
SET contact_phonenumber = 52634777
WHERE id = 2;

--Delete a reservation with any id, fx 1
USE MealSharing;
DELETE FROM reservation 
WHERE id = 4;
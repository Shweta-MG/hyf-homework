--Get meals that has a price smaller than a specific price fx 90
USE MealSharing;
SELECT * FROM meal 
WHERE price <= 150;

--Get meals that still has available reservations


--Get meals that partially match a title. 
USE MealSharing;
SELECT * FROM meal 
WHERE title LIKE "%butter%";


--Get meals that has been created between two dates
USE MealSharing;
SELECT * FROM meal 
WHERE created_date BETWEEN '2023-03-01' AND '2023-03-03'

--Get only specific number of meals fx return only 5 meals
USE MealSharing;
SELECT * FROM meal 
LIMIT 1;

--Get the meals that have good reviews
USE MealSharing;
SELECT meal.title, review.stars AS reviews FROM meal
INNER JOIN review ON meal.id = review.meal_id
WHERE review.stars >= 4;

--Get reservations for a specific meal sorted by created_date
USE MealSharing;
SELECT meal.id, meal.title, reservation.created_date AS reservation_date 
FROM reservation
INNER JOIN meal ON reservation.meal_id = meal.id
WHERE reservation.meal_id = 3
ORDER BY reservation.created_date;

--Sort all meals by average number of stars in the reviews
USE MealSharing;
SELECT meal.*, AVG(review.stars) AS average_review 
FROM meal
INNER JOIN review ON meal.id = review.meal_id
GROUP BY review.meal_id
ORDER BY average_review;
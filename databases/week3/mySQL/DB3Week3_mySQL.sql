--Create database
CREATE DATABASE MealSharing;


//Checking the tables
USE MealSharing;
SELECT *FROM meal;
SELECT *FROM reservation;
SELECT *FROM review;

--use database while creating tables
USE MealSharing;
CREATE TABLE `meal` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` VARCHAR(255) NOT NULL, 
  `description` TEXT DEFAULT NULL, 
  `location` VARCHAR(255) NOT NULL, 
  `when` DATETIME NOT NULL, 
  `max_reservations` INT(10) NOT NULL, 
  `price` DECIMAL(19, 2) NOT NULL, 
  `created_date` DATE NOT NULL
);

-- Reservation
CREATE TABLE `reservation` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `number_of_guests` INT(10) NOT NULL, 
  `meal_id` INT(10) UNSIGNED NOT NULL, 
  `created_date` DATE NOT NULL, 
  `contact_phonenumber` VARCHAR(255) NOT NULL, 
  `contact_name` VARCHAR(255) NOT NULL, 
  `contact_email` VARCHAR(255) NOT NULL, 
  CONSTRAINT `fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);

-- Review
CREATE TABLE `review` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  `title` VARCHAR(255) NOT NULL, 
  `description` TEXT NOT NULL, 
  `meal_id` INT(10) UNSIGNED NOT NULL, 
  `stars` INT UNSIGNED NOT NULL, 
  `created_date` DATE NOT NULL, 
  CONSTRAINT `fk_meal_2` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
);


--Inser values into Meal table
USE MealSharing;
INSERT INTO meal (
  `id`, `title`, `description`, `location`, 
  `when`, `max_reservations`, `price`, 
  `created_date`) 
VALUES 
(1, 'Chicken Curry', 'Delicious Indian dish', 'Aarhus', '2023-04-01 11:30:00', 3, 150, '2023-03-01');
(2, 'Butter Chicken Curry', 'Delicious buttery Indian dish', 'Aarhus', '2023-04-07 09:30:00', 10, 150, '2023-03-01');
(3, 'Daal Curry', 'Delicious Indian lentil soup served with spiced rice', 'Aarhus', '2023-04-17 09:30:00', 10, 150, '2023-03-01');


--Checking on the updated table
USE MealSharing;
SELECT * FROM meal



--Insert into reservation table
USE MealSharing;
INSERT INTO reservation (
  `id`, `number_of_guests`, `meal_id`, 
  `created_date`, `contact_phonenumber`, 
  `contact_name`, `contact_email`
) 
VALUES 
(1, 2, 2, '2023-03-01', '22334455', 'Mads', 'mads@gmail.com');
(2, 1, 3, '2023-03-01', '52634755', 'Kate', 'kate@gmail.com');
(3, 3, 1, '2023-03-01', '51624055', 'Paul', 'paul@gmail.com');

--Checking on the updated reservation table
USE MealSharing;
SELECT * FROM reservation



--Insert into review table
--Remember these are old reviews my event will happen in March2023.
USE MealSharing;
INSERT INTO review (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) 
VALUES 
(1, 'Amazingly good', 'Awesome food and wecoming host', 1, 5, '2022-02-02');
(2, 'Super tasty', 'Exactly like on Alex in Berlin', 3, 5, '2021-12-01');
(5, 'Nice', 'Liked it!', 2, 4, '2021-12-02');
(6, 'Perfect', 'Best sandwich ever', 2, 5, '2021-12-02');

--Checking on the updated reservation table
USE MealSharing;
SELECT * FROM review
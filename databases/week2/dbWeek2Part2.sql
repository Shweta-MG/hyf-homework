--Create a new database containing the following tables:
CREATE DATABASE School;

--Class: with the columns: id, name, begins (date), ends (date)
USE School;
CREATE TABLE Class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    begins DATE,
    ends DATE
);


-- Student: with the columns: id, name, email, phone, class_id (foreign key)
USE School;
CREATE TABLE Student(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    phone INT,
    class_id INT,
    FOREIGN KEY (class_id) REFERENCES Class(id)   
);


-- Create an index on the name column of the student table.
USE School;
CREATE INDEX index_name ON Student (first_name);

-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
USE School;
ALTER TABLE 
Class
ADD COLUMN
status
ENUM 
('not-started','ongoing','finished') NOT NULL;

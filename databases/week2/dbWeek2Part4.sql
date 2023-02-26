USE mealSharingApp;
CREATE TABLE Kitchen_Details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    menu_id INT    
);


USE mealSharingApp;
CREATE TABLE customer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50)
);


USE mealSharingApp;
CREATE TABLE menu (
    id INT PRIMARY KEY AUTO_INCREMENT,
    menu_type VARCHAR(50),
    Kitchen_id INT, 
    FOREIGN KEY (Kitchen_id) REFERENCES Kitchen_Details(id)
);


USE mealSharingApp;
CREATE TABLE Order_Details (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_date DATE,
    amount DECIMAL(8,2),
    customer_id INT,
    menu_id INT,
    Kitchen_id INT, 
    FOREIGN KEY (Kitchen_id) REFERENCES Kitchen_Details(id),
    FOREIGN KEY (menu_id) REFERENCES menu(id),
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);



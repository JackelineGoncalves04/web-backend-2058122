CREATE DATABASE projeto_1;

USE projeto_1;

CREATE TABLE rentals(
    rentals_id INT AUTO_INCREMENT,
    customer VARCHAR(100),
    car_brand VARCHAR(100),
    car_model VARCHAR(100),
    license_plate VARCHAR(100),
    pickup_location VARCHAR(100),
    return_location VARCHAR(100),
    price FLOAT,
    pickup_date DATE,
    return_date DATE,
    comments VARCHAR(1000),
    PRIMARY KEY (rentals_id)
);

INSERT INTO rentals (customer,car_brand,car_model,license_plate,pickup_location,return_location,price,pickup_date,return_date,comments)
              VALUES("John Smith", "Ford", "Mustang", "DH-278-AB", "Los Angeles Airport", "Santa Monica Blvd.", 1200.00, '2023-06-01', '2023-06-10', "Great car, very smooth ride."),
                    ("Emma Rodriguez", "Toyota", "Corolla", "EZ-175-RT", "Miami International Airport", "South Beach", 600.00, '2023-07-05', '2023-07-12', "Decent car, nothing special."),
                    ("Alex Nguyen", "BMW", "X5", "FP-657-ZT", "Houston George Bush Airport", "Downtown Houston", 1100.00, '2023-08-15', '2023-08-25', "Fantastic car, highly recommended."),
                    ("Ava Patel", "Jeep", "Wrangler", "MJ-893-KD", "Las Vegas McCarran Airport", "Red Rock Canyon", 800.00, '2023-09-01', '2023-09-07', "Fun car, great for off-roading."),
                    ("Liam Martin", "Tesla", "Model 3", "WU-452-PL", "San Francisco International Airport", "Golden Gate Bridge", 1500.00, '2023-10-10', '2023-10-20', "Amazing car, loved the autopilot feature.");


SELECT * FROM rentals;

SELECT * FROM rentals WHERE pickup_location = "Los Angeles Airport";

create database AuthDb;

USE AuthDb;

CREATE TABLE Users
(
    Id INT PRIMARY KEY IDENTITY,
    Username NVARCHAR(50) NOT NULL,
    Password NVARCHAR(255) NOT NULL
);

INSERT INTO Users (Username, Password)
VALUES ('testuser', 'password123');  -- Password should be hashed in production

INSERT INTO Users (Username, Password)
VALUES ('wipro', 'wipro123');

select *  from Users;
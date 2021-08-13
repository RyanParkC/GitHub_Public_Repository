-- Queries Run -----------------------------------------
-- Directly inserting into table then applying
INSERT INTO `users`.`users` (`id`, `first_name`, `last_name`, `email`, `created_at`, `updated_at`) 
VALUES ('1', 'Abraham', 'Lincoln', 'abraham@lincoln.com', '2005-09-01 00:00:01', '2005-09-01 00:00:01');
-- Inserting via code
INSERT INTO users (id, first_name, last_name, email, created_at, updated_at) 
VALUES ('2', 'Benjamin', 'Franklin', 'benjamin@franklin.com', '2005-09-01 00:00:01', '2005-09-01 00:00:01');

INSERT INTO users (id, first_name, last_name, email, created_at, updated_at) 
VALUES ('3', 'Charles', 'Darwin', 'charles@darwin.com', '2005-09-01 00:00:01', '2005-09-01 00:00:01');

-- Retrieving all users
SELECT *
FROM users;

-- Retrieving first user using email address
SELECT *
FROM users
WHERE email = 'abraham@lincoln.com';

-- Retrieving last user using id
SELECT *
FROM users
WHERE id = 3;

-- Change user with id = 3 so last name is Pancakes
UPDATE users SET last_name = 'Pancakes' WHERE (id = 3);

-- Delete user with id = 2
DELETE FROM users WHERE id = 2;

-- Retrieve all users, sorted by first_name
SELECT *
FROM users
ORDER BY first_name;

-- BONUS Query - Retrieve all users, sorted by first_name in descending order
SELECT *
FROM users
ORDER BY first_name DESC;

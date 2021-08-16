-- Queries Run -----------------------------------------------------------
-- Inserting users
INSERT INTO users (id, first_name, last_name, created_at, updated_at)
VALUES (1, 'Amy', 'Giver', NOW(), NOW());

INSERT INTO users (id, first_name, last_name, created_at, updated_at)
VALUES (2, 'Eli', 'Byers', NOW(), NOW());

INSERT INTO users (id, first_name, last_name, created_at, updated_at)
VALUES (3, 'Marky', 'Mark', NOW(), NOW());

INSERT INTO users (id, first_name, last_name, created_at, updated_at)
VALUES (4, 'Big', 'Bird', NOW(), NOW());

INSERT INTO users (id, first_name, last_name, created_at, updated_at)
VALUES (5, 'Kermit', 'The Frog', NOW(), NOW());

INSERT INTO users (id, first_name, last_name, created_at, updated_at)
VALUES (6, 'Spongebob', 'Squarepants', NOW(), NOW());

-- Checking for insert success
SELECT *
FROM users;

-- JOINING the tables
SELECT users.first_name, users.last_name, users2.first_name AS friend_first_name, users2.last_name AS friend_last_name
FROM users
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users AS users2 ON users2.id = friendships.friend_id; -- self-joining table to retrieve user names for friendships

-- Have user 1 be friends with user 2,4,6
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (1, 2, NOW(), NOW()), (1, 4, NOW(), NOW()), (1, 6, NOW(), NOW());

-- Have user 2 be friends with user 1,3,5
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (2, 1, NOW(), NOW()), (2, 3, NOW(), NOW()), (2, 5, NOW(), NOW());

-- Have user 3 be friends with user 2,5
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (3, 2, NOW(), NOW()), (3, 4, NOW(), NOW()), (3, 5, NOW(), NOW());

-- Have user 4 be friends with user 3
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (4, 3, NOW(), NOW());

-- Have user 5 be friends with user 1,6
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (5, 1, NOW(), NOW()), (5, 6, NOW(), NOW());

-- Have user 6 be friends with user 2,3
INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (6, 2, NOW(), NOW()), (6, 3, NOW(), NOW());

-- Checking for insert success
SELECT *
FROM friendships;

-- Change relationships to match as shown in given image
DELETE FROM friendships
WHERE user_id = 6 AND friend_id = 3;

DELETE FROM friendships
WHERE user_id = 6 AND friend_id = 2;

DELETE FROM friendships
WHERE user_id = 5 AND friend_id = 6;

DELETE FROM friendships
WHERE user_id = 5 AND friend_id = 1;

DELETE FROM friendships
WHERE user_id = 4 AND friend_id = 3;

DELETE FROM friendships
WHERE user_id = 3 AND friend_id = 5;

DELETE FROM friendships
WHERE user_id = 3 AND friend_id = 2;

DELETE FROM friendships
WHERE user_id = 3 AND friend_id = 4;

DELETE FROM friendships
WHERE user_id = 2 AND friend_id = 1;

DELETE FROM friendships
WHERE user_id = 1 AND friend_id = 5;

DELETE FROM friendships
WHERE user_id = 1 AND friend_id = 6;

INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES (3, 4, NOW(), NOW()), (1, 5, NOW(), NOW());

-- Check Results
SELECT users.first_name, users.last_name, users2.first_name AS friend_first_name, users2.last_name AS friend_last_name
FROM users
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users AS users2 ON users2.id = friendships.friend_id;

-- Return all users who are friends with the 1st user
-- Make sure their names are displayed in the results
SELECT users.first_name, users.last_name, users2.first_name AS friend_first_name, users2.last_name AS friend_last_name
FROM users
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users AS users2 ON users2.id = friendships.friend_id
WHERE user_id = 1;

-- Return the count of all friendships
SELECT COUNT(*) AS num_of_friendships
FROM friendships;

-- Find out who has the most friends and return the count of their friends
SELECT user_id, users.first_name, users.last_name, COUNT(user_id) as num_of_friends from friendships
JOIN users ON users.id = friendships.user_id
GROUP BY user_id
ORDER BY num_of_friends DESC
LIMIT 1;

-- Return the friends of the 3rd user in Alphabetical order
SELECT users.first_name, users.last_name, users2.first_name AS friend_first_name, users2.last_name AS friend_last_name
FROM users
JOIN friendships ON friendships.user_id = users.id
LEFT JOIN users AS users2 ON users2.id = friendships.friend_id
WHERE user_id = 3;
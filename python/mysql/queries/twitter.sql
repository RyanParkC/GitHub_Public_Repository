-- SELECT practice --------------------------------------------------------------------

-- "Users" (table) selection
SELECT *
FROM users;
-- "Faves" (table)
SELECT *
FROM faves;
-- "Follows" (table)
SELECT *
FROM follows;

-- "First Names" of all Users (table)
SELECT first_name -- select category
FROM users; -- from table
-- "First and Last Names" of all Users (table)
SELECT first_name, last_name
FROM users;

-- SELECT w/ Conditionals
-- "First name" of Users (table) with (category) "id = 2"
SELECT first_name
FROM users
WHERE id = 2;
-- "Last names" of Users (table) with (category) "id = 2 or 3"
SELECT last_name
FROM users
WHERE id = 2 OR id = 3;
-- All Users (table) with (category) "id > 2"
SELECT *
FROM users
WHERE id > 2;
-- All Users (table) with "id >= 3"
SELECT *
FROM users
WHERE id <= 3;
-- All Users (table) with "First names" ending in "-e"
SELECT *
FROM users
WHERE first_name LIKE "%e"; -- first_name LIKE "%e"
-- All Users (table) with "First names" starting in "K-"
SELECT *
FROM users
WHERE first_name LIKE "K%";
-- All Users (table) with "First names" NOT starting in "K-"
SELECT *
FROM users
WHERE first_name <> "K%"; -- (NOT equals <>)

-- SELECT w/Sorting
-- All Users with "Youngest" Users at the TOP of the table
SELECT *
FROM users
ORDER BY birthday DESC; -- DESC for most RECENT (youngest), ASC for OLDEST at TOP
-- All Users with "First name" that ends with "-e" with "Youngest" Users at TOP of table
SELECT *
FROM users
WHERE first_name LIKE "%e"
ORDER BY birthday DESC;
-- All Users with "First name" in Alphabetical order
SELECT first_name
FROM users
ORDER BY first_name;

-- SELECT w/ LIMIT and OFFSET
-- Select data from first 3 users
SELECT *
FROM users
LIMIT 3; -- shows 3 data sets
-- Select data from users records 3-5
SELECT *
FROM users
LIMIT 3 -- shows next 3 data sets
OFFSET 2; -- ignore (OFF-set) first 2
-- Combining LIMIT and OFFSET
SELECT *
FROM users
LIMIT 2,3; -- OFFSET (ignore) first 2, starts from 3rd data set, Limit to next 3 data sets

-- INSERT practice --------------------------------------------------------------------
-- 1. Directly insert into Table and press Apply
-- 2. Terminal code (mysql -u root -p) 
INSERT INTO table_name (column_name1, column_name2)
VALUES ('column1_value', 'column2_value');

-- UPDATE practice --------------------------------------------------------------------
-- 1. Directly update into Table and press Apply
-- 2. Terminal code (mysql -u root -p) 
UPDATE table_name SET column_name1 = 'some_value', column_name2='another_value' WHERE conditions;
-- IMPORTANT: if WHERE condition is not added to the UPDATE statement, the changes will be applied to every record in the table.

-- DELETE practice --------------------------------------------------------------------
-- 1. Directly delete from Table and press Apply
-- 2. Terminal code (mysql -u root -p) 
	-- IF receiving error regarding SQL SAFE UPDATES, run the following command to bypass
    SET SQL_SAFE_UPDATES = 0;
	-- To proceed to DELETE records
    DELETE FROM table_name WHERE conditions;
	-- IMPORTANT: if WHERE condition is not added to the DELETE statement, it will delete all the records on the table


-- JOIN Tables practice -------------------------------------------------------------------
-- One to One (1:1)
SELECT * 
FROM table1
JOIN table2 ON table2.id = table1.table2_id;
-- One to Many (1:2+) - SAME format as above
SELECT *
FROM table1
JOIN table2 ON table2.id = table1.table2_id;
-- Many to Many (2+:2+)
SELECT *
FROM table1
JOIN table3 ON table1.id = table3.table1_id 
JOIN table2 ON table2.id - table3.table2_id;

-- LEFT JOIN Tables practice ----------------------------------------------------------------
-- Can RENAME anything by adding "AS newname"
SELECT * -- Categories (e.g. table1.category1)
FROM table1 -- LEFT table - target table of the LEFT join (displays everything in this LEFT table, even if a value DNE in RIGHT table)
LEFT JOIN table2 -- Will join with LEFT side attaching to table1
ON table1.id = table2.table1_id -- where table2 will join ONto 
WHERE category = value; -- for Conditionals

-- LEFT Joining 3 tables w/ Conditional
SELECT category1, category1b -- cat1 (from table1), cat2 (from table2)
FROM table1 -- the LEFT table - lists EVERYTHING regardless of RIGHT tables data
LEFT JOIN table3 -- table3 is the result of a Many to Many connection between t1 and t2
ON table2.category1b_id = table2.id
WHERE table1.id = value; -- Conditional
		-- Example of the above 
        -- All tweets that users with id 2 or id 1 has tagged as favorites
		SELECT first_name, tweet -- Column categories you want
		FROM users -- table1
		LEFT JOIN faves -- table3 joins its left side onto table1
		ON users.id = faves.user_id -- table1 key = table3 key so combine columns into one
		LEFT JOIN tweets -- table2 joins its left side onto table3
		ON faves.tweet_id = tweets.id -- table3.category1_key = table2.key so combines columns into one
		WHERE users.id = 1 OR users.id = 2; -- conditionally selects specific id #

-- All users that are following (cat4, tab4) the user (tab1) with id 1
-- SELF-Join - Using the SAME table x2 with a Many to Many relationship
SELECT users.first_name AS followed, users2.first_name AS follower -- tab1a.cat1, tab1b.cat1
FROM users -- table1
LEFT JOIN follows -- table4
ON users.id = follows.followed_id -- table1a.id = table4.cat4a_id
LEFT JOIN users AS users2 -- table1
ON users2.id = follows.follower_id -- table1b.id = table4.cat4b_id
WHERE users.id = 1;

-- All Users NOT following the user with id = 2
SELECT *
FROM users
WHERE users.id NOT IN (
SELECT follower_id
FROM follows
WHERE followed_id = 2
) AND users.id != 2;

-- Follower count for User id = 1
SELECT users.first_name as user, COUNT(users2.first_name) as follower_count
FROM users
LEFT JOIN follows
ON users.id = follows.followed_id
LEFT JOIN users as users2
ON users2.id = follows.follower_id
WHERE users.id = 1
GROUP BY users.id;

-- LEFT Join (OUTER Join) vs Join (INNER Join)
   -- All we need for web development - can disregard RIGHT Join
   -- Similar but NOT interchangeable
   -- Difference in output that they provide
	  -- Specifically, in cases where a record in one table has NO matching record in the joining table
-- LEFT Join
   -- remember target table will list EVERYTHING, regardless of right joining table even if data DNE for right table
   SELECT first_name, tweet -- cat1(tab1), cat2(tab2)
   FROM users -- tab1 - the LEFT table, target of joining table - lists EVERYTHING as the LEFT table
   LEFT JOIN tweets -- tab2 - left side of table joins target table (LEFT table)
   ON users.id = tweets.user_id; -- tab1.id = tab2.cat1_id;
-- Join
   SELECT first_name, tweet -- cat1(tab1), cat2(tab2)
   FROM users -- tab1 - target of joining table - lists only as much as the RIGHT table has data for
   JOIN tweets -- tab2 - side of table joins target table
   ON users.id = tweets.user_id; -- tab1.id = tab2.cat1_id;


-- GROUPING, ROWS
-- GROUP BY
-- SUM, MIN, MAX, AVG
-- Find all the clients (first and last name) and their total billing amounts
SELECT clients.first_name, clients.last_name, SUM(billing.amount) AS billing_amount
FROM clients
JOIN billing ON clients.id = billing.clients_id
GROUP BY clients.id;
-- GROUP CONCAT
-- List all the domain names associated with each client
SELECT GROUP_CONCAT(' ',sites.domain_name) AS domains, clients.first_name, clients.last_name
FROM clients
JOIN sites ON clients.id = sites.clients_id
GROUP BY clients.id;
-- COUNT
-- find the total number of leads for each site
SELECT COUNT(leads.id), sites.domain_name
FROM sites
JOIN leads ON sites.id = leads.sites_id
GROUP BY sites.id;


-- Side Note --
   -- Reverse Engineering -- Diagram generated (.mwb)
   -- Forward Engineering -- Script generated (.sql)


-- USE [databasename] to connect to specific database
USE twitter;

-- CRUD application --------------------------------------------------------------------
-- SQL Commands - INSERT, SELECT, UPDATE, DELETE
-- INSERT --------------------------------------
INSERT INTO table_name1 (column_name1, column_name2)
VALUES ('column1_value', 'column2_value');

-- SELECT --------------------------------------
SELECT categories AS name1
FROM table1 
WHERE conditionals -- LIKE "%", <> "%" not like, 
ORDER BY category1 -- DESC for most RECENT at TOP
LIMIT 3,5; -- OFFSET (ignore) first 3, starts from 4th data set
		  -- Limit to next 5 data sets
          
-- UPDATE --------------------------------------
	-- IMPORTANT: if WHERE condition is not added to the UPDATE statement, the changes will be applied to every record in the table.
UPDATE table_name SET column_name1 = 'some_value', column_name2='another_value' 
WHERE conditions;

-- DELETE --------------------------------------
	-- IF receiving error regarding SQL SAFE UPDATES, run the following command to bypass
    SET SQL_SAFE_UPDATES = 0;
	-- To proceed to DELETE records
    DELETE FROM table_name WHERE conditions;
	-- IMPORTANT: if WHERE condition is not added to the DELETE statement, it will delete all the records on the table
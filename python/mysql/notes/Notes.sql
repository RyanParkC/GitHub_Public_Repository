-- Forward vs. Reverse Engineering
Forward Engineering --> Script
Reverse Engineering --> ERD Diagram

-- INSERTing data into tables
INSERT INTO users (id, first_name, last_name, email, created_at, updated_at) 
VALUES ('1', 'Abraham', 'Lincoln', 'abraham@lincoln.com', NOW(), NOW());

-- To insert current time for created_at, updated_at
NOW() -- no quotations ' ' 

-- SELECTing data from tables
SELECT *
SELECT category1, category2
FROM table1
WHERE condition1 OR condition2
LIMIT 3,5 -- OFFSET(ignore) first 3, Print next 5 (starting at id = 4)
ORDER BY category1 DESC -- for most recent at top

-- SELECTing data from JOIN tables
SELECT categories -- e.g. table1.col1, table1.col2, table2.col2
FROM table1
JOIN table3 ON table1.id = table3.category1_id -- category1 from table 3
JOIN table2 ON table2.id = table3.category2_id
WHERE conditions -- to select specific data
		-- e.g. Table1 = authors, Table 2 = Books, Table 3 = Favorites
		SELECT authors.id, authors.name, books.title
		FROM authors
		JOIN favorites ON authors.id = favorites.author_id
		JOIN books ON books.id = favorites.books_id
		WHERE books.id = 3 -- so whoever favorited book id = 3 is listed

-- UPDATING data in tables
UPDATE table1 SET category1 = 'value1', category2 = 'value2'

-- DELETING data from tables
DELETE FROM table1 WHERE condition1

-- To DROP (remove) a COLUMN from Schema
ALTER TABLE table1
DROP COLUMN column1;

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

-- GROUPING, ROWS ----------------------------------------------------------
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



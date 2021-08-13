-- USE [databasename] to connect to specific database
USE twitter;

-- CRUD application --------------------------------------------------------------------
-- SQL Commands - INSERT, SELECT, UPDATE, DELETE
-- INSERT --------------------------------------
INSERT INTO table_name1 (column_name1, column_name2)
VALUES ('column1_value', 'column2_value');
	-- e.g. Insert 
	INSERT INTO users (first_name, last_name)
	VALUES ('Hello','World');

-- SELECT --------------------------------------
SELECT categories AS name1
FROM table1 
WHERE conditionals -- LIKE "%", <> "%" not like, 
ORDER BY category1 -- DESC for most RECENT at TOP
LIMIT 3,5; -- OFFSET (ignore) first 3, starts from 4th data set
		  -- Limit to next 5 data sets
	-- e.g. Show 3 sets of data starting from id = 3
	SELECT *
	FROM users
	LIMIT 2,3;
          
-- UPDATE --------------------------------------
	-- IMPORTANT: if WHERE condition is not added to the UPDATE statement, the changes will be applied to every record in the table.
UPDATE table1_name SET column_name1 = 'some_value', column_name2='another_value' 
WHERE conditions;
	-- e.g. Update
    UPDATE users SET first_name = 'Hello', last_name = 'World'
    WHERE id = 5;

-- DELETE --------------------------------------
	-- IF receiving error regarding SQL SAFE UPDATES, run the following command to bypass
    SET SQL_SAFE_UPDATES = 0;
	-- To proceed to DELETE records
    DELETE FROM table_name1 WHERE conditions;
	-- IMPORTANT: if WHERE condition is not added to the DELETE statement, it will delete all the records on the table
	-- e.g. Delete
    DELETE FROM users WHERE id = 5; 

-- Queries run ------------------------------------------------------

-- Create 5 different authors
INSERT INTO authors (id, name, created_at, updated_at)
VALUES ('1', 'Jane Austen', NOW(), NOW());

INSERT INTO authors (id, name, created_at, updated_at)
VALUES ('2', 'Emily Dickinson', NOW(), NOW());

INSERT INTO authors (id, name, created_at, updated_at)
VALUES ('3', 'Fyodor Dostoevsky', NOW(), NOW());

INSERT INTO authors (id, name, created_at, updated_at)
VALUES ('4', 'William Shakespeare', NOW(), NOW());

INSERT INTO authors (id, name, created_at, updated_at)
VALUES ('5', 'Lau Tzu', NOW(), NOW());

-- Checking if insert successful
SELECT *
FROM authors;

-- Create 5 books
INSERT INTO books (id, title, num_of_pages, created_at, updated_at)
VALUES ('1', 'C Sharp', '1000', NOW(), NOW());

INSERT INTO books (id, title, num_of_pages, created_at, updated_at)
VALUES ('2', 'Java', '1000', NOW(), NOW());

INSERT INTO books (id, title, num_of_pages, created_at, updated_at)
VALUES ('3', 'Python', '1000', NOW(), NOW());

INSERT INTO books (id, title, num_of_pages, created_at, updated_at)
VALUES ('4', 'PHP', '1000', NOW(), NOW());

INSERT INTO books (id, title, num_of_pages, created_at, updated_at)
VALUES ('5', 'Ruby', '1000', NOW(), NOW());

-- Checking if insert successful
SELECT *
FROM books;

-- Change name of C Sharp book to C#
UPDATE books SET title = 'C#' WHERE id = 1;

-- Change first name of 4th author to Bill
UPDATE authors SET name = 'Bill Shakespeare' WHERE id = 4; 

-- Have the 1st author favorite the first 2 books
INSERT INTO favorites (author_id, book_id)
VALUES ('1','1'),('1','2');

-- Have the 2nd author favorite the first 3 books
INSERT INTO favorites (author_id, book_id)
VALUES ('2','1'),('2','2'),('2','3');

-- Have the 3rd author favorite the first 4 books
INSERT INTO favorites (author_id, book_id)
VALUES ('3','1'),('3','2'),('3','3'),('3','4');

-- Have the 4th author favorite all the books
INSERT INTO favorites (author_id, book_id)
VALUES ('4','1'),('4','2'),('4','3'),('4','4'),('4','5');

-- Retrieve all the authors who favorited the 3rd book
SELECT author_id
FROM favorites
WHERE book_id = 3;
-- OR -- to display more info
SELECT authors.id, authors.name, books.title
FROM authors
JOIN favorites ON authors.id = favorites.author_id 
JOIN books ON books.id = favorites.book_id 
WHERE books.id = 3;

-- Remove the 1st author of the 3rd book's favorites
-- To see who that is
SELECT *
FROM favorites
WHERE book_id = 3;
-- Then to delete
DELETE FROM favorites WHERE author_id = 2;

-- Add the 5th author as an other who favorited the 2nd book
INSERT INTO favorites (author_id, book_id) 
VALUES ('5','2');

-- Find all the books that the 3rd author favorited
SELECT book_id
FROM favorites
WHERE author_id = 3;
-- OR -- to display more info
SELECT authors.id, authors.name, book_id, books.title
from authors
JOIN favorites ON authors.id = favorites.author_id
JOIN books ON books.id = favorites.book_id
WHERE author_id = 3;

-- Find all the authors who favorited the 5th book
SELECT author_id
from favorites
WHERE book_id = 5;
-- OR -- to display more info
SELECT authors.id, authors.name, book_id, books.title
from authors
JOIN favorites ON authors.id = favorites.author_id
JOIN books ON books.id = favorites.book_id
WHERE book_id = 5;

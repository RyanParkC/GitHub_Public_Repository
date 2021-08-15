-- Sakila ------------------------------------------------------------------------------
-- Queries run -------------------------------------------------------------------------

-- 1. To get all customers inside city_id = 312
-- return customer first_name, last_name, email, address
SELECT customer.first_name, customer.last_name, customer.email, address.address
FROM customer
JOIN address ON address.address_id = customer.address_id
JOIN city ON city.city_id = address.city_id
WHERE city.city_id = 312;

-- 2. To get all comedy films
-- return film_title, description, release_year, rating, special_features, genre (category)
SELECT film.title, film.description, film.release_year, film.special_features, category.name -- target columns
FROM film -- left target table
JOIN film_category ON film_category.film_id = film.film_id -- right joining table using keys
JOIN category ON category.category_id = film_category.category_id -- right joining table using keys
WHERE category.name = 'comedy'; -- conditional to target category

-- 3. To get all films joined by actor_id = 5
-- return actor_id, actor_name, film title, description, release_year
SELECT actor.actor_id, CONCAT(actor.first_name,' ', actor.last_name) AS actor_name, film.title, film.description, film.release_year
FROM actor
JOIN film_actor ON film_actor.actor_id = actor.actor_id
JOIN film ON film.film_id = film_actor.film_id
WHERE actor.actor_id = 5;

-- 4. To get all customers in store_id = 1 and inside these cities (1,42,312,459)
-- return customer first_name, last_name, email, address
SELECT customer.first_name, customer.last_name, customer.email, address.address, store.store_id, city.city_id
FROM customer -- left target table
JOIN address ON address.address_id = customer.address_id -- right joining table via keys
JOIN city ON city.city_id = address.city_id -- right joining table via keys
JOIN store ON store.store_id = customer.store_id -- right joining table via keys
WHERE store.store_id = 1 -- conditionals (WHERE, AND)
AND city.city_id in (1,42,312,459); -- to input multiple key:value pairs

-- 5. To get all films with a "rating = G" and "special feature = behind the scenes"
-- joined by actor_id = 15
-- return film_title, description, release_year, rating, special_features
-- HINT - you may use LIKE function in getting the 'behind the scenes' part
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, CONCAT(actor.first_name,' ', actor.last_name) AS actor_name
FROM film
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE actor.actor_id = 15
AND film.rating = 'G'
AND film.special_features = 'behind the scenes';

-- 6. To get all actors that joined in the film_id = 369
-- return film_id, title, actor_id, actor_name
SELECT film.film_id, film.title, actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name
FROM film
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON actor.actor_id = film_actor.actor_id
WHERE film.film_id = 369;

-- 7. To get all drama films with rental rate = 2.99
-- return film_title, description, release_year, rating, special_features, genre (category)
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre
FROM film -- left target table
JOIN film_category ON film_category.film_id = film.film_id -- right joining table via keys
JOIN category ON category.category_id = film_category.category_id -- right joining table via keys
WHERE film.rental_rate = 2.99
AND category.name = 'drama';

-- 8. To get all action films which are joined by SANDRA KILMER
-- return film_title, description, release_year, rating, special_features,
-- genre (category), actor's first_name, last_name
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre, actor.first_name, actor.last_name -- target columns
FROM film -- left target table
JOIN film_category ON film_category.film_id = film.film_id -- right joining table via keys
JOIN category ON category.category_id = film_category.category_id -- right joining table via keys
JOIN film_actor ON film_actor.film_id = film.film_id -- right joining table via keys
JOIN actor ON actor.actor_id = film_actor.actor_id -- right joining table via keys
WHERE category.name = 'action' -- conditionals
AND actor.first_name = 'Sandra' -- conditionals
AND actor.last_name = 'Kilmer'; -- conditionals

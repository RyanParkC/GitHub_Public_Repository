-- Queries run --------------------------------------------------------------

-- 1. To get all countries that speak Slovene
-- return name of country, language, language percentage (desc)
SELECT countries.name, languages.language, languages.percentage -- columns
FROM countries -- table
JOIN languages ON languages.country_id = countries.id -- joining table ON key
WHERE languages.language = 'Slovene'
ORDER BY languages.percentage DESC;

-- 2. To display total number of cities for each country
-- return name of country, total number of cities (desc)
SELECT countries.name, COUNT(cities.id) AS num_of_cities -- target columns, count by ids
FROM countries -- left target table
JOIN cities ON cities.country_id = countries.id -- joining right table, join by linked ids
GROUP BY countries.id -- or cities.country_id
ORDER BY num_of_cities DESC;

-- 3. To get all cities in Mexico with population > 500,000
-- return population (desc)
SELECT countries.name AS country, cities.name AS city, cities.population AS population -- selecting columns
FROM countries -- left target table
JOIN cities ON cities.country_id = countries.id -- right join table by key id
WHERE countries.name = 'Mexico' -- conditions
AND cities.population > 500000 -- AND more conditions
ORDER BY cities.population DESC; -- categorizing

-- 4. To get all languages in each country with > 89%
-- return % (desc)
SELECT countries.name AS country, languages.language AS language, languages.percentage AS '%'
FROM countries
JOIN languages ON languages.country_id = countries.id
WHERE languages.percentage > 89
ORDER BY percentage DESC;

-- 5. To get all countries with Surface Area < 501 and Population > 100,000
SELECT countries.name AS country, countries.surface_area AS surface_area, countries.population AS population
FROM countries
WHERE countries.surface_area < 501
AND countries.population > 100000;

-- 6. To get countries with only Constitutional Monarchy with a capital > 200
-- and a life expectancy > 75 yrs
SELECT countries.name AS country, countries.government_form AS government_form, countries.capital, countries.life_expectancy
FROM countries
WHERE countries.government_form = 'Constitutional Monarchy'
AND countries.capital > 200
AND countries.life_expectancy > 75;

-- 7. To get all cities of Argentina inside the Buenos Aires district and population > 500,000
-- return Country Name, City Name, District, and Population
SELECT countries.name AS 'Country Name', cities.name AS 'City Name', cities.district AS District, cities.population AS Population
FROM countries
JOIN cities ON cities.country_id = countries.id
WHERE countries.name = 'Argentina'
AND cities.district = 'Buenos Aires'
AND cities.population > 500000;

-- 8. Summarize the number of countries in each region
-- Display the region name and number of countries
-- return num_of_countries (desc)
SELECT countries.region AS 'Region Name', COUNT(countries.region) AS num_of_countries
FROM countries
GROUP BY countries.region;

<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <!-- YOUR own local CSS -->
    <!-- <link rel="stylesheet" href="/css/main.css"/> -->
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <!-- <script type="text/javascript" src="js/app.js"></script> -->
    <title>Omikuji INDEX (Home) Page</title>
</head>
<body>
    <!-- Title -->
    <div class="d-flex justify-content-center my-3">
        <h1>Send an Omikuji!</h1>
    </div>
	<div class="container-sm border border-dark px-4 py-4">
        <!-- Submit Form Set Up -->
        <form action='/omikuji/submit' method='POST'>
        <!-- Number input -->
        <div class="form-floating mb-3">
            <input type='number' placeholder="0" class="form-control" name="number">
            <label class="form-label">Pick any Number from 5 to 25:</label>
        </div>
        <!-- City input -->
        <div class="form-floating mb-3">
            <input type="text" placeholder="Enter a city name" class="form-control" name="city">
            <label class="form-label">Enter the name of any city:</label>
        </div>
        <!-- Name input -->
        <div class="form-floating mb-3">
            <input type="text" placeholder="Enter a name" class="form-control" name="name">
            <label class="form-label">Enter the name of any real person:</label>
        </div>
        <!-- Hobby input -->
        <div class="form-floating mb-3">
            <input type="text" placeholder="Enter a hobby" class="form-control" name="hobby">
            <label class="form-label">Enter a professional endeavor or hobby:</label>
        </div>
        <!-- Animal input -->
        <div class="form-floating mb-3">
            <input type="text" placeholder="Enter an animal name" class="form-control" name="animal">
            <label class="form-label">Enter any type of living thing:</label>
        </div>
        <!-- Nice saying input -->
        <div class="form-floating mb-3">
            <textarea rows="5" cols="33" placeholder="Say something nice!" class="form-control" name="nice"></textarea>
            <label class="form-label">Say something nice to someone:</label>
        </div>
        <!-- Send and show -->
        <div>
            <label class="form-label">Send and show a friend</label>
        </div>
        <!-- Submit Button -->
        <div class="d-flex justify-content-end">
            <input class="btn btn-primary" type="submit" value="Send">
        </div>
        </form>
	</div>
</body>
</html>
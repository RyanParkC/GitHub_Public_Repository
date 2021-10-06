<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!-- Linking CSS and JavaScript -->
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script type="text/javascript" src="js/app.js"></script>
        <!-- for Bootstrap CSS -->
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <!-- YOUR own local CSS -->
        <link rel="stylesheet" href="/css/main.css"/>
        <!-- For any Bootstrap that uses JS or jQuery-->
        <script src="/webjars/jquery/jquery.min.js"></script>
        <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

        <title>Home Page</title>
    </head>
<body>
    <div class="container">
        <h1 class="my-5 mx-5">Choose a Template Below:</h1>
        <span>
            <h3><a href="/date">Date Template</a></h3>
        </span>
        <span>
            <h3><a href="/time">Time Template</a></h3>
        </span>
    </div>
</body>
</html>

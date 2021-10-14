<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <!-- YOUR own local CSS -->
    <!-- <link rel="stylesheet" href="/css/main.css"/> -->
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <!-- <script type="text/javascript" src="js/app.js"></script> -->
    <title>View Ninja Details</title>
</head>
<body>
	<div class="container border border-dark my-3" style="width:500px">
		
        <div class="ms-2">
            <h1 class="fw-bold my-4">Ninja Details:</h1>
            <h4>First Name: <c:out value="${ ninja.firstName }"></c:out></h4>
            <h4>Last Name: <c:out value="${ ninja.lastName }"></c:out></h4>
            <h4>Age: <c:out value="${ ninja.age }"></c:out></h4>
            <h4>Dojo Name: <c:out value="${ ninja.dojo.name }"></c:out></h4>
        </div>
		
        <div class="text-start my-3">
            <a href="/dojos" class="btn btn-link">Home</a>
        </div>
		
	</div>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!-- Linking CSS and JavaScript -->
    <link rel="stylesheet" type="text/css" href="css/counter.css">
    <script type="text/javascript" src="js/counter.js"></script>
    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <title>Counter Index</title>
</head>
<body>
	<div class="container-sm p-5 text-center">
		<h3 class="h3">Welcome to Counter!</h3>
        <p>Refresh page to increase counter by +1</p>
        <p>Or try one of the options below:</p>
		<a href="/counter/add_two" class="btn btn-primary">Add Two</a>
		<a href="/counter/reset" class="btn btn-danger">Reset</a>
		<a href="/counter/view" class="btn btn-link">View Count (at a different route)</a>

        <h5 class="my-4">View Count (from the same route) = ( <a href="/counter"></a><c:out value="${currentCount}" /> ) times</h5>
	</div>
</body>
</html>
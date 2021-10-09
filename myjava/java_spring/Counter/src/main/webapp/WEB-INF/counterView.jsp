<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
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
    <title>Counter View</title>
</head>
<body>
	<div class="container-sm p-5 text-center">
		<h3>You have visited <a href="/">http://your_server</a> <c:out value="${currentCount}" /> times</h3>
	</div>
</body>
</html>
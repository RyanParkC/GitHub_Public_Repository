<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="ISO-8859-1">
    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <!-- YOUR own local CSS -->
    <link rel="stylesheet" href="/css/allBooks.css"/>
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <!-- <script type="text/javascript" src="js/app.js"></script> -->
    <title>Book Details View</title>
</head>
<body>
	<div class="container">
	
		<h1 class="display-4">Book Details for <c:out value="${ book.title }"/> </h1>
		<h3 class="h3">Title: <c:out value="${ book.title }"/></h3>
		<h3 class="h3">Language: <c:out value="${ book.language }"/></h3>
		<h3 class="h3">Description: <c:out value="${ book.description }"/></h3>
		<h3 class="h3">Pages: <c:out value="${ book.numberOfPages }"/></h3>
		<h3 class="h3">Created At: <c:out value="${ book.createdAt }"/></h3>
		
		<a href='/' class="btn btn-primary">Home</a>		
	</div>
</body>
</html>
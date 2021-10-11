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
    <title>Index View</title>
</head>
<body>
	<div class="container">
		<h1>Books</h1>
		
		<table class="table table-striped table-hover">
			<thead>
				<tr>
					<th>Title</th>
					<th>Description</th>
					<th>Language</th>
					<th>Pages</th>
				</tr>
			</thead>
			<tbody> 
				
				<c:forEach var="book" items="${ allBooks }">
					<tr>
						<td>
						<a href="/books/<c:out value="${ book.id }"/>" ><c:out value="${ book.title }" /></a>
						</td>
						<td><c:out value="${ book.description }"/></td>
						<td><c:out value="${ book.language }" /></td>
						<td><c:out value="${ book.numberOfPages }" /></td>
					</tr>
				</c:forEach>
				
			</tbody>			
		</table>
		<a href="/books/new" class="btn btn-success">Add Book</a>
	</div>
</body>
</html>
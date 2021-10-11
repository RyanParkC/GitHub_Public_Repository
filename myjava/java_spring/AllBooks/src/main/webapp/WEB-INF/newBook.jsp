<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

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
    <title>Add Book</title>
</head>
<body>
	<div class="container">
	
		<form:form action='/books/create' method='POST' modelAttribute="book" class="mt-3">
		
            <div class="form-floating mb-3">
            
                <form:input  placeholder="Book Title:" class="form-control" path="title" />
                
                <form:label class="form-label" path="title">Book Title:</form:label >
                
                <form:errors class="text-danger" path="title"/>
                
            </div>
            
            <div class="form-floating mb-3">
            
                <form:input type="text" placeholder="Language:" class="form-control" path='language' />
                
                <form:label class="form-label" path="language">Language</form:label >
                
                <form:errors class="text-danger" path="language"/>
                
            </div>
            
            <div class="form-floating mb-3">
                
                <form:input type="text" placeholder="Description:" class="form-control" path="description" />
                
                <form:label class="form-label" path="language">Description:</form:label >
                
                <form:errors class="text-danger" path="description"/>
                
            </div>
            
            <div class="form-floating mb-3">
                
                <form:input type="number" placeholder="Pages:" class="form-control" path="numberOfPages" />
                
                <form:label class="form-label" path="numberOfPages">Pages:</form:label >
                
                <form:errors class="text-danger" path="numberOfPages"/>
                
            </div>
        
            <input class="btn btn-primary" type='submit' value='Add Book' >
        </form:form>
		
	</div>
</body>
</html>
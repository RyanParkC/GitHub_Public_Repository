<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>

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
    <title>Edit Dojo</title>
</head>
<body>
	<div class="container" style="width:600px">
		
        <h1 class="fw-bold my-4">Edit Dojo</h1>

		<form:form action='/dojos/edit/${ dojo.id }' method='PUT' modelAttribute="dojo" class="mt-3">
		
            <div class="form-floating mb-3">
            
                <form:input  placeholder="enter a name." class="form-control" path="name" />
                <form:label class="form-label" path="name">Dojo Name:</form:label >
                <form:errors class="text-danger" path="name"/>
                
            </div>
            
            <div class="text-end">
                <input class="btn btn-primary" type='submit' value='Update Dojo' >
            </div>
            
		</form:form>
		
        <div class="text-end">
            <a href="/dojos" class="btn btn-link">Home</a>
        </div>
		
	</div>
</body>
</html>
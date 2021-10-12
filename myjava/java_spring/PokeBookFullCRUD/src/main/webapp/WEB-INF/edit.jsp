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
    <!-- BOOTSTRAP CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <!-- YOUR OWN LOCAL CSS -->
    <!-- <link rel="stylesheet" href="/css/main.css"> change to match your file/naming structure -->
    <!-- ANY BOOTSTRAP THAT USES JS OR JQUERY -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script src="/webjars/jquery/jquery.min.js"></script>
    <!-- YOUR OWN LOCAL JS -->
    <!-- <script type="text/javascript" src="js/app.js"></script> -->
    <title>Edit Page</title>
</head>
<body>
	<div class="container">
		
		<h1 class="h1 text-success my-3">Edit Expense</h1>
		
		<form:form action="/expenses/${ expense.id }" method='PUT' modelAttribute="expense" class="mt-3">
		
            <div class="form-floating mb-3">
                <form:input  placeholder="Expense Name:" class="form-control" path="name" />
                <form:label class="form-label" path="name">Expense Name:</form:label >
                <form:errors class="text-danger" path="name"/>
            </div>
            
            <div class="form-floating mb-3">
                <form:input type="text" placeholder="Vendor:" class="form-control" path='vendor' />
                <form:label class="form-label" path="vendor">Vendor:</form:label >
                <form:errors class="text-danger" path="vendor"/>
            </div>
            
            <div class="form-floating mb-3">
                <form:input type="number" step="0.01" placeholder="00.00" class="form-control" path="amount" />
                <form:label class="form-label" path="amount">Amount:</form:label >
                <form:errors class="text-danger" path="amount"/>
            </div>
            
            <div class="form-floating mb-3">
                <form:textarea  placeholder="Description:" class="form-control" path="description" />
                <form:label class="form-label" path="description">Description:</form:label >
                <form:errors class="text-danger" path="description"/>
            </div>
            
            <!-- SUBMIT BUTTON -->
            <input class="btn btn-primary" type='submit' value='Submit' >

            <!-- GO BACK -->
            <a href="/expenses" class="btn btn-link d-flex justify-content-end">Go Back</a>

		</form:form>
		
	</div>
</body>
</html>
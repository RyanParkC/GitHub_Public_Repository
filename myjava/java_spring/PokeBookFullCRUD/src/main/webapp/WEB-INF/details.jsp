<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>  

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
    <title>Details (Show/View) Page</title>
</head>
<body>
	<div class="container">
		
		<h1 class="h1 text-primary my-3">Expense Details</h1>
		<p class="h5 my-2">Name: <c:out value="${ expense.name }" /></p>
        <p class="h5 my-2">Description: <c:out value="${ expense.description }" /></p>
		<p class="h5 my-2">Vendor: <c:out value="${ expense.vendor }" /></p>
		<p class="h5 my-2">Amount: <fmt:formatNumber value="${ expense.amount }" type="currency" /></p>
        
        <!-- GO BACK -->
		<a href="/expenses" class="btn btn-link d-flex justify-content-end">Go Back</a>
		
	</div>
</body>
</html>
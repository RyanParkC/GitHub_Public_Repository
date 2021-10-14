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
    <link rel="stylesheet" href="/css/main.css"/>
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <title>Index View</title>
</head>
<body>
	<div class="container">
		
        <h1 class="fw-bold my-4">Add a New Ninja</h1>
        
		<form:form action='/ninjas/create' method='POST' modelAttribute="ninja">
		
			<div class="mb-3">                
                    <form:label class="form-label" path="dojo"></form:label >
                    
                    <form:select  class="form-select" path="dojo" >
                    
                        <form:option value="NONE">------- Select a Dojo -------</form:option>
                        
                        <c:forEach var="dojo" items="${ dojos }">
                            <form:option value="${ dojo.id }">${ dojo.name }</form:option>
                        </c:forEach>
                        
                    </form:select>
                    
                    <form:errors class="text-danger" path="dojo"/>
                    
                </div>
                <div class="form-floating mb-3">
                    <form:input  placeholder="Enter a First Name:" class="form-control" path="firstName" />
                    <form:label class="form-label" path="firstName">First Name:</form:label >
                    <form:errors class="text-danger" path="firstName"/>
                </div>
                
                <div class="form-floating mb-3">
                    <form:input type="text" placeholder="Enter a Last Name:" class="form-control" path='lastName' />
                    <form:label class="form-label" path="lastName">Last Name: </form:label >
                    <form:errors class="text-danger" path="lastName"/>
                </div>
                
                <div class="form-floating mb-3">
                    <form:input type="number" placeholder="Enter a Age:" class="form-control" path="age" />
                    <form:label class="form-label" path="age">Age:</form:label >
                    <form:errors class="text-danger" path="age"/>
                </div>
                <div class="text-end">
                    <input class="btn btn-primary" type='submit' value='Add Ninja' >
                </div>
		</form:form>
		
        <div class="text-end">
            <a href="/dojos" class="btn btn-link">Home</a>
        </div>
		
	</div>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>				<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>				<!-- Formatting (dates) --> 
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 	<!-- form:form -->
<%@ page isErrorPage="true" %>												<!-- for rendering errors on PUT routes -->

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
    <title>Home (Index) Page</title>
</head>
<body>
	<div class="container">
		<h1 class="text-primary my-3">PokeBook</h1>
		<table class="table table-striped table-hover border border-dark">
			<thead>
				<tr>
					<th>Expense</th>
					<th>Vendor</th>
					<th>Description</th>
					<th>Amount</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody> 
				<c:if test="${ !expenses.isEmpty() }">
					<c:forEach var="expense" items="${ expenses }">
						
						<tr>
							<td><c:out value="${ expense.name }" /></td>
							<td><c:out value="${ expense.vendor }"/></td>
							<td><c:out value="${ expense.description }"/></td>
							<td><fmt:formatNumber value="${ expense.amount }" type="currency" /></td>
							<td>
								<a href="/expenses/<c:out value="${ expense.id }"/>" >View</a>
								<a href="/expenses/edit/<c:out value="${ expense.id }"/>" >Edit</a>
								
								<form:form action="/expenses/delete/${ expense.id }" method="DELETE"> 
									<input type="submit" value="Delete" class="btn btn-link" />
								</form:form>
								
							</td>
						</tr>
						
					</c:forEach>
				</c:if>
				
			</tbody>			
		</table>
		
		<h2 class="text-primary my-3">Track an Expense:</h2>
		<form:form action='/expenses/create' method='POST' modelAttribute="expense" class="mt-3">
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
                <form:input type="number" step="0.01" placeholder="00.00" value="0.00" class="form-control" path="amount" />
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
		</form:form>
		
	</div>
</body>
</html>
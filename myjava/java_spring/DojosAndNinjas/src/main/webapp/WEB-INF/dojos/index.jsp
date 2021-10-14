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
    <!-- <link rel="stylesheet" href="/css/main.css"/> -->
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <!-- <script type="text/javascript" src="js/app.js"></script> -->
    <title>Index (Home) Page</title>
</head>
<body>
	<div class="container" style="width:500px">
        
        <h1 class="fw-bold my-4">List of Dojos</h1></h1>
        
		<table class="table table-striped table-hover">
		
			<thead>
				<tr class="fw-bold">
					<td>Dojo Name</td>
					<td># of Ninjas</td>
					<td>Actions</td>
				</tr>
			</thead>
			
			<tbody>
                <!-- If not empty, then forEach loop -->
				<c:if test="${ !dojos.isEmpty() }">
				
                    <!-- var = "dojo" from findOne, and items = "dojos" from findAll (from Controller) -->
					<c:forEach var="dojo" items="${ dojos }">
					
						<tr>
							<td>${ dojo.name }</td>
							<td class="text-center">${ dojo.ninjas.size() }</td>
							<td>
								<a class="btn btn-link" href="dojos/view/${ dojo.id }">View</a>
								<a class="btn btn-link text-success" href="dojos/edit/${ dojo.id }">Edit</a>
								<a class="btn btn-link text-danger" href="dojos/delete/${ dojo.id }">Delete</a>
							</td>
						</tr>
						
					</c:forEach>
					
				</c:if>
				
			</tbody>
		
		</table>
		<div class="text-end">
            <a href="/dojos/add" class="btn btn-success">Add Dojo</a>
            <a href="/ninjas/add" class="btn btn-primary">Add Ninja</a>
        </div>

		
	</div>
</body>
</html>
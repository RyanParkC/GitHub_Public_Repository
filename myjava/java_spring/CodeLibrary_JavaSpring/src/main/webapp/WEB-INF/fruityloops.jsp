<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
        <!-- Linking CSS and JavaScript -->
        <link rel="stylesheet" type="text/css" href="css/fruit.css">
        <script type="text/javascript" src="js/app.js"></script>
        <!-- for Bootstrap CSS -->
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <!-- For any Bootstrap that uses JS or jQuery-->
        <script src="/webjars/jquery/jquery.min.js"></script>
        <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <title>Fruit Store</title>
</head>
<body>
    <h1 class="container-sm my-3">Fruit Store</h1>
    <div class="container py-3 px-4" id="outerTable">
        <div class="container" id="innerTable">
            <table class="table table-hover table-striped mt-3">
                <thead>
                    <tr class="fw-bold">
                        <td>Fruit Name:</td>
                        <td>Price:</td>
                    </tr>
                </thead>
                <tbody>
                <!-- forEach fruit item-->
                <c:forEach var="fruit" items="${fruits}">
                    <tr>
                        <td><c:out value="${fruit.name}"/></td>
                        <td><c:out value="${fruit.price}"/></td>
                    </tr>
                </c:forEach>
                </tbody>
            </table>
        </div>

    </div>
</body>
</html>
<!-- Code below tells each JSP page what parts of the JSTL we are using -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!-- Add HTML Code here -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Demo JSP</title>
    </head>
<body>
    <h1>Hello World</h1>
    <h1>Two plus two is: <h1>
    <!-- Use c:out tag to insert values to display in the body of your html code -->
    <h2><c:out value="${2+2}"/></h2>    <!-- will display = 4 -->
    <h1>Fruit of the Day</h1>
    <h2><c:out value="${fruit}"/></h2>  <!-- will display = fruit input from controller -->
</body>
</html>
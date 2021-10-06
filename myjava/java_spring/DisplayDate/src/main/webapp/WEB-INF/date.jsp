<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/date.js"></script>
    
    <title>Date Template</title>
</head>
<body>
    <div class="container">
        <h3 class="border border-dark my-3">Current Date:</h3>
        <h3 class="fulldate"><strong><fmt:formatDate pattern="EEEE, MMMM d, y" value="${date}" /></strong></h3>
    </div>
</body>
</html>
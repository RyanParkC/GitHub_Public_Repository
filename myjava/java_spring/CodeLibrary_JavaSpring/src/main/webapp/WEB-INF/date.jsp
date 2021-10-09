<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- CHANGE href links accordingly -->
    <link rel="stylesheet" type="text/css" href="css/datetime.css">
    <script type="text/javascript" src="js/date.js"></script>
    <!-- for Bootstrap CSS -->
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    
    <title>Date Template</title>
</head>
<body>
    <div class="container">
        <h3 class="border border-dark my-3">Current Date:</h3>
        <h3 class="fulldate"><strong><fmt:formatDate pattern="EEEE, MMMM d, y" value="${date}" /></strong></h3>
    </div>
</body>
</html>
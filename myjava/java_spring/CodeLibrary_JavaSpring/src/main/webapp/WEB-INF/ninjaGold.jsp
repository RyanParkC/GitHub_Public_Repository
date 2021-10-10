<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <!-- for Bootstrap CSS -->
    <!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" /> -->
    <link rel="stylesheet" href="/css/ninjaGold.css"/>
    <!-- For any Bootstrap that uses JS or jQuery-->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <!-- <script type="text/javascript" src="js/app.js"></script> -->
    <title>Ninja Gold Index Page</title>
</head>
<body>
	<div class="wrapper">
        <!-- Title -->
        <h1>Welcome to Ninja Gold Game!</h1>
        <h4>Choose a Destination Below to Start Making $$$!</h4>
        <!-- Current Gold (Your Gold) -->
        <div class="flex-top">
            <div class="your-gold">
                <h3>Your Gold:</h3>
                <p class="your-gold-p"><c:out value="${ gold }"/></p>
            </div>
        </div>
        <!-- Destinations -->
        <div class="flex {% if session['switch'] == True%}hide{% endif %}">
            <!-- Farm -->
            <div class="farm box">
                <h3>Farm</h3>
                <p>(earns 10 - 20 gold)</p>
                <form action="/ninjaGold/process" method="post">
                    <input class="button" type="submit" value="Find Gold!">
                    <input type="hidden" name="process" value='farm'>
                </form>
            </div>
            <!-- Cave -->
            <div class="cave box">
                <h3>Cave</h3>
                <p>(earns 5 - 10 gold)</p>
                <form action="/ninjaGold/process" method="post">
                    <input class="button" type="submit" value="Find Gold!">
                    <input type="hidden" name="process" value='cave'>
                </form>
            </div>
            <!-- House -->
            <div class="house box">
                <h3>House</h3>
                <p>(earns 2 - 5 gold)</p>
                <form action="/ninjaGold/process" method="post">
                    <input class="button" type="submit" value="Find Gold!">
                    <input type="hidden" name="process" value='house'>
                </form>
            </div>
            <!-- Casino -->
            <div class="casino box">
                <h3>Casino</h3>
                <p>(earns/takes 0-50 gold)</p>
                <form action="/ninjaGold/process" method="post">
                    <input class="button" type="submit" value="Find Gold!">
                    <input type="hidden" name="process" value='casino'>
                </form>
            </div>
        </div>
        <!-- Activity Log -->
        <div class="activity-log"> 
            <h2>Activities: </h2>
            <c:if test="${ messages.size() >= 1 }">
                <ul>
                    <c:forEach var="message" items="${ messages }">
                        <c:choose>
                            <c:when test="${fn:contains(message, 'lost')}">
                                <li class='red'><c:out value="${ message }"/></li>
                            </c:when>
                            <c:otherwise>
                                <li class='green'><c:out value="${ message }"/></li>
                            </c:otherwise>
                        </c:choose>
                    </c:forEach>
                </ul>
            </c:if>
        </div>
    </div>
</body>
</html>
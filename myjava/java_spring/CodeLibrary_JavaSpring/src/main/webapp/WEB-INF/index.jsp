<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!-- for Bootstrap CSS -->
        <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
        <!-- For any Bootstrap that uses JS or jQuery-->
        <script src="/webjars/jquery/jquery.min.js"></script>
        <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
        <title>Home Page (Index)</title>
    </head>
<body>
    <div class="container">
        <h2 class="my-3" id="choosetemplate">Choose a URL Route Below:</h2>
        <!-- Note -->
        <div class="border border-dark my-4 px-3 py-3" style="width:650px">
            <p class="text-muted">Note: If rendering .jsp file use (we will be using this most of the time)--> @Controller</p>
            <p class="text-muted mb-1">Otherwise, use (we won't be using this much)--> @RestController</p>
        </div>
        <!-- Hello Human -->
        <span>
            <h4><a href="/hello">Hello Human (searchQuery)</a></h4>
        </span>
        <!-- Display Date/Time-->
        <span>
            <h4><a href="/display">Display Date/Time</a></h4>
        </span>
        <!-- Daikichi Routes-->
        <span>
            <h4><a href="/daikichi">Daikichi Routes</a></h4>
        </span>
        <!-- Hopper's Receipt -->
        <span>
            <h4><a href="/hopper">Hopper's Receipt (itemList)</a></h4>
        </span>
        <!-- Fruity Loops (forEach forLoops) -->
        <span>
            <h4><a href="/fruit">Fruity Loops (forEach forLoops)</a></h4>
        </span>
        <!-- Counter (++ count) -->
        <span>
            <h4><a href="/counter">Counter (++ count)</a></h4>
        </span>
        <!-- Omikuji Form (Form Submission) -->
        <span>
            <h4><a href="/omikuji">Omikuji Form Submission</a></h4>
        </span>
        <!-- Ninja Gold Game (Adding/Subtracting Gold and Display)-->
        <span>
            <h4><a href="/ninjaGold">Ninja Gold Game (Display +/- Gold)</a></h4>
        </span>

    </div>
</body>
</html>
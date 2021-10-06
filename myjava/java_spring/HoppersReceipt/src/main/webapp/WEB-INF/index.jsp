<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Hopper's Receipt</title>
    </head>
<body>
    <h2>Customer Name: <c:out value="${customerName}"></c:out></h2>
    <p>Item name: <c:out value="${itemName}"></c:out></p>
    <p>Price: $<c:out value="${priceValue}"></c:out></p>
    <p>Description: <c:out value="${itemDescription}"></c:out></p>
    <p>Vender: <c:out value="${storeName}"></c:out></p>
</body>
</html>
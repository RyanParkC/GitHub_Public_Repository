package com.codingdojo.controllerspractice.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Annotation(s)
@RestController  // allows controller to respond with data (e.g. strings, json)

// If you do not add this @ReqMethod then routes will start from baseline
@RequestMapping("/hello") // adding this makes all other in-class method routes extend from it
public class HomeController {

    // Annotation(s) + Method that maps to request route
    @RequestMapping("")		// for mapping web requests onto handler classes/methods
    public String hello() { // 3
            return "Hello World! From HomeController";
    }
    
    @RequestMapping("/world")	// access by "/hello/world" since @ReqMeth was added to top
    public String world() {
    	return "Class level annotations are cool too! From Home Controller";
    }
    
    @RequestMapping("/welcome")
    public String welcome() {
    	return "Welcome! From HomeController";
    }
}

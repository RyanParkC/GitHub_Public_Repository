package com.human.hello.controller;

// Dependencies
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// Annotations
@RestController

public class HelloHumanController {
	
	// GET Requests ------------------------------------------
	
	@RequestMapping("/")
	public String helloHuman () {
		return "Hello Human";
	}
	
	@RequestMapping("/search")		// type "/search?name=" + input
	public String helloQuery (@RequestParam(value="name", required=false) String searchQuery) {
		return "Hello " + searchQuery;
	}
	
	@RequestMapping("/search/fullname")		// type URL + firstName=value&lastName=value&times=value
	public String firstAndLastName (@RequestParam(value="firstName", required=false) String firstName,
									@RequestParam(value="lastName", required=false) String lastName,
									@RequestParam(value="repeat", required=false) String repeat) {
		if (firstName != null && lastName != null && repeat != null) {
			int multiplier = Integer.parseInt(repeat);
			String multipliedString = "";
			for (int i = 0; i < multiplier; i++) {
				multipliedString += firstName + " " + lastName + " ";
			}
			System.out.println(multipliedString);
			return multipliedString;
		} else if (firstName != null && lastName != null) {
			return "Hello (firstName) " + firstName + " (lastName) " + lastName;
		} else if (firstName != null) {
			return "Hello (firstName) " + firstName;
		} else {
			return "Hello Human";
		}
		
	}
}

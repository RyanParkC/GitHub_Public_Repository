package com.rparkc.library.code.controllers;

// Dependencies
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


// Annotations
@RestController

public class HelloHumanController {
	
	// URL Routes -----------------------------------------------------------------------------------------
	
	@RequestMapping("/hello")
	public String helloHuman () {
		return ("Hello Human"
				+ " >> Options: "
				+ " <<   /hello/search?name=____   >>"
				+ " <<   /hello/search/fullname?firstName=____&lastName=____&times=____   >>");
	}
	
	@RequestMapping("/hello/search")		// type "/search?name=" + input
	public String helloQuery (@RequestParam(value="name", required=false) String searchQuery) {
		return "Hello " + searchQuery;
	}
	
	// searchQuery
	@RequestMapping("/hello/search/fullname")		// type URL + firstName=value&lastName=value&times=value
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

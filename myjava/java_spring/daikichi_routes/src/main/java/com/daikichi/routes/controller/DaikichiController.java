package com.daikichi.routes.controller;

// Dependencies
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

// Annotations (Command + shift + O to import dependencies)
@RestController

@RequestMapping("/daikichi")
public class DaikichiController {
	
	// GET requests ------------------------------------------
	
	@RequestMapping("")
	public String welcome() {
		return "Welcome!";
	}
	
	@RequestMapping("/today")
	public String today() {
		return "Today, you will find luck in all your endeavors!";
	}
	
	@RequestMapping("/tomorrow") 
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
}

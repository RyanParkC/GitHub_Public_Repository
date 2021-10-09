package com.rparkc.library.code.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller

@RequestMapping("/display")
public class DisplayController {
	
	// Routes -----------------------------------------
	
	// src/main/webapp/WEB-INF > .jsp files
	
	// Index - 
	@RequestMapping("")
	public String index() {
	    return "displaydate.jsp";
	}
	
	// Date - 
	@RequestMapping("/date")
	public String getDate(Model model) {
		model.addAttribute("date", new java.util.Date());
		return "date.jsp";
	}
	
	// Time - 
	@RequestMapping("/time")
	public String getTime(Model model) {
		model.addAttribute("time", new java.util.Date());
		return "time.jsp";
	}
}

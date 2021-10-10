package com.rparkc.library.code.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller

@RequestMapping("/omikuji")
public class OmikujiFormController {
	
	// URL Routes ----------------------------------------------------
	
	// Index (Home Page)
	@RequestMapping("")
	public String index () {
		
		return "omikujiIndex.jsp";		// render jsp
	}
	
	// Show Info Page
	@RequestMapping("/show")
	public String showInfo (HttpSession session, Model model) {
		model.addAttribute(session.getAttribute("number"));
		model.addAttribute(session.getAttribute("city"));
		model.addAttribute(session.getAttribute("name"));
		model.addAttribute(session.getAttribute("hobby"));
		model.addAttribute(session.getAttribute("animal"));
		model.addAttribute(session.getAttribute("nice"));
		
		return "omikujiShowInfo.jsp";	// render jsp
	}
	
	// ACTION Routes -------------------------------------------------
	
	// Submit Form
	@PostMapping("/submit")
	public String login (@RequestParam(value = "number") int number,
			@RequestParam(value = "city") String city,
			@RequestParam(value = "name") String name,
			@RequestParam(value = "hobby") String hobby,
			@RequestParam(value = "animal") String animal,
			@RequestParam(value = "nice") String nice,
			HttpSession session) {
		
		session.setAttribute("number", number);
		session.setAttribute("city", city);
		session.setAttribute("name", name);
		session.setAttribute("hobby", hobby);
		session.setAttribute("animal", animal);
		session.setAttribute("nice", nice);
		
		return "redirect:/omikuji/show";
	}
}

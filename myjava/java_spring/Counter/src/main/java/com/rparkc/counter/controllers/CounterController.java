package com.rparkc.counter.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/counter")
public class CounterController {
	
	// URL Routes -------------------------------------------------------------------------
	
	// counterIndex - every visit to site will increase counter by +1
	@RequestMapping("")						// ONLY add Model model - if you want to display Counter on same page
	public String index (HttpSession session, Model model) {
		// Option #1 ---------------------------------------------------------------------
		// If the count is not already in session
		if (session.getAttribute("count") == null) {							// GET - count
			// Use setAttribute to initialize the count in session
			session.setAttribute("count", 0);									// SET - count
		} else {
			// increment the count by 1 using getAttribute and setAttribute
			Integer currentCount = (Integer) session.getAttribute("count");		// GET - currentCount
			currentCount++;														// +1 currentCount per site visit
			session.setAttribute("count", currentCount);						// SET - new currentCount
			
			// ONLY add this IF you want to display Counter on SAME PAGE! Otherwise delete out of method!
			model.addAttribute("currentCount", session.getAttribute("count"));
		}
		return "counterIndex.jsp";		// render .jsp file

//		// Option #2 ---------------------------------------------------------------------
//		// If there is no current count, then set a count starting from 0
//		if (session.getAttribute("count") == null) {	// Get = count
//			session.setAttribute("count", 0);			// Set = count
//		}
//		// Setting DataType of currentCount AND session.getAttribute("count") to Integer
//		Integer currentCount = (Integer) session.getAttribute("count");		// Get - count
//		currentCount++;		// adds +1 to current index
//		session.setAttribute("count", currentCount);						// Set - count
//		
//		return "counterIndex.jsp";	// render jsp file
	}
	
	// counterView - use Model model to view count on a DIFFERENT page other than Index page
	@RequestMapping("/view")
	public String counterRoute (HttpSession session, Model model) {
		if (session.getAttribute("count") == null) {
			session.setAttribute("count", 0);
		}
		
		model.addAttribute("currentCount", session.getAttribute("count"));
		
		return "counterView.jsp";
	}

	// Button - add_two (+2)
	@RequestMapping("/add_two")
	public String addTwo(HttpSession session) {
		
		// Setting DataType of currentCount AND session.getAttribute("count") to Integer
		Integer currentCount = (Integer) session.getAttribute("count");		// GET - currentCount
		currentCount++;		// adds +1 to current index						// 		 +1 to currentCount
		session.setAttribute("count", currentCount);						// SET - new currentCount

		return "redirect:/counter";
	}

	// Button - reset
	@RequestMapping("/reset")
	public String reset(HttpSession session) {
		session.setAttribute("count", 0);
		return "redirect:/counter";
	}
}
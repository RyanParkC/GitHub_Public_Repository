package com.rparkc.library.code.controllers;

//Imports:
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.Model;

@Controller

@RequestMapping("/hopper")
public class HoppersController {
	
	// GET methods
	@RequestMapping("")
	public String index (Model model) {
		
		String name = "Grace Hopper";
		String itemName = "Copper wire";
		double price = 5.25;
		String description = "Metal strips, also an illustration of nanoseconds.";
		String vendor = "Little Things Corner Store";
		
		// Your code here! Add values to the view model to be rendered
		model.addAttribute("customerName", name);
		model.addAttribute("itemName", itemName);
		model.addAttribute("priceValue", price);
		model.addAttribute("itemDescription", description);
		model.addAttribute("storeName", vendor);
		
		return "hopper.jsp";
	}
}
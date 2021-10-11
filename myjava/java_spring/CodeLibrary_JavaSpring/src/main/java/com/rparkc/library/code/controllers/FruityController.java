package com.rparkc.library.code.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

// Import Model - Fruit
import com.rparkc.library.code.models.Item;

@Controller
public class FruityController {
	
	@RequestMapping("/fruit")
	public String index(Model model) {

		ArrayList<Item> fruits = new ArrayList<Item>();
		fruits.add(new Item("Kiwi", 1.5));
		fruits.add(new Item("Mango", 2.0));
		fruits.add(new Item("Goji Berries", 4.0));
		fruits.add(new Item("Guava", .75));
		fruits.add(new Item("Banana", .75));
		fruits.add(new Item("Jackfruit", 4.0));
		fruits.add(new Item("Mangosteen", 2.0));
		fruits.add(new Item("Watermelon", 5.0));

		// Add fruits your view model here
		model.addAttribute("fruits", fruits);
			
		return "fruityloops.jsp";
	}
}
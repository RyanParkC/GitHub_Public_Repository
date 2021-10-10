package com.rparkc.library.code.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/ninjaGold")
public class NinjaGoldController {
	
	// URL Routes --------------------------------------------------------------------------------------------------
	
	@RequestMapping("")
	public String index(HttpSession session, Model model) {
		
		// Setting Starting Gold = 0 
		if (session.getAttribute("gold") == null) {
			session.setAttribute("gold", 0);
		}
		
		// Setting Starting Message = DataType "String"
		if (session.getAttribute("messages") == null) {
			session.setAttribute( "messages" , new ArrayList<String>());
		}
		
		// Setting Starting Message = get "messages" input (from jsp file/on display)
		if(session.getAttribute("messages") !=  null) {
			model.addAttribute("messages", session.getAttribute("messages"));
		}
		
		// Setting new variable "currentGold" = get "gold" input (from jsp file/on display)
		Integer currentGold = (Integer) session.getAttribute("gold");
		// 
		model.addAttribute("gold", currentGold);
	
		return "ninjaGold.jsp";		// render jsp file
	}
	
	// ACTION Route ------------------------------------------------------------------------------------------------
	
	// UPDATE Gold
	@PostMapping("/process")	// shortcut for @RequestMapping( method = RequestMethod.POST )
	public String updateGold(HttpSession session, @RequestParam(value = "process") String process) {
		
		// RANDOM generator
		Random random = new Random();
		
		//  Unchecked cast from Object to ArrayList "sessionMessages"
		@SuppressWarnings("unchecked")
		ArrayList<String> sessionMessages = (ArrayList<String>) session.getAttribute("messages");
		
		// SWITCH-CASE statements:
		switch (process) {
			// Farm - 
			case "farm":
				// nextInt(int n) returns a pseudorandom int between 0 (incl) and n (excl)
				int randomTenToTwenty = random.nextInt(11) + 10;
				
				// Setting new Print message to return
				String farmMessage = "You entered a farm and earned " + randomTenToTwenty + " gold. (" + new Date() + ")";
				
				// Adding farmMessage to ArrayList "sessionMessages"
				sessionMessages.add(farmMessage);
				
				// forEach newMessage --> print message to Console
				sessionMessages.forEach(newMessage -> System.out.println(newMessage));
				
				// Setting currentGold ("gold") = currentGold ("gold") + newGold (randomTenToTwenty)
				session.setAttribute( "gold" , (int) session.getAttribute( "gold" ) + randomTenToTwenty);
				
				break; // end code
				
			// Cave - 
			case "cave":
				// Setting variables
				int randomFiveToTen = random.nextInt(6) + 5;
				String caveMessage = "You entered a cave and earned " + randomFiveToTen + " gold. (" + new Date() + ")";
				
				// Adding/Printing Messages
				sessionMessages.add(caveMessage);
				sessionMessages.forEach(newMessage -> System.out.println(newMessage));
				
				// Updating currentGold
				session.setAttribute( "gold" , (int) session.getAttribute( "gold" ) + randomFiveToTen);
				
				break;
				
			// House - 
			case "house":
				int randomTwoToFive = random.nextInt(3) + 3;
				String houseMessage = "You entered a house and earned " + randomTwoToFive + " gold. (" + new Date() + ")";
				
				sessionMessages.add(houseMessage);
				sessionMessages.forEach(newMessage -> System.out.println(newMessage));
				
				session.setAttribute( "gold" , (int) session.getAttribute( "gold" ) + randomTwoToFive);
				
				System.out.println(process);
				
				break;
				
			// Casino - 
			case "casino":
				// this will generate a random number between -50 and 50
				int randomCasino = random.nextInt(101) - 50; // rand int between 0 (incl) and 101 (excl)
				
				// GAIN (+) $$
				if (randomCasino >= 0) {
					String casinoGain = "You entered a casino and earned " + randomCasino + " gold. (" + new Date() + ")";
					sessionMessages.add(casinoGain);
				} 
				
				// LOSE (-) $$
				else {
					String casinoLose = "You entered a casino and lost " + randomCasino + " gold. Ouch! (" + new Date() + ")";
					sessionMessages.add(casinoLose);
				}
				
				// Adding/Printing Messages
				sessionMessages.forEach(newMessage -> System.out.println(newMessage));
				session.setAttribute( "gold" , (int) session.getAttribute( "gold" ) + randomCasino);
				
				break;
				
			default:
				// If NO Action taken on any Case statements
				System.out.println("No action taken on any case statements.");
				
				break; // end code
				
		}
		
		return "redirect:/ninjaGold";	// redirect to Home Page
	}
}
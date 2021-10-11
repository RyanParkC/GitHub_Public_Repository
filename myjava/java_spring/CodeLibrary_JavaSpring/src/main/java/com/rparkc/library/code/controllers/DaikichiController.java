package com.rparkc.library.code.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// Annotations
@RestController


@RequestMapping("/daikichi")
public class DaikichiController {
	
	// GET methods
	
	// Index
	@RequestMapping("")
	public String welcome() {
		return "Welcome to Daikichi Routes! Try out: '/travel/location' or '/lotto/#";
	}
	
	// Today
	@RequestMapping("/today")
	public String today() {
		return "Today, you will find luck in all your endeavors!";
	}
	
	// Tomorrow
	@RequestMapping("/tomorrow") 
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	
	// Travel Route
	// 						  @PathVariable allows for direct user input into URL
	@RequestMapping(value="/travel/{location}", method=RequestMethod.GET)
	public String travelRoute (@PathVariable("location") String location) {
		return "Congratulations! You will soon travel to " + location + "!";
	}
	
	// Lottery
	@RequestMapping(value="/lotto/{number}", method=RequestMethod.GET)
	public String lottoAttempt (@PathVariable("number") String number) {
		int oddOrEven = Integer.parseInt(number);	// returns an Integer
		// If EVEN number (divisible by 2 with no remainder), then:
		if (oddOrEven % 2 == 0) {
			return "You will take a grand journey in the near future, but be wary of tempting offers";
		// If NOT EVEN number, then:
		} else {
			return "You have enjoyed the fruits of your labor but now it is a great time to spend time with your family and friends";
		}
	}
}
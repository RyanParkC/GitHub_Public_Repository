package com.rparkc.library.code.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

// MUST use @Controller in order to RENDER .jsp files!
// IF NOT rendering any .jsp files, then use @RestController instead

@Controller
public class IndexController {

	@RequestMapping("/")
	public String homePage () {
		return "index.jsp";
	}
}
package com.codingdojo.firstproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// 2. Importing dependencies - for Annotation(s)
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication

public class FirstprojectApplication {
		
		// "main" function
        public static void main(String[] args) {
        	// Run Spring Application
                SpringApplication.run(FirstprojectApplication.class, args);
        }
 
        // 3. Method that maps to the request route above
        // "/"
        public String hello() { // 3
                return "Hello World!";
        }
}


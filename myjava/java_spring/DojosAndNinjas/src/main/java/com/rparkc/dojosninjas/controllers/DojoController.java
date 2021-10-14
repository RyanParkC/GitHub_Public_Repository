package com.rparkc.dojosninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.rparkc.dojosninjas.models.Dojo;
import com.rparkc.dojosninjas.services.DojoService;


@Controller
public class DojoController {
	
	// ***** AUTO-ADD REPOSITORY DEPENDENCIES *********************** //
	
	// Creates an instance (dojoService) of class DojoService
	
	@Autowired
	private DojoService dojoService;
	
	// ***** DISPLAY ROUTES ***************************************** //
	
	// ===== CRUD (READ) METHODS =================== //
	
	// ----- INDEX (DOJO) HOME PAGE  --------------- //
	
	@GetMapping( "/" )
	public String index() {
		
		return "redirect:/dojos";
	}
	
	@GetMapping( "/dojos" )
	public String dojos( Model model ) {		// Model - sets up an object (model)
		
		// List - ALL dojos
		
		List<Dojo> dojos = dojoService.findAll();
		
		// "dojos" from index.jsp
		
		model.addAttribute( "dojos", dojos );	// add attributes to model "dojos" = dojos (from controller)
		
		return "dojos/index.jsp";
	}
	
	// ----- ADD NEW (DOJO) PAGE -------------------- //
	
	@GetMapping( "/dojos/add" )
	public String add( @ModelAttribute( "dojo" ) Dojo dojo ) {
		
		return "dojos/add.jsp";	// modelAttribute "dojo" set to add.jsp file
	}
	
	// ----- EDIT (DOJO) PAGE ----------------------- //
	
	@GetMapping( "/dojos/edit/{id}" )	// PathVariable links "id" from typed URL to method
	public String edit( @PathVariable( "id" ) Long id, Model model ) {	// Model links model to jsp file
		
		// Using Dojo (from models) to set model object "dojo" 
		Dojo dojo = dojoService.findOne( id );
		
		model.addAttribute("dojo", dojo);	// model "dojo" set for use in jsp file
		
		return "dojos/edit.jsp";
	}
	
	// ----- VIEW DETAILS (DOJO) PAGE --------------- //
	
	@GetMapping( "/dojos/view/{id}" )
	public String details( @PathVariable( "id" ) Long id, Model model) {
		
		Dojo dojo = dojoService.findOne( id );
		
		model.addAttribute( "dojo", dojo );
		
		return "dojos/details.jsp";
		
	}
	
	// ***** ACTION ROUTES ****************************************** //
	
	// ===== CRUD (CREATE/UPDATE/DELETE) METHODS ===== //
	
	// ----- CREATE (DOJO) --------------------------- //
	
	@PostMapping( "/dojos/create" ) 	// runs through validations before creating new instance "dojo"
	public String create( @Valid @ModelAttribute( "dojo" ) Dojo dojo, BindingResult result, Model model ) {
		
		if ( result.hasErrors() ) {
			
			return "dojos/add.jsp";
		}
		
		else {
			
			dojoService.save( dojo );
			
			return "redirect:/dojos";
		}
	}
	
	// ----- UPDATE/EDIT (DOJO) ---------------------- //
	
	@PutMapping( "/dojos/edit/{id}" )	// runs through validations before updating/editing instance "dojo" by ID
	public String update(  @PathVariable( "id" ) Long id, @Valid @ModelAttribute( "dojo" ) Dojo dojo, BindingResult result, Model model ) {
		
		if ( result.hasErrors() ) {
			
			return "dojos/edit.jsp";
		}
		
		else {
			
			dojoService.save(dojo);
			
			return "redirect:/dojos";
		}
	}
	
	// ----- DELETE (DOJO) --------------------------- //
	
	@GetMapping( "/dojos/delete/{dojoId}" )
	public String delete ( @PathVariable( "dojoId" ) Long id ) {
		
		Dojo dojo = dojoService.findOne( id );
		
		if (dojo.getNinjas().size() > 0) {
			
			return "dojos/error.jsp";
			
		} else {
			
			dojoService.deleteDojo( id );
			
		}
		
		return "redirect:/";
	}	
}
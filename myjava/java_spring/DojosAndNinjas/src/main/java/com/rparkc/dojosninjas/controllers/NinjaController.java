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
import com.rparkc.dojosninjas.models.Ninja;
import com.rparkc.dojosninjas.services.DojoService;
import com.rparkc.dojosninjas.services.NinjaService;


@Controller
public class NinjaController {
	

	// ***** AUTO-ADD REPOSITORY DEPENDENCIES *********************** //
	
	// Creates instances (ninja and dojoService) of class Ninja and DojoService
	
	@Autowired
	private NinjaService ninjaService;
	
	@Autowired
	private DojoService dojoService;
	
	// ***** DISPLAY ROUTES ***************************************** //
	
	// ===== CRUD (READ) METHODS =================== //
	
	// ----- ADD NEW (NINJA) PAGE ------------------- //
	
	@GetMapping( "/ninjas/add" )
	public String add( @ModelAttribute( "ninja" ) Ninja ninja, Model model ) {
		
		List<Dojo> dojos = dojoService.findAll();
		
		model.addAttribute( "dojos", dojos );
		
		return "ninjas/add.jsp";
	}

	// ----- EDIT (NINJA) PAGE ---------------------- //
	
	@GetMapping( "/ninjas/edit/{id}" )
	public String edit( @PathVariable( "id" ) Long id, Model model ) {
		
		List<Dojo> dojos = dojoService.findAll();
		
		model.addAttribute( "ninja", ninjaService.findOne( id ) );
		
		model.addAttribute( "dojos", dojos );
		
		
		return "ninjas/edit.jsp";
	}
	
	// ----- VIEW DETAILS (NINJA) PAGE -------------- //
	
	@GetMapping( "ninjas/view/{id}" )
	public String view( @PathVariable( "id" ) Long id, Model model ) {
		
		Ninja ninja = ninjaService.findOne( id );
		
		model.addAttribute( "ninja", ninja );
		
		return "ninjas/details.jsp";
	}
	
	// ***** ACTION ROUTES ****************************************** //
	
	// ===== CRUD (CREATE/UPDATE/DELETE) METHODS ===== //
	
	// ----- CREATE (NINJA) -------------------------- //
	
	@PostMapping( "/ninjas/create" )
	public String create( @Valid @ModelAttribute( "ninja" ) Ninja ninja, BindingResult result, Model model ) {
		
		if ( result.hasErrors() ) {
			
			List<Dojo> dojos = dojoService.findAll();
			
			model.addAttribute( "dojos", dojos );
			
			return "ninjas/add.jsp";
		}
		
		else {
			
			ninjaService.save( ninja );
			
			return "redirect:/";
		}
	}
	
	// ----- UPDATE/EDIT (NINJA) --------------------- //
	
	@PutMapping( "/ninjas/edit/{id}" )
	public String update( @Valid @ModelAttribute( "ninja" ) Ninja ninja, BindingResult result, Model model ) {
		
		if ( result.hasErrors() ) {
			
			List<Dojo> dojos = dojoService.findAll();
			
			model.addAttribute( "dojos", dojos );
			
			return "ninjas/edit.jsp";
		}
		
		else {
			
			ninjaService.save( ninja );
			
			return "redirect:/dojos/view/" + ninja.getDojo().getId();
		}
	}
	
	// ----- DELETE (NINJA) -------------------------- //
	
	@GetMapping( "/ninjas/delete/{ninjaId}" )
	public String delete ( @PathVariable( "ninjaId" ) Long id ) {
		
		ninjaService.deleteNinja( id );
		
		return "redirect:/";
	}	
}
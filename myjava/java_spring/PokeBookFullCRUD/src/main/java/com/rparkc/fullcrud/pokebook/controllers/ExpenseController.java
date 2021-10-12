package com.rparkc.fullcrud.pokebook.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.rparkc.fullcrud.pokebook.models.Expense;
import com.rparkc.fullcrud.pokebook.services.ExpenseService;

@Controller
public class ExpenseController {

	
	// ********** Member Variables *************
	
	private final ExpenseService expenseService;
	
	
	// ********** Constructor ******************
	
	public ExpenseController( ExpenseService expenseService ) {
		
		this.expenseService = expenseService;
	}
	
	// Display (GET) Routes ----------------------------------------------------------
	
	// @GetMapping - shortkey for @RequestMapping (method = RequestMethod.GET)
	
	@GetMapping( "/" )
	public String index(){
		
		return "redirect:/expenses";
	}
	
	// READ ALL - Expenses
	@GetMapping( "/expenses" )
	public String dashboard( @ModelAttribute( "expense" ) Expense expense, Model model ) {
		
		List<Expense> expenses =  expenseService.allExpenses();
		
		model.addAttribute( "expenses", expenses );
		
		return "index.jsp";
	}
	
	@GetMapping( "/expenses/{expenseId}" )
	public String view( @PathVariable( "expenseId" ) Long id, Model model ) {
		
		Expense expense = expenseService.findOneExpense( id );
		
		model.addAttribute( "expense", expense );
		
		return "details.jsp";
	}
	
	@GetMapping( "/expenses/edit/{expenseId}" )
	public String edit( @PathVariable( "expenseId" ) Long id, Model model ) {
		
		Expense expense = expenseService.findOneExpense( id );
		
		model.addAttribute( "expense", expense );
		
		return "edit.jsp";
	}
	
	// ********** Action Routes ****************
	
	// @PostMapping - shortkey for @RequestMapping (method = RequestMethod.POST)
	// @PutMapping - shortkey for @RequestMapping (method = RequestMethod.PUT)
	
	// CRUD Methods -
	
	// CREATE - Expense
	@PostMapping( "/expenses/create" )
	public String add( @Valid @ModelAttribute( "expense" ) Expense expense, BindingResult result, Model model  ) {
		
		if ( result.hasErrors() ) {
			ArrayList<Expense> expenses = ( ArrayList<Expense> ) expenseService.allExpenses();
			
			model.addAttribute( "expenses", expenses );
			
			return "index.jsp";
		}
		
		else {
			
			expenseService.createExpense( expense );
			
			return "redirect:/expenses";
		}
	}
	
	// UPDATE - Expense by ID
	@PutMapping( "/expenses/{id}" )
	public String update( @Valid @ModelAttribute( "expense" ) Expense expense, BindingResult result ) {
		
		if ( result.hasErrors() ) {
			
			return "edit.jsp";
		}
		
		else {
			
			expenseService.createExpense( expense );
			
			return "redirect:/expenses";
		}
	}
	
	// DELETE - Expense by ID
	@DeleteMapping( "/expenses/delete/{expenseId}" )
	public String delete( @PathVariable( "expenseId" ) Long id ) {
		
		expenseService.deleteExpense(id);
		
		return "redirect:/expenses";
	}
}
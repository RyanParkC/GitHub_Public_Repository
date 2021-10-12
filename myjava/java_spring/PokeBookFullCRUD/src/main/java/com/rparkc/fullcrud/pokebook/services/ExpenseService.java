package com.rparkc.fullcrud.pokebook.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.rparkc.fullcrud.pokebook.models.Expense;
import com.rparkc.fullcrud.pokebook.repositories.ExpenseRepository;


@Service
public class ExpenseService {
	
	// Member Variable(s) ---------------------------------------------

	// adding the Expense repository as a dependency
	private final ExpenseRepository expenseRepository;
	
	// Constructor ----------------------------------------------------
	
	public ExpenseService(ExpenseRepository expenseRepository) {
		
		this.expenseRepository = expenseRepository;
	}
	
	// Methods --------------------------------------------------------

	// CRUD Methods ---------------------

	// CREATE - Expense
	public Expense createExpense( Expense e ) {
		
		return expenseRepository.save( e );
	}
	
	// READ (SHOW) - ALL Expenses
	public List<Expense> allExpenses(){
		
		return expenseRepository.findAll();
	}
	
	// READ (SHOW) - ONE Expense
	public Expense findOneExpense( Long id ) {
		
		Optional<Expense> expenseOptional = expenseRepository.findById( id );
		
		if( expenseOptional.isPresent() ) {
			return expenseOptional.get();
		}
		else {
	
			return null;
		}
	}
	
	// UPDATE - a Expense
	public Expense updateExpense(Long id, String name, String vendor, Integer amount, String description) {
		
		Optional<Expense> getExpense = expenseRepository.findById(id);
		
		if (getExpense.isPresent()) {
			Expense updateExpense = getExpense.get();
			
			updateExpense.setName(name);
			updateExpense.setVendor(vendor);
			updateExpense.setAmount(amount);
			updateExpense.setDescription(description);
			
			return expenseRepository.save(updateExpense);
		}
		return null;
	}
	
	// DELETE - Expense
	public void deleteExpense(Long id) {
		
		expenseRepository.deleteById(id);
	}
	
}
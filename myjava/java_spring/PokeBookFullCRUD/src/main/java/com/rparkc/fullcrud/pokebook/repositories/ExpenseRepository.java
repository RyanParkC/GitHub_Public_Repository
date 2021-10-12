package com.rparkc.fullcrud.pokebook.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.rparkc.fullcrud.pokebook.models.Expense;

public interface ExpenseRepository extends CrudRepository<Expense, Long> {
	
	// Methods (Interface) ---------------------------------------------------
	//	- can be used by ALL classes
	
	// this method retrieves ALL the Expenses from the database
	List<Expense> findAll();
}
package com.rparkc.allbooks.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rparkc.allbooks.models.Book;


@Repository
public interface BookRepository extends CrudRepository<Book, Long>{

	// Methods (Interface) ---------------------------------------------------
	//	- can be used by ALL classes
	
	// this method retrieves ALL the books from the database
	 List<Book> findAll();
	 
	 // this method finds books with descriptions containing the "search" string
	 List<Book> findByDescriptionContaining(String search);
	 
	 // this method counts how many titles contain a certain string
	 Long countByTitleContaining(String search);
	 
	 // this method DELETES a book that starts with a specific title
	 Long deleteByTitleStartingWith(String search);
}
package com.rparkc.allbooks.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rparkc.allbooks.models.Book;
import com.rparkc.allbooks.services.BookService;

@RestController
public class BooksAPI {

	// Member Variable(s) --------------------------------------------------------------

	// this tells us we are going to be using a bookService that will NOT be changing
	private final BookService bookService;

	// Constructor ---------------------------------------------------------------------

	public BooksAPI (BookService bookService) {
		super();
		this.bookService = bookService;
	}

	// URL Routes ----------------------------------------------------------------------

	// List - ALL Books
	@RequestMapping("/api/books")
	public List<Book> index() {
		return bookService.allBooks();
	}

	// CRUD Methods -------------------------------
	
	// CREATE - NEW Book
	@RequestMapping(value = "/api/books", method = RequestMethod.POST)
	public Book create(@RequestParam(value = "title") String title, 
			@RequestParam(value = "description") String description,
			@RequestParam(value = "language") String language, 
			@RequestParam(value = "numberOfPages") Integer numberOfPages) {
		
		Book book = new Book(title, description, language, numberOfPages);
		return bookService.createBook(book);
	}
	
	// READ (SHOW) - Book by ID
	@RequestMapping("/api/books/{id}")
	public Book show(@PathVariable("id") Long id) {
		Book book = bookService.findBook(id);
		return book;
	}
	
	// UPDATE - Edit Book
	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.PUT)
	public Book update(
			@PathVariable("id") Long id, 
			@RequestParam(value = "title") String title,
			@RequestParam(value = "description") String description, 
			@RequestParam(value = "language") String language,
			@RequestParam(value = "numberOfPages") Integer numberOfPages) {
		Book book = bookService.updateBook(id, title, description, language, numberOfPages);
		return book;
	}
	
	// DELETE - Delete Book from DB
	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		bookService.deleteBook(id);
	}
}

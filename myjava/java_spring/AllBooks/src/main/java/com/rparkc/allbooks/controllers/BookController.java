package com.rparkc.allbooks.controllers;

import java.util.ArrayList;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.rparkc.allbooks.models.Book;
import com.rparkc.allbooks.services.BookService;

@Controller
public class BookController {

	// @Autowired - auto-manages dependency injection for our setter method parameters

	@Autowired
	BookService bookService;

	// Display (GET) Routes ----------------------------------------------------------
	
	// @GetMapping - shortkey for @RequestMapping (method = RequestMethod.GET)
	// @PostMapping - shortkey for @RequestMapping (method = RequestMethod.POST)

	// GET - Index (Home) Page
	@GetMapping( "/" )
	public String index() {

		return "redirect:/books";
	}

	// GET - ALL Books
	@GetMapping( "/books" )
	public String viewAllBooks(Model model) {

		ArrayList<Book> allBooks = ( ArrayList<Book> ) bookService.allBooks();

		for (Book book : allBooks) {

			System.out.println( book.getTitle() );
		}

		model.addAttribute( "allBooks", allBooks );

		return "index.jsp";
	}

	// GET - Book by ID
	@GetMapping( "/books/{bookId}" )
	public String viewBook(@PathVariable( "bookId" ) Long bookId, Model model) {

		Book book = bookService.findBook( bookId );
		
		model.addAttribute( "book", book );

		return "bookDetails.jsp";
	}

	// GET - New Book
	@GetMapping( "/books/new" )
	public String bookFormView(@ModelAttribute( "book" ) Book book) {

		return "newBook.jsp";
	}

	// Action (POST) Routes ----------------------------------------------------------

	// POST - Create Book
	@PostMapping( "/books/create" )
	public String addBook(@Valid @ModelAttribute( "book" ) Book book, BindingResult result) {

		if ( result.hasErrors() ) {

			return "newBook.jsp";
		}

		else {
			bookService.createBook( book );

			return "redirect:/";
		}
	}
}
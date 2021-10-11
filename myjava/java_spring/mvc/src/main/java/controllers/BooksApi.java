package controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rparkc.mvc.models.Book;

import services.BookService;


@RestController
public class BooksApi {

	// Member Variable(s)
	// --------------------------------------------------------------

	// this tells us we are going to be using a bookService that will NOT be
	// changing
	private final BookService bookService;

	// Constructor ---------------------------------------------------------------------

	public BooksApi(BookService bookService) {
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
	public Book create(@RequestParam(value = "title") String title, @RequestParam(value = "description") String desc,
			@RequestParam(value = "language") String lang, @RequestParam(value = "pages") Integer numOfPages) {
		Book book = new Book(title, desc, lang, numOfPages);
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
			@RequestParam(value = "description") String desc, 
			@RequestParam(value = "language") String lang,
			@RequestParam(value = "pages") Integer numOfPages) {
		Book book = bookService.updateBook(id, title, desc, lang, numOfPages);
		return book;
	}
	
	// DELETE - Delete Book from DB
	@RequestMapping(value = "/api/books/{id}", method = RequestMethod.DELETE)
	public void destroy(@PathVariable("id") Long id) {
		bookService.deleteBook(id);
	}
}
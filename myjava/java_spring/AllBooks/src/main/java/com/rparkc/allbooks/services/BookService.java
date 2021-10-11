package com.rparkc.allbooks.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.rparkc.allbooks.models.Book;
import com.rparkc.allbooks.repositories.BookRepository;


@Service
public class BookService {

	// Member Variable(s) ---------------------------------------------

	// adding the book repository as a dependency
	private final BookRepository bookRepository;

	// Constructor ----------------------------------------------------

	public BookService(BookRepository bookRepository) {
		
		this.bookRepository = bookRepository;
	}

	// Methods --------------------------------------------------------

	// CRUD Methods ---------------------

	// CREATES - a book
	public Book createBook(Book b) {
		
		return bookRepository.save(b);
	}

	// READ (show) - ALL books
	public List<Book> allBooks() {
		
		return bookRepository.findAll();
	}

	// READ (show) - a book
	public Book findBook(Long id) {
		
		Optional<Book> optionalBook = bookRepository.findById(id);
		
		if (optionalBook.isPresent()) {
			return optionalBook.get();
		} else {
			return null;
		}
	}

	// UPDATE - a book
	public Book updateBook(Long id, String title, String desc, String lang, Integer numOfPages) {
		
		Optional<Book> getBook = bookRepository.findById(id);
		
		if (getBook.isPresent()) {
			Book updateBook = getBook.get();
			
			updateBook.setTitle(title);
			updateBook.setLanguage(lang);
			updateBook.setDescription(desc);
			updateBook.setNumberOfPages(numOfPages);
			
			return bookRepository.save(updateBook);
		}
		return null;
	}

	// DELETE - a book
	public void deleteBook(Long id) {
		
		bookRepository.deleteById(id);
	}
}
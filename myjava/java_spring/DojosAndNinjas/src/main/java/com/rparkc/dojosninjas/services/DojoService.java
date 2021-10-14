package com.rparkc.dojosninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rparkc.dojosninjas.models.Dojo;
import com.rparkc.dojosninjas.repositories.DojoRepository;


@Service
public class DojoService {
	
	// ***** AUTO-ADD REPOSITORY DEPENDENCIES ***********************
	
	// Creates an instance (dojoRepository) of interface DojoRepository
	
	@Autowired
	private DojoRepository dojoRepository;
	
	// ***** CRUD REPOSITORY METHODS ********************************

	// ----- CREATE / UPDATE (SAVE) METHOD -----------
	
	public Dojo save( Dojo dojo ) {
		
		return dojoRepository.save( dojo );
	}
	
	// ----- READ ALL --------------------------------
	
	public List<Dojo> findAll(){
		
		// List - used to list all items
		
		return dojoRepository.findAll();
	}

	// ----- READ ONE --------------------------------
	
	public Dojo findOne( Long id ) {
		
		// Optional - used to set up IF-ELSE statements
		
		Optional<Dojo> dojoOptional = dojoRepository.findById( id );
		
		if( dojoOptional.isPresent() ) {
			
			return dojoOptional.get();
		}

		else {
			
			return null;
		}
	}
	
	// ----- DELETE ----------------------------------
	
	public void deleteDojo( Long id ) {
		
		dojoRepository.deleteById( id );
	}
}
package com.rparkc.dojosninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rparkc.dojosninjas.models.Ninja;
import com.rparkc.dojosninjas.repositories.NinjaRepository;


@Service
public class NinjaService {
	
	// ***** AUTO-ADD REPOSITORY DEPENDENCIES *********************** //
	
	// Creates an instance (ninjaRepository) of interface NinjaRepository
	
	@Autowired
	private NinjaRepository ninjaRepository;
	
	// ***** CRUD REPOSITORY METHODS ******************************** //
	
	// ----- CREATE / UPDATE (SAVE) METHOD --------- //
	
	public Ninja save( Ninja ninja ) {
		
		return ninjaRepository.save( ninja );
	}
	
	// ----- READ ALL ------------------------------ //
	
	public List<Ninja> findAll(){
		
		// List - used to list all items
		
		return ninjaRepository.findAll();
	}
	
	// ----- READ ONE ------------------------------ //
	
	public Ninja findOne( Long id ) {
		
		// Optional - used to set up IF-ELSE statements
			
		Optional<Ninja> ninjaOptional = ninjaRepository.findById( id );
		
		if( ninjaOptional.isPresent() ) {
			
			return ninjaOptional.get();
		}

		else {
			
			return null;
		}
	}

	// ----- DELETE -------------------------------- //
	
	public void deleteNinja( Long id ) {
		
		ninjaRepository.deleteById( id );
	}
}
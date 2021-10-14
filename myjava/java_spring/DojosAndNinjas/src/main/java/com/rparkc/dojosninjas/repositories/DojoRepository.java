package com.rparkc.dojosninjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.rparkc.dojosninjas.models.Dojo;


public interface DojoRepository extends CrudRepository<Dojo, Long>{
	
	// ***** INTERFACE METHODS (USED BY ALL CLASSES) ********* //
	
	List<Dojo> findAll();

}
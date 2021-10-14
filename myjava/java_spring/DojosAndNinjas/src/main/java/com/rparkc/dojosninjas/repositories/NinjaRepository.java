package com.rparkc.dojosninjas.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.rparkc.dojosninjas.models.Ninja;


public interface NinjaRepository extends CrudRepository<Ninja, Long>{
	
	// ***** INTERFACE METHODS (USED BY ALL CLASSES) ********* //

	List<Ninja> findAll();
}
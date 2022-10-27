package hu.webshop.dripshop.example_package.service;

import hu.webshop.dripshop.example_package.repository.ExampleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExampleService {

	@Autowired
	ExampleDTO exampleRepo;


	public String getExampleString() {
		exampleRepo.createExample("Ahol a pacek a still");
		return exampleRepo.get();
	}
}

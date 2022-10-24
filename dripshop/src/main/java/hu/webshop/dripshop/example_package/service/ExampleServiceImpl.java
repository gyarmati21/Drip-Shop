package hu.webshop.dripshop.example_package.service;

import hu.webshop.dripshop.example_package.repository.ExampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExampleServiceImpl implements ExampleService {

	@Autowired
	ExampleRepository exampleRepo;

	@Override
	public String getExampleString() {
		return exampleRepo.getExampleData();
	}
}

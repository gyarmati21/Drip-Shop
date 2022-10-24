package hu.webshop.dripshop.example_package.repository;

import org.springframework.stereotype.Repository;

@Repository
public class ExampleDTO implements ExampleRepository {

	@Override
	public String getExampleData() {
		return "Ahol a pacek a still";
	}
}

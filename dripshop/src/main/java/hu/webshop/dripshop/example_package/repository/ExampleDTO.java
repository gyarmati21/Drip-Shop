package hu.webshop.dripshop.example_package.repository;

import hu.webshop.dripshop.example_package.model.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.util.List;
import java.util.Map;

@Repository
public class ExampleDTO extends JdbcDaoSupport {

	@Autowired
	DataSource dataSource;

	@PostConstruct
	private void initialize() {
		setDataSource(dataSource);
	}

	public void createExample(String name) {
		String sql = "INSERT INTO example(name) VALUES(?)";
		getJdbcTemplate().update(sql, name);
	}

	public String get() {
		String sql = "SELECT * FROM example";
		List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);

		return (String) rows.get(0).get("name");
	}
}

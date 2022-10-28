package hu.webshop.dripshop.example;

import hu.webshop.dripshop.example_package.controller.ExampleController;
import hu.webshop.dripshop.example_package.repository.ExampleDTO;
import hu.webshop.dripshop.example_package.service.ExampleService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ExampleTest {

    @Mock
    ExampleDTO dao;

    @InjectMocks
    ExampleService service;

    @Test
    void assertThatExampleIsAnExample() {
        when(dao.get()).thenReturn("some text");
        assertEquals("some text", service.getExampleString());
    }
}

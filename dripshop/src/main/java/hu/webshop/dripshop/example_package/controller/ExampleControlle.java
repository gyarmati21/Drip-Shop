package hu.webshop.dripshop.example_package.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExampleControlle {
    @GetMapping("/")
    public String examplePage(){
        return "example-page";
    }
}

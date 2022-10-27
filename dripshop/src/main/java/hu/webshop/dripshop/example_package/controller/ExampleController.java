package hu.webshop.dripshop.example_package.controller;

import hu.webshop.dripshop.example_package.service.ExampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExampleController {

    @Autowired
    ExampleService exampleService;

    @GetMapping("/")
    public String examplePage(Model model){
        model.addAttribute("exampleData", exampleService.getExampleString());
        return "example-page";
    }
}

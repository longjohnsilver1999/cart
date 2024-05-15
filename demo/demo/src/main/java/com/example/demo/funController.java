//tushar dns ki bhosdi
package com.example.demo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class funController {
@GetMapping("/")
public String sayHello(){
    return "tushar dns ki mehnat";
}
    
}


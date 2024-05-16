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
  @GetMapping("/start")
public String sayHello1(){
    return "tushar dns ki start";
}  

@GetMapping("/signin")
public String sayHello1q(){
    return "sign in u idiot";
}  
}


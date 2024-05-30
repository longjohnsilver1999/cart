//tushar dns ki bhosdi
package com.example.demo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;


@RestController
public class funController {
@GetMapping("/")
public String sayHello(){
    return "tushar dns";
}
  @GetMapping("/start")
public String sayHello1(){
    return "hello startlll ";
}  

@GetMapping("/signin")
public String sayHello1q(){
    return "sign in mr tushar";
}  
@Value("${sumit.name}")
private String sumitName;  


@Value("${car.model}")
private String carModel; 

@GetMapping("/values")
    public String getVals(){
        return "abc"+ sumitName+"cars"+ carModel; 
}
}




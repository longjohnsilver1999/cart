package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController{
    private Coach MyCoach ;
    @Autowired
    public DemoController(Coach theCoach){
        MyCoach=theCoach;
    }
    @GetMapping("/dailyworkout")
    public String workout(){
     return MyCoach.getDailyWorkOut();
    }
}
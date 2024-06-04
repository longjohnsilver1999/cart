package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	//The @Bean annotation in Spring is used to declare a method in a configuration class that produces a 
	//bean managed by the Spring IoC container.
    @Bean
	public CommandLineRunner commandLineRunner(String[] args){
		//Java lambda expression
		return runner -> System.out.println("Hello");
	}
}

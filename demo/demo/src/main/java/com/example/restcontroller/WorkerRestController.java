package com.example.restcontroller;

import com.example.workerentity.Worker;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WorkerRestController {

    // define endpoint for "/workers" - return a list of workers
    @GetMapping("/workers")
    public List<Worker> getWorkers() {

        List<Worker> theWorkers = new ArrayList<>();

        theWorkers.add(new Worker("Poornima", "Patel"));
        theWorkers.add(new Worker("Mario", "Rossi"));
        theWorkers.add(new Worker("Mary", "Smith"));

        return theWorkers;
    }
}
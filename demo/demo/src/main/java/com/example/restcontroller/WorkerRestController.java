package com.example.restcontroller;

import com.example.workerentity.Worker;
import javax.annotation.PostConstruct;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class WorkerRestController {
    private List<Worker> theWorkers;
    // define endpoint for "/workers" - return a list of workers
    @PostConstruct
    public List<Worker> loadData() {
        theWorkers = new ArrayList<>();

        theWorkers.add(new Worker("Poornima", "Patel"));
        theWorkers.add(new Worker("Mario", "Rossi"));
        theWorkers.add(new Worker("Mary", "Smith"));

        return theWorkers;
    }

    // define endpoint for "/workers" - return a list of worker
    @GetMapping("/workers")
    public List<Worker> getWorkers() {
        return theWorkers;
    }

    // define endpoint or "/workers/{workerId}" - return worker at index
    @GetMapping("/workers/{workerId}")
    public Worker getWorker(@PathVariable int workerId) {
        return theWorkers.get(workerId);
    }
}
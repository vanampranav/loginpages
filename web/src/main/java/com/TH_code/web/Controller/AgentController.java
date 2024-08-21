package com.TH_code.web.Controller;

import com.TH_code.web.Service.AgentService;
import com.TH_code.web.entity.Agent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/agent-dashboard"})
public class AgentController {

    @Autowired
    private AgentService agentService;

    @PostMapping("/add")
    public Agent createAgent(@RequestBody Agent agent) {
        return agentService.saveAgent(agent);
    }

    @GetMapping("/agents")
    public List<Agent> getAllAgents() {
        return agentService.getAllAgents();
    }

    @GetMapping("/agents/{id}")
    public Agent getAgentById(@PathVariable int id) {
        Agent agent = agentService.getAgentById(id);
        return this.agentService.getAgentById(id);
    }

    @DeleteMapping("/agents/{id}")
    public ResponseEntity<Void> deleteAgent(@PathVariable int id) {
        agentService.deleteAgent(id);
        return ResponseEntity.noContent().build();
    }
}

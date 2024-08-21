package com.TH_code.web.Service;

import com.TH_code.web.Repository.AgentRepository;
import com.TH_code.web.entity.Agent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgentService {

    @Autowired
    private AgentRepository agentRepository;

    public Agent saveAgent(Agent agent) {
        return agentRepository.save(agent);
    }

    public List<Agent> getAllAgents() {
        return agentRepository.findAll();
    }

    public Agent getAgentById(int id) {
        return agentRepository.findById(id);
    }

    public void deleteAgent(int id) {
        agentRepository.deleteById(id);
    }
}

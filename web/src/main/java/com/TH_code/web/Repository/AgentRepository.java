package com.TH_code.web.Repository;

import com.TH_code.web.entity.Agent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgentRepository extends JpaRepository<Agent,Integer> {

    Agent findById(int id);
}

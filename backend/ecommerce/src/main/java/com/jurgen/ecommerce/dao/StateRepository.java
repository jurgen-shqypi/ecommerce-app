package com.jurgen.ecommerce.dao;

import com.jurgen.ecommerce.entity.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin( "*")
public interface StateRepository extends JpaRepository<State, Long> {

    List<State> findByCountryCode(@Param("code") String code);

}

package com.study.springproductcrud.repository;

import com.study.springproductcrud.entites.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}

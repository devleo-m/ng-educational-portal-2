package com.study.springproductcrud.controller;

import com.study.springproductcrud.entites.Cliente;
import com.study.springproductcrud.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cliente")
public class ClienteController {

//    @Autowired
//    private ClienteRepository clienteRepository;

    @PostMapping
    public @ResponseBody Cliente criarCliente(@RequestParam String nome){
        Cliente cliente = new Cliente(nome);
//        clienteRepository.save(cliente);
        return cliente;
    }
}

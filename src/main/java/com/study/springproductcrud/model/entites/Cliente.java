package com.study.springproductcrud.model.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nome;
    private byte idade;

    public Cliente(String nome, byte idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public int getId() {
        return id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public byte getIdade() {
        return idade;
    }
    public void setIdade(byte idade) {
        this.idade = idade;
    }
}

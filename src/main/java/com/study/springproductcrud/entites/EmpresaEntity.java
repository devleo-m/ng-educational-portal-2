//package com.study.springproductcrud.entites;
//
//import jakarta.persistence.*;
//import lombok.Data;
//
//@Table(name = "empresa")
//@Entity
//@Data
//public class EmpresaEntity {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//
//    private String nome;
//    private String cnpj;
//
//    public EmpresaEntity(String nome, String cnpj) {
//        this.nome = nome;
//        this.cnpj = cnpj;
//    }
//
//    public EmpresaEntity(Long id, String nome, String cnpj) {
//        this.id = id;
//        this.nome = nome;
//        this.cnpj = cnpj;
//    }
//
//    public EmpresaEntity() {
//
//    }
//}

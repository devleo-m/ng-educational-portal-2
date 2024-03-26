//package com.study.springproductcrud.controller;
//
//import com.study.springproductcrud.entites.EmpresaEntity;
//import com.study.springproductcrud.service.EmpresaService;
//
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/empresa")
//
//public class EmpresaController {
//
//    private final EmpresaService empresaService;
//
//    public EmpresaController(EmpresaService empresaService) {
//        this.empresaService = empresaService;
//    }
//
//    @GetMapping //mapeia o método GET do REST, esse retorna dados
//    public List<EmpresaEntity> salvaEmpresas() {
//        return empresaService.listarEmpresa();
//    }
//
//    @PostMapping //mapeia o método POST do REST, esse adiciona dados
//    public EmpresaEntity salvaEmpresas(
//            @RequestBody EmpresaRequest empresaEntity //indica que o EmpresaEntity virá no Body da requisição
//    ) {
//        return empresaService.salvarEmpresa(
//                new EmpresaEntity(
//                        empresaEntity.getNome(),
//                        empresaEntity.getCnpj()
//                ));
//    }
//
//    @PutMapping
//    public EmpresaEntity atualizaEmpresa(
//            @RequestBody EmpresaRequest empresaEntity
//    ) {
//        return empresaService.atualizaEmpresa(
//                new EmpresaEntity(
//                        empresaEntity.getId(),
//                        empresaEntity.getNome(),
//                        empresaEntity.getCnpj()
//                ));
//    }
//}

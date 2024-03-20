package com.study.springproductcrud.controller;

import com.study.springproductcrud.model.ProdutoModel;
import com.study.springproductcrud.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    //VISUALIZAR PRODUTOS - GET
    @GetMapping()
    private List<ProdutoModel> obterTodos(){
        return produtoService.obterTodos();
    }

    //VISUALIZAR PRODUTOS POR ID - GET
    @GetMapping("/{id}")
    public Optional<ProdutoModel> obterProdutoPorId(@PathVariable Integer id){
        return produtoService.obterProdutoPorId(id);
    }

    //ADICIONAR/CRIAR PRODUTO - POST
    @PostMapping
    private ProdutoModel adicionar(@RequestBody ProdutoModel produto){
        return produtoService.adicionarProduto(produto);
    }

    //DELETAR PRODUTO - DELETE
    @DeleteMapping("/{id}")
    public String deletarProduto(@PathVariable Integer id){
        produtoService.deletarProduto(id);
        return "O produto do id: " + id  + " Deletado com SUCESSO!";
    }

    //ATUALIZAR PRODUTO - PUT
    @PutMapping("/{id}")
    public ProdutoModel atualizarProduto(@PathVariable Integer id, @RequestBody ProdutoModel produto){
        return produtoService.atualizarProduto(id, produto);
    }
}

package com.study.springproductcrud.service;

import com.study.springproductcrud.entites.Produto;
import com.study.springproductcrud.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    /**
     * Metodo para retornar uma lista de produtos
     * @return Lista de produtos.
     */
    public List<Produto> obterTodos(){
        return produtoRepository.obterTodos();
    }

    /**
     * Metodo que retorna o produto encontrado pelo ID
     * @param id do produto que sera localizado
     * @return retorna um produto caso seja encontrado
     */
    public Optional<Produto> obterProdutoPorId(Integer id) {
        return produtoRepository.obterProdutoPorId(id);
    }

    /**
     * Metodo para adicionar produto na arraylist produtos
     * @param produto que seja adicionado
     * @return retorna o produto que foi adicionado na lista
     */
    public Produto adicionarProduto(Produto produto){
        return produtoRepository.adicionarProduto(produto);
    }

    /**
     * Metodo para atualizar o produto na lista
     * @param produto que sera atualizado
     * @param id do produto
     * @return retorna o produto apos atualizar a lista
     */
    public Produto atualizarProduto(Integer id, Produto produto){
        produto.setId(id);
        return produtoRepository.atualizarProduto(produto);
    }

    /**
     * Metodo para deletar produto por ID
     * @param id do produto para ser deletado
     */
    public void deletarProduto(Integer id){
        produtoRepository.deletarProduto(id);
    }
}

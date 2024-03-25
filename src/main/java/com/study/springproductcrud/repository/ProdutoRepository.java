package com.study.springproductcrud.repository;

import com.study.springproductcrud.entites.Produto;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;

@Repository
public class ProdutoRepository {
    //List simulando o banco de dados
    private List<Produto> produtos = new ArrayList<>();
    private Integer ultimoId = 0;

    /**
     * Metodo para retornar uma lista de produtos
     * @return Lista de produtos.
     */
    public List<Produto> obterTodos(){
        return produtos;
    }

    /**
     * Metodo que retorna o produto encontrado pelo ID
     * @param id do produto que sera localizado
     * @return retorna um produto caso seja encontrado
     */
    public Optional<Produto> obterProdutoPorId(Integer id) {
        return produtos
                .stream()
                .filter(produto -> produto.getId() == id)
                .findFirst();
    }

    /**
     * Metodo para adicionar produto na arraylist produtos
     * @param produto que seja adicionado
     * @return retorna o produto que foi adicionado na lista
     */
    public Produto adicionarProduto(Produto produto){
        ++ultimoId; //incrementando novo valor para id

        produto.setId(ultimoId); //Adiciono o id em produto e depois adiciono ele na array
        produtos.add(produto); //adicionando produto na array produtos

        return produto;
    }

    /**
     * Metodo para atualizar o produto na lista
     * @param produto que sera atualizado
     * @return retorna o produto apos atualizar a lista
     */
    public Produto atualizarProduto(Produto produto){
        //OBS: o produto atual deve ser deletado e depois adicionar um novo no mesmo local(ID)
        Optional<Produto> produtoEncontrado = obterProdutoPorId(produto.getId());
        if (produtoEncontrado.isEmpty()){
            throw new InputMismatchException("Produto nao encontrado!");
        }

        //removendo produto antigo na lista
        deletarProduto(produto.getId());

        //adicionando produto atualizado na lista
        produtos.add(produto);

        return produto;
    }

    /**
     * Metodo para deletar produto por ID
     * @param id do produto para ser deletado
     */
    public void deletarProduto(Integer id){
        produtos.removeIf(produto -> produto.getId() == id);
    }
}


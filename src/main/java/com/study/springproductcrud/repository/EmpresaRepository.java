//package com.study.springproductcrud.repository;
//
//import com.study.springproductcrud.entites.EmpresaCustomizadaEntity;
//import com.study.springproductcrud.entites.EmpresaEntity;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface EmpresaRepository extends JpaRepository<EmpresaEntity, Long> {
//    // preferivel JPQL - Exercicio
//    @Query("update EmpresaEntity empresa set " + //JPQL é um "SQL" genérico que irá funcionar em qualquer banco de dados
//            " empresa.nome = :nome," +
//            " empresa.cnpj = :cnpj, " + //:cnpj indica o uso de uma variavel que veio por paramentro, ele usa o nome no @Para
//            " where empresa.id = :id")
//    EmpresaEntity update(@Param("nome") String nome,
//                         @Param("cnpj") String cnpj,
//                         @Param("id") Long id);
//
//    // Preciso de mais velocidade, as vezes é mais performatica
//    // Preciso de algo muito customizado, ex: um banco de dados muito grande
//    @Query(value = "update empresa set " +
//            " nome = :nome," +
//            " cnpj = :cnpj, " +
//            " anoCriacao = :anoCriacao " +
//            " where id = :id",
//            nativeQuery = true
//            // indica que a query realizada será um SQL puro, e será executado pelo banco de dados que conectarmos
//            // EX: postgres -> comandos do postgres
//
//    )
//    EmpresaEntity update2(@Param("nome") String nome,
//                          @Param("cnpj") String cnpj,
//                          @Param("anoCriacao") Long anoCriacao,
//                          @Param("id") Long id);
//
//
//    @Query(value =
//            "select empresa.nome, empresa.cnpj " +
//                    " from EmpresaEntity empresa" +
//                    " where empresa.id = :id"
//    )
//    EmpresaCustomizadaEntity findByIdCustomizadoJPQL(
//            @Param("id") Long id
//    );
//
//    @Query(value =
//            "select nome, cnpj " +
//                    " from empresa" +
//                    " where id = :id",
//            nativeQuery = true
//            // indica que a query realizada será um SQL puro, e será executado pelo banco de dados que conectarmos
//            // EX: postgres -> comandos do postgres
//
//    )
//    EmpresaCustomizadaEntity findByIdCustomizado(
//            @Param("id") Long id
//    );
//}

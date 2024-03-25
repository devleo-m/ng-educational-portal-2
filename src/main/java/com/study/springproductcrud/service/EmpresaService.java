package com.study.springproductcrud.service;

import com.study.springproductcrud.entites.EmpresaEntity;
import com.study.springproductcrud.repository.EmpresaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmpresaService {
    private final EmpresaRepository empresaRepository;

    public List<EmpresaEntity> listarEmpresa() {
        return empresaRepository.findAll();
        // método JPA do repository para busca de todos o dados de uma tabela
    }

    public EmpresaEntity salvarEmpresa(EmpresaEntity empresaEntity) {
        return empresaRepository.save(empresaEntity);// método JPA para salva um Entity
    }

    public EmpresaEntity atualizaEmpresa(EmpresaEntity empresaEntity) {
        return empresaRepository.update(
                empresaEntity.getNome(),
                empresaEntity.getCnpj(),
                empresaEntity.getId()
        );
    }

    public EmpresaEntity atualizaEmpresaExemploNAOEEXERCICIO_OK(EmpresaEntity empresaEntity) {

        //Atualizar através dos métodos JPA padrão
        //1º -> Busca da entity pré existente
        EmpresaEntity empresaEntitySalvar = empresaRepository
                .findById(empresaEntity.getId())
                .orElseThrow();

        //2º -> Atualiz os dados da entity pré existente
        empresaEntitySalvar.setCnpj(empresaEntity.getCnpj());
        empresaEntitySalvar.setNome(empresaEntity.getNome());

        //3º -> Salva a entity atualizada, substituindo os dados antigos
        empresaRepository.save(empresaEntitySalvar);

        return null;
    }
}



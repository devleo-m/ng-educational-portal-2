export interface UsuarioInterface {
    id: string,
    senha: string|null,
    nome: string|null,
    cpf: string|null,
    email: string|null,
    celular: string|null,
    admin: boolean|null
}
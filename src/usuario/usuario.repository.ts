export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario: string) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }
}
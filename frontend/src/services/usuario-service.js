import { ApiService } from "./api-service";

class UsuarioService extends ApiService {
  constructor() {
    super('/usuarios');
  }

  cadastrar(usuario) {
    return new Promise((resolve, reject) => {
      this.post('cadastrar', usuario).then(result => {
        alert(`Usuário ${usuario.email} cadastrado com êxito!`);
        resolve(result);
      }).catch(err => {
        alert('Não foi possível concluir o cadastro');
        console.log('Erro: ' + err);
        reject({});
      });
    });
  }

  autenticar(usuario) {
    return new Promise((resolve, reject) => {
      this.post('autenticar', usuario).then(result => {
        alert(`Usuário ${usuario.email} autenticado com êxito!`);
        resolve(result);
      }).catch(err => {
        alert('Não foi possível autenticar. Tente novamente mais tarde.');
        console.log('Erro: ' + err);
        reject({});
      });
    });
  }
}

export default UsuarioService;
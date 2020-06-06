import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";


function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const usuario = {
      email,
      senha
    }

    if (!email || !senha) {
      alert('Preencha os campos obrigatórios');
      return;
    }

    // usuarioService.cadastrar(usuario).then(() => {
    //   history.push('/');
    // }).catch(() => {
    //   window.location.reload(); 
    // });
  }

  return (
    <div className="container-register">
      <div className="box-form">
        <div className="description">
          <h2>Registrar-se</h2>
          <h4>Preencha suas informações pessoais abaixo:</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-email">
            <input
              id="email"
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-password">
            <input
              id="password"
              placeholder="Digite sua senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button className="button submit" type="submit">
            Cadastrar
          </button>

          <Link className="button back" to="/">
            Voltar
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;

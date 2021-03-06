import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { Context } from '../../context/AuthContext';
import "./styles.css";


function Login() {
  const { handleLogin } = useContext(Context);
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

    return handleLogin(usuario).then(() => {
      history.push('/');
    }).catch(() => {
      window.location.reload();
    });
  }

  return (
    <div className="container-login">
      <div className="box-form">
        <div className="logo">
          <h1>
            <FiShoppingCart size={32} />
            Loja Virtual
          </h1>
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
            Entrar
          </button>

          <Link className="button back" to="/">
            Voltar
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;

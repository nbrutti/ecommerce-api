import React from "react";
import Header from "../../Header";
import "./styles.css";

function Login() {
  return (
    <div>
      <Header />
      <div className="login-container">
        <section className="form">
          <form>
            <h1>Faça seu Login</h1>
            <input type="email" placeholder="Seu e-mail" />
            <input type="password" placeholder="Sua senha" />
            <button type="submit">Entrar</button>

            <a href="/register">Não tenho cadastro</a>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;

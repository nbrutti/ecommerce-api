import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./styles.css";

export default function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <h2>
          <FiShoppingCart size={26} />
          Loja Virtual
        </h2>
      </div>

      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/produtos">Produtos</a>
          </li>
          <li>
            <a href="/login">Entrar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

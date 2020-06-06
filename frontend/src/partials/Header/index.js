import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from '../../context/AuthContext';
import "./styles.css";

export default function Header() {
  const { authenticated, handleLogout } = useContext(Context);

  const renderAuthenticatedButtons = () => {
    if (!authenticated) return;
    return (
      <>
        <li>
          <a href="">Produtos</a>
        </li>
        <li>
          <a href="">Carrinho</a>
        </li>
        <li>
          <a href="" onClick={handleLogout}>Sair</a>
        </li>
      </>
    );
  }

  return (
    <header className="app-header">
      <Link className="logo-header-button" to="/">
        <div className="logo">
          <h2>
            <FiShoppingCart size={26} />
            Loja Virtual
          </h2>
        </div>
      </Link>

      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          {renderAuthenticatedButtons()}
        </ul>
      </nav>
    </header>
  );
}

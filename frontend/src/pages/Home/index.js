import React from 'react';
import { FiLogIn, FiPlus } from 'react-icons/fi';
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import './styles.css';

function Home() {
  return (
    <div>
      <Header />
      <section className="banner">
        <div className="content">
          <h1>Cadastre seus produtos agora mesmo!</h1>
          <p>
            Faça seu cadastro e anuncie gratuitamente seus produtos para todos
            os membros do site.
          </p>
          <button className="cadastrar">
            <FiPlus size={18} />
            Cadastrar-se
          </button>
          <button className="entrar">
            <FiLogIn size={18} />
            Já tenho cadastro
          </button>
        </div>
      </section>

      <div className="content-produtos">
        <h1>Produtos disponíveis:</h1>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
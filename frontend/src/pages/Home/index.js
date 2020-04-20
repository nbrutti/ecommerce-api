import React, { useEffect, useState } from 'react';
import { FiLogIn, FiPlus } from 'react-icons/fi';
import Footer from '../../partials/Footer';
import Header from '../../partials/Header';
import api from '../../services/api';
import './styles.css';

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('produtos').then(response => {
      setProdutos(response.data);
    }).catch(err => {
      console.log(`Não foi possível recuperar os produtos. Erro: ${err}`);
    });
  }, []);

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

        <div className="cards">
          {produtos.map(produto =>
            <div key={produto.id} className="card">
              <div className="container">
                <p>Produto: {produto.nome}</p>
                <p>Preço: {produto.preco}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
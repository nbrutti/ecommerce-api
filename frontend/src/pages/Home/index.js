import React, { useEffect, useState } from "react";
import { FiLogIn, FiPlus } from "react-icons/fi";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import api from "../../services/api";
import "./styles.css";

function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get("produtos").then((response) => {
      setProdutos(response.data);
    }).catch((err) => {
      console.log(`Não foi possível recuperar os produtos. Erro: ${err}`);
    });
  }, []);

  function hasImg(path) {
    return (path != undefined);
  }

  function convertImagePath(path) {
    if (!hasImg(path)) return 'sample.png';
    return path.split("uploads\\")[1];
  }

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
        <h3>Produtos disponíveis:</h3>

        <div className="cards">
          {produtos.map((produto) => (
            <div key={produto.id} className="card">
              <div class="card-image">
                <img
                  src={
                    "http://localhost:5000/uploads/" +
                    convertImagePath(produto.imagem)
                  }
                />
              </div>
              <div className="container">
                <h5><b>{produto.nome}</b></h5>
                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
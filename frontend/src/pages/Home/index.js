import React, { useEffect, useState } from "react";
import { FiLogIn, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import ProdutoService from '../../services/produto-service';
import "./styles.css";

function Home() {
  const service = new ProdutoService();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    service.get().then((response) => {
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
          <Link className="button cadastrar" to='/register'>
            <FiPlus size={18} />
            Cadastrar-se
          </Link>
          <Link className="button entrar" to='/login'>
            <FiLogIn size={18} />
            Já tenho cadastro
          </Link>
        </div>
      </section>

      <div className="content-produtos">
        <h3>Produtos disponíveis:</h3>

        <div className="cards">
          {produtos.map((produto) => (
            <div key={produto.id} className="card">
              <div className="card-image">
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
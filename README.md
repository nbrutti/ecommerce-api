# ecommerce-api

Este projeto trata-se de um back-end para um simples e-Commerce. Foi desenvolvido com o intuito de exercitar e adquirir mais conhecimentos em projetos que possuem esta stack. Ele é responsável por armazenar produtos, gravar pedidos e gerir usuários. Em breve haverá um front-end SPA :grin:.

## MER

## Tecnologias utilizadas:

* Yarn;
* ECMAScript 6 (ES5);
* Express;
* Sequelize ORM;
* Jest (TODO);
* Docker;
* Heroku (TODO);
* PostgreSQL;
* Autenticação JWT;

## Execução e testes

### Sem docker:

Certifique-se que sua máquina possua o node >= 12 e yarn e uma instância do SGBD PostgreSQL;

Instalar as dependências:

```bash
$ yarn install
```

Rodar as migrações:

```bash
$ yarn sequelize db:migrate
```

Iniciar a aplicação em modo desenvolvimento:

```bash
$ yarn start:dev
```

O servidor deverá estar iniciado e respondendo na porta 3000.

## Endpoints

[Documentação no Postman](https://documenter.getpostman.com/view/10677562/SzRyyp3Z?version=latest)

Para execução local utilize o link abaixo:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/79fbd5cbf5b597f748d4)

## Materiais de estudo

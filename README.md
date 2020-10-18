## 📌 Index

- [Sobre o projeto](#-sobre-o-projeto)
- [Techs](#-techs)
- [Instalação e Start](#-instalação-e-start)
- [Contribuições](#-contribuições)

## ❔ Sobre o projeto

Uma plataforma para facilitar o encontro de orfanatos por pessoas que querem visita-los. Projeto desenvolvido na NLW 3 da [Rocketseat](https://github.com/rocketseat).

## 🛠 Techs

- **Web**

  - [React](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Leaflet](https://leafletjs.com/)
  - [React Leaflet](https://react-leaflet.js.org/)
  - [Open Street Map](https://www.openstreetmap.org/) ou [Mapbox](https://www.mapbox.com/)
  - [Framer Motion](https://www.framer.com/motion/)

- **Backend**
  - [Nodejs](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [Typeorm](https://typeorm.io/)
  - [Multer](https://github.com/expressjs/multer)
  - [Yup](https://github.com/jquense/yup)

## ⚙ Instalação e Start

Para a execução deste projeto é necessário ter um _package manager_ instalado. Nas demonstraçoes abauixo é usado o [NPM](https://www.npmjs.com/) mas pode também usar [YARN](https://yarnpkg.com/).

Clone o repositório.

**Instalando dependências do projeto web:**

```bash
> cd happy/web
> npm run install
```

Para executar o projeto **web** completo é necessário ter um **token** de autenticação da API do Mapbox. Acesse sua conta no site e crie um token para ser utilizado no projeto. Com o token em mãos, crie um arquivo `.env` e coloque seu token como valor da chave `REACT_APP_MAPBOX_TOKEN`.

Exemplo:

```text
REACT_APP_MAPBOX_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Agora start o projeto em seu ambiente com:

```bash
> npm run start
```

**Instalando dependências do projeto backend:**

```bash
> cd happy/backend
> npm install
```

Para executar o projeto **backend** é necessário criar o banco de dados com todas as tabelas utilizadas, para isso, use no diretório correspondente:

```bash
> npm run typeorm migration:run
> npm run start
```

## 🤝 Contribuições

Siga os passos abaixo para contribuir:

1. Faça o _fork_ do projeto

2. Clone o seu _fork_ para sua maquína

3. Crie uma _branch_ para realizar sua modificação

4. Adicione suas modificações e faça o _commit_

5. _Push_

6. Crie um novo _Pull Request_

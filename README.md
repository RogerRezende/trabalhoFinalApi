# API de Revistas em Quadrinhos

Esta API permite o registro e login de usuários, consulta de usuários e registro/consulta de revistas em quadrinhos. Utiliza autenticação JWT e armazena dados em memória.

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```
npm install express jsonwebtoken swagger-ui-express
   ```

## Executando a API

- Para rodar o servidor:
  ```
npm start
  ```
- Para rodar apenas o app (para testes com Supertest):
  ```
// Exemplo em testes:
const app = require('./app');
  ```

## Endpoints

- Documentação Swagger disponível em: `/api-docs`
- Registro de usuário: `POST /users/register`
- Login: `POST /users/login`
- Consulta de usuário: `GET /users/:username`
- Registro de revista: `POST /comics` (requer Bearer Token)
- Listagem de revistas: `GET /comics`

## Regras de Negócio

- Não é possível registrar usuários ou revistas duplicados.
- Para registrar revista, é necessário autenticação via Bearer Token (JWT).
- Todos os campos são obrigatórios para registro de usuário e revista.

## Testes

- O arquivo `app.js` pode ser importado diretamente para testes automatizados (ex: Supertest).

---

API desenvolvida para fins educacionais.

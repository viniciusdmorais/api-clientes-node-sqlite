# 🚀 API REST de Clientes com Node.js, Express e SQLite

API REST desenvolvida com **Node.js, Express e SQLite** para gerenciamento de clientes, seguindo uma arquitetura organizada em camadas (**Routes, Controllers e Database**).

---

## 🌐 API Online

🔗 Produção:  
https://api-clientes-node-sqlite.onrender.com/clientes  

📘 Documentação Swagger:  
https://api-clientes-node-sqlite.onrender.com/api-docs  

---

## 📌 Funcionalidades

- ✔ Listar todos os clientes  
- ✔ Buscar cliente por ID  
- ✔ Criar novo cliente  
- ✔ Atualizar cliente  
- ✔ Deletar cliente  
- ✔ Validação de dados obrigatórios  
- ✔ Persistência com banco SQLite  
- ✔ Documentação interativa com Swagger  

---

## 🧪 Testando a API

Você pode testar de duas formas:

### 👉 Swagger (recomendado)
Acesse:

/api-docs


### 👉 Exemplo de requisição (POST)

```json
{
  "nome": "João Silva",
  "cidade": "Ribeirão Preto"
}
```

### 🛠️ Tecnologias utilizadas
Node.js
Express
SQLite
Swagger (OpenAPI)
Postman

### 📁 Estrutura do projeto
```
api-clientes-node-sqlite/
│
├── src/
│   ├── controllers/
│   │   └── clienteController.js
│   │
│   ├── database/
│   │   └── database.js
│   │
│   ├── routes/
│   │   └── clienteRoutes.js
│   │
│   ├── swagger.js
│   └── server.js
│
├── database.db
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```
### ⚙️ Como rodar o projeto localmente

# Clonar o repositório
```
git clone https://github.com/seu-usuario/api-clientes-node-sqlite.git
```
# Acessar a pasta
```
cd api-clientes-node-sqlite
```
# Instalar dependências
```
npm install
```
# Rodar o servidor
```
node src/server.js
```
### Servidor rodando em:
```
http://localhost:3000
```
### Swagger:
```
http://localhost:3000/api-docs
```
### 📌 Possíveis melhorias futuras
🔐 Autenticação com JWT
📦 Validação com Joi ou Zod
🧱 Separação por services
🐳 Dockerização
☁️ Deploy automatizado

### 👨‍💻 Autor
Desenvolvido por Vinícius Morais
```
🔗 LinkedIn: https://www.linkedin.com/in/viniciusdemoraismendes
🔗 GitHub: https://github.com/viniciusdmorais
```


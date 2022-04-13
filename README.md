# Cadastro de Usuários 👥 🖥
API Rest desenvolvida em Node.js para fazer o cadastro de usuários, podendo ser feita a INSERÇÃO, a LISTAGEM, a ATUALIZAÇÃO e a DELEÇÃO de usuários dentro de um Banco de Dados (SIMULADO) 💾

### Dados que são preenchidos no cadastro:
{
  "first_name": "Primeiro nome",
  "last_name": "Sobrenome",
  "age": "Idade",
  "email": "email"
}

### Instalação dos Pacotes:
- Instale o Node.js na sua máquina;
- Dentro do prompt de comando do Node insira o caminho do diretório de sua escolha;
- Digite o comando "npm install express" para instalar o Express.js;
- Digite o comando "npm install nodemon" para instalar o Nodemon;

Após isso:

- Digite o comando "nodemon index.js";

### Pronto, o servidor já está em execução!
![cmd](https://user-images.githubusercontent.com/96146165/163038235-013a15bf-53ea-4b4f-b209-e4347357465e.png)


### Instruções para realizar os Testes:
Utilizei o Insomnia para realizar os Testes e também para fazer a exibição e manipulação dos dados dos Usuários.
- Instale o Insomnia;
- Crie uma "New Request";
- Adicione a rota ao <strong>base</strong> ou somente digite: http://localhost:4001/users
- Crie os métodos utilizados na API Rest: GET, POST, PATCH e DELETE;

### Buscando um Usuário: 
- Digite: /users/Nome do usuário 

Ex:
### http://localhost:4001/users/Paulo

OBS: Os dados são exibidos e manipulados utilizando JSON (JavaScript Object Notation)

![API Rest](https://user-images.githubusercontent.com/96146165/160240675-68e19d9a-7930-4c38-bc30-d78246d0fdf5.png)

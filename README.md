

# cost

## Descrição

Este projeto foi desenvolvido em React para gerenciar a criação de projetos, permitindo que os usuários insiram informações como nome do projeto, orçamento e categoria.

## Funcionalidades
 - Criação de novos projetos
- Edição de projetos existentes
- Exclusão de projetos
- Adição de serviços aos projetos
- Edição de serviços cadastrados
- Exclusão de serviços
- Definição de orçamento total
- Seleção de categoria para o projeto
  
![Tela Inicial](/src/img/project_img1.png)
![Tela Inicial](/src/img/page_create_project.png)
![Tela Inicial](/src/img/page_my_project.png)


## Tecnologias Utilizadas

- React
- JSON Server
- CSS
- JavaScript

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

## Instalação

1. Clone o repositório do projeto:
  - bash
   - git clone 

2. Navegue até o diretório do projeto:
- bash
- cd cost

3. Instale as dependências:
- npm install

4. Inicie o servidor JSON Server:
- npm run server

5. Inicie a aplicação React:
- npm start

## Modo de Uso 

- Como Criar um Projeto
No aplicativo, preencha o formulário de criação de projeto:

* Nome do projeto: Insira o nome do projeto
* Orçamento do projeto: Insira o orçamento total
* Selecione a categoria: Escolha uma opção no menu suspenso
* Clique no botão Criar Projeto para salvar as informações.

- Como Editar um Projeto
* Na lista de projetos, localize o projeto que deseja editar.
* Clique no botão Editar
-Atualize as informações conforme necessário:
* Categoria: Planejamento
* Total de Orçamento: R$ 15.000
* Total de Utilizado: R$ 0
* Clique em Salvar para aplicar as alterações.

- Como Adicionar um Serviço
Na página do projeto, localize a seção para adicionar serviços.

Preencha o formulário de adição de serviço:

* Nome do serviço: Insira o nome do serviço
* Custo do serviço: Insira o valor total do serviço
* Descrição do serviço: Descreva o serviço
* Clique no botão Adicionar Serviço para salvar as informações.

- Serviços
* Se não houver serviços cadastrados, será exibida a mensagem: "Não há serviços cadastrados".
* 
-Como Editar um Serviço
* Na lista de serviços do projeto, localize o serviço que deseja editar.
* Clique no botão Editar ao lado do serviço.
* Atualize as informações necessárias e clique em Salvar para aplicar as alterações.
* 
- Como Excluir um Projeto
* Na lista de projetos, localize o projeto que deseja excluir.
* Clique no botão Excluir ao lado do projeto.
C





# vv-test

Projeto de teste automatizado criado com Cypress para validação do menu Pesquisa QA da página VV-Test.

Status dos testes:

[![Node.js CI](https://github.com/luana-qa/vv-test/actions/workflows/node.js.yml/badge.svg)](https://github.com/luana-qa/vv-test/actions/workflows/node.js.yml)

---
**Procedimentos para serem realizados antes da execução dos testes em ambiente local:**

Primeiramente é necessário que exista o Node instalado na máquina. Baixe [aqui](https://nodejs.org/pt-br/download/current/) e o instale. Não se esqueça de configurar as variáveis de ambiente.

Para execução do projeto, clone este através do comando abaixo:

`git clone https://github.com/luana-qa/vv-test.git`

Ao acessar a pasta do projeto, execute o comando abaixo:

`npm install cypress cypress-cucumber-preprocessor`

Instale também o Allure Report para criação e atualização dos relatórios dos testes:

`npm install allure`

Execute os testes pelo comando abaixo:

`npm test`

Para visualizar a execução, abra o Cypress pelo comando abaixo:

`npx cypress open`

Para abrir os relatórios com todos os dados dos testes, execute o seguinte comando:

`allure open allure-report`

Os vídeos, screenshots e relatórios estão no projeto do git também, pois não foram adicionados no .gitignore.
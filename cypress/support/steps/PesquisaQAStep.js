/*global Given, Then, When */

import PesquisaQAPage from "../page/PesquisaQAPage";
const pesquisaQAPage = new PesquisaQAPage();

Given("que eu acesse a página da VV Test", () => {
  pesquisaQAPage.acessarURL();
});

And("acesse o menu {}", (menu) => {
  pesquisaQAPage.clicarNoMenuPesquisaQA(menu);
});

When("eu preencher todos os campos obrigatórios", () => {
  pesquisaQAPage.preencherCampos();
  pesquisaQAPage.clicarEmEnviar();
});

Then("deve ser direcionado para uma página de sucesso", () => {
  pesquisaQAPage.validarEnvio();
});

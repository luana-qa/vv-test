import PesquisaQAElements from '../elements/PesquisaQAElements'
const pesquisaQAElements = new PesquisaQAElements
const url = Cypress.config("baseUrl")

class PesquisaQAPage{

    acessarURL(){
        cy.visit(url)
        cy.screenshot('Página acessada')
    }

    clicarNoMenuPesquisaQA(menu){
        cy.get(pesquisaQAElements.menuPesquisa())
        .contains('Pesquisa – QA')
        .click()
    }

    preencherCampos(){
        cy.get(pesquisaQAElements.nome()).type('Luana')
        cy.get(pesquisaQAElements.sobrenome()).type('Terense')
        cy.get(pesquisaQAElements.email()).type('luana.r.matias@gmail.com')
        cy.get(pesquisaQAElements.confirmEmail()).type('luana.r.matias@gmail.com')
        cy.get(pesquisaQAElements.phone()).type('(19) 98140-2803')
        cy.get(pesquisaQAElements.idade()).click()
        cy.get(pesquisaQAElements.anosExperienciaQA()).select('mais de 5 anos')
        cy.get(pesquisaQAElements.atracaoPelaArea()).select('Desafio')
        cy.get(pesquisaQAElements.precisaMelhorar()).click()
        cy.get(pesquisaQAElements.linguagens()).type('Javascript, Java, C#')
        cy.get(pesquisaQAElements.planoCarreira()).type('Me tornar uma profissional espelho, onde eu possa estimular as pessoas a trabalharem nessa área tão ampla e maravilhosa.')
        cy.screenshot('Campos preenchidos')
    }

    clicarEmEnviar(){
        cy.get(pesquisaQAElements.enviar()).click()
    }

    validarEnvio(){
        cy.get(pesquisaQAElements.mensagemFinal()).should('contain', 'Your form has been successfully submitted.')
        cy.screenshot('Validação do envio')
    }
}

export default PesquisaQAPage;
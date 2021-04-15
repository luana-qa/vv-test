class PesquisaQAElements{

    //Menu Pesquisa QA
    menuPesquisa = () => {return '#menu-item-226 > a'}

    //Campos para preenchimento
    nome = () => {return 'input[name="fname"]'}
    sobrenome = () => {return 'input[name="lname"]'}
    email = () => {return 'input[name="email"]'}
    confirmEmail = () => {return '#nf-field-8'}
    phone = () => {return 'input[name="phone"]'} //Não obrigatório
    idade = () => {return '#nf-label-class-field-10-0'}
    anosExperienciaQA = () => {return '#nf-field-11'}
    atracaoPelaArea = () => {return '#nf-field-12'}
    precisaMelhorar = () => {return '#nf-label-class-field-13-0'}
    linguagens = () => {return '#nf-field-14'}
    planoCarreira = () => {return '#nf-field-15'} //Não obrigatório

    //Botão Enviar
    enviar = () => {return "#nf-field-16"}

    //Mensagem de envio realizado com sucesso
    mensagemFinal = () => {return ".entry-content"}
}

export default PesquisaQAElements;
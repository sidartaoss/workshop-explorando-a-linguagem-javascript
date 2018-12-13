/**
 * Aula 08.002. Eventos de Manipulacao do DOM
 * 
 * 
 * 4. Primeiramente, nos vamos executar uma funcao somente quando for carregado todo o html,
 * 
 * $(function () {
 * });
 * 
 * 5. Bom, vamos la, vamos comecar devagar, aos poucos, e nos vamos vendo aqui detalhes sobre os eventos. Entao, vamos la, eu vou criar, aqui, no arquivo index.html, um botao cujo ID vai ser botao1, okay?, e eu vou colocar aqui o texto Botao 1, beleza?
 * 
 * <button id="botao1">Botao 1</button>
 * 
 * 6. Eu vou, agora, vir aqui no arquivo Javascript e eu vou associar o clique desse botao e mostrar no log alguma coisa.
 * 
 * 7. Eu defini aqui um ID, botao1, entao, eu posso, muito bem, vir aqui, e escrever $('#botao1'), o jQuery ja seleciona ele, .on('click'), e, aqui, a gente define uma funcao,
 * 
 * $('#botao1').on('click', function () {});
 * 
 * , e, aqui, muito cuidado, a funcao tem que estar definida aqui dentro, okay?, ai, depois que fecha os parenteses aqui do on(), e, ai, a gente escreve o codigo aqui dentro,
 * 
 * $('#botao1').on('click', function () {
 *      
 * });
 * 
 * 8. Vamos ver aqui quais os argumentos que a gente recebe nessa funcao, 
 * 
 * $('#botao1').on('click' function () {
 *      console.log(arguments);
 * });
 * 
 * 9. Recarregamos a pagina HTML, ta la o Botao 1. Vamos mostrar o log(), cliquei, olha la, a gente recebe um parametro apenas. Entao, vamos colocar ele aqui,
 * 
    $('#botao1').on('click', function (e) {

        console.log(e);
    });
 * 
 *
 * 10. O instrutor costuma chamar de 'e' ou 'evento', depende ai, mas, normalmente, 'e' esta legal. 
 * 
 * 11. Cliquei aqui, olha so, o evento, eh um objeto, e representa esse evento, e, nele, tem varias informacoes aqui, e, a medida que nos formos trabalhando, tem hora que nos vamos precisar dessas informacoes, okay?
 * 
 * 12. Nesse exemplo aqui, 
 *
    $('#botao1').on('click', function (e) {
        console.log(e);
   });
 * 
 * , a gente nao precisa de nada nao, a gente so esta comecando. Vamos colocar aqui, so assim oh, 'Botao 1 clicado', okay?
 * 
   $('#botao1').on('click', function (e) {
        console.log('Botao 1 clicado');
   });
 * 
 * , entao, vamos dar um Refresh na pagina, se eu for clicando aqui, o Chrome so vai incrementando esse numerinho aqui ao lado de 'Botao 1 clicado', no Console do Chrome DevTools.
 * 
 * 13. Beleza? Vamos la, vamos criar um outro botao aqui. O instrutor ira criar um link, para nos mostrar ja uma coisa especial aqui, que a gente pode fazer no evento. Vamos criar, aqui, entao, o link,
 * 
 *     <a href="" id="link1">Clique aqui</a>
 * 
 * , vamos colocar o ID como link1, e o texto dele vai ser 'Clique aqui'. Aqui no href, eu vou colocar, primeiro nao vamos colocar nada, vamos deixar somente uma cerquilha aqui,
 * 
 *     <a href="#" id="link1">Clique aqui</a>
 * 
 * , e vamos fazer, aqui, o Bind do clique nesse carinha. Vamos, aqui, no arquivo Javascript, 
 * 
 * $('#link1').on('click', function (e) {
 *      console.log('Link 1 clicado');
 * });
 * 
 * 14. Vamos ver aqui na pagina HTML. Esta tudo certo, ao clicarmos no Botao 1 e ao clicarmos no Link 1, aparece a mensagem no Console do Chrome DevTools.
 * 
 * 15. Entao, esta tudo certo aqui, so que, agora, sim, eu vou colocar, aqui, uma URL, vamos colocar o google aqui,
 * 
 * <a href="http://www.google.com" id="link1">Clique aqui</a>
 * 
 * 16. O elemento ancora, aqui, a, qual eh o comportamento padrao dele? Quando nos clicarmos no link, ele vai direcionar para o que esta aqui no href, nao eh isso?, entao, vamos ver aqui, oh, vamos recarregar a pagina e testar.
 * 
 * 17. Vamos clicar aqui no Link 1, aparece 'Link 1 clicado' no Console do Chrome DevTools, mas, depois, o que que ele fez? Olha la, direcionou para o Google, porque esse eh o comportamento padrao do elemento ancora (link).
 * 
 * 18. E se eu nao quiser? E se eu quiser quebrar esse comportamento padrao? Ou seja, ao clicar no link, eu quero executar o meu codigo Javascript, mas eu nao quero que o comportamento padrao seja executado. Entao, sabe o que que eu posso usar, oh?
 * 
 * 19. e., que eh o nome do evento que eu recebi, lembra, esse objeto aqui, e, eh entregue por esse evento de click,
 * 
  $('#link1').on('click', function () {
    console.log('Link 1 clicado');
  });
 * 
 * , e.preventDefault(). Esse preventDefault(), simplesmente, interrompe o comportamento padrao desse evento. No caso aqui do link, seria clicar e direcionar. Agora, vai falar nao, eu nao quero que voce faca.
 *
 * 20. Normalmente, quando se usa esse cara, nao eh?, pode ser que tenha alguma regra ou nao, mas, quando eu preciso fazer algo assim, eu tento colocar, sempre, a primeira coisa ai da funcao, para eu ja ver, oh, nao estou executando o comportamento padrao,
 * 
  $('#link1').on('click', function (e) {
    e.preventDefault();
    console.log('Link 1 clicado');
  });
 * 
 * 
 * 21. E, ai, vamos voltar aqui na pagina HTML e dar um Refresh. Eu vou clicar no link agora, oh, perceba que, mesmo estando aqui com href do Google, eu vou clicar aqui, ele nao vai redirecionar la, oh. Continua, apenas printando o log 'Link 1 clicado', okay?
 * 
 * 22. Entao, esse preventDefault() serve para isso.
 * 
 * 23. Posso usar a vontade, Normandes?
 * 
 * 24. Nao. Tente nao usar a vontade, 'Ah, vou usar para tudo...', porque, normalmente, o Usuario, ele esta acostumado com o comportamento padrao de alguma coisa, entao, ele sabe que, se ele clicar em um link, ele tem que ir para um outro lugar, nao eh?, entao, dependendo do que voce estiver fazendo, tome cuidado, porque, as vezes, um link assim oh, vou clicar aqui, para atualizar uma outra parte da tela, para fazer alguma coisa, tudo bem, nao eh?, as vezes, eu quero clica em um link, e fazer aparecer um modal, nao eh?, um dialogo para excluir algum elemento, tudo bem, nao eh?, mas tente nao mudar tanto o comportamento, okay?
 * 
 * 25. Entao, vamos la, vamos ver mais um exemplo aqui, deixa eu adicionar, por exemplo, um input text aqui, vamos la, vamos colocar um input, com ID input1, aqui,
 * 
 * <input type="text" id="input1">
 * 
 * 26. Vamos la, agora, no arquivo Javascript, adicionar alguma coisa aqui,
 * 
 * $('#input1').on('keyup', function() {
 * 
 * });
 * 
 * , vamos adicionar a funcao aqui, vamos adicionar o e aqui,
 * 
 * $('#input1').on('keyup', function(e) {
 *      
 * });
 * 
 * , e, vamos fazer o seguinte, log(e), vamos dar uma olhada o que que tem esse camarada,
 * 
 * $('#input1').on('keyup', function(e) {
 *      console.log(e);
 * });
 * 
 * 
 * 27. Apareceu aqui, ao recarregarmos a pagina, beleza. Vou clicar aqui, qual que eh a tecla? Vou clicar no numero 1, por exemplo.
 * 
 * 28. Olha so, apareceu aqui o objeto evento. E, dentro desse objeto do evento que ele entrega, eu quero te mostrar esse aqui, oh, keyCode, e, ai, ja te falando, oh, nem todos os objetos sao iguais que ele esta entregando, por exemplo, so vai ter sentido o keyCode no objeto em que nos estamos inserindo alguma coisa, nao eh?, os outros nao.
 * 
 * 29. Entao, olha soh, keyCode, 49, vamos imprimir so o keyCode agora.
 * 
 * 30. O keyCode eh o codigo da tecla que eu estou pressionando. Oh, vou digitar a letra a, eh 65, o b eh 66, okay? Entao, ele esta mostrando o codigo da tecla que eu estou digitando. Isso serve para que?
 * 
 * 31. As vezes voce tem alguma regra para fazer, dependendo da tecla que o usuario digitar. Por exemplo, vou pressionar, aqui, o <ENTER>, o codigo do <ENTER> eh o 13, o codigo do ESC eh o 27, okay? Entao, oh, voce poderia ter, aqui, em determinada situacao, algo assim, oh, se o usuario pressionar o <ENTER>, por exemplo, voce vai ter alguma regra, eu vou colocar so um alert aqui,
 * 
    if (e.keyCode === 13) {
        alert('Enter pressionado!');
    }
 * 
 * , algo assim.
 *
 * 32. Vamos dar um Refreh aqui na pagina HTML, e vou la digitando as teclas, quando eu digitar o <ENTER>, vou fazer agora, pressionar o <ENTER> aqui, oh, la, apareceu o alert de 'Enter pressionado!', okay?
 * 
 * 33. Entao, nos podemos usar o objeto do evento que nos recebemos para fazer alguma logica especial, ai, para nos, okay?
 * 
 * 34. Ah, Normandes, e os outros eventos?
 * 
 * 35. Bom, tem varios eventos ai, nao eh?, eu acho que deu para voce pegar a ideia de como funciona os eventos, como a gente faz o Binding deles, nao eh?, com o jQuery, o instrutor acha bem legal, bem simples, e eh isso ai, se voce precisar de outro evento, eh so voce ir pesquisando e, eh bem tranquilo voce encontrar isso tambem na Internet.
 * 
 * 36. Para finalizar esta aula aqui, talvez voce ja tenha visto algo assim, oh, em um botao, voce poderia adicionar aqui, oh, um evento do Javascript, onclick="", por exemplo, e adicionar uma chamada a uma funcao aqui, vamos ate comentar essa aqui que ja esta definida do Javascript, que a gente ja adicionou aqui com jQuery, para implementar essa aqui, a gente conversar um pouquinho dessa abordagem aqui.
 * 
 * <button id="botao1" onclick="">Botao 1</button>
 *
 * 
 * 37. Entao, vamos la, onclick, eu posso adicionar uma chamada a uma funcao aqui, eu poderia ate escrever o codigo direto aqui, se eu quisesse, colocar aqui, console.log(),
 * 
 * <button id="botao1" onclick="console.log()">Botao 1</button>
 * 
 * , esse codigo que eu estou escrevendo aqui eh o codigo Javascript, okay? Eu posso, so para te provar que isso aqui eh verdade, colocar so um 'Ok' aqui,
 * 
 * <button id="botao1" onclick="console.log('Ok')">Botao 1</button>
 * 
 * , e vamos la dar uma executada aqui, atualizar, vou clicar aqui no Botao 1, olha la, o 'Ok' apareceu.
 * 
 * 38. Entao, o codigo que eu escrevo aqui,
 * 
 * <button id="botao1" onclick="console.log('Ok');">Botao 1</button>
 * 
 * , eh um codigo Javascript, o que me permite, por exemplo, chamar uma funcao, algo do tipo, botao1Clicado();, por exemplo.
 * 
 * Eu nao posso colocar essa funcao aqui dentro da funcao que executa somente quando o HTML for carregado, $(function () {});,
 * 
 * function botao1Clicado () {
 *      console.log('Botao 1 clicado!');
 * }
 * 
 * , okay?
 * 
 * 39. Vamos la dar um Refresh na pagina. Olha la, vamos clicar no Botao 1, e aparece, no Console do Chrome DevTools, 'Botao 1 clicado!', foi chamado, entao, essa funcao:
 * 
 function botao1Clicado () {
    console.log('Botao 1 clicado!');
 }
 *
 *  , aqui.
 * 
 * 40. Ah, Normandes, entao, pode ser as duas abordagens, para eu poder executar um evento ai de clique, por exemplo, do botao?
 * 
 * 41. Sim e nao. Como assim, sim e nao?
 * 
 * 42. Tecnicamente, funciona. O instrutor acabou de nos mostrar que, tecnicamente, funciona. Mas, isso nao eh recomendado, de forma alguma. A maioria dos programadores Javascript nao usa isso daqui,
 * 
 * <button id="botao1" onclick="console.log('Ok');">Botao 1</button>
 * 
 * , tanto que nos vamos, ate, tirar daqui, para nos nao ficarmos tentados a fazermos isso,
 * 
//function botao1Clicado () {
//    console.log('Botao 1 clicado!');
//}
 * 
 * , vamos deixar assim de volta.
 * 
 * 43. Mas vamos conversar por que nao. 
 * 
 * 44. Por que?
 * 
 * 45. Um dos motivos, o comportamento, que eh o Javascript, nao eh?, o que faz o comportamento, fica totalmente separado da apresentacao, aqui, do HTML. Entao, se nos comecarmos a colocar, aqui, no HTML, onclick="", tem varios, tem o onchange="", por exemplo, no input, entao, nos comecamos a adicionar comportamento, aqui, no HTML. E isso NAO fica legal, fica misturado: comportamento com apresentacao.
 * 
 * 46. Voce nao mistura as linguagens, tambem. Aqui, nos estamos trabalhando com HTML, e, como o instrutor nos mostrou que o que a gente coloca ali eh codigo Javascript, nao fica legal essa mistura: HTML com Javascript, porque HTML deve estar no arquivo de HTML, e Javascript deve estar no arquivo de Javascript, okay?
 * 
 * 47. No caso do jQuery, tah, que o instrutor usou aqui do jQuery, ele toma conta para a gente dos diferentes Browsers, entao, colocando .on() aqui, ele vai se preocupar, nao eh?, as vezes, em um, on('click'), eh o evento de click, as vezes, pode ter um Browser, hoje em dia, talvez, nao, mas, antigamente, tinha muito disso, que o instrutor ja nos falou, as vezes, o nome de um evento no Internet Explorer era diferente do Firefox. E isso poderia dar problema. O jQuery toma conta disso para a gente.
 * 
 * 48. Entao, a gente, usando o jQuery assim, fica melhor, nao eh?, nos suportamos mais browsers. 
 * 
 * 49. E nos podemos adicionar comportamentos a varios elementos do HTML sem duplicar o codigo. Como assim? A gente ja estudou seletores, lembra que eu posso selecionar, aqui,
 * 
  $('#botao1').on('click', function (e) {
    console.log('Botao 1 clicado');
  });
 *
 *
 * , aqui, eu estou selecionando apenas o ID, nao eh?, mas, eu poderia selecionar por classe, nao eh?, por um elemento, selecionar varios de uma vez, e eu poderia adicionar, aqui, esse comportamento, 
 * 
 .on('click', function (e) {
    console.log('Botao 1 clicado');
  });
 * 
 * , a esses varios elementos que eu selecionei aqui,
 * 
 $('classe-de-botoes').
 *
 * nao eh?, entao, voce nao vai precisar estar colocando, .on('click') aqui, .on('click') ali, .on('click') em varios elementos HTML, voce faz com um seletor que seleciona varios elementos, e adiciona o mesmo comportamento para eles, caso esse seja a sua regra de negocio.
 * 
 * 50. Beleza? Entao, essa eh a forma mais recomendada, esqueca aquele onclick="" ali, o instrutor, sinceramente, nao lembra a ultima vez que usou algo assim. Hoje em dia, os codigo Javascript do instrutor sao todos assim, 
 * 
  $('#botao1').on('click', function (e) {
    console.log('Botao 1 clicado');
  });
 * 
  $('#link1').on('click', function (e) {
    e.preventDefault();
    console.log('Link 1 clicado');
  });  

  $('#input1').on('keyup', function(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
        alert('Enter pressionado!');
    }
  });
 *
 *
 * 51. Fim da Aula 08.002. Eventos de Manipulacao do DOM.
 * 
 * 
 * 
 * 
 *
 *
 *
 * 
 */
$(function () {

    /** *
    $('#botao1').on('click', function () {
        console.log(arguments);
    });
    */
   /** *
   $('#botao1').on('click', function (e) {
        console.log(e);
   });
   **/
  $('#botao1').on('click', function (e) {
    console.log('Botao 1 clicado');
  });

  /** *
  $('#link1').on('click', function (e) {
    console.log('Link 1 clicado');
    e.preventDefault();
  });
  **/
  
  $('#link1').on('click', function (e) {
    e.preventDefault();
    console.log('Link 1 clicado');
  });  

  $('#input1').on('keyup', function(e) {

    /** *console.log(e); **/
    console.log(e.keyCode);
    if (e.keyCode === 13) {
        alert('Enter pressionado!');
    }
  });

});


//function botao1Clicado () {
//    console.log('Botao 1 clicado!');
//}
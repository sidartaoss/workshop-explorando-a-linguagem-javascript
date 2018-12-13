/**
 * Aula 07.002. Seletores
 * 
 * 15. A primeira coisa que o instrutor quer nos mostrar aqui eh, em que momento nos iremos comecar a configurar os clicks dos checkboxes?
 * 
 * 16. Nos podemos ja jogar solto aqui no arquivo seletores.js?
 * 
 * 17. Bom, se nos jogarmos solto aqui, nos dependemos da pagina ser carregada totalmente primeiro, nos precisamos que a pagina seja totalmente carregada, se nos jogarmos solto aqui, porque, na hora em que o Browser chegar nessa linha,
 * 
        <script src="seletores.js"></script>

    , aqui, ele ja carregou esse Javascript e ele ja saiu executando o que tem la dentro, mesmo que, no arquivo html, para cima, ainda nao esteja pronto, okay? Entao, nessa html simples aqui, carregando local, eh bem possivel que funcione.
 * 
 * 18. Mas, se a gente tiver, na Internet mesmo, um sistema um pouco mais complexo, as vezes, aqui, tem que carregar imagem, nao eh, carregando, ainda, um monte de coisas, ou seja, o html ainda nao esta pronto 100%. Entao, tem alguma forma de eu colocar algo aqui no Javascript que fale assim, 'So execute depois que o html tiver carregado'?
 * 
 * 19. Tem. Vamos dar uma olhada aqui na documentacao do jQuery, https://api.jquery.com/.
 * 
 * 20. Eh a funcao ready(). O ready() vai criar uma funcao que para ser executada quando o DOM, que eh o html, estier totalmente carregado.
 * 
 * 21. Eh essa funcao ready() aqui, https://api.jquery.com/ready/, que nos usamos do jQuery.
 * 
 * 22. Ai, ele fala algumas coisas aqui, da umas formas, alguma sintaxe para a gente utilizar, como essa forma aqui,
 * 
 * $(document).ready(handler)
 * 
 * , tem a forma nao recomendada, funciona, mas, nao eh recomendado usar,
 * 
 * $().ready(handler)
 * 
 * , e tem a forma mais simples, 
 * 
 * $(handler)
 * 
 * , que eh a forma que o instrutor prefere usar, que o instrutor utiliza mais. 
 * 
 * 23. Ao inves de nos escrevermos isso aqui tudo,
 * 
 * $(document).ready(function() {
 * 
 * });
 * 
 * , nos escrevemos so isso,
 * 
 * $(function() {
 * 
 * });
 * 
 * 24. Vamos dar uma olhada?
 * 
 * 25. Nos vamos colocar dolar, $, abre/fecha parenteses,
 * 
 * $()
 * 
 * , Normandes, o que que eh esse dolar ai que voce esta colocando?
 * 
 * 26. Esse dolar eh o jQuery. Eh o objeto do jQuery. Quando a gente carrega o jQuery, ele ja vai disponibilizar esse objeto para a gente usar. Beleza?
 * 
 * 27. Entao, esse cara aqui, $, eh o jQuery.
 * 
 * 28. Olha la, vamos voltar aqui na documentacao, https://api.jquery.com/ready/, 
 * 
 * $(function() {
 * 
 * });
 * 
 * , olha so o jeito que ele fez la, dolar, $, abre parenteses, para colocar uma funcao dentro do jQuery. Entao, o que nos vamos fazer eh: 1. Colocamos um dolar; 2. Abre/fecha parenteses; 3. Ponto e virgula:
 * 
 * $();
 * 
 * 29. Se nos colocarmos uma funcao aqui, essa funcao sera executada quando o DOM, ou seja, quando o html for carregado totalmente,
 * 
 * $(function () {});
 * 
 * 30. Notemos que a funcao esta dentro dos parenteses, entao, termina com a chave, depois, fecha parenteses.
 * 
 * 31. Entao, o que nos colocarmos aqui,
 * 
 * $(function () {
 * 
 *      // Entao, o que nos colocarmos aqui,
 * 
 * });
 * 
 * , eh so depois que foi carregado 100% da DOM.
 * 
 * 32. Entao, vamos la, vamos continuar aqui, brincando. Entao, esse aqui eh o objeto jQuery,
 * 
 * >>$<<(function () {});
 * 
 * , o dolar, $, eh um cara importante ai paa a gente.
 * 
 * 33. Entao, nos criarmos uma variavel var dolar, var $ aqui dentro do nosso Javascript nao eh uma boa ideia,
 * 
 * $(function () {
 * 
 *      var $ = 
 * 
 * });
 * 
 * , porque, ai, nos estaremos concorrendo com o jQuery, e nem o instrutor sabe o que que isso pode dar. Pode dar uma confusao ai.
 * 
 * 34. Entao, o instrutor recomenda nao fazer isso.
 * 
 * 35. Entao, vamos la, vamos comecar a implementacao. O que que nos precisamos fazer? Precisamos selecionar esses carinhas aqui, ou seja, os checkboxes da tela html.
 * 
 * 36. Vamos fazer o seguinte, vamos selecionar primeiro o primeiro checkbox de TODOS os Usuarios.
 * 
 * 37. Entao, vamos selecionar o primeiro checkbox, para o instrutor ja nos mostrar algumas coisas legais aqui no Console do Chrome DevTools.
 * 
 * 38. Entao, nos queremos buscar aquele checkbox, que esse aqui aqui em cima, que esta no th no head aqui da tabela,
 * 
 * <table class="table">
            <thead>
                <tr>
                    <th><input type="checkbox"></th>

 * 39. Coo nos podemos selecionar esse cara?
 * 
 * 40. Nos precisamos desse elemento aqui, <input type="checkbox">, la no jQuery, o objeto Javascript que esta representando esse cara.
 * 
 * 41. Bom, nos temos algumas formas de seleciona-lo. Na API do jQuery, se nos formos em Seletores, https://api.jquery.com/category/selectors/, tem varias formas de nos selecionarmos elementos.
 * 
 * 42. O instrutor ira comecar nos mostrando essa forma aqui, pelo ID, ID Selector (“#id”), https://api.jquery.com/id-selector/, vamos la?
 * 
 * 43. Eh so nos definirmos aqui, o id, e vamos chamar de selecao-todos-usuarios
 * 
 * <table class="table">
            <thead>
                <tr>
                    <th><input type="checkbox" id="selecao-todos-usuarios"></th>
 * 
 * 
 * , porque esse checkbox faz a selecao de todos os usuarios, por isso que o instrutor pensou nesse nome aqui.
 * 
 * 44. Beleza, pelo ID, vamos, agora, voltar para o arquivo Javascript, como eh que nos selecionamos? 
 * 
 * 45. No jQuery, 1. tudo vai ser nesse dolar, $, entao, 2. abre/fecha parenteses, 3. vamos colocar, aqui, uma string, 4. jogo-da-velha, ou cerquilha, e vamos escrever selecao-todos-usuarios,
 * 
 *  $(function () {

        $('#selecao-todos-usuarios');

 });
 * 
 * 46. O cerquilha eh que esta nos falando que nos estamos querendo selecionar um elemento aqui no DOM pelo ID.
 * 
 * 47. Okay? Eh esse cerquilha aqui, jogo-da-velha. E nos podemos atribuir esse cara aqui para uma variavel, beleza? para a gente poder brincar com essa variavel aqui.
 * 
 * var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
 * 
 * 48. Vamos fazer o seguinte, oh, vamos dar um log aqui, vamos colocar oh, ou seja, vamos colocar essa variavel aqui para mostrar no log para o instrutor nos mostrar mais um negocio interessantissimo aqui do Console do Developer Tools.
 * 
 * console.log('selecaoTodosUsuarios', selecaoTodosUsuarios);
 * 
 * 49. Vamos la, recarregar a pagina. Mostrou aqui, selecaoTodosUsuarios, e, ele ja jogou aqui oh um carinha pra mim aqui, um objeto aqui para mim, beleza? Olha so o que que o instrutor ira fazer, o instrutor ira clicar com o botao direito aqui, na setinha ao lado de selecaoTodosUsuarios e vai selecionar aqui, 'Store as Global Variable', onde eh criado temp1 embaixo.
 * 
 * 50. O que que eh essa variavel temp1 que ele criou aqui para nos?
 * 
 * 51. Essa variavel temp1 eh exatamente esse elemento, n.fn.init [prevObject: n.fn.init(1), context: document, selector: "selecao-todos-usuarios"], aqui, que nos selecionamos.
 * 
 * 52. Okay? E, ai, signfica que temp1 eh esse primeiro elemento checkbox aqui da tela. E, ai, como que nos fazemos? Tem como, no Javascript, vir aqui e selecionar esse primeiro elemento checkbox?
 * 
 * 53. Claro que tem. Vamos dar uma olhada aqui, na API Documentation, https://api.jquery.com/, em .prop(), https://api.jquery.com/prop/, esse cara aqui.
 * 
 * 54. Esta dentro de Manipulation, manipulacao de elementos. O .prop() serve para a gente definir propriedades de um elemento.
 * 
 * 55. Entao, olha so. Para o checkbox, ele fala aqui, para alguns exemplos, a gente deve usar o .attr(), tem essa funcao attr(), e, para os outros casos, a gente deve usar o .prop(), porque existe uma diferenca entre atributos e propriedades nos elementos html.
 * 
 * 56. Nos sabemos que, por exemplo, o checkbox eh uma propriedade, entao, para nos definirmos aquele cara, nos vamos usar a funcao prop(), okay?, e vamos passar, aqui, o checked, okay? Vamos la, dar uma olhada aqui como nos fazemos isso aqui. Nos vamos fazer direto no Console do Chrome DevTools.
 * 
 * 57. > temp1.prop('checked');
 * 
 * , dando um <ENTER> aqui, retornou false, ou seja, nao esta selecionado.
 * 
 * 58. Nos queremos que selecione, eh soh passar um true aqui na frente,
 * 
 * > temp1.prop('checked', true);
 * 
 * 59. Quando dermos um <ENTER>, no Console, fica selecionado, na tela, o primeiro checkbox.
 * 
 * 60. Se nos quisermos deselecionar, colocamos false,
 * 
 * > temp1.prop('checked', true);
 * 
 * , ao dar um <ENTER>, no Console, fica deselecionado.
 * 
 * 61. Entao, isso aqui de colocar, no log, um objeto do jQuery, porque, ai, isso aqui eh importante tambem, quando nos selecionamos um elemento html e com jQuery, esse cara eh um objeto do jQuery, entao, as funcoes que existem do jQuery e que estao disponiveis, nos conseguimos utilizar.
 * 
 * 62. Entao, isso eh muito, muito interessante. Se nos fizermos, com Javascript puro, nao existiria, por exemplo, aquele prop() la, vai ser alguma outra coisa, para nos definirmos uma propriedade. No jQuery, ele padroniza isso, nos fazemos sempre dessa forma para qualquer Browser e sempre vai funcionar, pelo menos, essa eh a ideia, em qualquer Browser tambem.
 * 
 * 63. Beleza? Vamos ver aqui, o que mais que podemos falar nessa aula. 
 * 
 * 64. Entao, essa aqui eh uma forma de nos selecionarmos atraves do ID,
 * 
 * var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
 * 
 * 65. Vamos, agora, selecionar os outros checkboxes. Nos queremos, agora, selecionar todos os demais checkboxes ao mesmo tempo. Vejamos a logica que o instrutor pensou para fazer isso aqui funcionar.
 * 
 * 66. O instrutor pensou o seguinte: Nos iremos verificar aqui se todos os checkboxes que tem aqui dos Usuarios, que o tamanho deles, a quantidade deles, entao, vamos supor 3, vamos pegar isso dinamicamente, okay?, for igual a quantidade dos selecionados, ai, nos iremos contar quantos que tem desses aqui selecionados. Se forem iguais, ai, nos iremos marcar o primeiro checkbox, porque, se nos temos 3 checkboxes, aqui, e esses 3 estao selecionados, significa que nos podemos marcar o checkbox de TODOS. Se nos desmarcarmos um checkbox, ele vai verificar: quantos eu tenho? 3, mas quantos estao selecionados? 2, entao, desmarca o checkbox de TODOS. 
 * 
 * 67. E nos queremos fazer isso dinamicamente, nos nao vamos contar 3, nao vamos escrever o numero literal 3 ali no meu Javascript, okay? Entao, como eh que eu faco para pegar esses caras aqui todos de uma vez?
 * 
 * 68. Bom, existem alguas formas de nos fazermos isso, no jQuery, o instrutor ja nos mostrou uma atraves de ID. So que, se nos colocarmos ID aqui, nos demais checkboxes, vamos colocar, aqui, o nome do usuario, por exemplo,
 * 
 *                  <td><input type="checkbox" id="ricardo"></td>
                    <td>Ricardo</td>

                    <td><input type="ckeckbox" id="sarah"></td>
                    <td>Sarah</td>                    

 * 
 * , e por ai vai.
 * 
 * 69. Reparemos que isso aqui vai ficar muito ruim, por que? Na hora em que nos formos selecionar aqui no Javascript, nos vamos selecionar ricardo, sarah, como eh que o Javascript vai saber disso? Vai ficar muito ruim.
 * 
 * 70. Entao, pelo ID, nao eh uma boa ideia, ah, entao, se voce fala, 'Entao, coloca o mesmo ID, por exemplo, usuario, 
 * 
 * 
 *                  <td><input type="checkbox" id="usuario"></td>
                    <td>Ricardo</td>

                    <td><input type="ckeckbox" id="usuario"></td>
                    <td>Sarah</td>
 *
 *
 * 71. Piorou, porque, agora, o nosso HTML esta inconsistente. A pagina carrega, ta certo, o Browser nao vai dar erro por causa disso, mas esta um HTML inalido, porque nos so podemos ter 1 ID por pagina, o mesmo ID por pagina, 2 vai dar errado.
 * 
 * 72. Okay? Entao, qual eh a ideia aqui? Tem gente que usa, o instrutor gosta bastante de usar, eh o seguinte, eh criar um hook aqui, um gancho, uma forma de eu buscar isso atraves de um nome de uma classe CSS.
 * 
 * 73. Mesmo que essa classe nao exista, nao tem problema ela nao existir. Entao, nos podemos fazer assim, oh,
 * 
 *                  <td><input type="checkbox" class="usuario"></td>
                    <td>Ricardo</td>

                    <td><input type="ckeckbox" class="usuario"></td>
                    <td>Sarah</td>

                    <td><input type="ckeckbox" class="usuario"></td>
                    <td>Manoel</td>                     
 * 
 * 
 * , e nos vamos definir um nome, aqui, que vai representar esse elementom, eu quero representar esse objeto aqui,
 * 
 * <input type="checkbox" class="usuario">
 * 
 * , esse input. Okay? Enao, olha so, nos vamos colocar os 3 aqui ao mesmo tempo, e vamos escrever aqui o seguinte, oh, 'Existe uma convencaozinha, colocando js na frente, tracinho, o instrutor ja fala um pouquinho mais sobre isso, este checkbox aqui eh o js-selecao-usuario, eh o que nos permite selecionar o usuario,
 * 
 * <input type="checkbox" class="js-selecao-usuario">
 * 
 *              <tr>
                    <td><input type="checkbox" class="js-selecao-usuario"></td>
                    <td>Ricardo</td>
                    <td>ricardo@email.com</td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="js-selecao-usuario"></td>
                    <td>Sarah</td>
                    <td>sarah@email.com</td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="js-selecao-usuario"></td>
                    <td>Manoel</td>
                    <td>manoel@email.com</td>
                </tr>
 * 
 * 
 * 74. Por que esse js aqui na frente, Normandes? Para a gente nao misturar as classes que fazem a estilizacao do input ou a classe com o nome que estamos querendo usar para recuperar isso no Javascript.
 * 
 * 75. Vamos supor, aqui nao tem, mas vamos supor que tivesse uma classe chamada 'checkbox' para estilizar o checkbox. se nos usarmos esse nome aqui de classe checkbox, concorda que, se tiver um outro checkbox aqui com esse mesmo nome de classe, eu vou pegar ele tambem? E eu nao quero, eu quero especificar que eu quero esse cara aqui, ou seja, o js-selecao-usuario,
 * 
 * <input type="checkbox" class="checkbox js-selecao-usuario">
 * 
 * 76. E outra coisa, alem desse problema de confusao com outros elementos, nos amarramos muito o Javascript com a estilizacao, significa que, depois, nos nunca mais vamos poder tirar esse estilo aqui, checkbox, do nosso elemento.
 * 
 * 77. Entao, nos criamos um novo aqui, o instrutor inventou essa classe CSS aqui, js-selecao-usuario, e nao tem problema nisso, ela pode nao existir, okay? Eh somente um nome.
 * 
 * 78. Vamos, agora, pegar no arquivo Javascript, entao, uma variavel, 
 * 
 * var selecaoUsuarios = 
 * 
 * , Usuarios no plural porque serao todos, nos queremos pegar todos esses caras aqui, que aparecem na lista da pagina de usuarios, vamos la, nos vamos pegar eles aqui, com jQuery, e, ai, como que eu faco a selecao com classe?
 * 
 * var selecaoUsuarios = $('');
 * 
 * 79. Eh com ponto. Vamos colocar ponto e o nome da classe, 
 * 
 * var selecaoUsuarios = $('.js-selecao-usuario');
 * 
 * , okay? Classe com ponto e ID com cerquilha. 
 * 
 * 80. Beleza? Vamos fazer um log aqui so para a gente ver,
 * 
 * console.log('selecaoUsuarios', selecaoUsuarios);
 * 
 * 81. Vamos recarregar aqui, e vamos ver no Console do Chrome DevTools.
 * 
 * 82. Se nos olharmos aqui, retornou um array, com todos eles la dentro, e olha so, o que que tem aqui, oh, length 3, ou seja, encontrou, realmente, os 3 elementos aqui que eu quero, esses 3 checkboxes.
 * 
 * 83. Okay? Beleza? Vamos la, o que que eu posso fazer aqui agora? O instrutor vai usar, ja vai atrelar aqui, a gente ainda vai falar mais sobre eventos, fiquemos calmos, a gente vai criar os nossos proprios eventos, que eh o que o instrutor acha bem legal, mas o instrutor ja vai usar um evento aqui, que eh o seguinte, oh, quando eu clicar nele, como eh que o instrutor descobriu isso? Vem aqui em eventos, na documentacao, https://api.jquery.com/category/events/, nos poderiamos usar o click aqui direto oh, https://api.jquery.com/click/, ele fala aqui oh, voce poderia, 
 * 
 * $( "#target" ).click(function() {
        alert( "Handler for .click() called." );
   });

   , aqui, ele esta colocando com ID, oh, #target, .click(), nos podemos colocar uma funcao, so que o instrutor acostumou a fazer dessa forma aqui, .on( "click", handler ). Esta falando na documentacao, que o click eh so um atalho para .on("click"), e nos passamos a funcao aqui em handler, que nos queremos trabalhar quando formos clicar. 

   84. Dai, o instrutor acostumou a trabalhar assim no .on, mas, com click, tambem funciona.

   85. Se nos escrevermos aqui, selecaoUsuarios.click(), nos podemos colocar a funcao aqui direto, selecaoUsuarios.click(function () {}).

   86. Mas o instrutor vai fazer assim, porque acostumou assim,

   selecaoUsuarios.on('click', function () {


   });

   87. Beleza? Vamos la, nao queremos saber o que que esta vindo aqui do evento, como parametro, nao vai nos interessar, nao precisamos nem colocar, se quisermos colocar so um ezinho aqui, ou nada, nao tem problema, selecaoUsuarios.on('click', function (e) {}

   selecaoUsuarios.on('click', function () {


   });
 * 
 * 88. Vamos la, o que que nos vamos fazer aqui agora? Nos queremos buscar, oh, selecaoUsuarios, eh so um click? Entao, damos um log() aqui, nao eh? So uma coisa assim.
 * 
 * 
 * selecaoUsuarios.on('click', function () {
        console.log('clicou');
   });

   89. Vamos voltar aqui, na pagina html e vamos recarregar. Quando nos clicarmos aqui, em um checkbox da tela, eh para aparecer 'clicou!'
 * 
 * 90. Vamos clicar aqui no checkbox debaixo e ele vai pr um 2 aqui na frente, quando a string nao muda, ele agrupa, olha la, 2, 3, vamos clicar de novo, 4, toda vez, eu marcando ou desmarcando, ele esta incrementando, aqui no checkbox de TODOS nao, prque aqui eh um outro elemento.
 * 
 * 41. Okay? Entao, tambem funcionou esse clique aqui para a gente. Qual que eh a ideia aqui, entao, que o instrutor quer fazer? 
 * 
 * 42. Eu quero saber se para eu dar um checked ou nao no selecaoTodosUsuarios. Entao, o que que eu posso fazer aqu, oh?
 * 
 * 43. Vamos colocar uma variavel aqui dentro, totalUsuariosSelecionados, quantos usuarios que foram selecionados?
 * 
 * selecaoUsuarios.on('click', function () {
        var totalUsuariosSelecionados = 
   });
 * 
 * 44. Ou seja, toda vez que nos clicarmos em um checkbox que nao seja o primeiro checkbox de TODOS, nos vamos contar, tem quantos aqui selecionados? Tem 2. E agora? Tem 3. E agora? Tem 2. E agora? Tem 1.
 * 
 * 45. Okay? Eh isso que eu quero fazer. Entao, todos os usuarios selecionados, eu quero contar isso. Como que eu posso buscar isso? Vamos la nos Selectors, https://api.jquery.com/category/selectors/, na documentacao do jQuery.
 * 
 * 46. Aqui, existe um selector, :checked Selector, ele vai dar o match em todos os elementos que estao checados, ou selecionados. 
 * 
 * 47. Okay? Vamos la, vamos ver aqui como eh que nos podemos usar ele. Eh so falar o seguinte, quais os elementos, nao vamos colocar :checked aqui,
 * 
 * var totalUsuariosSelecionados = $(':checked');
 * 
 * so, direto, vamos dar uma olhada aqui oh, https://api.jquery.com/checked-selector/
 * 
 * 48. Olha so como ele faz. Ele pega todos os inputs que estao checados, por exemplo, .length, okay?
 * 
 * var n = $( "input:checked" ).length;
 * 
 * , so que nos nao vamos pegar todos os inputs qe estao checados, nos vamos pegar todos os .js-selecao-usuario's, todos os que estao checados, ponto length,
 * 
 * var totalUsuariosSelecionados = $('.js-selecao-usuario:checked').length;
 * 
 * 49. Vamos dar um log nesse totalUsuariosSelecionados?
 * 
 * console.log(totalUsuariosSelecionados);
 * 
 * 50. Vamos recarregar a pagina e dar uma olhada aqui. No incio, quando nos estamos aprendendo Javascript, no inicio, eh bom nos irmos fazendo isso no inicio, esse passo-a-passo, para nos irmos treinando, vermos o que que esta acontecendo. quando nos clicarmos aqui, no checkbox, nos queremos que mostre 1. Agora, vamos clicar no outro checkbox, vai mostrar 2 no Console do Chrome DevTools. Agora, vai printar 3 no Console. Vamos desclicar no checkbox do meio, vai mostrar 2. Por que? Porque, agora, tem 2 selecionados.
 * 
 * 51. Entao, a regrinha que nos queremos usar esta caminhando com sucesso aqui.
 * 
 * 52. Entao, nos vamos, agora, na selecaoTodosUsuarios, nos vamos setar, lembra que a gente ja fez la, usando prop()?, vamos setar no checked, nos precisamos passar, aqui, true ou false dependendo da quantidade de usuarios selecionados (totalUsuariosSelecionados) e o total que nos temos de usuarios (selecaoUsuarios),
 * 
 * selecaoTodosUsuarios.prop('checked', );
 * 
 * 53. Entao, nos podemos criar uma variavel aqui, vamos chamar ela de checked, ou seja, eh para checar ou nao? Eh o selecaoUsuarios.length, se for igual ao total de usuarios selecionados, ai, nos fazemos o checked,
 * 
 * var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
 * 
 * , okay?
 * 
 * var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
 * selecaoTodosUsuarios.prop('checked', checked);
 * 
 * 54. Vamos voltar aqui, recarregar a pagina. Agora, quando nos selecionarmos, aqui, todo mundo, o checkbox de TODOS vai ser selecionado. Vamos desmarcar um checkbox, desmarcou la em cima no checkbox de TODOS. Marquei de novo todos os checkboxes, marcou la em cima o checkbox de TODOS.
 * 
 * 55. Entao, olha so, eh so ir olhando a documentacao do jQuery, nao ter vergonha de ir olhando na documentacao do jQuery, o instrutor fica o tempo inteiro la, nas paginas de documentacao, olhando isso. 
 * 
 * 56. Okay?
 * 
 * 57. Nao tem um jeito mais facil ainda de fazer isso aqui, Normandes?, voce buscou de novo os componentes, voce nao consegue aproveitar esse cara que voce ja tinha buscado, ou seja, var selecaoUsuarios = $('.js-selecao-usuario');?
 * 
 * 58. Sim. Ai, fucando mais aqui na API, vamos olhar aqui, https://api.jquery.com/, existe uma funcao chamada de .filter, olha la o que o filter() faz, ele vai reduzir os elementos que ele ja retornou, com aqueles, ou seja, fazendo o match no seletor que eu vou passar, ou seja, no novo seletor.
 * 
 * 59. Entao, olha so, eu vou pegar o selecao-usuarios aqui, okay?, 
 * 
 * var totalUsuariosSelecionados = selecaoUsuarios() $('.js-selecao-usuario:checked').length;
 * 
 * e, agora, sim, eu posso passar isso aqui oh,
 * 
 * var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
 * 
 * 60. Eu estou fazendo um filtro, agora, nesse selecaoUsuarios, entao, faca o filter(), nesse selecaoUsuarios, usando esse seletor aqui: ':checked', como filtro. Entao, eu so quero, agora, os que sao filtrados, eu nao preciso buscar novamente na DOM, eu ja tenho eles, eu so quero os que estao selecionados. Vamos ver se continua funcionando, vamos recarregar a pagina.
 * 
 * 61. Okay, continua funcionando, bem simples, nao eh?
 * 
 * 62. Se voce for devagarzinho, assim, no Javascript, voce vai tranquilo, da para ir trabalhando bem.
 *
 * 63. O que que esta faltando, aqui, agora? Fazer a implementacao do checkbox de TODOS. Esta selecionado, se eu clicar aqui, eu quero desmarcar todo mundo. Seu eu clicar aqui novamente, marca todo mundo, ou seja, os demais checkboxes, okay?
 * 
 * 64. Entao, vamos la, vamos implementar isso daqui. 
 * 
 * 65. Olha so, no selecaoTodosUsuarios, no on, 'click' dele, nos vaos adicionar uma funcao, que eu vou fazer o seguinte nessa funcao, oh, 
 * 
 * selecaoTodosUsuarios.on('click', function() {
 * 
 * });
 * 
 * 64. selecaoUsuarios, eu vou pegar essa selecao dos usuarios aqui, e vou setar a propriedade checked dela, ou seja, eu quero selecionar todos os checkboxes de uma vez, eu estou usando todos de uma vez, o jQuery, oh, aqui, eles sao todos,
 * 
 * var selecaoUsuarios = $('.js-selecao-usuario');
 * 
 * , o jQuery consegue aplicar isso para cada um deles, porque tem varios aqui dentro, ele vai aplicando para cada um deles no checked. Com o que?, nos temos que passar aqui true ou false,
 * 
 * selecaoTodosUsuarios.on('click', function () {
 *      selecaoUsuarios.prop('checked', >>true, false<<);
 * })
 * 
 * , se eu passar true, eh para estar checado, se eu passar false, eh para nao estar checado. Baseado em que eu posso fazer isso oh, nao eh no click desse cara, do selecaoTodosUsuarios? Entao, se o selecaoTodosUsuarios.prop('checked'), aqui ja vai dar certo, porque, se eu nao passar nada aqui, ele vai retornar se ele esta selecionado ou nao, entao, se estiver selecionado, esta true, e, ai, seleciona todo mundo, se nao estiver selecionado selecaoTodosUsuarios, vai estar false, e, entao, coloca false em todo mundo,
 * 
 * selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
 * 
 * 65. Beleza? Vamos recarregar aqui, vamos ver, vamos clicar aqui no checkbox de TODOS, e, eh para selecionar todos de uma vez, selecionou. Se eu desmarcar um aqui, ele vai cair dentro desse cara:
 * 
 *     selecaoUsuarios.on('click', function() {
        var totalUsuariosSelecionados = $('.js-selecao-usuario:checked').length;
        var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
        selecaoTodosUsuarios.prop('checked', checked);
    });
 * 
 * 66. Caindo dentro dessa outra funcao, ele vai desmarcar sozinho ali para mim, oh, ja desmarca. Clicando em todos os checkboxes, seleciona o checkbox TODOS, clicando em TODOS, ele desmarca os outros checkboxes, clicando novamente, ele marca todos os demais checkboxes. Selecionou todo mundo, desmarcou um, o checkbox TODOS desmarca, seleciona novamente todos os checkboxes, seleciona tambem o checkbox TODOS.
 * 
 * 67. Beleza? Entao, so com esse codigozinho aqui deu para a gente fazer essa selecao ai de varias linhas, implementar isso usando o jQuery. O instrutor gosta bastante do jQuery, okay? 
 * 
 * 68. Vamos falar, agora, um pouquinho mais do ID. Normandes, voce usa muito o ID, nos seus input html?
 * 
 * 69. Nao. O instrutor nao usa muito ID, porque, se nos tivermos um outro carinha ali que nos queiramos colocar, acaba, vamos supor que eu tenha uma outra tabela aqui, nao eh, e, ai, por algum motivo, tem o mesmo nome, ai, eu vou colocar e vou acabar me esquecendo. Entao, normalmente, o intrutor nao usa ID, normalmente. Agora, se for alguma coisa que eu sei que tera so um na tela, ai, tudo bem, ai nos podemos deixar o ID, mas nos temos que ter certeza disso, porque a busca pelo ID eh mais rapida, ela eh mais interessante, ela da uma performance maior.
 * 
 * 70. Mas tem essa desvantagem, nao eh, tudo tem vantagem e desvantagem. Entao, buscar pelo ID tem a vbantegem de ser mais rapida, mas tem a desvantagem de nos nao podermos repetir. Se nos colocarmos um outro ID aqui, igualzinho, mesmo nome, o jQuery vai pegar so o primeiro, ele na pega todos dessa vez, tah okay? 
 * 
 * 71. Entao, nos poderiamos colocar uma classe tambem. Ai, nos colocariamos um 'js-' aqui na frente, por exemplo, 'js-selecao-todos-usuarios', e, no Javascript, ao inves de ser assim,
 * 
 * var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
 * 
 * , seria assim,
 * 
 * var selecaoTodosUsuarios = $('.js-selecao-todos-usuarios');
 * 
 * 72. Mas nos vamos deixar como ID, para nos termos mais um exemplo de selecao com ID tambem. Okay?
 * 
 * 73. Fim da Aula 07.002. Seletores.
 * 
 */

 $(function () {

    var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
    /** console.log('selecaoTodosUsuarios', selecaoTodosUsuarios); **/
    var selecaoUsuarios = $('.js-selecao-usuario');

    /** console.log('selecaoUsuarios', selecaoUsuarios); **/

    selecaoUsuarios.on('click', function() {
        /** console.log('clicou!'); **/
        var totalUsuariosSelecionados = $('.js-selecao-usuario:checked').length;

        /** console.log(totalUsuariosSelecionados); **/
        var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
        selecaoTodosUsuarios.prop('checked', checked);
    });

    selecaoTodosUsuarios.on('click', function() {
         selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
    });    

 });


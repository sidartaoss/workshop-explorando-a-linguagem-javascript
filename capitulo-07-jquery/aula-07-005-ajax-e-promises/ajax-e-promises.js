/**
 * Aula 07.005. Ajax e Promises
 * 
 * 23. Eu quero fazer, aqui, um Ajax no Servidor. Nos vimos o que que o instrutor fez, se o instrutor fizer, aqui, http://localhost:8080/cidades?uf=GO, beleza, da certo, ele vai trazer. O instrutor vai fazer aqui, o GET de estados, http://localhost:8080/estados. 
 * 
 * 24. Eu quero que apareca, oh, no combo de Estado, vai aparecer Minas Gerais, Sao Paulo e Goias.
 * 
 * 25. Okay?, essa eh a ideia.
 * 
 * 26. Nao esqueca do servidorzinho, tem que ser esse servidor aqui, se nos criarmos a nossa aplicacao, nao vai dar certo, ai, eh melhor nos olharmos na aplicacao, o instrutor ja vai falar por que, daqui a pouco, okay?
 * 
 * 27. Vamos la. Como que eu faco uma Requisicao Ajax com o jQuery?
 * 
 * 28. Okay? Qual Javascript puro, sem jQuery, eh possivel? Eh claro, eh possivel, o jQuery nao eh um Javascript do outro mundo, nao, eh uma biblioteca que foi feita em cima de Javascript, entao, so com Javascritp puro, eh possivel sim implementar Ajax, mas, como o instrutor ja nos disse, o instrutor gosta muito do jQuery, o instrutor acha que ele facilita muito a nossa vida, e nos vamos utiliza-lo.
 * 
 * 29. Entao, olha la, eu cliquei na categoria Ajax, https://api.jquery.com/category/ajax/, e vamos dar uma olhada aqui, oh, na parte de Ajax, na documentacao dele.
 * 
 * 30. Cliquei aqui em Ajax, https://api.jquery.com/jQuery.ajax/, vamos dar uma olhada como eh que ele funciona. Tem algumas formas ai para faze-lo funcionar.
 * 
 * 31. O instrutor utiliza, na maior parte do tempo, essa forma aqui, https://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings, que eh passar, via parametro, as configuracoes. Essa primeira aqui, https://api.jquery.com/jQuery.ajax/#jQuery-ajax-url-settings, voce pode passar uma URL e, depois, algumas customizacoes de configuracao, mas o instrutor faz sempre essa ultima aqui, https://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings.
 * 
 * 32. E, ai, a documentacao dele, essa opcoes aqui do settings, o que que eu posso passar aqui no settings? Bastante coisa, oh, tudo isso daqui voce pode passar como parametro para o settings ali do Ajax, oh, esta vendo? Bastante coisa.
 * 
 * 33. Entao, vale a pena dar uma lida com calma, aqui. Uma coisa que o instrutor quer destacar, tambem, aqui, entao, olha so, para a gente, antes de eu falar isso, para a gente fazer o ajax, eh usar aqui, coloca dolar, ponto, ajax, abre/fecha parenteses, ponto e virgula,
 * 
 * > $.ajax();
 * 
 * , e, aqui, nos vamos passar as configuracoes.
 * 
 * 34. Entao, vamos la. Eu vou fazer, quando a pagina terminar de carregar,
 * 
 * $();
 * 
 * , eu vou criar aqui essa function,
 * 
 * $(function () {});
 * 
 * , e, aqui que eu vou implementar o Ajax. Entao, olha la, de acordo com a documentacao, eh assim, $.ajax();
 * 
 * $(function () {
 *      $.ajax();
 * });
 * 
 * , certo? Vamos continuar lendo aqui a documentacao. E, principalmente, os exemplos, nao eh? Vamos dar uma olhada aqui se tem algum, aqui, com settings, da forma que o instrutor mais utiliza. Tem aqui, oh, esse aqui, por exemplo, eh, vamos dar uma olhada aqui, oh, 
 * 
 * $.ajax({
 *      method: "POST",
 *      url: "some.php",
 *      data: { name: "John", location: "Boston" }
 * })
 *      .done(function (msg) {
 *          alert("Data saved: " + msg);
 *      });
 * 
 * , olha so, $.ajax(), ai, eu vou abrir ja chaves para passar um objeto, de configuracao para ele. Entao, chama ajax(), abre/fecha chaves para fazer a configuracao, igualzinho. 
 * 
 * $.ajax({
 * 
 * });
 * 
 * 35. Ai, eu tenho que passar algumas informacoes, que sao importantes e, vamos la. A primeira delas, eu vou passar a URL, 
 * 
 * $.ajax({
 * 
 *      url: 
 * 
 * });
 * 
 * , o que que eh o parametro URL? Eh onde eu quero fazer essa Requisicao Ajax. Para onde eu vou enviar essa Requisicao?
 * 
 * 36. Esse Servidor que a gente acabou de levantar aqui, oh, que esta com erro aqui, porque eu nao passei, la, a UF certa, ele levanta na porta 8080, ta okay?, nao tem jeito de voce trocar essa portinha ai nao.
 * 
 * 37. Se voce precisar trocar, vai ter que baixar o servidor ai, baixar o codigo-fonte e compilar de novo.
 * 
 * 38. Beleza? Eu deixei fixo ai, a porta 8080, entao, eu vou passar aqui, http://localhost:8080/estados. Essa sera a URL que o jQuery vai fazer a Requisicao. Lembra que o instrutor fez a Requisicao exatamente dessa URL no Browser? Eh a mesma.
 * 
 * 39. Eh essa a URL que ele vai fazer a Requisicao. Ele vai usar qual metodo? Lembra que eh importante a gente definir o metodo http?
 * 
 * 40. Ele vai fazer via GET,
 * 
 * $ajax( {
 *      url: 'http://localhost:8080/estados',
 *      method: 'GET'
 * });
 * 
 * 41. Okay? So isso daqui, ja vamos dar uma olhada, aqui no Developer tools, para a gente ver se vai ter algum probleminha, olhar aqui na Guia Network, se essa Requisicao vai acontecer, ou nao. Beleza? Entao, eh so dar um Refresh no Browser. Repara que nos abrimos, nos estamos abrindo aqui os arquivos diretamente, oh, via file:////, okay?, e isso vai dar um probleminha, mas o instrutor ja nos explica por que.
 * 
 * 42. No Console do Chrome DevTools, aparece o erro. Esse erro eh um erro de seguranca, Access to XMLHttpRequest at 'http://localhost:8080/estados' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
 * 
 * 43. O Browser, ele tenta nos proteger, o que nos estamos acessando para nao dar, para evitar problemas de seguranca mesmo. Qual que eh o problema aqui que esta acontecendo?
 * 
 * 44. Olha so, o Javascript, aqui, ele tentou acessar 'http://localhost', nao foi? E, aqui, onde eu estou neste momento? Qual foi a pagina que ela carregou, em qual dominio que esta a pagina? Nao tem nenhum dominio, ele esta com o arquivo aberto, direto. E isso o Browser percebe e fala, 'Opa, opa, isso aqui eu nao vou deixar voce fazer nao'. Okay? Ele nao deixa, e, olha so, na hora que ele vai fazer a Requisicao, ele faz a Requisicao la oh, so que nao vem nada na Resposta, porque o Browser esta nos protegendo. Ele fala, 'Nao, voce nao pode fazer isso'.
 * 
 * 45. Okay? Entao, nao vem nada na Resposta. A gente viu que, se fizer um GET nesse cara, http://localhost:8080/estados, traz Resposta, mas, aqui, oh, no Response, nao veio nada, por conta dessa seguranca, okay?
 * 
 * 46.  E como que a gente pode resolver isso? Bom, a forma, normalmente, o que aconteceria? Era que, voce esta carregando a aplicacao, voce vai fazer essa Requisicao no mesmo dominio, nao eh, entao, essa aplicacao, voce nao vai desenvolver isso aqui em file:////, nao eh, nao vai ser desenvolvido em file, que voce vai colocar Javascript. Normalmente, voce estaria com, essa aplicacao, esta pagina aqui, estaria dentro do Servidor, executando. 
 * 
 * 47. Mas, tem como a gente fazer isso daqui funcionar?
 * 
 * 48. Tem sim. Se voce olhar aqui na documentacao, em https://api.jquery.com/jQuery.ajax/, e a gente procurar aqui oh, o dataType, esse cara aqui oh, o dataType, e der uma lida aqui, essa parte aqui oh, em "jsonp". 
 * 
 * 49. dataType eh um parametro que a gente pode passar, okay?, e uma das opcoes eh o 'jsonp', termina com 'p', aqui. Ele vai falar que vai usar JSONP, adicionando algumas coisas ali na Requisicao. Mas o que que eh esse JSONP?
 * 
 * 49.1. O Wikipedia diz: JSONP, ou "JSON with padding", eh um complemento ao formato de dados JSON. Ele prove um metodo para enviar requisicoes de dados de um Servidor para um dominio diferente, uma coisa proibida pelos navegadores tipicos por causa da Politica de mesma origem.
 * 
 * 50. Vamos dar uma clicada aqui no link, essa documentacao vai explicar um pouquinho. Ele comeca falando que o modelo de seguranca do Browser, ele vai determinar como o XMLHttpRequest, que eh o carinha usado para fazer Requisicao HTTP, o Javascript usa essa cara aqui, para fazer essa Requisicao, beleza? Entao, eles precisam ter o mesmo dominio para eles se comunicarem. 
 * 
 * 51. Entao, isso daqui eh do Browser, ele fala assim, oh, 'Voce tem que estar no mesmo dominio para isso funcionar.
 * 
 * 52. Ai, ele vai explicar que isso nao eh uma ideia terrivel, nao eh, por razoes de seguranca, e tal, tal, tal.
 * 
 * 53. Ai, ele propoe, nao eh, o instrutor nao vai ler isso aqui tudo, mas ele propoe uma forma para resolver isso, okay?, ele vai propor essa forma, que eh usando JSONP.
 * 
 * 54. E o jQuery suporta, eh so eu informar, dataType : 'jsonp'. Mas eu vou fazer isso toda vez?
 * 
 * 55. Nao. Eh so quando essa situacao acontecer. Quando voce esta em um Dominio, no caso, aqui, eu estou em um Dominio, file:////, na verdade, eu nao estou em Dominio nenhum, nao eh?, eu estou em file:////, aqui, nao eh?, eu estou abrindo um arquivo, isso significa que, na Requisicao, ele manda aqui a origem da onde ele esta indo, ou seja, do null, nao tem Browser nenhum. Ou seja, verificando na Guia Console do Chrome DevTools, botao All, ao clicarmos em 'estados', no menu lateral esquerdo, aparece, na Guia Headers, em Request Headers, 
 *  
    Provisional headers are shown
    Accept: *
    Origin: null
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36
 * 
 *
 * 56. Olha a diferenca, aqui oh, quando eu faco essa mesma requisicao aqui oh, do proprio Dominio, que a aplicacao esta, ou seja, em http://localhost:8080, olha so, o Request Header, o Host, ja vai com localhost:8080. E, ai, a Resposta da certo e vem, oh., ou seja, na Guia Response, volta alguma coisa na Resposta.
 * 
 * 57. Mas, aqui, no caso, em file:///C:/Users/SEMPR/workshop-explorando-a-linguagem-javascript/capitulo-07-jquery/aula-07-005-ajax-e-promises/index.html, para a Requisicao de 'estados', ele manda Origin null. Entao, isso nao pode.
 * 
 * 58. O jQuery suporta, entao, ele fala isso, voce pode adicionar 'jsonp', que ele vai fazer, nao eh, o que esse cara aqui recomenda, ou seja, no link de JSONP, que eh adicionar um callback no final e tal. Como isso funciona, nao vem ao caso agora, beleza? Mas, para a gente fazer a nossa aplicacao funcionar, entao, eu vou ter que colocar dataType : 'jsonp', okay?
 * 
 * $.ajax({
       url: 'http://localhost:8080/estados',
       method: 'GET',
       dataType: 'jsonp'
   });
 *
 * 59. E, eh so fazer isso, Normandes? Nao.
 * 
 * 60. No Servidor, precisa suportar 'jsonp' tambem. Entao, aqui no Servidor, o instrutor teve que adicionar, na aplicacao que disponibiliza o Servico, na classe que esta levantando a aplicacao, o instrutor teve que adicionar uma classezinha para falar que eu suporto, agora, o 'jsonp', okay?, atraves de um atributo de callback.
 * 
 * 61. Mas, chega de falar desse assunto, vamos voltar aqui para o principal, que eh nos falar sobre Ajax, beleza? Entao, adicionamos esse 'jsonp' aqui, 
 * 
 * * $.ajax({
       url: 'http://localhost:8080/estados',
       method: 'GET',
       dataType: 'jsonp'
   });
 * 
 * salvei a Requisicao, salvei o Javascript, entao, um Refresh novamente na pagina index.html. 
 * 
 * 62. Nao esta dando erro no Console, vamos dar uma olhada aqui oh, em 'estados', ou seja, na Guia Network do Chrome DevTools, botao All, clicamos 'em estados?callback=jQuery22301535340237412035_1541202329581&_=1541202329582'.
 * 
 * 63. Entao, ao lado direito, na Guia Response, vamos dar uma olhada na Resposta? Olha la: agora, ele ja trouxe aqui oh, uma Resposta,
 * 
 * /**jQuery22301535340237412035_1541202329581([{"codigo":1,"uf":"MG","nome":"Minas Gerais"},{"codigo":2,"uf":"SP","nome":"São Paulo"},{"codigo":3,"uf":"GO","nome":"Goiás"}]);
 * 
 * 64. Ta vendo aqui oh?, essa partezinha aqui faz parte do jsonp, /**jQuery22301535340237412035_1541202329581(, entao, esquece isso, se voce estivesse no mesmo Dominio, voce receberia so daqui para ca, o array daqui para ca, ou seja, [{"codigo":1,"uf":"MG","nome":"Minas Gerais"},{"codigo":2,"uf":"SP","nome":"São Paulo"},{"codigo":3,"uf":"GO","nome":"Goiás"}], okay? como objeto.
 * 
 * 65. E esse array aqui, com esses objetos la dentro, eu vou conseguir trabalhar com ele para fazer alguma coisa, nao eh?
 * 
 * 66. Primeiro, a gente vai somente logar aqui na Guia Console do Chrome DevTools, para esta aula nao ficar muito grande, para o instrutor nos explicar tambem as Promises.
 * 
 * 67. Normandes, voce ainda nao falou o que eh Promises. Vamos la, que chegou a hora agora.
 * 
 * 68. Entao, o Ajax eh isso, okay? Ele foi la, fazer essa Requisicao, foi la e voltou. Quando eu carreguei a pagina, oh, eu vou limpar aqui, vou recarregar a pagina, ele buscou la o index, buscou o ajax-e-promises.js, buscou o bootstrap.min.css, buscou o jquery-2.2.3.min.js, e tambem buscou os 'estados', okay?
 * 
 * 69. Buscou, carregou, fez isso. E, como que eu faco para pegar esse resultado?
 * 
 * 70. Existem alguns callbacks, vamos dar uma olhada aqui, callbacks sao funcoes que eu posso chamar depois que o dado voltar, por exemplo, success, por exemplo, em https://api.jquery.com/jQuery.ajax/. Eu poderia fazer isso daqui, oh, 
 * 
   $.ajax({
       url: 'http://localhost:8080/estados',
       method: 'GET',
       dataType: 'jsonp',
       success: function () {
           console.log('Voltou com sucesso!');
       }
   });
 * 
 * , isso ainda nao eh as Promises, okay? Eu poderia adicionar, aqui, uma funcao, vamos colocar aqui um log(), 'Voltou com sucesso!', so para mostrar esse logzinho aqui. Na verdade, eu vou colocar ate os dados aqui, oh, os estados,
 * 
   $.ajax({
       url: 'http://localhost:8080/estados',
       method: 'GET',
       dataType: 'jsonp',
       success: function (estados) {
           console.log('Voltou com sucesso!', estados);
       }
   });
 * 
 * , so para a gente ver, okay? Vamos executar, vamos dar uma olhada no Console.
 * 
 * 71. Olha la, 'Voltou com sucesso!', olha la os objetos, aqui oh, o estado, okay? Entao, eu poderia registrar aqui com callbacks para sucesso, para erro, etc.
 * 
 * 72. Para erro, o instrutor nao lembra qual que eh. Olhando na documentacao, https://api.jquery.com/jQuery.ajax/, vemos que eh error mesmo, eu posso adicionar essa funcao, que eh chamada se a Requisicao falhar.
 * 
 * 73. Entao, eu poderia colocar aqui, oh, 
 * 
    $.ajax({
       url: 'http://localhost:8080/estados',
       method: 'GET',
       dataType: 'jsonp',
       success: function (estados) {
           console.log('Voltou com sucesso!', estados);
       },
       error: function () {

       }
   });
 * 
 * , virgula, error, e adiciono uma funcao, caso algum erro aconteca. Okay?
 * 
 * 74. Mas, o instrutor nao costuma fazer assim. Por que que o instrutor nao costuma fazer assim? Eh errado? Nao, nao eh errado. Mas o instrutor prefere usar as Promises.
 * 
 * 75. Por que?
 * 
 * 76. Colocar assim, o instrutor nao gosta, porque fica encadeando essa funcao, coloca, aqui, uma outra funcao, 
 * 
        success: function (estados) {
           console.log('Voltou com sucesso!', estados);
       },

 * vamos supor que voce precisa adicionar uma outra funcao, ai, fica funcao, funcao, funcao... vai fazendo aquele efeito flexa, nao eh? vai vindo, aqui, aquele tanto de funcao, carregando para ca e voltando para ca. Entao, o instrutor nao costuma fazer isso daqui nao,
 * 
     $.ajax({
       url: 'http://localhost:8080/estados',
       method: 'GET',
       dataType: 'jsonp',
       success: function (estados) {
           console.log('Voltou com sucesso!', estados);
       },
       error: function () {

       }
   });
 * 
 * 77. Tem hora que sim? Sim, as vezes, quando queremos fazer um teste simples, tudo bem. 
 * 
 * 78. Mas o instrutor quer nos mostrar como ele faria isso daqui com Promises.
 * 
 * 79. Nos vimos o seguinte. O jQuery Ajax, ele retorna, se a gente descer aqui na documentacao, vai falar que retorna Promise, em algum lugar aqui, olha la, o objeto retornado do Ajax, da Requisicao Ajax $.ajax(), implementa a interface Promise, okay?
 * 
 * 80. E o que que eh essa interface Promise, ela fala para mim? 
 * 
 * 81. Entao, ela vai retornar, aqui, uma Resposta,
 * 
    var resposta = $.ajax({
       url: 'http://localhost:8080/estados',
       method: 'GET',
       dataType: 'jsonp'
   });
 * 
 * , que eh uma Promise. Eu posso fazer o seguinte, oh, ele vai executar isso daqui, 
 * 
    var resposta = $.ajax({
       url: 'http://localhost:8080/estados',
       method: 'GET',
       dataType: 'jsonp'
   });
 *
 * , voce concorda que isso daqui pode demorar? Pode ser uma Requisicao em outro Servido, nao eh?, ou eu estou voltando no Servidor. Entao, isso daqui, 
 * 
     url: 'http://localhost:8080/estados'
 * 
 * , pode demorar.
 * 
 * 82. Entao, para o programa nao travar, aqui, ele continua e eu pego, na resposta, e atacho uma funcao, por exemplo, aqui, que vai me retornar todos os estados,
 * 
 * resposta.done(function (estados) {
 *  
 * });
 * 
 * 83. Entao, ele vai falar: quando deu certo, done(), eu vou executar essa funcao, function () {}.
 * 
 * 84. E eu posso registrar mais de uma, 
 * 
 * resposta.done(function (estados) {
 *  
 * });
 * 
 * resposta.done(function (estados) {
 *  
 * });
 * 
 * 85. Eu posso sair registrando, varios e varios aqui. Entao, imagina que voce tem varias atividades para fazer, nao eh?, varias funcoes a serem executadas, quando voltar a Resposta do Servidor, done(), esta pronto, se a gente traduzir done, em portugues, oh, a Resposta esta pronta?, resposta.done(), entao, executa o que esta aqui oh, dentro da funcao. Vamos colocar um log de 'Tudo certo!', virgula, estados,
 * 
 * resposta.done(function (estados) {
 *      console.log('Tudo certo!', estados);
 * });
 * 
 * , vamos colocar um outro log aqui,
 * 
 * resposta.done(function (estados) {
 *      console.log('Funcionou mesmo!', estados);
 * });
 * 
 * , so para nos vermos esses dois logs aqui, sendo mostrados aqui quando eu recarregar a aplicacao.
 * 
 * 86. Recarregamos. No Console do Chrome DevTools, Tudo certo!, Funcionou mesmo!. Ele executou essas duas funcoes aqui,
 * 
  resposta.done(function (estados) {
    console.log('Tudo certo!', estados);
  });

  resposta.done(function (estados) {
    console.log('Funcionou mesmo!', estados);
  });
 * 
 * 87. E isso o instrutor acha bem legal, porque deixa o nosso codigo bem desacoplado. E, se der um erro?,
 * 
 * resposta.fail(function () {
 *      
 * });
 * 
 * , e, aqui, eu posso colocar, vamos fazer o seguinte, vamos colocar um alert(), 'Erro carregando estados do Servidor',
 * 
 * resposta.fail(function () {
 *      alert('Erro carregando estados do servidor!');  
 * });
 * 
 * 88.  Se der algum erro, vai chamar esse alert() aqui. Se a gente comentar aqui, 
 * 
 * dataType: 'jsonp',
 * 
 * a gente ja viu que vai dar erro, nao eh?
 * 
 * 89. Entao, vamos ver? Oh, salvei, vou recarregar, vai ter que aparecer um alert(). Olha la, 'Erro carregando estados do servidor!'.
 * 
 * 90. Por que? Porque nao conseguiu voltar. Se nao conseguiu voltar, vai dar esse alert() aqui, 
 * 
 * alert('Erro carregando estados do servidor!');
 * 
 * 91. E eh a mesma coisa, eu posso registrar varias funcoes para o fail(), assim como done(), okay?
 * 
 * 92. Bom, era isso daqui, vamos so deixar aqui mais mastigado,
 * 
  resposta.done(function (estados) {
    console.log('Tudo certo!', estados);
  });
 * 
 *
 * , porque eh o seguinte, aqui, ele retornou um array com os estados, nao foi isso? Entao, vamos executar novamente, entao, olha la, o array com os estados, olha la, um array.
 * 
 * 93. Entao, vamos percorrer esse array? Entao, eh, vamos usar o forEach?,
 * 
 * estados.forEach(function () {
 * 
 * });
 * 
 * , ai, eu passo uma function aqui, que recebe o estado,
 * 
 * estados.forEach(function (estado) {
 *      
 * });
 * 
 * , ou seja, para cada um dos estados que ele recebeu, eu vou entregar nessa variavel estado. E muita atencao nesses abre/chaves, fecha parenteses. Se voce esta vindo ai da programacao Java, isso eh meio estranho, entao, pode dar erro, se voce esquecer, inverter, ai, vai dar um errinho, voce tem que corrigir, okay?
 * 
 * 94. log estado,
 * 
 * estados.forEach(function (estado) {
 *    console.log(estado)  
 * });
 * 
 * , agora, eu vou ter que ver o objeto estado um por um no log, aqui no Console do Chrome DevTools. Olha la, codigo 1, MG, codigo 2, SP, codigo 3, GO, okay? E eu quero pegar, agora, o nome, e eu vou adicionar esse nome para aparecer no combo Estado e o UF para aparecer no value, nao eh?, do option aqui do combo.
 * 
 * 95. Beleza? Mas nos vamos deixar para fazer isso na proxima aula. Vamos recapitular aqui? O Ajax, aqui, do jQuery, eu posso usar, assim, passando as configuracoes aqui, o instrutor prefere usar muito mais assim, passa a URL, passa o metodo, esse dataType eh so porque a gente nao esta no mesmo Dominio, okay?
 * 
 * 96. Se eu estiver fazendo um POST? Vamos dar uma olhada aqui na documentacao, https://api.jquery.com/jQuery.ajax/, a documentacao tem que ser muito sua amiga, o instrutor nao sabe, ele nos fala de verdade, ele nao sabe sempre, ele sempre tem que ir na documentacao e dar uma olhada, porque ele sempre esquece como eh que ele faz para passar algum dado, para filtrar, trocar o contexto, por ai vai.
 * 
 * 97. Entao, data, olha la, dados para serem enviados ao servidor. Entao, se voce esta fazendo um POST, voce quer enviar dados para o Servidor, voce pode passar aqui via data, okay?, e ele vai passar, voce colocaria algo assim,
 * 
  var resposta = $.ajax({
    url: 'http://localhost:8080/estados',
    method: 'GET',
    /**  *dataType: 'jsonp' **
    dataType: 'jsonp',
    data: 
  });
 * 
 * , ai, poderia passar, aqui, chave: 'valor', valor aqui, uma string, por exemplo,
 * 
   var resposta = $.ajax({
    url: 'http://localhost:8080/estados',
    method: 'POST',
    /**  *dataType: 'jsonp' **
    dataType: 'jsonp',
    data: {
        chave: 'valor';
    }
  });
 *
 * , okay? Essa eh a ideia aqui. Ah, tem uma coisa aqui, que o instrutor ja viu muita gente usando, mas o instrutor nao usa assim tambem nao, que eh o seguinte, oh, o instrutor faz ajax usando sempre essa forma,
 * 
 * $.ajax()
 * 
 * , dolar, ponto, ajax, e, la dentro, o instrutor passa qual eh o metodo que ele esta usando. Mas existem umas funcoes mais genericas ai, como, por exemplo, o get, $.get(), que ja vai fazer um get, significa que nos nao precisamos passar o metodo, 
 * 
 *     method: 'GET',
 * 
 * , aqui. So que o instrutor acostumou tanto a fazer com $.ajax(), que ele nao ve problema de adicionar o metodo, e que o instrutor sempre faz assim. E tambem, muitas vezes o instrutor tenta criar alguma biblioteca generica, dependendo do sistema, tamanho do sistema, as vezes, o instrutor cria uma biblioteca generica para fazer a Requisicao para ele. E, ai, ele pode passar para ele o metodo na hora, as vezes, ele quer fazer GET, as vezes, ele quer fazer POST, okay?, entao, o instrutor costuma usar sempre assim. 
 * 
 * 98. Mas eh possivel usar um get aqui, tirar esse metodo?,
 * 
    var resposta = $.get({
    url: 'http://localhost:8080/estados',
    /**  *dataType: 'jsonp' **
    dataType: 'jsonp',
    data: {
        chave: 'valor';
    }
  });
 * 
 * 99. Sim, eh possivel, o instrutor nem sabe se eh assim, porque o instrutor nem usa esse cara, vamos olhar na documentacao, se da para a gente determinar aqui pela documentacao, https://api.jquery.com/jQuery.get/, olha la, nos podemos passar a URL, ah, bom, tem que dar uma olhada nos exemplos. Hmm, nao, deve ser uma coisa diferente, ai, aqui, ele ja esta pegando a funcao depois,     
 * 
 var jqxhr = $.get( "example.php", function() {
  alert( "success" );
})
 * 
 * enfim, aqui, eu ja posso passar os parametros direto,
 * 
 $.get( "test.php", { name: "John", time: "2pm" } );
 * 
 * 
 * 100. Eh, tem alguns atalhos ai, que nos podemos usar. Mas, como o instrutor nos disse, o instrutor usa mais assim,
 * 
  var resposta = $.ajax({
    url: 'http://localhost:8080/estados',
    method: 'GET',
    dataType: 'jsonp'
  });
 *
 *
 * , o instrutor prefere usar assim. Bom, era isso, o instrutor queria, entao, nos mostrar os estados sendo carregados aqui, no Console do Chrome DevTools, no log, e a gente vai, ainda, brincar com esse cara nas proximas aulas. Beleza? Lembra do servidorzinho ai, nao eh?, se ele parar, vai dar problema. Para parar ele, CTRL + C, se eu quero iniciar de novo, java -jar localidades-1.0.0.jar, se voce nao chamar nada errado, nao vai dar nenhuma excecao, okay, oh, vamos carregar aqui novamente. So vai dar erro no Servidor se voce colocar um estado que o instrutor nao colocou mapeado. Beleza? Forma so MG, SP, GO. Beleza? Na proxima aula, nos continuamos evoluindo e vamos colocar esses estados aqui, dentro, vao ser mostrados dentro desse combo Estado.
 * 
 * 101. Fim da Aula 07.005. Ajax e Promises.
 * 
 * 
 */
$(function () { 
    /** *$.ajax(); **/
    /** *
     * $.ajax({

    });
    **/
   /** *
   $.ajax({
       url: 'http://localhost:8080/estados',
       method: 'GET',
       dataType: 'jsonp',
       success: function (estados) {
           console.log('Voltou com sucesso!', estados)
       }
   });
   **/
  var resposta = $.ajax({
    url: 'http://localhost:8080/estados',
    method: 'GET',
    /**  *dataType: 'jsonp' **/
    dataType: 'jsonp'
  });

  resposta.done(function (estados) {
    /** *console.log('Tudo certo!', estados); */
    estados.forEach(function (estado) {
        console.log(estado);
    });
  });

  /** *
  resposta.done(function (estados) {
    console.log('Funcionou mesmo!', estados);
  });
  */

  resposta.fail(function () {
    alert('Erro carregando estados do servidor!');
  });

});
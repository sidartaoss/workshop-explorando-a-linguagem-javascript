/**
 * 
 * Aula 09.008. Disparando Eventos Customizados
 * 
 * 1. Nesta aula, nos vamos pegar aqui a alteracao do Estado e carregar a Cidade, disparando eventos customizados.
 * 
 * 2. Entao, criei aqui um novo projeto, eh exatamente a mesma coisa la da aula que esta, por enquanto, usando a funcao bind(), o projeto, eu so copiei aqui, renomei, para a gente manter o historico, e, ai, vamos, agora, implementar isso daqui oh, 
 * 
$(function () {
    var estado = new Estado();
    estado.iniciar();    

    >>>// var cidade = new Cidade(estado);<<<
    >>>// cidade.iniciar();<<<
});
 * 
 * , eu quero ter um objeto Cidade, que depende do estado, ou seja, quando o estado for alterado, Cidade vai ser notificada e, ai, a Cidade pode reagir a isso, okay?, para tudo ficar separado.
 * 
 * 3. Nao eh?, a gente tem, aqui, o objeto Estado, oh, que so traalha a respeito do Estado, e, aqui,
 * 
$(function () {
    var estado = new Estado();
    estado.iniciar();    

    >>>// var cidade = new Cidade(estado);<<<
    >>>// cidade.iniciar();<<<
});
 * 
 * , a gente vai ter um outro objeto Cidade para a gente trabalhar. Entao, vamos la, 
 * 
 * var Cidade = ()
 * 
 * , eh uma funcao que eu vou colocar aqui, 
 * 
 * var Cidade = (function () {
 * 
 * });
 * 
 * , e ela precisa executar,
 * 
 * var Cidade = (function () {
 * 
 * })();
 * 
 * , nao eh?, oh, o instrutor faz dessa forma aqui,
 * 
 * var Cidade = (function () {
 *      function Cidade () {
 * 
 *      }
 * 
 * 
 *      return Cidade;
 * })();
 * 
 * 4. Beleza? Ai, isso aqui ja vai, para funcionar, 
 * 
 * Cidade.prototype.iniciar = function () {
 *      console.log('Iniciando cidade...');
 * }
 * 
 * , ou seja,
 * 
 * var Cidade = (function () {
 *      function Cidade () {
 * 
 *      }
 * 
 *      >>>Cidade.prototype.iniciar = function () {
 *          console.log('Iniciando cidade...');
 *      }<<<
 * 
 *      return Cidade;
 * 
 * })();
 * 
 * , beleza? Aqui, ele esta recebendo estado como parametro, eu vou colocar, aqui, estado,
 * 
 * var Cidade = (function () {
 *      function Cidade (>>>estado<<<) {
 * 
 *      }
 * 
 *      Cidade.prototype.iniciar = function () {
 *          console.log('Iniciando cidade...');
 *      }
 * 
 *      return Cidade;
 * 
 * })();
 * 
 * , e vou armazenar essa variavel estado no objeto Cidade, aqui,
 * 
 * var Cidade = (function () {
 *      function Cidade (>>>estado<<<) {
 *          >>>this.estado = estado;<<<
 *      }
 * 
 *      Cidade.prototype.iniciar = function () {
 *          console.log('Iniciando cidade...');
 *      }
 * 
 *      return Cidade;
 * 
 * })();
 * 
 * , okay? So, vindo aqui na Pagina Html e dando um Refresh, vamos ver, no Console do Chrome DevTools, se a gente inicia Cidade.
 * 
 * 6. Retornou, 
 * 
 * 'Iniciando cidade...
 * 
 * , entao, estamos iniciando Cidade.
 * 
 * 7. Beleza? Depois que voce tem a casca pronta aqui, 
 * 
 * ...
 *      function Cidade (estado) {
 *          this.estado = estado;
 *      }
 * 
 *      Cidade.prototype.iniciar = function () {
 *          console.log('Iniciando cidade...');
 *      }
 * 
 *      return Cidade;
 * ...
 * 
 * , a gente comeca a programar ela aqui. A primeira coisa que o instrutor costuma colocar aqui, ja eh iniciar o que eu preciso de elementos de tela, 
 * 
 * function Cidade (estado) {
 *      this.comboCidade = 
 *      this.estado = estado;
 * }
 * 
 * entao, comboCidade eh esse cara aqui que esta com esse ID, em index.html,
 * 
<select id="combo-cidade" class="form-control" disabled>
</select>
 * 
 * , entao, coloca o jogo-da-velha, comboCidade esta iniciado,
 * 
 * function Cidade (estado) {
 *      this.comboCidade = $('#combo-cidade');
 *      this.estado = estado;
 * }
 * 
 * , nao eh?
 * 
 * 8. O que que eh o iniciar(), aqui, da Cidade? Agora, vamos la, vamos disparar eventos customizados para fazer isso.
 * 
 * 9. Eu quero escutar um evento onde? No estado, 
 * 
 * function Estado (estado) {
 *      this.comboCidade = $('combo-cidade');
 *      >>>this.estado = estado;<<<
 * }
 *
 * no objeto estado, quando ele for alterado. Entao, eu preciso, aqui, nesse iniciar(), atachar alguma funcao quando um evento, em estado,
 * 
  * function Estado (estado) {
 *      this.comboCidade = $('combo-cidade');
 *      >>>this.estado = estado;<<<
 * }
 * 
 * , for disparado.
 * 
 * 10. Beleza? Oh, eu vou chamar, vou atachar, eu vou criar um handler, aqui, quando o estado for alterado,
 * 
 * Cidade.prototype.iniciar = function () {
 *      // handle quando o estado for alterado.
 * }
 * 
 * , eh isso que eu quero colocar aqui,
 * 
 * Cidade.prototype.iniciar = function () {
 *      // handle quando o estado for alterado.
 * }
 * 
 * , beleza?
 * 
 * 11. Eu vou fazer algo assim, oh, 
 * 
 * this.estado.on('')
 * 
 * , quando alguma coisa, no estado, acontecer, eu vou chamar uma funcao, quando o que? Quando o estado for alterado,
 * 
 * this.estado.on('alterado');
 * 
 * , ou seja, quando alguma coisa mudo la, vou colocar em portugues, porque eh um evento customizado que a gente esta fazendo.
 * 
 * 12. Ta okay? Quando esse evento acontecer, eu vou chamar uma funcao, aqui, vou colocar um function, aqui, direto, e vou colocar so um log aqui, oh, 'Estado alterado...',
 * 
 * Cidade.prototype.iniciar = function () {
        this.estado.on('alterado', function () {
             console.log('Estado alterado...');
        });
 * };
 * 
 * , so para a gente ver isso funcionando.
 * 
 * 13. Okay? Bom, se eu executar isso aqui, nao vai dar certo, porque eu ainda nao implementei essa questao,
 * 
 * this.estado.on('alterado', ...)
 * 
 * , nao estou disparando o trigger la em estado. Vamos voltar la para a gente implementar isso, entao? Vamos la, vamos voltar aqui em cima.
 * 
 * 14. Existe uma tecnica aqui que a gente pode fazer com o jQuery, para lancar, para permitir eu disparar esses eventos customizados. Eu vou criar aqui um objeto, eu vou chamar ele de emitter, nao eh?, o emissor, 
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 *      this.emitter
 * }
 * 
 * , aqui eu crio um objeto jQuery vazio,
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 *      this.emitter = $({});
 * }
 * 
 * , cria-se dessa forma, dentro, eu tenho um objeto,
 * 
 * this.emitter = $({});
 * 
 * 15. E, ai, eu vou criar aqui, oh, 
 * 
 * this.on
 * 
 * , que vai ser uma funcao que eu estou adicionando dentro do objeto Estado. E nao eh Estado, que eu passei, a objeto estado, que eu passei, aqui, para Cidade?
 * 
 * function Cidade(>>>estado<<<) {
 *      ...
 * }
 * 
 * , entao, esse on 
 * 
 * Cidade.prototype.iniciar = function () {
 *      >>>this.estado.on<<<('alterado', function () {
 *          console.log('Estado alterado...');
 *      });
 * };
 * 
 * eh o que eu estou criando agora, oh,
 * 
 * 16. Entao, on,
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 *      this.emitter = $({});
 *      this.on = 
 * }
 * 
 * , e como que eu faco para iniciar ele, oh? Eh assim, oh, 
 * 
 * this.emitter.on.bind(this.emitter);
 * 
 * 17. Aqui,
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 *      this.emitter = $({});
 *      this.on = this.emitter.on.bind(this.emitter);
 * }
 * 
 * , eu to falando o seguinte, oh, meio complicado, mas, nao eh tao confuso nao, isso aqui,
 * 
 *      this.emitter = $({});
 *      this.on = this.emitter.on.bind(this.emitter);
 * 
 * , nunca muda, eh sempre assim. Eu to falando o seguinte oh, o on, quando alguem lancar, eu vou um trigger, vai ver que eu vou dar um trigger nesse objeto emitter,
 * 
 *      this.>>>emitter<<< = $({});
 *      this.on = this.>>>emitter<<<.on.bind(this.emitter);
 * 
 * , aqui, eu to falando o seguinte, quando alguem der um trigger em emitter, quem tiver 'on' nele, vai receber esse evento, vai receber a chamada desse evento. Entao, eh isso que essas duas linhas,
 * 
 *      this.emitter = $({});
 *      this.on = this.emitter.on.bind(this.emitter);
 * 
 * , estao fazendo. Significa que, aqui oh, no iniciar, quando eu fizer o seguinte, oh, 
 * 
    Estado.prototype.iniciar = function () {
        $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onEstadosRetornados.bind(this),
            error: onError
        });
        >>>this.comboEstado = <<<
    };
 * 
 * , que eh o elemento la ne,
 * 
    function Estado () {
        >>>this.comboEstado = $('#combo-estado');<<<
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);        
    }
 * 
 * , ele for alterado, 
 * 
 * this.comboEstado.on('change', )
 * 
 * , eu vou fazer aqui, oh, this.emitter.trigger, vou dar um trigger, falando, ele foi alterado,
 * 
 * this.comboEstado.on('change', this.emitter.trigger('alterado'));
 * 
 * , e vou passar, aqui, oh, o valor,
 * 
 * this.comboEstado.on('change'
 *      , this.emitter.trigger('alterado', this.comboEstado.val()));
 * 
 * , okay? 
 * 
 * , entao, olha so, quando, aqui, esse evento on('change') eh o evento da tela, do DOM. Entao, quando for alterado o estado, eu vou disparar um evento customizado, que vai ser,
 * 
 * , this.emitter.trigger
 * 
 * , o nome do evento, 
 * 
 * 'alterado'
 * 
 * , e os dados que eu quero passar nesse evento,
 * 
 * this.comboEstado.val()
 * 
 * , no evento, eu passo os dados tambem que eu quero. Okay?
 * 
 * 18. Entao, quem tiver, nesse objeto,
 * 
 * function >>>Estado<<< () {
 *      ...
 * }
 * 
 * , Estado.on, 
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 *      this.emitter = $({});
 *      >>>this.on<<< = this.emitter.on.bind(this.emitter);
 * }
 * 
 * com 'alterado',
 * 
 * this.comboEstado.on('change'
 *      , this.emitter.trigger(>>>'alterado'<<<, this.comboEstado.val()));
 * 
 * , vai receber essa chamada aqui,
 * 
 * Cidade.prototype.iniciar = function () {
 *      // handle quando o estado for alterado
 *      >>>this.estado.on('alterado', function () {
 *          console.log('Estado alterado...');
 *      }); 
 * }
 * 
 * , olha la, on estado 'alterado', function(), e, ai, vamos colocar aqui, oh, arguments,
 * 
  * Cidade.prototype.iniciar = function () {
 *      // handle quando o estado for alterado
 *      >>>this.estado.on('alterado', function () {
 *          console.log('Estado alterado...', >>>arguments<<<);
 *      }); 
 * }
 * 
 * 
 *  , so para a gente ver quais sao os argumentos. Voce vai ver que sao dois, que eh o evento, e o segundo os parametros que foram passados aqui para esse evento, aqui para essa funcao.
 * 
 * 19. Beleza? Vamos dar uma olhada aqui, Recarregar a Pagina Html. Oh, vou alterar aqui o Estado. Retornou,
 * 
 * jquery-2.2.3.min.js:3 Uncaught TypeError: ((n.event.special[g.origType] || {}).handle || g.handler).apply is not a function
 * 
 * 20. .apply is not a function, vamos ver o que que o instrutor fez de errado aqui.
 * 
 * 21. O instrutor achou o problema aqui. Na verdade, eh o seguinte, o on, aqui,
 * 
 * this.comboEstado.on('change'
 *      , this.emitter.trigger('alterado', this.comboEstado.val()));
 * 
 * , o segundo parametro, 
 * 
 * this.emitter.trigger('alterado', this.comboEstado.val())
 * 
 * , espera uma funcao, por isso que deu o erro, aqui, oh, se eu tentar alterar o Estado na Pagina Html, ele vai falar que ele tentou chamar o apply(), que eh uma forma de chamar uma funcao, e o que ele tentou chamar nao eh uma funcao, entao, ele nao conseguiu fazer isso daqui,
 * 
 * this.emitter.trigger('alterado', this.comboEstado.val())
 * 
 * , entao, eu preciso adicionar, aqui,
 * 
 * this.emitter.trigger('alterado', this.comboEstado.val())
 * 
 * a chamada de uma funcao, porque o instrutor ia, ja, colocar isso em uma funcao separada, mas ele quis colocar, aqui, direto, e o instrutor acabou nao percebendo isso.
 * 
 * 22. Beleza? Entao, eu preciso passar, aqui,
 * 
 * this.emitter.trigger('alterado', this.comboEstado.val())
 * 
 * , uma funcao. Entao, oh, preciso passar dessa forma aqui,
 * 
 * this.comboEstado.on('change'
 *      , function () {
 *          this.emitter.trigger('alterado', this.comboEstado.val())
 *        }
 * );
 * 
 * 23. Ta, beleza? So que esse aqui ainda vai dar um probleminha, que eu vou tentar acessar o this aqui,
 * 
 * this.comboEstado.on('change'
 *      , function () {
 *          >>>this<<<.emitter.trigger('alterado', this.comboEstado.val())
 *      }
 * );
 * 
 * , dentro dessa funcao, e esse this nao vai estar definido. Vamos ver aqui, oh, Recarregar a Pagina Html. Beleza, alterei o Estado para Sao Paulo, retornou,
 * 
 * Uncaught TypeError: Cannot read property 'trigger' of undefined
 * 
 * , nao pode ler a propriedade 'trigger' de undefined, entao, this, aqui,
 * 
 * this.comboEstado.on('change'
 *      , function () {
 *          >>>this<<<.emitter.trigger('alterado', this.comboEstado.val())
 *      }
 * );
 * 
 * , ele nao conseguiu, teria que trocar, aqui, o bind() dessa funcao. Entao, 
 * 
  * this.comboEstado.on('change'
 *      , function () {
 *          this.emitter.trigger('alterado', this.comboEstado.val())
 *      }>>>.bind(this)<<<
 * );
 * 
 * , agora, sim, vai dar certo. Se eu recuperar aqui, selecionando Sao Paulo na combo Estado, agora, sim, lancou, la, no Console do Chrome DevTools,
 * 
 Estado alterado... Arguments(2) [n.Event, "SP", callee: ƒ, Symbol(Symbol.iterator): ƒ]
 * 
 * , Estado alterado..., esse Estado alterado... caiu no Cidade.prototype.iniciar, quando foi 'alterado', aqui, ele chamou essa funcao e mostrou, aqui, os argumentos, onde o primeiro eh o Evento, e o segundo o parametro que eu passei.
 * 
 * 24. Se eu selecionar Minas Gerais, oh, o segundo parametro sera 'MG',
 * 
 * Estado alterado... Arguments(2) [n.Event, "SP", callee: ƒ, Symbol(Symbol.iterator): ƒ]0: n.Event {type: "alterado", timeStamp: 1541793034077, jQuery22308673848365211787: true, isTrigger: 3, namespace: "", …}1: "SP"callee: ƒ ()length: 2Symbol(Symbol.iterator): ƒ values()__proto__: Object

Estado alterado... Arguments(2) [n.Event, "MG", callee: ƒ, Symbol(Symbol.iterator): ƒ]
 * 
 * 25. Beleza? Entao, vamos voltar aqui, so para nao deixar isso aqui dessa forma,
 * 
 * this.comboEstado.on('change'
 *      , function () {
 *          this.emitter.trigger('alterado', this.comboEstado.val())
 *      }.bind(this)
 * );
 * 
 * , o instrutor nao costuma fazer assim, nao, ele faz assim, oh, toda vez que ele tem um on('alguma-coisa'), assim, o instrutor costuma fazer o seguinte, ele passa para uma funcao assim, oh,
 * 
 * this.comboEstado.on('change', onEstadoAlterado);
 * 
 * , okay? O instrutor passa para uma funcao dessa forma. E, ai, nos vamos criar aqui uma funcao,
 * 
 * function onEstadoAlterado () {
 *      this.emitter.trigger('alterado', this.comboEstado.val());
 * }
 * 
 * , e, ai, nos lancamos, realmente, o trigger, 
 * 
 *      this.comboEstado.on('change', onEstadoAlterado);
 * 
 * }
 * 
 * function onEstadoAlterado() {
 *      this.emitter.trigger('alterado', this.comboEstado.val());
 * }
 * 
 * 
 * ai, nos fazemos o trigger assim, para ficar mais, porque, se nos quisessemos fazer mais alguma coisa aqui, 
 * 
 * function onEstadoAlterado() {
 *      this.emitter.trigger('alterado', this.comboEstado.val());
 * }
 * 
 * , mas, depois que o estado foi alterado,
 * 
 *      this.comboEstado.on('change', onEstadoAlterado);
 * 
 * , eu posso fazer alguma coisa e disparar o trigger. Esse this aqui,
 * 
 * function onEstadoAlterado() {
 *      >>>this<<<.emitter.trigger('alterado', this.comboEstado.val());
 * }
 * 
 * , vai funcionar ou nao? Nao vai, nao eh? Por que? Vamos ver aqui? Vamos Recarregar a Pagina Html, e selecionar o Estado Sao Paulo. Retornou,
 * 
 * Uncaught TypeError: Cannot read property 'trigger' of undefined
 * 
 * , nao pode ler trigger de undefined. Erro em,
 * 
 * .trigger('alterado', this.comboEstado.val());
 * 
 * , porque ele ja nao esta dentro mais da funcao Estado, do objeto Estado,
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 *      this.emittter = $({});
 *      this.on = this.emitter.on.bind(this.emitter);
 * }
 * 
 * , entao, para eu conseguir mandar esse cara,
 * 
 * function onEstadoAlterado () {
 *      >>>this<<<.emiter.trigger('alterado', this.comboEstado.val());
 * }
 * 
 * , executar, eu tenho que colocar um bind(this), aqui,
 * 
 * this.comboEstado.on('change', onEstadoAlterado.bind(this)); 
 * 
 * , ai, sim, eu falo: 'Eu quero que voce execute o onEstadoAlterado() dentro do objeto Estado,
 * 
 * >>>Estado<<<.prototype.iniciar = function () {
 *      $.ajax({
 *          ...
 *      });
 *      
 *      this.comboEstado.on('change', ...)
 * }
 * 
 * , agora, eu vou ter acesso ao seu emitter,
 * 
 * function onEstadoAlterado () {
 *      this.>>>emitter<<<.trigger('alterado', this.comboEstado.val());
 * }
 * 
 * 26. Agora, vamos la, mais uma vez, Recarregar a Pagina Html, selecionar Sao Paulo, retornou,
 * 
 * Estado alterado... Arguments(2) [n.Event, "SP", callee: ƒ, Symbol(Symbol.iterator): ƒ]
 * 
 * 27. Beleza, agora, esta funcionando. E, ai, a gente, descendo aqui, no on estado alterado,
 * 
 * Cidade.prototype.iniciar = function () {
 *      this.estado.on('alterado', function () {
 *          console.log('Estado alterado...', arguments);
 *      });
 * }
 * 
 * , eh a mesma ideia, nao eh?, entao, aqui, eu tenho, primeiro, o evento e o parametro, no caso, a uf,
 * 
  * Cidade.prototype.iniciar = function () {
 *      this.estado.on('alterado', function (>>>evento, uf<<<) {
 *          console.log('Estado alterado...', arguments);
 *      });
 * }
 * 
 * , nao eh?, entao, uf do estado. Entao, aqui, oh, vou colocar so a uf aqui,
 * 
  * Cidade.prototype.iniciar = function () {
 *      this.estado.on('alterado', function (evento, uf) {
 *          console.log('UF recebida:', uf);
 *      });
 * }
 * 
 * , vamos colocar assim. Recarrega a Pagina Html, retornou,
 * 
 * UF recebida: SP
 * UF recebida: GO
 * 
 * , okay? Se eu nao selecionar nada, 
 * 
 * UF recebida: Selecione o estado
 * 
 * 28. Nao, vamos mudar isso daqui, vamos colocar value="" em Selecione o estado,
 * 
    function onEstadosRetornados (estados) {        
        this.comboEstado.html('<option value="">Selecione o estado</option>');
 * 
 * 29. Recarregamos a pagina, coloquei Sao Paulo,
 * 
 * UF recebida: SP
 * 
 * , selecionei Selecione o estado, retornou no Console,
 * 
 * UF recebida: 
 * 
 * , ai, sim, esta uma string vazia, nao eh?. Agora, a gente ja esta recebendo a UF aqui,
 * 
 * Cidade.prototype.iniciar = function () {
 *      this.estado.on('alterado', function (evento, uf) {
 *              console.log('UF recebida:', uf);
 *      });
 * }
 * 
 * , o que que eu posso fazer aqui? Como o instrutor disso, ele costuma colocar, quando que tem um on('evento-qualquer'), ao inves de colocar uma funcao assim,
 * 
 *      this.estado.on('alterado', >>>>function (evento, uf) {
 *              console.log('UF recebida:', uf);
 *      }<<<);
 * 
 * , o instrutor cria sempre uma funcao nova aqui, oh, 
 * 
  * Cidade.prototype.iniciar = function () {
 *      this.estado.on('alterado', function (evento, uf) {
 *              console.log('UF recebida:', uf);
 *      });
 * }
 * 
 * function onEstadoSelecionado () {}
 * 
 * 
 * , vamos supor, um estado foi selecionado, eu vou receber, eu vou dar um trigger dessa forma, eu vou trabalhar dessa forma aqui,
 * 
 * Cidade.prototype.iniciar = function () {
 *      this.estado.on('alterado', onEstadoSelecionado);
 * }
 * 
 * function onEstadoSelecionado () {}
 * 
 * , quando esse evento for disparado,  
 * 
 * Cidade.prototype.iniciar = function () {
 *      this.estado.>>>on('alterado',<<< onEstadoSelecionado);
 * }
 * 
 * , eu quero chamar essa funcao, onEstadoSelecionado,
 * 
 * function onEstadoSelecionado () {
 * 
 * }
 * 
 * e, quais sao os parametros que ela recebe? O evento e a uf, 
 * 
 * function onEstadoSelecionado (evento, uf) {
 *      
 * }
 *
 * , nao eh? Vamos ver, aqui, 
 * 
 * this.estado.on('alterado', onEstadoSelecionado);
 *
 * function onEstadoSelecionado (evento, uf) {
 *     console.log('UF', uf);
 * }
 * 
 * se a gente estragou alguma coisa, Recarregar a Pagina HTML, Selecionar Sao Paulo, aparece, no Console do Chrome DevTools,
 * 
 * UF SP
 * 
 * 30. Beleza. Eu vou precisar acessar esse this.comboCidade?,
 * 
 * function Cidade (estado) {
 *      >>>this.comboCidade<<< = $('#combo-cidade');
 *      this.estado = estado;
 * }
 * 
 * , bem, provavelmente, sim, nao eh?, mas, antes, vamos so buscar as cidades. Entao, quando o Estado foi selecionado, o que que eu vou fazer? 
 * 
 * 31. Eu vou fazer a Requisicao Ajax, para buscar as cidades daquele estado,
 * 
 * function onEstadoSelecionado (evento, uf) {
 *      $.ajax({
 
 *      });
 * }
 * 
 * Entao, vamos la, qual que eh a URL? Vai ser dessa forma aqui, oh,
 * 
 * function onEstadoSelecionado (evento, uf) {
 *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp'
 *      });
 * }
 * 
 * 32. A URL eh localhost:8080/cidades, metodo GET, dataType eh o jsonp, que o instrutor ja nos explicou, quais sao os dados que eu vou passar? Eu abro o objeto data, aqui, eu vou passar um atributo uf com o valor uf que esta sendo passado por parametro em onEstadoSelecionado,
 * 
  * function onEstadoSelecionado (evento, uf) {
 *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            }
 *      });
 * }
 * 
 * , vamos ver, so executando isso daqui se ele ja vai fazer a Requisicao? Vamos Recarregar a Pagina Html e conferir na Guia Network do Chrome DevTools, vamos selecionar, em Estado, Minas Gerais.
 * 
 * 33. Verificamos que ele fez a Requisicao, 
 * 
 * http://localhost:8080/cidades?callback=jQuery22306132968676216308_1541855115798&uf=MG&_=1541855115800
 * 
 * , e a Resposta ele trouxe,
 * 
 * /**jQuery22306132968676216308_1541855115798([{"codigo":1,"nome":"Uberlândia"},{"codigo":2,"nome":"Belo Horizonte"},{"codigo":3,"nome":"Ouro Preto"}]);
 *
 * , se eu colocar Sao Paulo, a Resposta eh,
 * 
 * /**jQuery22306132968676216308_1541855115798([{"codigo":4,"nome":"Santos"},{"codigo":5,"nome":"Ribeirão Preto"}]);
 * 
 * 34. Entao, beleza, nao eh?, entao, quando o estado for alterado, eu estou indo la,
 * 
  *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            }
 *      });
 * 
 * , receber, estou conseguindo fazer a Requisicao no Servidor e retornar as cidades. Quando isso aqui der certo,
 * 
 *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            },
            success: onCidadesRetornadas
 *      });
 * 
 * , eu vou executar essa funcao onCidadesRetornadas. Se der erro,
 * 
  *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            },
            success: onCidadesRetornadas,
            error: onError
 *      });
 * 
 * , e vamos adicionar aqui essas funcoes,
 * 
 *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            },
            success: onCidadesRetornadas,
            error: onError
 *      });
    }
 * 
 *  function onCidadesRetornadas () {
 * 
 *  }
 * 
 * , e, aqui, sao todas as cidades que eu recebo,
 * 
      function onCidadesRetornadas (cidades) {
 * 
 *    }
 * 
 * , nao eh?, e se der erro, 
 * 
 *  function onError () {
 *      alert('Erro carregando cidades');
 *  }
 * 
 * , okay?
 * 
 * 35. Vamos la, o que que eu quero fazer, aqui, entao, quando as cidades forem retornadas?,
 * 
       function onCidadesRetornadas (cidades) {
 * 
 *    }
 * 
 * 36. Eu quero acessar esse comboCidade,
 * 
 * function Cidade (estado) {
 *      >>>this.comboCidade<<< = $('#combo-cidade');
 *      ...
 * }
 * 
 * , para carregar elas la, certo? Entao, oh, a primeira coisa que eu vou fazer eh remover esse atributo disabled aqui para ele nao ficar mais disabled,
 * 
       function onCidadesRetornadas (cidades) {
 *          this.comboCidade.removeAttr('disabled');
 *    }
 * 
 * , essa eh a ideia.
 * 
 * 37. Vai dar um erro aqui em comboCidade por conta do bind(), nao eh?, a gente ja viu, vamos ver, Recarregar a Pagina Html, retornou,
 * 
 * Uncaught TypeError: Cannot read property 'removeAttr' of undefined
 * 
 * , o link do erro aponta, na Guia Sources, para, 
 * 
        function onCidadesRetornadas (cidades) {
 *          this.comboCidade.>>>removeAttr('disabled')<<<;
 *    }
 * 
 * , porque ele nao sabe quem eh comboCidade nessa funcao removeAttr(). O que que eu tenho que fazer?
 * 
 * 38. .bind(this),
 * 
 *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            },
            success: onCidadesRetornadas.>>>bind(this)<<<,
            error: onError
 *      });
 * 
 * , so que esse this aqui,
 * 
  *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            },
            success: onCidadesRetornadas.>>>bind(this)<<<,
            error: onError
 *      });
 * 
 * 
 * , desse contexto,
 * 
 * function >>>onEstadoSelecionado<<<(evento, estado) {
 *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            },
            success: onCidadesRetornadas.bind(this),
            error: onError
 *      });
 * }
 * 
 * eh, vamos ver aqui?, na Pagina HTML, o que vai acontecer? Vamos ver se vai funcionar, so para voce entender. Retornou, no Console,
 * 
 * Uncaught TypeError: Cannot read property 'removeAttr' of undefined
 * 
 * , ou seja, ainda nao funcionou.
 * 
 * 39. Por que nao? Vamos mandar monstrar o log aqui, oh,
 * 
    * function onEstadoSelecionado (evento, uf) {
    *      console.log('this', this);
    *      $.ajax({
    *          ...
    *      });
    * }
 * 
 * 40. Vamos Selecionar o Estado de Sao Paulo, no Console do Chrome DevTools, olha la, retornou,
 * 
 * this {jQuery223051656501356229261: {…}}
 * 
 * , eh o objeto jQuery que esta sendo esta recebendo aqui nesse this,
 * 
 * function onEstadoSelecionado(evento, estado) {
 *      $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            },
            success: onCidadesRetornadas.bind(>>>this<<<),
            error: onError
 *      });
 * }
 *  
 * 
 * 41. Por que que eh esse objeto jQuery que esta vindo aqui? Porque quem lancou esse evento foi la do estado no objeto jQuery,
 * 
 * Cidade.prototype.iniciar = function () {
 *      this.>>>estado<<<.on('alterado', onEstadoSelecionado);
 * }
 * 
 * , entao, eu tenho que falar o seguinte, 'Eu quero chamar essa funcao aqui,
 * 
 * Cidade.prototype.iniciar = function () {
 *      this.estado.on('alterado', >>>onEstadoSelecionado<<<);
 * }
 * 
 * , no: this, da Cidade,
 * 
 * >>>Cidade<<<.prototype.iniciar = function () {
 *      this.estado.on('alterado', onEstadoSelecionado>>>.bind(this)<<<);
 * }
 * 
 * 42. Agora, sim, esse cara aqui,
 * 
     * function onEstadoSelecionado (evento, uf) {
    *      console.log('this', >>>this<<<);
    *      $.ajax({
    *          ...
    *      });
    * }
 * 
 * , vai passar a ser Cidade. Vamos ver aqui, oh, Recarregar a Pagina Html, Selecionar o Estado de Sao Paulo. Retornou, 
 * 
 * this Cidade {comboCidade: n.fn.init(1), estado: Estado}
 * 
 * , ou seja, agora, sim, eh o objeto Cidade.
 * 
 * 43. Beleza? Selecionei o Estado de Minas Gerais, olha la, nao tem nada ainda no combo Cidade, mas, pelo menos, tirou o atributo disabled.
 * 
 * 44. Beleza? Oh, ta vendo que o bind() eh bem importante, tem que ir seguindo todo o contexto de qual objeto que voce quer executar. Okay?
 * 
 * 45. Vamos la, 
 * 
 * function onCidadesRetornadas (cidades) {
 *      this.comboCidade.removeAttr('disabled');
 * }
 * 
 * , eu vou colocar aqui, no comboCidade, o seguinte html,
 * 
  * function onCidadesRetornadas (cidades) {
 *      this.comboCidade.removeAttr('disabled');
 *      this.comboCidade.html('');
 * }
 * 
 * , '<option>Selecione a cidade</option>'. Beleza? 
 * 
 * function onCidadesRetornadas (cidades) {
 *      this.comboCidade.removeAttr('disabled');
 *      this.comboCidade.html('<option>Selecione a cidade</option>');
 * }
 * 
 * , cidades.forEach(function (cidade) {
 * 
 *   });
 * 
 * , ai, eu quero que isso aqui seja executado com bind(this), para eu poder acessar aqui o this.comboCidade, ai, vamos dar um append() aqui, em optionCidade, okay? Vamos criar, aqui, esse optionCidade, var optionCidade = $('<option>').val(),
 * 
 * function onCidadesRetornadas (cidades) {
 *      this.comboCidade.removeAttr('disabled');
 *      this.comboCidade.html('<option>Selecione a cidade</option>');
 * 
 *      cidades.forEach(function (cidade) {
 *          var optionCidade = $('<option>').val();
 *          this.comboCidade.append(optionCidade);
 *      }.bind(this));
 * }

 * , vamos passar para val() o valor do codigo cidade.codigo e vamos passar, como texto, cidade.nome,
 *
 *  var optionCidade = $('option>').val(cidade.codigo).text(cidade.nome); 
 * 
 * , okay?,
 * 
  * function onCidadesRetornadas (cidades) {
 *      this.comboCidade.removeAttr('disabled');
 *      this.comboCidade.html('<option>Selecione a cidade</option>');
 * 
 *      cidades.forEach(function (cidade) {
 *          var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
 *          this.comboCidade.append(optionCidade);
 *      }.bind(this));
 * }
 * 
 * , vamos ver se aqui ja vai carregar? Vamos selecionar Minas Gerais, carregou as cidades no combo Cidade, selecionou Sao Paulo no combo Estado, carregou as cidades no combo Cidade, para Goias, carregou as cidades no combo Cidade.
 * 
 * 46. Beleza? Entao, eh, basicamente, a mesma coisa que a gente ja tinha feito aqui,
 * 
    function onEstadosRetornados (estados) {
        this.comboEstado.html('<option value="">Selecione o estado</option>');
        estados.forEach(function (estado) {
            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            this.comboEstado.append(optionEstado);
        }.bind(this));
    }
 * 
 * , nao eh?, mais uma vez, o bind(), aqui, foi importante para a gente.
 * 
 * 47. E, se eu voltar, vamos ver aqui, oh, vamos testar mais. E se eu voltar aqui, no combo de Estado, para Selecione o estado?
 * 
 * 48. Retornou,
 * 
 * jquery-2.2.3.min.js:4 GET http://localhost:8080/cidades?callback=jQuery22308270680013266085_1541876954373&uf=&_=1541876954378 net::ERR_ABORTED 500 (Internal Server Error)
 * 
 * Erro carregando cidades 
 * 
 * 49. Deu Erro 500, erro la no Servidor. Vamos ver por que? Olha la, 
 * 
 *  UF nao existente ou nao mapeada, use apenas MG, SP ou GO 
 * 
 * , entao, eu to lancando erro la, Se voce passar nenhuma UF, eu vou lancar uma excecao, entao, do jeito que ficou implementado o Servidor.
 * 
 * 50. Entao, o que que eu posso fazer aqui, oh? if (uf) {}, se veio alguma coisa, se nao esta chegando uma string vazia, eu vou recuperar as cidades, eu vou la buscar as cidades, senao, vamos ver o que que eu vou fazer?
 * 
function onEstadoSelecionado (evento, uf) {
    if (uf) {
        $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            },
            success: onCidadesRetornadas.bind(this),
            error: onError
        });
    } else {

    }

}
 * 
 * 51. Recarregar a Pagina Html, Selecionar o Estado de Sao Paulo, Selecionar 'Selecione o estado'. Beleza, nao deu erro, mas, tambem, nao tirou o que estava aqui no comboCidade antes.  
 * 
 * 52. Entao, o que que eu posso fazer aqui, oh?, no else, vou colocar: this.comboCidade.html(''), .html(''), nao vamos colocar nada, e vou adicionar o atributo, disabled, disabled, this.comboCidade.attr('disabled', 'disabled'),
 * 
    if (uf) {
        $.ajax({
            url: 'http://localhost:8080/cidades',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                uf: uf
            },
            success: onCidadesRetornadas.bind(this),
            error: onError
        });
    } else {
        this.comboCidade.html('');
        this.comboCidade.attr('disabled', 'disabled');
    }
 * 
 * , para ele desabilitar o elemento. Vamos ver? Recarregar a Pagina Hmtl, Selecionei Minas Gerais, beleza, carregou as cidades de Minas Gerais no combo Cidade, Selecionar Selecione o estado novamente, beleza, tirou as cidades e desabilitou o combo Cidade, beleza?
 * 
 * 53. Entao, a ideia era nos mostrar, aqui, como eu posso lancar, disparar um evento customizado, devemos lembrar disso daqui,
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 *      >>>this.emitter = $({});
 *      this.on = this.emitter.on.bind(this.emitter);<<<
 * }
 * 
 * , para eu lancar um evento customizado, eu crio um objeto gerenciado, aqui, pelo jQuery,
 * 
      this.emitter = $({});
 * 
 * , esse objeto emitter, e eu vou usar ele para dar o trigger no evento que eu quero,
 * 
 * function onEstadoAlterado () {
 *      this.emitter.>>>trigger('alterado',<<< this.comboEstado.val());
 * }
 * 
 * , e eu passo os dados que eu quiser, aqui nesse evento,
 * 
 * function onEstadoAlterado () {
 *      this.emitter.trigger('alterado', >>>this.comboEstado.val()<<<);
 * }
 * 
 * , okay?, para receber quem estiver ouvindo esse evento. Quem quiser ouvir esse evento, vai se atachar nesse on,
 * 
  * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 *      this.emitter = $({});
 *      this.>>>on<<< = this.emitter.on.bind(this.emitter);
 * }
 * 
 * , vai dar this.on, no caso, aqui, a Cidade, oh, eu recebi o elemento estado, aqui, 
 * 
 * 
 * Cidade.prototype.iniciar = function () {
 *      this.>>>estado<<<.on('alterado', onEstadoSelecionado.bind(this));
 * }
 * 
 * , em Cidade, oh, on ('alterado', ...), e, aqui,
 * 
 * this.estado.on('alterado', >>>onEstadoSelecionado.bind(this)<<<);
 * 
 * eu coloco uma funcao que eu quero que seja executada quando esse evento,
 * 
 * this.estado.on(>>>'alterado'<<<, onEstadoSelecionado.bind(this));
 * 
 * , for disparado, beleza? Eu dou bind(this), aqui,
 * 
 * this.estado.on('alterado', onEstadoSelecionado.>>>bind(this)<<<);
 * 
 * , porque, se eu nao fizer isso, ele vai executar no contexto de quem lancou o evento, no contexto do jQuery, nao eh?
 * 
 * 54. E eh isso aqui que o instrutor queria nos mostrar, eh lancar esse evento customizado, o instrutor sabe que o bind(), essas ideias aqui nao sao simples, se nao estivermos acostumados com o Javascript, e essa ideia do contexto do Javascript, de quem esta usando o que, realmente, nao eh tao simples assim, nao eh?, voce tem que ir navegando, mas o instrutor tentou aqui passo-a-passo, nao eh, nos mostrando, fez coisas erradas aqui, para nos mostrar o this, o que que eh o this, como nos analisamos quem eh o contexto daquele objeto que nos estamos executando. E o codigo final ficou grande aqui? Ficou grande, mas o instrutor acha que ficou bem organizado, porque voce tem um objeto Cidade, nao eh?, 
 * 
 * var >>>Cidade<<< = (function () {
 *      function Cidade (estado) {
 *          this.comboCidade = $('#combo-cidade');
 *          this.estado = estado;
 *      }
 *      ...
 * });
 * 
 * 
 * , que nos inicializamos, oh, tem, oh a Cidade, tem la o combo Cidade, que depende do estado, nao eh?,
 * 
  * var Cidade = (function () {
 *      function Cidade (estado) {
 *          this.>>>comboCidade<<< = $('#combo-cidade');
 *          >>>this.estado = estado;<<<
 *      }
 *      ...
 * });
 * 
 * 
 * , quando o estado for alterado, 
 * 
 * Cidade.prototype.iniciar = function () {
 *      this.>>>estado.on('alterado',<<< onEstadoSelecionado.bind(this));
 * }
 * 
 * nos temos uma funcao para reagir quando o Estado for selecionado, nao eh?, 
 * 
    function onEstadoSelecionado (evento, uf) {
        console.log('this', this);
        if (uf) {
            $.ajax({
                url: 'http://localhost:8080/cidades',
                method: 'GET',
                dataType: 'jsonp',
                data: {
                    uf: uf
                },
                success: onCidadesRetornadas.bind(this),
                error: onError
            });
        } else {
            this.comboCidade.html('');
            this.comboCidade.attr('disabled', 'disabled');
        }
    }
 * 
 * 
 * e fica tudo separado, cada objeto esta trabalhando com as suas coisas, o Estado so trabalha aqui com coisas referentes ao Estado, nao eh? Quem quiser receber alteracoes do Estado, eh so se atachar nesse evento,
 * 
 * function onEstadoAlterado () {
 *      this.emitter>>>.trigger('alterado',<<< this.comboEstado.val());
 * }
 * 
 * , eu posso ter outros objetos, nao eh?, imagina que eu tivesse outros objetos,
 * 
    $(function () {
        var estado = new Estado();
        estado.iniciar();    

        var cidade = new Cidade(estado);
        cidade.iniciar();
    });
 * 
 * 
 * , que precisassem ser notificados quando o Estado foi alterado, nos poderiamos, simplesmente, passar esse objeto para esse novo objeto que voce precisa,
 * 
    $(function () {
        var estado = new Estado();
        estado.iniciar();    

        var cidade = new Cidade(estado);
        cidade.iniciar();
    });
 * 
 * , e, ai, trabalhar, nao eh?, implementar a cada regra. Beleza?
 * 
 * 55. Fim da Aula 09.008. Disparando Eventos Customizados.
 * 
 * 
 * 
 */

var Estado = (function () {
    function Estado () {
        /** var comboEstado = $('#combo-estado'); **/
        this.comboEstado = $('#combo-estado');
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);        
    }

    Estado.prototype.iniciar = function () {
        /** console.log('Iniciando o estado...'); **/
        /** console.log('this no prototype', this); **/
        $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onEstadosRetornados.bind(this),
            error: onError
        });

        /**Version 1. *
        this.comboEstado.on('change'
            , function () {
                this.emitter.trigger('alterado', 
                        this.comboEstado.val())
            }.bind(this)
        );
        **/

        /**Version 2. */
        this.comboEstado.on('change', onEstadoAlterado.bind(this));
    }

    function onEstadoAlterado () {
        this.emitter.trigger('alterado', this.comboEstado.val());
    }

    function onEstadosRetornados (estados) {        
        /** var comboEstado = $('#combo-estado'); **/
        /** console.log('this', this); **/
        this.comboEstado.html('<option value="">Selecione o estado</option>');
        estados.forEach(function (estado) {

            /**console.log('this no forEach', this); **/

            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            this.comboEstado.append(optionEstado);

        }.bind(this));
    }

    function onError () {
        alert('Erro carregando estados do servidor!');
    }     

    return Estado;

})();

/** estado.iniciar(); **/

var Cidade = (function () {
    var Cidade = function (estado) {
        this.comboCidade = $('#combo-cidade');
        this.estado = estado;
    }

    Cidade.prototype.iniciar = function () {
        // handle quando o estado for alterado.
        /** console.log('Iniciando cidade...'); **/
        /**Version 1 *
        this.estado.on('alterado', function () {
            console.log('Estado alterado...', arguments);
        });
        **/

        /**Version 2 *
        this.estado.on('alterado', function (evento, uf) {
            console.log('UF recebida:', uf);
        });
        **/

        /**Version 3 */
        this.estado.on('alterado', onEstadoSelecionado.bind(this));
    }

    function onEstadoSelecionado (evento, uf) {
        /**  *console.log('UF', uf); **/
        console.log('this', this);
        if (uf) {
            $.ajax({
                url: 'http://localhost:8080/cidades',
                method: 'GET',
                dataType: 'jsonp',
                data: {
                    uf: uf
                },
                success: onCidadesRetornadas.bind(this),
                error: onError
            });
        } else {
            this.comboCidade.html('');
            this.comboCidade.attr('disabled', 'disabled');
        }
    }

    function onCidadesRetornadas (cidades) {
        this.comboCidade.removeAttr('disabled');
        this.comboCidade.html('<option>Selecione a cidade</option>');
            
        cidades.forEach(function (cidade) {
            var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
            this.comboCidade.append(optionCidade);
        }.bind(this));
    }

    function onError () {
        console.log('Erro carregando cidades');
    }        

    return Cidade;

})();

$(function () {
    var estado = new Estado();
    estado.iniciar();    

    var cidade = new Cidade(estado);
    cidade.iniciar();
});
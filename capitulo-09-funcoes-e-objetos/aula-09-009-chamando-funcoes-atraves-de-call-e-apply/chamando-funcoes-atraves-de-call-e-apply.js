/**
 * 
 * Aula 09.009. Chamando Funcoes Atraves de Call e Apply
 * 
 * 16. A gente vai confirmar se esta funcionando aqui a aplicacao. Vamos Recarregar a Pagina Html e vamos selecionar Estado. Se eu selecionar o Estado Minas Gerias, ele trouxe, se eu selecionar Sao Paulo, ele trouxe, voltei para Selecione o estado, o campo Cidade fica vazio e desabilitado. Beleza.
 * 
 * 17. Esta funcionando, aqui, do jeito que estava la quando a gente estava na aula de Disparando Eventos Customizados.
 * 
 * 18. Onde eu posso usar, aqui, chamar a funcao atraves de call() e apply()?
 * 
 * 19. Eh aqui, oh,
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
            this.comboCidade.html('');
            this.comboCidade.attr('disabled', 'disabled');
        }
    }
 * 
 * , eu estou em uma funcao normal, aqui, oh, onEstadoSelecionado(), e eu quero chamar uma outra funcao aqui, no else, 
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
        >>>} else {
            this.comboCidade.html('');
            this.comboCidade.attr('disabled', 'disabled');
        }<<<
    }
 * 
 * 
 * porque, ta vendo que, aqui, eu coloquei, nao eh?, eu posso colocar varios comportamentos, imagina que eu tivesse que fazer mais coisas, nao eh?, entao, esse else poderia ficar grande. Entao, o que que eu posso fazer? Eu posso criar uma funcao aqui chamada de reset(),
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
            this.comboCidade.html('');
            this.comboCidade.attr('disabled', 'disabled');
        }
    }

    function reset() {

    }
 * 
 * , por exemplo, e passar isso daqui para ca,
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

    function reset() {
        >>>this.comboCidade.html('');<<<
        >>>this.comboCidade.attr('disabled', 'disabled');<<<
    }
 *  
 * , e, aqui, eu quero chamar o reset(),
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
            >>>reset();<<<
        }
    }

    function reset() {
        this.comboCidade.html('');
        this.comboCidade.attr('disabled', 'disabled');
    }
 * 
 * 20. Se eu chamar o reset() aqui, dessa forma, ou seja, quando eu nao selecionar, la, quando a uf estiver vazia, nao eh?, eu vou chamar o reset(), e, ai, eu quero executar isso,
 * 
        this.comboCidade.html('');
        this.comboCidade.attr('disabled', 'disabled');
 * 
 * , mas, e o contexto aqui?
 * 
     function reset() {
        this.comboCidade.html('');
        this.comboCidade.attr('disabled', 'disabled');
    }
 * 
 * , qual eh esse contexto que eu vou executar? Vamos dar uma olhada?
 * 
     function reset() {
        >>>console.log('this', this);<<<
        this.comboCidade.html('');
        this.comboCidade.attr('disabled', 'disabled');
    }
 * 
 * , ao Recarregar a Pagina Html, Selecionar Estado Sao Paulo, Selecionar 'Selecione o estado', retornou,
 * 
 * this Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
 * 
 * Uncaught TypeError: Cannot read property 'html' of undefined
 * 
 * , na linha 3, 
 * 
1.    function reset() {
2.        console.log('this', this);
3.        this.comboCidade>>>.html('');<<<
4.        this.comboCidade.attr('disabled', 'disabled');
5.    }
 * 
 * , vamos ver o contexto? Olha la, ele executou no contexto Window. Entao, ele fala, oh, nao consigo ler o 'html' de undefined, la no this,
 * 
 *       this.comboCidade.html('');
 * 
 * , la, em comboCidade, ele nao sabe quem que eh, porque nao tem comboCidade no objeto Window, nao eh? Entao, o que que eu preciso fazer, aqui?
 * 
 * 21. Eu preciso exeutar o reset(), so que no Contexto this, trocando o Contexto, no Contexto do objeto que eh o objeto Cidade,
 * 
 * function >>>Cidade<<< (estado) {
 *      ...
 * }
 * 
 * 22. Entao, olha so o que que eu posso fazer, 
 * 
 * reset.call(this);
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
            reset.call(this);
        }
    }
 * 
 * , no caso, aqui,
 * 
1.    function reset>>>()<<< {
2.        console.log('this', this);
3.        this.comboCidade.html('');
4.        this.comboCidade.attr('disabled', 'disabled');
5.    }
 * 
 * , o reset() nao recebe nenhum parametro, entao, eh so eu chamar, aqui, com o this. Vamos ver aqui? Recarregar a Pagina Html, Selecionar o Estado, Selecionar 'Selecione o estado',
 * 
 * retornou,
 * 
 * this Cidade {comboCidade: n.fn.init(1), estado: Estado}
 * 
 * , beleza, funcionou, o objeto, la, agora, eh o objeto Cidade. O objeto Cidade, ele tem o this.comboCidade, e eu consigo chamar.
 * 
 * 23. Aqui,
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
            >>>reset.apply(this);<<<
        }
    }
 * 
 * , poderia ser o call() ou apply(), ambos funcionam. Vamos Re-testar. 
 * 
 * 24. Okay, funcionou. A diferenca do call() e do apply() eh, justamente, a passagem de parametros que o instrutor nos mostrou na aula de exemplo.js.
 * 
 * 25. Como, aqui,
 * 
1.    function reset>>>()<<< {
2.        console.log('this', this);
3.        this.comboCidade.html('');
4.        this.comboCidade.attr('disabled', 'disabled');
5.    }
 * 
 * , o reset() nao tem nenhum parametro, eu nao preciso continuar com virgula aqui,
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
            reset.apply(this>>>,<<< );
        }
    }
 * 
 * , e continuar a lista de parametros.
 * 
 * 26. Qual que eh o mais usado, call() ou apply()? Ai, depende, se voce tiver os parametros em um array, use o apply(), se voce tiver parametros soltos, voce pode usar o call().
 * 
 * 27. Normalmente, o instrutor faz assim, se sao varios parametros, provavelmente, eles estarao dentro de um array, e, ai, voce vai usar o apply(). Senao, voce vai usar o call(), passando 1 ou 2 parametros. Normalmente, esses sistemas comerciais, assim, sistemas como esse, desta licao, o instrutor usa muito mais o call(), porque, normalmente, tem poucos parametros, aqui, depois, nao sao varios parametros que a gente passa.
 * 
 * 28. Beleza? Mas essa ideia, entao, do call() e do apply(), eh bem util para a gente organizar o codigo, nao eh?, entao, se eu tivesse mais coisas para fazer aqui no reset(),
 * 
1.    function reset() {
2.        console.log('this', this);
3.        this.comboCidade.html('');
4.        this.comboCidade.attr('disabled', 'disabled');
5.    }
 * 
 * , nao eh?, eu poderia colocar na funcao dele separado. Beleza? 
 * 
 * 28. Fim da Aula 09.009. Chamando Funcoes Atraves de call() e apply().
 * 
 * 
 * 
 * 
 * 
 */

var Estado = (function () {
    function Estado () {
        this.comboEstado = $('#combo-estado');
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);        
    }

    Estado.prototype.iniciar = function () {
        $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onEstadosRetornados.bind(this),
            error: onError
        });

        this.comboEstado.on('change', onEstadoAlterado.bind(this));
    }

    function onEstadoAlterado () {
        this.emitter.trigger('alterado', this.comboEstado.val());
    }

    function onEstadosRetornados (estados) {
        this.comboEstado.html('<option value="">Selecione o estado</option>');
        estados.forEach(function (estado) {
            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            this.comboEstado.append(optionEstado);

        }.bind(this));
    }

    function onError () {
        alert('Erro carregando estados do servidor!');
    }     

    return Estado;

})();

var Cidade = (function () {
    var Cidade = function (estado) {
        this.comboCidade = $('#combo-cidade');
        this.estado = estado;
    }

    Cidade.prototype.iniciar = function () {
        this.estado.on('alterado', onEstadoSelecionado.bind(this));
    }

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
            /** *reset.call(this); **/
            reset.apply(this);
        }
    }
    
    function reset () {
        console.log('this', this);
        this.comboCidade.html('');
        this.comboCidade.attr('disabled', 'disabled');
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

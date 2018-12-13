/**
 * 
 * Aula 09.007. Usando a Funcao bind
 * 
 * 4. O codigo inicial que a gente tinha era esse daqui, que simplesmente carregava o Estado, oh, vamos ver aqui na Pagina Html, ele so esta carregando o estado, se eu seleciono, nao acontece nada.
 * 
 * 5. Beleza? Nos vamos chegar naquele codigo final la, agora, novamente.
 * 
 * 6. Beleza? Primeiro, como o instrutor ja disse, o objetivo desta aula eh falar sobre a funcao bind(), principalmente.
 * 
 * 7. Mas o instrutor vai, ja, tambem, usar o Module Pattern, que o instrutor ja nos explicou, e o instrutor vai usar o Module Pattern de um jeito que o instrutor usa mais comumente tambem, que eh junto com o operador new, nos vamos uma mistura disso dai. Entao, nos vamos usar funcao construtora, com Module Pattern, fazer uma mistura disso.
 * 
 * 8. Beleza? Entao, vamos la, o instrutor vai comecar a migrar iso daqui, para o Module Pattern, okay?, para a gente ir evoluindo aos poucos aqui e nao ficar com nenhuma duvida para nos.
 * 
 * 9. Entao, vamos la, nos vamos criar aqui, lembra que, para eu criar um Module Pattern, eu vou ter uma funcao, nao eh?, eh uma funcao, so que essa funcao, ela eh executada, ja comeca sendo executada,
 * 
 * var estado = (function() {
 *      
 * 
 * })();
 * 
 * , certo?, e, aqui, eu adiciono o que eu quero que seja privado, eu vou adicionar aqui as variaveis, funcoes privadas, e vou retornar um objeto com o que eu quero que seja publico. Beleza? Entao, vamos devagar aqui, oh, qual variavel que eu vou colocar aqui? 
 * 
 * 10. Eu vou ir migrando aqui, eu vou colocar essa variavel comboEstado ja como a variavel do combo estado,
 * 
 * var comboEstado = $('#combo-estado');
 * 
 * , como sendo uma variavel privada aqui dentro, nao eh?, eu nao vou conseguir acessar do lado de fora, e, vamos la, ah, essa resposta, primeira coisa que eu vou ter aqui, 
 * 
var estado = (function () {

    var comboEstado = $('#combo-estado');

})();
 * 
 * , sera uma funcao, eu vou criar uma funcao aqui, que eu quero que essa funcao seja publica, entao, eu colocar assim, oh,
 * 
 var estado = (function () {

    var comboEstado = $('#combo-estado');

    function iniciar() {

    }

})();
 * 
 * , essa funcao iniciar() sera publica, e eu posso retornar assim, oh,
 * 
 * return {
 *      iniciar: iniciar;
 * }
 * 
 * , okay? Entao, eu vou conseguir, aqui, deixa eu comentar esse cara aqui,
 * 
 $(function () {

    var resposta = $.ajax({
        url: 'http://localhost:8080/estados',
        method: 'GET',
        dataType: 'jsonp'
    });

    resposta.done(function (estados) {
        /** var comboEstado = $('#combo-estado'); **
        comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function (estado) {

            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            comboEstado.append(optionEstado);

        });
    });

    resposta.fail(function () {
        alet('Erro carregando estados do servidor!');
    });

});
 * 
 * , deixa ele fica comentado. E, ai, vamos dar um log aqui, 
 * 
 * function iniciar() {
 *      console.log('Iniciando o estado...');
 * }
 * 
 * 11. Entao, criou essa funcao, e eu posso chamar aqui, agora,
 * 
 * estado.iniciar();
 * 
 * , okay? Tenho essa variavel,
 * 
 * var estado = 
 * 
 * , que eh essa funcao,
 * 
(function () {

    var comboEstado = $('#combo-estado');

    function iniciar() {
        console.log('Iniciando o estado...');
    }

    return {
        iniciar: iniciar
    }

})();
 * 
 * 
 * , que foi executada e retornou esse objeto aqui,
 * 
 * return {
 *      iniciar: iniciar
 * }
 * 
 * , que tem uma propriedade iniciar, que, na verdade, eh uma funcao iniciar(), que eu vou chamar ela ali.
 * 
 * 12. Okay? Entao, se eu executar esse codigo aqui, posso executar ele aqui diretamente, ao tentar executar, por aqui, nao tem o jQuery aqui, entao, nao vamos conseguir executar por aqui, por conta do jQuery.
 * 
 * 13. Entao, vamos dar um Refresh na Pagina Html e vamos dar uma olhada no Console do Chrome DevTools, apareceu: 'Iniciando o estado...'
 * 
 * 14. Beleza? Bom, vamos la, nesse iniciar(), o que que eu vou fazer aqui?
 * 
 * 15. No iniciar(), eu vou colocar a requisicao Ajax, entao, quando iniciar a aplicacao, iniciar o estado, 
 * 
 * var estado = (function () {});
 * 
 * , quando eu chamar aqui o iniciar(). do lado de fora, 
 * 
 * estado.iniciar()
 * 
 * , eu quero que o Ajax seja executado 
 * 
        $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp'
        });
 * 
 * e a gente busque os estados, beleza?
 * 
 * 16. E, aqui,
 * 
         $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp'
        });
 * 
 * 
 * , ao inves de eu usar a Promise, nesse caso, eu posso colocar aqui, oh, 
 * 
         $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onEstadosRetornados,
            error: onError
        });
 * 
 * 
 * success: onEstadosRetornados, okay?, e, se der erro, error: onError, ou seja, sao funcoes que eu vou criar aqui agora,
 * 
 * function oneEstadosRetornados() {
 *  
 * }
 * 
 * , e, aqui, essa funcao, ao ser executada, ao sucesso ter sido retornado do Ajax, ele vai passar, aqui, todos os estados,
 * 
  * function onEstadosRetornados (estados) {
 *  
 * }
 * 
 * , ele ja entrega todos os estados para a gente. E, se der erro,
 * 
 * function onError () {
 *
 * }
 * 
 * , eu vou mandar so mostrar um alerta de que nao conseguiu,
 * 
 * alert('Erro carregando estados do servidor!');
 * 
 * 17. Beleza. E, no onEstadosRetornados, eu vou colocar esse cara aqui,
 * 
 * function onEstadosRetornados (estados) {
        comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function (estado) {

            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            comboEstado.append(optionEstado);

        });
 * }
 * 
 * 18. Oh, comboEstado eh a variavel que esta em cima, 
 * 
 * var estado = (function () {
 *      var comboEstado = $('#combo-estado');
 * 
 * })();
 * 
 * , por que que eu mudei ela aqui para cima? Porque se eu precisar, em alguma outra funcao, aqui, acessar essa variavel, ela ja esta disponivel para mim. Neste caso, eu nao estou precisando, nao eh?, poderia ter deixado aqui dentro,
 * 
 * function onEstadosRetornados (estados) {
 * 
 * }
 * 
 * , mas ja vamos migrar para ca, 
 * 
 * function onEstadosRetornados (estados) {
 * 
 * }
 * 
 * , o instrutor costuma colocar as variaveis de inicializacao logo no inicio. Vamos ver se voltou a funcionar e os estados carregados. Vamos la ver?
 * 
 * 19. Beleza, trouxe la todos os estados, Minas Gerais, Sao Paulo e Goias.
 * 
 * 20. Se eu olhar aqui em Network, no Chrome DevTools, olha la, a gente deu GET primeiro aqui no index, nao eh?, a gente carregou o index.html, carregou o usando-a-funcao-bind.js, bootrap.min.css, jquery-2.2.3.min.js, e, olha la, fizemos um Request em estados, lembra que essa parte aqui, ?callback=jQuery223010703185971178719_1541693044979&_=1541693044980, eu estou fazendo por questoes de estar carregando o arquivo aqui, nao eh?, nao precisa preocupar tanto com isso nao, beleza?
 * 
 * 21. Entao, fiz um GET la, e ele retornou /**jQuery223010703185971178719_1541693044979 do JSONP, a gente nao precisa preocupar tanto, mas olhar aqui o Retorno, [{"codigo":1,"uf":"MG","nome":"Minas Gerais"},{"codigo":2,"uf":"SP","nome":"São Paulo"},{"codigo":3,"uf":"GO","nome":"Goiás"}], entao, ele retornou pra gente.
 * 
 * 22. Beleza, entao, oh, entao, o que eu fiz aqui foi transformar daquele codigo que a gente tinha visto antes, nao eh?, um codigo diretao, agora, a gente ja esta usando o Model Pattern, nao eh?, ja comecamos a separar um pouco mais, o instrutor gosta dessa forma aqui.
 * 
 * 23. Mas o instrutor ainda vai melhorar, do jeito que o instrutor gosta mais ainda. 
 * 
 * 24. Beleza? Entao, vamos deixar esse cara aqui, e vamos criar um novo arquivo usando-a-funcao-bind-2.js.
 * 
 * 25. Ver arquivo usando-a-funcao-bind-2.js.
 * 
 * 
 */
var estado = (function () {

    var comboEstado = $('#combo-estado');

    function iniciar() {
        /** console.log('Iniciando o estado...');**/
        var resposta = $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onEstadosRetornados,
            error: onError
        });
    }

    function onEstadosRetornados (estados) {
        comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function (estado) {

            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            comboEstado.append(optionEstado);

        });
    }

    function onError () {
        alert('Erro carregando estados do servidor!');
    }

    return {
        iniciar: iniciar
    }

})();

estado.iniciar(); 

/** *
$(function () {

    var resposta = $.ajax({
        url: 'http://localhost:8080/estados',
        method: 'GET',
        dataType: 'jsonp'
    });

    resposta.done(function (estados) {
        /** var comboEstado = $('#combo-estado'); **
        comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function (estado) {

            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            comboEstado.append(optionEstado);

        });
    });

    resposta.fail(function () {
        alet('Erro carregando estados do servidor!');
    });

});
**/
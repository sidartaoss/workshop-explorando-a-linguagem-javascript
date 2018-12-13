/**
 * Aula 08.003. Disparando Eventos
 * 
 * 12. Entao, qual que eh a ideia aqui?
 * 
 * 13. Primeiro, eu vou pegar esses elementos, okay?, vamos pegar aqui pelo ID.
 * 
 * var atividade = $('#atividade');
 * var listaAtividades = $('#lista-atividades');
 * 
 * 14. Eu quero fazer o seguinte, quando eu digitar, eu vou digitar alguma coisa aqui, quando eu digitar <Enter> aqui, eh para isso acontecer.
 * 
 * 15. Bom, a gente ja viu como eu posso pegar os eventos do DOM, nao eh?, entao, eu vou pegar aqui em atividade.on('keyup'), ou seja, acabou de levantar o dedo da tecla, eu vou colocar uma funcao, aqui, okay?, que vai tratar esse evento de 'keyup'. 
 * 
 * 16. Eu quero pegar, aqui, o codigo keyCode da tela, 
 * 
 * var keyCode = e.keyCode;
 * 
 * , e, se o keyCode for igual a 13, que eh a tecla <Enter>, o Enter eh o 13, okay?, eu vou disparar o evento,
 * 
 * if (keyCode === 13) {
 *      // Disparar o evento...
 * }
 * 
 * 17. Calma ai que a gente ja volta aqui para implementar. 
 * 
 * 18. Isso significa que eu nao vou adicionar, aqui, dentro dessa mesma funcao, o codigo que ja faz o append() la na lista de atividades.
 * 
 * 19. Antes de disparar o evento, vamos fazer na mao aqui?, so para a gente ver, oh? 
 * 
 * if (keyCode === 13) {
 *      // Disparar o evento...
 *      listaAtividades.append()
 * }
 * 
 * , dai, eu preciso adicionar la, vamos usar prepend()?
 * 
 * if (keyCode === 13) {
 *      // Disparar o evento...
 *      listaAtividades.prepend();
 * }
 * 
 * , para ficar sempre no inicio, a ultima atividade fica sempre por cima.
 * 
 * 20. Vamos adicionar aqui, vai ser um <li>, + a atividade, ponto val(), o valor dela, e a gente fecha aqui,
 * 
 * listaAtividades.prepend('<li> + atividade.val() + '</li>');
 * 
 * 21. Okay?, esse aqui eh o texto, atividade.val(), nao eh?, que eu digitei.
 * 
 * 22. Vamos ver so se essa parte aqui vai funcionar?
 * 
 * 23. Vamos digitar 'E-mails respondidos', e <Enter>, 'Maquina ligada', e <Enter>. Funcionou, foi adicionando, ao pressionar <Enter>, os itens na lista de atividades ao lado do campo de input. Mas nao apagou, vamos apagar?
 * 
 * 24. Vamos pegar, aqui, atividade.val(), a gente seta ela para nada,
 * 
 * atividade.val('');
 * 
 * , okay? Voltando a inputar os valores e pressionando <Enter>, os itens entram na lista ao lado e o campo fica vazio.
 * 
 * 25. Mas, essa regra, a gente colocando ela aqui,
 * 
    listaAtividades.prepend('<li>' + atividade.val() + '</li>');
    atividade.val('');
 *
 * , dentro do keyup, nao fica legal. Esta funcionando, e tal, mas a regra eh simples. Imagina se eh uma regra mais complexa, onde voce precisasse acessar o Servidor, fazer mais coisas, e tal...
 * 
 * 26. Colocar aqui, nao eh?, colocar todo esse codigo aqui, vai ficar meio misturado.
 * 
 * 27. Chamar uma outra funcao, eu poderia colocar, aqui, o nome de uma funcao, adicionarNaLista(),
 * 
    atividade.on('keyup', function(e) {
        var keyCode = e.keyCode;

        if (keyCode === 13) {
            // Disparar o event o...
            listaAtividades.prepend('<li>' + atividade.val() + '</li>');
            atividade.val('');
        }
    });

    function adicionarNaLista() {
        
    }
 * 
 * , eu poderia fazer algo assim, e, aqui, eu coloco texto, 
 * 
    function adicionarNaLista(texto) {
        
    }
 * 
 * , por exemplo, vamos la, aqui, eu coloco assim, oh,
 * 
    function adicionarNaLista(texto) {
        listaAtividades.prepend('<li>' + texto + '</li>');
    }
 * 
 * , e eu tiro essa parte aqui e adiciono adicionarNaLista(), passando atividade.val(),
 * 
    if (keyCode === 13) {
        // Disparar o event o...
        // listaAtividades.prepend('<li>' + atividade.val() + '</li>');
        adicionarNaLista(atividade.val());
        atividade.val('');
    }
 * 
 * , okay? Vamos Recarregar a Pagina e vamos Re-testar.
 * 
 * 28. Beleza, funcionou.
 * 
 * 29. Entao, daria para eu colocar em uma funcao, assim, tambem? 
 * 
 * 30. Daria, mas o meu codigo fico todo sequencial, nao eh?, depois disso daqui,
 * 
    listaAtividades.prepend('<li>' + atividade.val() + '</li>')
 * 
 * , ele vai executar aqui,
 * 
 * 
    function adicionarNaLista(texto) {
        listaAtividades.prepend('<li>' + texto + '</li>');
    }
 *
 * , e outra, e se eu quisesse fazer mais de uma atividade, executar mais uma fncao quando o <Enter> for pressionado? Eu gostaria de chamar o Servidor, gostaria de atualizar outra parte, enfim, eu poderia fazer varias coisas, varias tarefas, se for ficar chamando aqui funcao, ai, aqui, eu colocaria,
 * 
            adicionarNaLista(atividade.val());
            outraFuncao();
            outraFuncao2();
            atividade.val('');
 * 
 * , nao eh?, ficar fazendo isso daqui nao ficaria muito legal.
 * 
 * 31. Okay?, entao, uma solucao seria nos dispararmos um evento aqui, como o instrutor disse aqui, oh, quando colocou aqui no comentario.
 * 
 * 32. Vamos disparar um evento? Entao, vamos la. Eu vou pegar, aqui, em atividade.trigger, passo o nome do evento, no caso, aqui, vou falar, aqui, o nome do evento, eh enter, e vou passar os dados que eu quero, 
 * 
 * atividade.trigger('enter', atividade.val());
 * 
 * , entao, no caso, aqui, eu vou passar o texto.
 * 
 * 33. Okay? Eu pego o texto e mando aqui, entao, eu estou disparando o evento, esse evento 'enter', pode ser o nome que eu quiser, nao eh porque eu quis chamar 'enter' aqui nao, poderia se chamar 'algaworks', poderia se chamar qualquer coisa, eu vou deixar 'enter' porque foi <Enter> que eu pressionei.
 * 
 * 34. Okay? E passo os dados que eu preciso, beleza? Se eu quiser passar mais de um dados, eu posso passar um array, aqui, ai, eu passo virgula, e outro parametro aqui,
 * 
 * atividade.trigger('algaworks', [atividade.val(), 'outroParametro']);
 * 
 * 35. Beleza? Posso passar um objeto aqui tambem, posso criar um objeto e passa um objeto, aqui, nao tem problema,
 * 
 * atividade.trigger('algaworks', { objeto: '' });
 * 
 * 36. Okay?, entao, estou passando isso, e estou disparando esse evento 'enter'. Quem vai escutar esse evento 'enter'?
 * 
 * 37. Ai, eu posso registrar em outro momento, por exemplo, em atividade.on(''), olha so, 
 * 
 * atividade.on('enter', function () {
 * 
 * });
 * 
 * , ai, eu recebo o nome do evento, o evento, e recebo, tambem, o texto, os parametros dele,
 * 
 * atividade.on('enter', function (evento, texto) {
 * 
 * });
 * 
 * 38. Okay? Entao, olha so, agora, em atividade, eu posso escutar on('keyup'), mas, eu tambem posso escutar o <Enter>, que vai ser lancado aqui, oh, 
 * 
 * atividade.trigger('enter', atividade.val());
 * 
 * , okay? E, ai, aqui,
 * 
 * atividade.on('enter', function(evento, texto) {
 * 
 * });
 * 
 * , eu poderia, entao, pegar listaAtividades, ponto, prepend('<li>' + texto + '</li>');
 * 
 * , eh isso daqui,
 * 
 * atividade.on('enter', function (evento, texto) {
 *      listaAtividades.prepend('<li>' + texto + '</li');
 * });
 * 
 * 39. Beleza? Entao, vamos ver o que vai acontecer, para a gente dar mais uma revisada?
 * 
 * 40. Vamos Recarregar a Pagina e re-testar. Adicionou as atividades digitadas no campo na lista de atividades ao lado do campo.
 * 
 * 41. E olha o codigo para fazer isso, eu escutei on('keyup'). Do on('keyup'), eu estou trabalhando so em relacao aos dados aqui  da atividade, do valor da atividade. E, qualquer outra regra, qualquer outra iteracao com outro elemento, cai em outra funcao. E, se eu precisar fazer alguma outra coisa, eu posso adicionar outro aqui, oh,
 * 
 * atividade.on('enter, function (evento, texto) {
 *      
 * });
 * 
 * , ai, eu poderia ter outra atividade aqui, oh, atividade no sentido de funcionalidade,
 * 
 * atividade.on('enter, function (evento, texto) {
 *      // Outra funcionalidade aqui...
 * });
 * 
 * , vou dar so um log aqui,
 * 
  * atividade.on('enter, function (evento, texto) {
 *      // Outra funcionalidade aqui...
 *      console.log('Outra funcionalidade aqui...');
 * });
 * 
 * 
 * 42. Okay, agora, vamos Recarregar a Pagina, mostrar o Console do Chrome DevTools.
 * 
 * 43. Olha la, o texto digitado no campo foi adicionado na lista de itens e apareceu o log, entao, eu poderia, entao, implementar outra funcionalidade nessa funcao aqui, 
 * 
    atividade.on('enter', function (evento, texto) {
        console.log('Outra funcionalidade aqui...');
    });
 * 
 * , e por ai vai.
 * 
 * 44. Beleza? E isso aqui eh muito util para voce desacoplar o seu codigo, para voce organizar o seu codigo, beleza? Nos vamos ver, ainda, mais algumas coisas disso mais para a frente.
 * 
 * 45. Fim da Aula 08.003. Disparando Eventos.
 * 
 */
$(function () {

    var atividade = $('#atividade');
    var listaAtividades = $('#lista-atividades');

    /** *
    atividade.on('keyup', function(e) {
        var keyCode = e.keyCode;

        if (keyCode === 13) {
            // Disparar o event o...
            listaAtividades.prepend('<li>' + atividade.val() + '</li>');
            atividade.val('');
        }
    });
    **/

    atividade.on('keyup', function(e) {
        var keyCode = e.keyCode;

        if (keyCode === 13) {
            // Disparar o evento...
            // listaAtividades.prepend('<li>' + atividade.val() + '</li>');
            /** adicionarNaLista(atividade.val()); **/
            atividade.trigger('enter', atividade.val());
            atividade.val('');
        }
    });

    /** *
    function adicionarNaLista(texto) {
        listaAtividades.prepend('<li>' + texto + '</li>');
    }
    **/

    atividade.on('enter', function (evento, texto) {

        listaAtividades.prepend('<li>' + texto + '</li>');
    });

    atividade.on('enter', function (evento, texto) {

        console.log('Outra funcionalidade aqui...');

    });

});


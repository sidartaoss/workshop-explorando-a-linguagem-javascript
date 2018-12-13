/**
 * Aula 07.003. CSS
 * 
 * 1. Olha a ideia que o instrutor teve agora para nos explicar a respeito de como a gente consegue manipular no CSS da pagina atraves do jQuery.
 * 
 * 2. Okay? Nos vamos usar o mesmo exemplo que a gente fez na aula passada, so que nos vamos lidar tambem com outros dois arquivos, mas a ideia eh a seguinte: eu quero que, ao selecionar um checkbox, eu quero alterar a cor da fonte desta linha, entao, o Ricardo, aqui, e esse e-mail, tem que ficar com outra cor. Ai, selecionei a linha debaixo, tem que ficar de outra cor, desmarquei, a linha volta ao normal, fica preto, selecionei de volta, fica azul, desmarquei, fica preto novamente.
 * 
 * 3. Entao, olha so, o instrutor criou um arquivo style.css, e criou a classe selecionado, 
 * 
 * .selecionado {
 *      color: blue; 
 * }
 * 
 * , e, aqui, no index.html, nos estamos referenciando o style.css, 
 * 
 * <link rel="stylesheet" href="style.css">
 * 
 * , e, ai, eu movi para la o body,
 * 
 * body {
 *      padding: 20px;
 * }
 * 
 * 4. E, aqui, no index.html, eu mudei o nome do arquivo Javascript,
 * 
 * <script src="manipulando-css.js"></script>
 * 
 * 5. O resto esta igualzinho. Okay? E, ai, so para nos vermos como eh que tem que ficar, se nos inspecionarmos esse elemento aqui, no Chrome DevTools, por exemplo, aqui, na linha do Ricardo, botao direito, Add attribute, o que eu quero eh que, no tr, eu quero adicionar no tr aqui, eu vou adicionar um atributo class, e vai ser a classe 'selecionado', eh isso que eu quero, ou seja, a linha inteira vai ficar azul.
 * 
 * 6. Ou seja, quando eu clicar, eu quero adicionar essa classe 'selecionado' ao tr. Quando eu clicar aqui, oh, nesse input checkbox. Entao, o instrutor ja vai nos mostrar algumas coisas tambem de seletores, a gente nao deixa de trabalhar com seletores, entao, o instrutor vai nos mostrar como eh que nos selecionamos um elemento para cima, aqui, tambem, eh isso que nos queremos fazer, entao.
 * 
 * 7. Ao desmarcar o checkbox, o que eu quero eh apagar a classe 'selecionado' do elemento tr. Ai, eh para voltar ao estilo normal.
 * 
 * 8. Pegou a ideia?
 * 
 * 9. Entao, vamos la, vamos comecar implementando, aqui, do mais simples, e, depois, a gente vai melhorando, aos poucos, ai.
 * 
 * 10. Entao, olha so, o que nos vamos fazer, a primeira coisa que nos vamos fazer aqui eh, quando eu clicar aqui, no checkbox, por exemplo, de Ricardo, qual eh o evento Javascript que eh lancado? Eh o evento change.
 * 
 * 11. Entao, o selecaoUsuarios.on('change'), ou seja, o evento mudou alguma coisa, ele vai cair, aqui, para mim, vai executar essa funcao aqui,
 * 
 * selecaoUsuarios.on('change', function () {
 *      
 * });
 * 
 * , okay? 
 * 
 * 12. E, aqui, vai ser importante eu pegar o evento que ele lanca,
 * 
 * selecaoUsuarios.on('change', function (evento) {
 *      
 * });
 * 
 * 13. O instrutor vai nos exmplicar por que. Vamos dar o log aqui no evento,
 * 
 * selecaoUsuarios.on('change', function () {
 *      console.log('evento', evento)
 * });
 * 
 * 14. Cliquei, vai trazer aqui o evento, no Console do Chrome DevTools. O evento eh o objeto do jQuery, aqui tem um monte de coisas aqui, e, entre esse monte de coisa que ele tem, no target, eh o input, nesse caso aqui, o target ficou com o input, entao, olha so o que eu posso fazer aqui oh, eu quero pegar, entao, esse input a partir do evento, entao, eu posso fazer isso daqui oh, var selecaoUsuario, agora, no singular, porque eh so a selecao daquele usuario, porque o evento eh por um, nao eh, eu estou alterando um por vez, atribui evento.target, okay?
 * 
 * var selecaoUsuario = evento.target;
 * 
 * 15. Se eu fizer isso daqui, vamos dar um log aqui no selecaoUsuario,
 * 
 * console.log('selecaoUsuario', selecaoUsuario);
 * 
 * 16. Ao recarregarmos e clicarmos em um checkbox, ele exibiu o html do checkbox,
 * 
 * selecaoUsuario <input type=​"checkbox" class=​"js-selecao-usuario">​
 * 
 * 17. Mas eu quero, sabe o que?, que ele me retorne um objeto do jQuery, por que retornar um objeto do jQuery?
 * 
 * 18. Para eu poder trabalhar com as funcoes que o jQuery fornece, para facilitar a minha vida. Entao, sabe o que que eu posso fazer aqui?
 * 
 * 19. Olha so, eh so eu colocar esse cara, evento.target, dentro aqui do jQuery, que o jQuery vai falar, 'Opa, beleza, vou pegar esse elemento e transformar ele em um objeto jQuery e, ai, nos vamos poder usar as funcoes do jQuery ai nele,
 * 
 * 
 * 20. Olha so, vamos recarregar a pagina, retornou
 * 
 * selecaoUsuario n.fn.init [input.js-selecao-usuario, context: input.js-selecao-usuario]
 * 
 * , olha so a diferenca agora, olha so, ja transformou em um objeto jQuery e, aqui, ja vao ter varios metodos para poder trabalhar, beleza? Entao, vamos voltar aqui, em manipulando-css.js.
 * 
 * 21. Como, por exemplo, vamos mostrar aqui, na hora em que esta, entao, mudando o que que eu ja posso fazer? Ja posso alterar a cor, ja posso adicionar a classe, o objetivo, tambem, desta aula, eh mostrar como eu consigo manipular o CSS.
 * 
 * 22. Mas eu preciso manipular o CSS do tr, e nao do checkbox, okay? Entao, se a gente olhar aqui no index.html, eu estou com esse carinha aqui selecionado,
 * 
 * <input type="checkbox" class="js-selecao-usuario">
 * 
 * , so que eh o carinha do jQuery, o jQuery esta manipulando ele. Eu tenho que procurar o pai dele ate chegar no primeiro tr. Entao, olha so o que que eu posso fazer, selecaoUsuario.parents, com 's' no final, porque existe a funcao parent e o parents. A funcao parent, ele vai procurar apenas no primeiro pai. A funcao parents, ele sai procurando nos pais. Ate qual pai? Eu posso passar um filtro aqui, selecaoUsuario.parents(''), ate o tr,
 * 
 * selecaoUsuario.parents('tr');
 * 
 * 23. Se for ponto, eh uma classe,
 * 
 * selecaoUsuario.parents('.tr');
 * 
 * 24. Se for jogo-da-velha, eh um ID,
 * 
 * selecaoUsuario.parents('#tr');
 * 
 * 25. Se eu colocar assim, 
 * 
 * selecaoUsuario.parents('tr');
 * 
 * , eh um elemento.
 * 
 * 26. Entao, o que que eu estou fazendo aqui? Procura nos pais ate achar o tr,
 * 
 * selecaoUsuario.parents('tr');
 * 
 * 27. Entao, ele esta aqui no input, ai, sai procurando, achou, td, agora, ja estou no tr. Ai, o que que eu pposso fazer? Adicionar a funcao addClass(), 
 * 
 * selecaoUsuario.parents('tr').addClass();
 * 
 * , esse addClass eh a funcao do jQuery que eu consigo adicionar uma classe CSS para ele,
 * 
 * selecaoUsuario.parents('tr').addClass('selecionado');
 * 
 * 28. Olha so, vamos recarregar a ver aqui na pagina html, quando eu selecionar aqui um checkbox, vai ficar azul.
 * 
 * 29. Vou desmarcar o checkbox, continua azul. Por que? Porque eu nao removi essa classe, eu so estou adicionando. Entao, o que que eu posso fazer? Esse selecaoUsuario aqui nao eh esse checkbox aqui da tela com o jQuery, como objeto jQuery?
 * 
 * 30. Eh, entao, eu posso fazer, oh, um if(), okay? Se estiver checado, eu adiciono aqui essa classe, senao, se, na hora que ele mudou, ele foi para nao-checado, entao eu vou fazer aqui, so que, ao inves do addClass(), sera um removeClass(),
 * 
 * if (selecaoUsuario.prop('checked')) {
 *      selecaoUsuario.parents('tr').addClass('selecionado');
 * } else {
 *      selecaoUsuario.parents('tr').removeClass('selecionado');
 * }
 * 
 * , ai, ele remove aquela classe. Vamos recarregar e ver aqui? Oh, selecionei, adicionou a classe, vou desmarcar, tirou a classe. 
 * 
 * 31. Beleza? Entao, essa parte aqui ficou funcionando, vamos continuar testando, sera que esta tudo certo? Sera que, se eu clicar aqui em cima no checkbox de TODOS, 'Opa, esse aqui nao esta funcionando'. So esta funcionando se eu clicar direto aqui em um outro checkbox.
 * 
 * 32. O instrutor esta pensando em como a gente pode resolver aqui, vamos dar uma olhada aqui. E eh o seguinte, oh, nos ja estamos aqui em selecaoTodosUsuarios aqui, no evento clique dele, 
 * 
 *  selecaoTodosUsuarios.on('click', function() {
         selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
    });
 * 
 * , nos ja temos aqui se eh para estar checado ou nao, nao eh? Entao, eu posso, vamos duplicar codigo aqui mesmo, depois, a gente melhora um pouco mais, o instrutor vai nos mostrar mais seletores. Entao, oh, se o selecaoTodosUsuarios estiver checado, o que que eu vou fazer? Eu vou pegar, agora, a selecao dos usuarios, no plural aqui, aqui, repara, oh, eu estava pegando o usuario linha por linha, no evento change de selecaoUsuarios, ja, aqui, no envento click de selecaoTodosUsuarios, eu ja vou pegar todos, o jQuery me ajuda nisso, ele ja fala: 'Eu vou fazer em todos para voce'. Entao, vamos la, selecaoUsuarios.parents, ou seja, pega todos os parents desses ai, um por um, e adiciona a classe 'selecionado',
 * 
 * if (selecaoTodosUsuarios.prop('checked')) {
 *      selecaoUsuarios.parents('tr').addClass('selecionado');
 * }
 * 
 * , senao, ele vai fazer a mesma coisa, so que remove a classe 'selecionado',
 * 
 * if (selecaoTodosUsuarios.prop('checked')) {
 *      selecaoUsuarios.parents('tr').addClass('selecionado');
 * } else {
 *      selecaoUsuarios.parents('tr').removeClass('selecionado');
 * }
 * 
 * 33. Vamos ver se vai? Recarregar a pagina, cliquei no checkbox de TODOS, todos os outros checkboxes ficam azul, desmarquei o checkbox de TODOS, todos os outros checkboxes ficam pretos.
 * 
 * 34. Entao, esta tudo certo, nao eh, aqui. So que o meu codigo aqui ficou duplicado. Nao eh a mesma coisa, porque o elemento aqui eh diferente, nao eh?,
 * 
 * 
    selecaoTodosUsuarios.on('click', function() {
         selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
         if (selecaoTodosUsuarios.prop('checked')) {
            selecaoUsuarios.parents('tr').addClass('selecionado');
         } else {
            selecaoUsuarios.parents('tr').removeClass('selecionado');
         }
    });

    selecaoUsuarios.on('change', function (evento) {
        var selecaoUsuario = $(evento.target);
        if (selecaoUsuario.prop('checked')) {
            selecaoUsuario.parents('tr').addClass('selecionado');
        } else {
            selecaoUsuario.parents('tr').removeClass('selecionado');
        }        
    });    

 * 
 * , ou seja, selecaoUsuarios eh diferente de selecaoUsuario. selecaoUsuarios sao todos os usuarios, e selecaoUsuario eh 1 usuario por vez, ou seja, selecaoUsuarios sao todas as linhas, e selecaoUsuario eh so 1 linha so, nao esta tao duplicado, mas da para a gente melhorar, da para nos levarmos isso daqui, eh so a gente usar outro carinha de selecao para uma funcao separada e, nessa funcao, eu verifico de todo mundo.
 * 
 * 35. Entao, vamos la, vamos declarar essa funcao, como eu vou usar ela aqui, 
 * 
 *      if (selecaoTodosUsuarios.prop('checked')) {
            selecaoUsuarios.parents('tr').addClass('selecionado');
        } else {
            selecaoUsuarios.parents('tr').removeClass('selecionado');
        }
 * 
 * , entao, eu vou declarar essa minha funcao logo aqui em cima. Eu vou chamar essa funcao de estilizarLinhaUsuarios(), okay?, vamos chamar essa funcao assim, 
 * 
 * function estilizarLinhaUsuarios() {
 * 
 * }
 * 
 * , e, ai, ao inves de eu fazer isso daqui,
 * 
 *      if (selecaoTodosUsuarios.prop('checked')) {
            selecaoUsuarios.parents('tr').addClass('selecionado');
        } else {
            selecaoUsuarios.parents('tr').removeClass('selecionado');
        }

        ...

        if (selecaoUsuario.prop('checked')) {
            selecaoUsuario.parents('tr').addClass('selecionado');
        } else {
            selecaoUsuario.parents('tr').removeClass('selecionado');
        }        
 * 
 * 
 * , e vou chamar esse cara aqui, estilizarLinhaUsuarios(), ou seja, estilizarLinhaUsuarios() nessas duas funcoes de selecaoTodosUsuarios.on('click', function (evento) {}); e selecaoUsuarios.on('change', function (evento) {});, toda vez que ocorrer essas mudancas aqui, esses eventos, eu vou estilizar essa linha.
 * 
 * 36. Como eu posso fazer isso aqui, entao? Eu posso pegar a selecao dos usuarios, vou pegar todos eles ali, e vou filtrar, como a gente ja fez aqui, oh, vou filtrar os que estao 'checked', de todos os que estao checados. Todos os que estao checados, eu pego os parents ate o tr e faco um addClass, passando a classe 'selecionado',
 * 
 * function estilizarLinhaUsuarios () {
 *      selecaoUsuarios.filter('checked').parents('tr').addClass('selecionado');
 * }
 * 
 * 37. So fazendo isso daqui, vamos ver? Vamos recarregar a pagina e testar. Todos os que estao checados esta funcionando, se eu selecionar o checkbox de TODOS, vai colorir tambem, porem, desmarcar nao esta funcionando.
 * 
 * 38. Vamos ver aqui? Eh so eu terminar, 
 * 
    function estilizarLinhaUsuarios () {
        selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
    }

    , selecaoUsuarios.filter(''), so que, agora, eu quero os que nao estao checados, entao, dois pontos, not(), dois pontos, 'checked', fechar parenteses de novo, ou seja, selecaoUsuarios.filter(':not(:checked)'),
 * 
 * 
 * 39. Entao, o not aqui oh, o que ele esta falando para mim eh, 'Eu quero negar', checked pega os que estao checados, agora, os que nao sao checados.
 * 
 * 40. Mais quase a mesma coisa aqui, ou seja, .parents('tr').removeClass('selecionado');
 * 
     function estilizarLinhaUsuarios () {
        selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
    }
 * 
 * , okay? Vamos recarregar a pagina, selecionar e desmarcar os checkboxes, inclusive o checkbox de TODOS e vamos verificar se esta colorindo ao marcar e descolorindo ao desmarcar.
 * 
 * 41. Pronto, era isso que o instrutor queria fazer aqui nesta aula para nos mostrar, entao, vamos dar uma revisada aqui.
 * 
 * 42. ':checked' esta filtrando em todos os usuarios, sao todos os elementos que estao checados, parents, tr, adicionando a classe 'selecionado'. Se nao estiver 'checked', eu pego os parents e removo a classe 'selecionado'.
 * 
 * 43. Okay? E, ai, aqui no selecaoTodosUsuarios, quando eu dou um clique, alem de eu estar fazendo aqui, selecionando todos ou nao, eu estou chamando para estilizar a linha dos usuarios. E, no selecaoUsuarios, quando da uma mudanca, tambem mando ali estilizar.
 * 
 * 44. Mas foi legal o instrutor poder nos mostrar essa questao do target, foi legal para nos ja aprendermos mais essas coisas aqui. 
 * 
 * 45. Bom, o instrutor ainda vai melhorar este exemplo aqui, nos vamos, nas aulas de eventos, o instrutor quer nos mostrar sobre eventos, e, ai, no evento, o instrutor vai deixar melhor ainda esse codigo para ficar, nos vamos conseguir arrancar chamada dessa funcao estilizarLinhaUsuarios(), aqui, beleza? 
 * 
 * 46. Fim da Aula 07.003. CSS.
 * 
 */

 $(function () {

    var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
    var selecaoUsuarios = $('.js-selecao-usuario');

    function estilizarLinhaUsuarios () {
        selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
        selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
    }

    selecaoUsuarios.on('click', function() {
        var totalUsuariosSelecionados = $('.js-selecao-usuario:checked').length;
        var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
        selecaoTodosUsuarios.prop('checked', checked);
    });

    selecaoTodosUsuarios.on('click', function() {
         selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
         /** *
         if (selecaoTodosUsuarios.prop('checked')) {
            selecaoUsuarios.parents('tr').addClass('selecionado');
         } else {
            selecaoUsuarios.parents('tr').removeClass('selecionado');
         }
         **/
        estilizarLinhaUsuarios();
    });    

    selecaoUsuarios.on('change', function (evento) {
        /**  *console.log('evento', evento) **/
        /** *var selecaoUsuario = evento.target; **/
        /** *var selecaoUsuario = $(evento.target); **/

        /** *console.log('selecaoUsuario', selecaoUsuario); **/

        /** *selecaoUsuario.parents('tr').addClass('selecionado'); **/

        /** *
        if (selecaoUsuario.prop('checked')) {
            selecaoUsuario.parents('tr').addClass('selecionado');
        } else {
            selecaoUsuario.parents('tr').removeClass('selecionado');
        }
        **/
       estilizarLinhaUsuarios();    

    });

 });


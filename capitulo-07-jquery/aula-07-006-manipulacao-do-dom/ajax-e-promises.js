/**
 * Aula 07.006. Manipulando o DOM
 * 
 * 6. Eu ja estou, aqui, com o estado,
 * 
   resposta.done(function (estados) {
    estados.forEach(function (estado) {
        console.log(estado);
    });
  });
 * 
 * , e, nesse objeto estado, olha la, eu ja tenho uf, e o nome, nao eh?, entao, se eu der um log() aqui, oh,
 * 
 * console.log('UF', estado.uf);
 * console.log('Nome', estado.nome);
 * 
 * 
 * , vamos ver o que que vai aparecer? 
 * 
 * 7. Olha la, no Console do Chrome DevTools, UF MG, Nome Minas Gerais, UF SP, Nome Sao Paulo, UF GO, Nome Goias.
 * 
 * 8. Okay? Entao, eu consigo acessar, ta vendo, oh, essas propriedades aqui desse objeto estado, atraves do da forma que a gente ja viu, normalmente, acessando o objeto via Javascript.
 * 
 * 9. Entao, qual que eh a ideia, agora? Eu quero usar o jQuery para criar um elemento, vamos dar uma olhada aqui na pagina index.html?
 * 
 * 10. Oh, eh esse combo aqui que eu quero mexer, oh, no combo-estado,
 * 
 *    <select id="combo-estado" class="form-control">
          <option value="MG">Minas Gerais</option>
      </select>
 * 
 * , okay? Entao, eu quero pegar esse camarada, criar options com o que esta retornando do Servidor, e inserir, fazer desenhar na tela, dentro desse combo-estado aqui. Isso eh importante, nao eh?, eu quero dentro desse combo-estado. Qual lugar que eh?, eu preciso, entao, desse elemento para colocar as coisas dentro dele, okay?
 * 
 * 11. Entao, vamos la. Ja que o instrutor nos disse que precisamos desse select aqui, desse combo, para colocar coisas dentro dele, e as boas praticas nos dizem para declarar a variavel logo no inicio, entao, vamos la, var comboEstado = $(''), voce lembra como eh que eu pego um elemento pelo ID? Aqui, oh, o ID dele eh combo-estado. Eh so eu colocar jogo-da-velha e o nome do ID, var comboEstado = $('#combo-estado');
 * 
  resposta.done(function (estados) {
    var comboEstado = $('#combo-estado');
    estados.forEach(function (estado) { 
        console.log('UF', estado.uf);
        console.log('Nome', estado.nome);
    });
  });
 *
 * , entao, eu ja estou com aquele carinha, eu preciso adicionar options dentro dele. Repare que eu peguei com jQuery, isso eh muito importante, porque, pegando, recuperando ele com jQuery, eu ganho funcoes que vao me auxiliar para caramba. Nos vamos ver um exemplozinho agora mesmo.
 * 
 * 12. Entao, vamos la, vamos criar um option estado,
 * 
 * 
   resposta.done(function (estados) {
    var comboEstado = $('#combo-estado');
    estados.forEach(function (estado) { 

      var optionEstado

    });
  });
 * 
 * , que eh esse option aqui,
 * 
 * <option value="MG">Minas Gerais</option>
 * 
 * , eu preciso de varios desses options com os resultados que eles voltaram, com estados que voltaram aqui,
 * 
 *     estados.forEach(function (estado) {});
 * 
 * 13. Okay? Como eh que eu faco para criar? jQuery tambem, $(), para aproveitar os metodos que eu tenho, e eu coloco '<option>',
 * 
    resposta.done(function (estados) {
    var comboEstado = $('#combo-estado');
    estados.forEach(function (estado) { 

      var optionEstado = $('<option>');

    });
  });
 *
 * , por exemplo. Pode ser assim, ou assim,
 * 
 * var optionEstado = $('<option></option');
 *
 * , okay? Vamos deixar a forma normal,
 * 
 * var optionEstado = $('<option>');
 * 
 * 14. Entao, eu preciso criar o elemento option. Eh so colocar ele ai dentro do jQuery, assim, beleza? E eu quero definir o valor, olha so, o valor dele tem que ser a UF do estado. Entao, eu posso ja ir encadeando aqui, oh,
 * 
 * var optionEstado = $('<option>').val('');
 * 
 * , ao inves de eu colocar, aqui, em .val(''), 'MG', eu vou colocar estado.uf, okay? E eu tambem quero definir o texto desse option, com o nome do estado. 
 * 
 * 15. Entao, como eu faco isso? .text(estado.nome),
 * 
 * var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
 * 
 * 16. Okay, oh? Entao, nessa linha, o que que eu fiz? 1. Eu criei esse option aqui, 2. definir o valor dele como sendo a uf, 3. e o estado com o nome. 
 * 
 * 17. Se eu mandar logar isso aqui, vamos ver o que que sai?
 * 
 * console.log('optionEstado', optionEstado);
 * 
 * 18. Beleza? Eu preciso, entao, agora, pegar esse optionEstado e colocar dentro desse combo-estado. Entao, olha so, comboEstado., qual eh a funcao que eu vou chamar para adicionar elementos dentro desse combo estado? .append(),
 * 
 * comboEstado.append(optionEstado);
 * 
 * 19. Como eh que voce descobriu isso, Normandes? Aqui oh, documentacao, okay? Se voce vier na documentacao, aqui em Manipulation, em DOM Insertion, Inside, https://api.jquery.com/category/manipulation/dom-insertion-inside/, olha la, ai, voce vai ver, entao, tem o metodo append(), appendTo(), html(), prepend(). Vamos fazer uns testes com o html, com o prepend() tambem, para a gente brincar.
 * 
 * 20. Entao, olha so, peguei no comboEstado, que eu recuperei aqui em cima,
 * 
 * var  comboEstado = $('#combo-estado');
 * 
 * , ja busquei ele logo aqui para eu poder adicionar dentro dele, ou seja, adicionar, traducao de append, o optionEstado.
 * 
 * 21. Okay? Vamos dar um Refresh aqui na pagina html e vamos ver se vai dar certo. Ja eh para funcionar. Olha la, Minas Gerais, Sao Paulo, Goias. Por que que duplicou o Minas Gerais? Porque ja tinha um Minas Gerais aqui,
 * 
  <select id="combo-estado" class="form-control">
    <option value="MG">Minas Gerais</option>
  </select>
 * 
 * 22. Beleza? Quais sao as opcoes que a gente tem? Vamos la, entao, oh, eu criei esse cara, optionEstado, defino o valor e define o texto do que eu estou criando,
 * 
 var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
 *
 * 23. Todos vao ser assim, Normandes?, para todas as criacoes? Nao, depende, depende se voce estiver criando um div, nao vai ter o val(), por exemplo, pode ser algum outro elemento. O importante eh nos sabermos que tem como fazer, nao eh, isso daqui. Entao, olha so, o option, o valor e o texto. Esse cara, entao, optionEstado, eh um elemento, eh um option, e eu adicionei ele, fiz um append(), a gente adiciona no final, o optionEstado no comboEstado, que eh, justamente, esse select aqui,
 * 
   <select id="combo-estado" class="form-control">
    <option value="MG">Minas Gerais</option>
  </select>
 * 
 * , fechou? Bom, esta repetindo porque, aqui, 
 * 
  <select id="combo-estado" class="form-control">
    <option value="MG">Minas Gerais</option>
  </select>
 * 
 * ja tem esse option. O que que voce poderia fazer? Ah, o mais facil seria apagar aqui, nao eh?,
 * 
   <select id="combo-estado" class="form-control">
  </select>
 * 
 * 
 * 24. Vamos la, vamos dar uma olhada, ao recarregar a pagina. Oh, apaguei na pagina index.html, recarreguei a pagina, realmente, tirou. Mas vamos fazer o seguinte, vamos deixar,
 * 
   <select id="combo-estado" class="form-control">
    <option value="MG">Minas Gerais</option>
  </select>
 * 
 * 
 * 25. Vamos deixar aqui ainda, e vai ficar duplicado, oh, dois Minas Gerais. 
 * 
 * 26. Para o instrutor nos mostrar outros elementos aqui, do jQuery para a gente manipular o DOM. Por exemplo, eu poderia, aqui, no comboEstado, logo depois que eu tenho ele, poderia invocar a funcao .empty(),
 * 
 * comboEstado.empty()
 * 
 * , esse empty() vai apagar todo mundo que esta dentro do comboEstado. Salvei, e vamos recarregar a pagina html, olha la, ja nao esta duplicado mais Minas Gerais.
 * 
 * 27. Okay? Qual outra alternativa que eu tenho? Olha so a ideia que o instrutor esta tendo, ao inves de usar a funcao .empty(), nos vamos dar uma olhada na funcao html(), se nos lermos a funcao html, https://api.jquery.com/html/, se a gente olhar essa versao aqui oh, que recebe o parametro, o htmlString, https://api.jquery.com/html/#html2, ele define o conteudo de cada elemento nos elementos que a gente deu match. Em outras palavras, ele vai dar um replace, como se fosse um replace, ele pega todo html que tem dentro de comboEstado e substitui pelo parametro sendo passado, ou seja, htmlString. Ele vai substituir por uma string vazia?,
 * 
 * comboEstado.html('');
 * 
 * 28. Nao. Vamos adicionar um option aqui, oh, 
 * 
 * comboEstado.html('<option>Selecione o estado</option>);
 * 
 * , para, quando carregar oh, quando acabar de pegar o comboEstado, ele ja adiciona um option vazio, depois, ele vai dando append() para os demais. Vamos ver?
 * 
 * 29. Refresh na pagina, oh, Selecione o estado, e os demais estados, Minas Gerais, Sao Paulo, Goias.
 * 
 * 30. Se eu quiser colocar em ordem invertida? Usamos o prepend(),
 * 
 * comboEstado.prepend(optionEstado);
 * 
 * , ou seja, o append() eh, insere na ultima posicao. O prepend() insere na primeira posicao. Entao, agora, ele inverteu a ordem, Goias, Sao Paulo, Minas Gerais, Selecione o estado, ele foi adicionando sempre no final.
 * 
 * 31. Entao, eh possivel usar os dois ai, oh, append(), prepend(), e outros que tem na documentacao. 
 * 
 * 32. Como que voce vai aprender? So lendo a documentacao, so na hora em que voce sentir a necessidade de implementar alguma coisa assim, pode ter certeza de que vai aparecer, na hora em que voce esta desenvolvendo, voce vai, de repente, falar, 'Oh, eu preciso adicionar na frente, eu preciso adicionar no final', como eh que eu faco? 
 * 
 * 33. Voce comeca a pesquisar, voce vai encontrar as funcoes ai, do jQuery, para fazer isso. Beleza? Entao, era isso que o instrutor queria nos mostrar, para a gente ir manipulando o DOM, olha so como o DOM estava, so tinha um option aqui, simples,
 * 
<select id="combo-estado" class="form-control">
  <option value="MG">Minas Gerais</option>
</select>
 * 
 * , e, ai, depois que a gente foi la, via Ajax, se a gente der uma olhada aqui, no combo Estado, na pagina HTML, e inspecionarmos o elemento, nos adicionamos varios options aqui, no select, pelo Javascript, o que eh muito legal.
 * 
 * , nao eh, voce consegue atualizar varias partes, sem precisar recarregar todo sistema, toda a pagina.
 * 
 * 
 * 34. Fim da Aula 07.006. Manipulando o DOM.
 * 
 * 
 */
$(function () { 

  var resposta = $.ajax({
    url: 'http://localhost:8080/estados',
    method: 'GET',
    dataType: 'jsonp'
  });

  resposta.done(function (estados) {
    var comboEstado = $('#combo-estado');
    /** *comboEstado.empty(); **/
    comboEstado.html('<option>Selecione o estado</option>');
    estados.forEach(function (estado) {
        /** *console.log(estado); **/
        /** *console.log('UF', estado.uf); */
        /** *console.log('Nome', estado.nome); */

      var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
      /** *console.log('optionEstado', optionEstado); **/
      /** *comboEstado.append(optionEstado); **/
      comboEstado.prepend(optionEstado);

    });
  });

  resposta.fail(function () {
    alert('Erro carregando estados do servidor!');
  });

});
/**
 * 
 * Aula 09.007. Usando a Funcao bind
 * 
 * 26. No usando-a-funcao-bind-2.js, nos vamos usar uma outra forma, vamos copiar a forma do usando-a-funcao-bind.js e, no index.html, aqui, eu vou carregar, agora, o usando-a-funcao-bind-2.js,
 * 
 <script src="usando-a-funcao-bind-2.js"></script>
 * 
 * 27. Aqui, nos vamos mudar e, agora, sim, nos vamos usar a funcao bind() que o instrutor quer nos mostrar, onde a gente usa a funcao bind().
 * 
 * 28. Beleza? Entao, vamos la. A forma como nos vamos migrar esse cara aqui, eh, como o instrutor disse, nos vamos o Model Pattern junto com a funcao construtora, junto com o new.
 * 
 * 29. Como que isso vai funcionar? Entao, se eu quero usar como funcao construtora, a primeira coisa que eu vou fazer eh transformar esse cara para uma letra maiuscula,
 * 
 * var Estado = (function () {
 * 
 * })();
 * 
 * , porque eu quero usar a Funcao Construtora. A convencao diz para eu colocar como letra maiuscula.
 * 
 * 30. E, aqui, quando eu for usar esse cara, sera algo assim, oh, o instrutor costuma fazer assim, oh, 
 * 
 * $(function () {
 *      
 * });
 * 
 * , quando a aplicacao ja estiver disponivel, ou seja,
 * 
 * $();
 * 
 * , eu vou ter algo assim, oh,
 * 
 * $(function () {
 *      var estado = new Estado();
 *      estado.iniciar();
 * });
 * 
 * , eh isso que eu quero fazer.
 * 
 * 31. Por que que eu gosto de fazer assim? Porque, voce vai ver, quando eu for adicionar, quando a gente for mexer aqui, na Pagina Html, com Cidade, eu posso dar new em Cidade e passar parametros aqui no Construtor, eu passo dependencias aqui, entao, quando eu for, voce vai ver, eu vou criar aqui, o combo de Cidade, so que eu vou depender, o combo de Cidade depende do Estado, entao, eu posso passar algo assim,
 * 
 $(function () {
 *      var estado = new Estado();
 *      estado.iniciar();
 * 
 *      var cidade = new Cidade(estado);
 * });
 * 
 * , e, ai, eu posso ter algo desse tipo,
 * 
 * 
 * $(function () {
 *      var estado = new Estado();
 *      estado.iniciar();
 * 
 *      var cidade = new Cidade(estado);
 *      cidade.iniciar();
 * });
 * 
 * , entao, quando eu criar Cidade, eu dependo do objeto estado, okay? Nos vamos chegar nesse nivel aqui, vamos ate deixar comentado por enquanto.
 * 
 * 32. Okay? Entao, vamos la, para eu conseguir fazer isso daqui, 
 * 
 $(function () {
    >>>var estado = new Estado();<<<
    estado.iniciar();    
});
 * 
 * , eu preciso ter aqui, oh, uma funcao,
 * 
 * function Estado () {
 * 
 * }
 * 
 * , dessa forma e, la no final, ao inves de eu retornar, aqui, um objeto,
 * 
 * return {
 *      iniciar: iniciar
 * }
 * 
 * , eu vou retornar essa funcao,
 * 
 * return Estado;
 * 
 * , okay? Porque eu vou dar new no Estado, eu quero dar new nessa funcao,
 * 
 * function Estado () {
 * 
 * }
 * 
 * , eu quero ter esse cara, essa funcao, Estado, 
 * 
 * function Estado () {
 * 
 * }
 * 
 * , como o retorno do new. Lembra que a gente deu new em uma funcao?, quando a gente viu funcao construtora? Entao, estou dando new numa funcao, okay?
 * 
 * 33. Entao, eu coloco ela aqui,
 * 
 * function Estado () {
 * 
 * }
 * 
 * , e retorno essa funcao aqui,
 * 
 * var Estado = (function () {
 *      function Estado () {
 * 
 *      }
 * 
 *      ...
 * 
 *      return Estado;
 * 
 * })();
 * 
 * $(function () {
      var estado = new Estado();
      estado.iniciar();    
 * });
 * 
 * 34. Beleza? E, ai, no iniciar(), eu quero chamar a funcao iniciar() nesse objeto estado,
 * 
 * var estado = new Estado();
 * estado.iniciar();
 * 
 * , okay?, que foi criado pela funcao. 
 * 
 * 35. Lembra como eh que a gente consegue adicionar elementos dentro de uma funcao? 
 * 
 * 36. Usando Prototype.
 * 
 * 37. Entao, eu posso ter,
 * 
 * Estado.prototype.iniciar
 * 
 * , e, aqui, eu posso adicionar uma funcao, por exemplo,
 * 
 * Estado.prototype.iniciar = function () {
 * 
 * };
 * 
 * , e eu vou colocar, aqui, oh, so para a gente ver, oh, 
 * 
 *  function Estado () {
 * 
 *  }
 * 
 *  Estado.prototype.iniciar = function () {
 *      console.log('Iniciando o estado...');
 *  };
 * 
 *  var comboEstado = $('#combo-estado');
 * 
 * 38. Entao, vamos la oh, repetindo. Eu estou dando new,
 * 
 * function Estado () {
 * 
 * }
 * 
 * , ele vai retornar esse Estado, e eu quero adicionar uma coisa nessa funcao Estado,
 * 
 * Estado.prototype.iniciar = function () {};
 * 
 * , eh so voce voltar na aula, aqui, oh, propriedade-prototype-das-funcoes. Lembra la, tem uma funcao Carro, 
 * 
 * function Carro (nome, placa) {
 *      this.nome = nome;
 *      this.placa = placa;
 * }
 * 
 * Carro.prototype.fabricante = 'VW';
 * Carro.prototype.ligar = function () {
 *      console.log('Ligando o carro...');
 * };
 * 
 * e, olha la, Carro.prototype.fabricante = 'VW', Carro.prototype.ligar = function () {}, eu adicionei uma funcao la, nao foi isso? Eh a mesma coisa que eu estou fazendo aqui, oh,
 * 
 * function Estado () {
 * 
 * }
 * 
 * Estado.prototype.iniciar = function () {
 *      console.log('Iniciando o estado...');
 * }
 * 
 * , eu tenho uma funcao e estou adicionando no Prototype dela essa funcao iniciar(), okay?
 * 
 * 39. Deixa eu deixar isso aqui comentado, por enquanto, 
 * 
    /** *
    var comboEstado = $('#combo-estado');

    function iniciar() {
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

    /** *
    return {
        iniciar: iniciar
    }
    **
 * 
 * , e vamos ver se isso daqui vai aparecer la no Console do Chrome DevTools.
 * 
 * 40. Olha la, 'Iniciando o estado...'.
 * 
 * 41. Okay? No combo Estado, ainda nao esta carregando nada, ta fixo la, mas, pelo menos, ja funcionou essa parte aqui, oh, 
 * 
    function Estado () {

    }

    Estado.prototype.iniciar = function () {
        console.log('Iniciando o estado...');        
    }; 
 * 
 * ou seja, eu estou misturando Model Pattern, com funcao construtora. Beleza? E, ai, o que que eu vou colocar, aqui, nessa funcao iniciar()?
 * 
 * 42. Eu vou colocar o Ajax aqui,
 * 
    Estado.prototype.iniciar = function () {
        /** console.log('Iniciando o estado...');
        $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onEstadosRetornados,
            error: onError
        });              
    };
 * 
 * , para ele iniciar o Ajax, para fazer a requisicao, beleza? E, ai, a mesma coisa, quando ele carregar os estados, eu quero chamar a funcao onEstadosRetornados, entao, vamos copiar ela aqui,
 * 
    Estado.prototype.iniciar = function () {
        /** console.log('Iniciando o estado...'); **
        $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onEstadosRetornados,
            error: onError
        });        
    };

    function onEstadosRetornados (estados) {
        comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function (estado) {

            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            comboEstado.append(optionEstado);

        });
    }
 * 
 * , e, ai, a gente ja vai comecar a usar a funcao bind(), porque o instrutor vai nos mostrar o erro acontecendo, e, ai, a gente vai melhorando isso daqui, beleza?
 * 
 * 43. Entao, vamos la, aqui, esta faltando a variavel, nao eh?, var comboEstado, vou deixar ela aqui primeiro,
 * 
     function onEstadosRetornados (estados) {
        var comboEstado = $('#combo-estado');
        comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function (estado) {

            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            comboEstado.append(optionEstado);

        });
    }
 * 
 * , vou deixar ela por aqui, depois, a gente move ela para outro local, move aqui,
 * 
 * function Estado () {
 * 
 * }
 * 
 * , que eh, geralmente, no Construtor, que eu inicio essas variaveis.
 *  
 * 44. Beleza? Mas so para a gente ver se isso daqui vai dar certo, o instrutor acha que sim, vamos la, vamos Recarregar a Pagina Html.
 * 
 * 45. Nao, onError is not defined, eu nao criei a funcao onError, vamos pegar ela aqui,
 * 
    Estado.prototype.iniciar = function () {
        /** console.log('Iniciando o estado...'); **
        $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onEstadosRetornados,
            error: onError
        });        
    };

    function onEstadosRetornados (estados) {
        var comboEstado = $('#combo-estado');
        comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function (estado) {

            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            comboEstado.append(optionEstado);

        });
    }

    function onError () {
        alert('Erro carregando estados do servidor!');
    }    
 * 
 * , okay, vamos voltar para a Pagina Html, dar um Refresh, beleza, carregou os estados aqui.
 * 
 * 46. Beleza? Bom, 'Ah, Normandes, mas eu quero usar esse combo Estado em algum outro lugar. Se eu precisar fazer isso, como eh que eu posso utilizar ele?
 * 
 * 47. Entao, eu inicializo as variaveis que eu estou usando para manipular na tela sempre aqui no Construtor, 
 * 
 * var Estado = (function () {
 *      function Estado () {
 *          var comboEstado = $('combo-estado');
 *      }
 * 
 *      ...
 * 
 *     function onEstadosRetornados (estados) {
        // var comboEstado = $('#combo-estado');
        ...
       }
 * 
 * })();
 * 
 * , okay? So que, se eu declarar var comboEstado assim, eu estou declarando uma variavel que esta so aqui dentro,
 * 
 * function Estado () {
 *      var comboEstado = $('#combo-estado');
 * }
 * 
 *  , eu quero colocar dentro do objeto Estado. Lembra que, quando a gente criou, usando funcao construtora, eu nao usei o this?
 * 
 * var Carro = function (nome, placa) {
 *      this.nome = nome;
 *      this.placa = placa;
 *      this.fabricante = 'VW';
 * }
 * 
 * , certo? Entao, eu vou usar o this aqui tambem, oh,
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 * }
 * 
 * , para eu adicionar dentro do objeto Estado que eu estou criando, com o new, beleza?
 * 
 * 48. So que, agora, eu executando isso daqui, ja vai dar erro aqui, voce vai ver por que vai dar erro.
 * 
 * 49. Oh, vamos executar, oh, comboEstado is not defined, se eu clicar no link do erro, o Console do Chrome DevTools vai nos mostrar onde acontece o erro. comboEstado nao eh definido em onEstadosRetornados(), por que nao?
 * 
 * 50. Porque, para acessar esse comboEstado dentro da funcao onEstadosRetornados, eu preciso por o 'this' para falar, 'eu quero acessar o do objeto Estado,
 * 
    function onEstadosRetornados (estados) {
        this.comboEstado.html('<option>Selecione o estado</option>');
 *  }
 *  
 * 51. Beleza? So que, mesmo assim, ainda nao vai dar certo.
 *
 * 52. Ai, que vai entrar o bind(). Oh, vamos voltar aqui, dar um Refresh na Pagina Html, retornou,
 *
 * Cannot read property 'html' of undefined
 * 
 * , la na mesma linha, 
 * 
 * function onEstadosRetornados (estados) {
 *      this.comboEstado.html('option>Selecione o estado</option>');
 * }
 * 
 * , significa que esse comboEstado aqui esta undefined. Ele nao sabe quem ele eh, ele nao sabe. Por que que ele nao sabe quem eh esse this.comboEstado, se ele esta definido aqui, oh, 
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 * }
 * 
 * , nao esta escrito errado nao, esta igualzinho o nome, nao foi erro de digitacao.
 * 
 * 53. Porque o seguinte. Quando ele executou aqui essa funcao, onEstadosRetornados(), o contexto, aqui, o objeto que ele esta sendo executado aqui, o this, 
 * 
 * function onEstadosRetornados (estados) {
 *      >>>this<<<.comboEstado.html('...');
 *      ...
 * }
 * 
 * , nao eh esse Estado aqui, oh,
 * 
 * function >>>Estado<<< () {
 *      this.comboEstado = $('#combo-estado');
 * }
 * 
 * , como que nos podemos provar isso?
 * 
 * 54. Assim, oh, nos vamos ver qual que eh o objeto this aqui, para a gente ver, 
 * 
 * function onEstadosRetornados (estados) {
 *      console.log('this', >>>this<<<);
 *      ...
 * }
 * 
 * , porque nos precisamos que o this aqui seja esse Estado,
 * 
 * function >>>Estado<<< () {
 *      >>>this<<<.comboEstado = $('#combo-estado');
 * }
 * 
 * , esse Estado aqui, esse objeto que foi criado. Voce vai ver que aqui, 
 * 
  * function onEstadosRetornados (estados) {
 *      console.log('this', >>>this<<<);
 *      ...
 * }
 * 
 * , nao eh esse cara.
 * 
 * 55. Vamos ver, oh, Recarregar a Pagina Html, vamos la no Console do Chrome DevTools.
 * 
 * 56. Olha so, o this, 
 * 
 * this {url: "http://localhost:8080/estados?callback=jQuery223003924383559112399_1541702163882&_=1541702163883", type: "GET", isLocal: true, global: true, processData: true, …}
 * 
 * , olha so que objeto que eh, eh o objeto do jQuery, que fez a Requisicao la, que fez a Requisicao no Servidor.
 * 
 * 57. Entao, eh o objeto executado aqui dentro do jQuery. Entao, eu preciso falar para ele o seguinte, oh, 'Quando voce for executar essa funcao, onEstadosRetornados, nao quero que o this seja o objeto do jQuery, eu quero trocar ele. Ai que vem o bind,
 * 
 * Estado.prototype.iniciar = function () {
 *      $.ajax({
 *          url: 'http://localhost:8080/estados',
 *          method: 'GET',
 *          dataType: 'jsonp',
 *          success: onEstadosRetornados.bind,
 *          error: onError
 *      });
 * }
 * 
 * , entao, eu vou fazer o seguinte, oh, eu quero troca o bind() para esse this aqui, 
 * 
 *  success: onEstadosRetornados.bind(>>>this<<<),
 * 
 * , e esse this aqui, nesse momento, vamos dar um log aqui, oh, 
 * 
 * Estado.prototype.iniciar = function () {
 *      console.log('this no prototype', this);
 *      ...
 * }
 * 
 * , quem que voce acha que eh? esse this do prototype, voce vai ver que esse objeto Estado,
 * 
 * function >>>Estado<<<() {
 *      this.comboEstado = $('#combo-estado');
 * }
 * 
 * , vamos dar um Refresh aqui na Pagina Html? Olha la, 
 * 
 * this no prototype Estado {comboEstado: n.fn.init(1)}
 * 
 * , eh o objeto Estado, agora, sim, agora, eh o objeto Estado, certo? Agora, eu consigo trocar esse cara aqui, 
 * 
 * success: onEstadosRetornados.bind(>>>this<<<),
 * 
 * , entao, olha, eu troquei pelo this.
 * 
 * 58. Esse this,
 * 
 * function onEstadosRetornados (estados) {
 *      console.log('this', >>>this<<<)
 *      ...
 * }
 * 
 * , agora, vai ser o combo Estado. Se eu mandar executar aqui novamente, retornou,
 * 
 * this no prototype Estado {comboEstado: n.fn.init(1)}
   this Estado {comboEstado: n.fn.init(1)}
 * Uncaught ReferenceError: comboEstado is not defined
 * 
 * , o this ja eh o Estado, que eh esse aqui,
 * 
 * function onEstadosRetornados (estados) {
 *      console.log('this', >>>this<<<)
 *      ...
 * }
 * 
 * , beleza?, so que repara so, ele deu esse 'comboEstado is not defined', em outra linha, em,
 * 
 * comboEstado.append(optionEstado);
 * 
 * , porque aqui, oh, eu tambem usei o comboEstado, e nao usei o this,
 * 
 * this.comboEstado.append(optionEstado);
 * 
 * , entao, se eu executa agora, retornou,
 * 
 * Uncaught TypeError: Cannot read property 'append' of undefined
 * 
 * , porque aqui, oh,
 * 
estados.forEach(function (estado) {
    var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
    >>>this.comboEstado.append(optionEstado);<<<
});
 * 
 * , essa funcao, 
 * 
 function (estado) {
    var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
    this.comboEstado.append(optionEstado);
});
 * 
 * , eu estou executando essa funcao, o this aqui tambem, agora,
 * 
 function (estado) {
    var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
    >>>this<<<.comboEstado.append(optionEstado);
});
 * 
 * , faz parte dessa funcao. Cada funcao que esta sendo executada tem um contexto dela. Eu estou querendo dizer, oh, essa funcao esta sendo executada, o this esta sendo essa funcao, 
 * 
 function (estado) {
    var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
    this.comboEstado.append(optionEstado);
});
 * 
 * , vamos dar uma olhada?
 * 
 estados.forEach(function (estado) {
    console.log('this no forEach', this);
    var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
    this.comboEstado.append(optionEstado);
});
 * 
 * , vamos dar o Refresh na Pagina Html aqui, retornou,
 * 
this no prototype Estado {comboEstado: n.fn.init(1)}

this Estado {comboEstado: n.fn.init(1)}

this no forEach Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
 * 
 * , olha la, o this no forEach eh o objeto Window, ta vendo?, ele trocou la, ele ja volta para outro objeto que nao eh o que a gente quer.
 * 
 * 59. Entao, eu quero que essa funcao aqui seja executada no this,
 * 
 estados.forEach(function (estado) {
    var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
    this.comboEstado.append(optionEstado);
}.bind(this));
 * 
 * , o this, aqui, 
 * 
  estados.forEach(function (estado) {
    var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
    this.comboEstado.append(optionEstado);
}.bind(>>>this<<<));

 * a gente ja viu que eh o Estado. Voce vai ver que, como nos trocamos o bind, agora, dessa funcao, para this, eu posso acessar, agora, essa variavel aqui em cima,
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 * }
 * 
 * , okay? Se eu der um Refresh na Pagina Html, retornou,
 *  
 * this no prototype Estado {comboEstado: n.fn.init(1)}
 * this Estado {comboEstado: n.fn.init(1)}
 * this no forEach Estado {comboEstado: n.fn.init(1)}
 * this no forEach Estado {comboEstado: n.fn.init(1)}
 * this no forEach Estado {comboEstado: n.fn.init(1)}
 * 
 * , this no forEach eh o Estado, agora, sim, oh, eh o Estado, e, ai, passou a funcionar. Beleza?
 * 
 * 60. Entao, qual que eh a ideia, ... aqui, no onError,
 * 
    $.ajax({
        url: 'http://localhost:8080/estados',
        method: 'GET',
        dataType: 'jsonp',
        success: onEstadosRetornados.bind(this),
        error: onError
    });
 * 
 * , vamos parar o servidor aqui, para a gente ver um erro acontecendo? Ele so deu aqui, oh, 'Erro carregando estados do servidor!', nao deu problema, porque eu nao nada aqui no onError(),
 * 
 * function onError () {
 *      alert('Erro carregando estados do servidor!');
 * }
 * 
 * , que estivesse aqui no this.
 * 
 * 61. Mas, se eu quisesse, eu tambem poderia usar aqui, bind(this),
 * 
    $.ajax({
        url: 'http://localhost:8080/estados',
        method: 'GET',
        dataType: 'jsonp',
        success: onEstadosRetornados.bind(this),
        error: onError
    });
 * 
 * , caso fosse necessario. Okay? Vamos voltar o servidor, java -jar localidades-1.0.0.jar.
 * 
 * 62. Okay? Entao, oh, isso aqui eh simples?
 * 
 * 63. Nao. 
 * 
 * 64. O instrutor confessa, ele sabe que nao eh simples, porque voce tem que ficar trocando os contextos de quem esta executando, eh meio estranho isso mesmo, porque, oh, se eu quero que seja executado no contexto desse objeto,
 * 
 * function Estado () {
 *      this.comboEstado = $('#combo-estado');
 * }
 * 
 * , eu tenho que ir trocando. Aqui, o Ajax,
 * 
    $.ajax({
        url: 'http://localhost:8080/estados',
        method: 'GET',
        dataType: 'jsonp',
        success: onEstadosRetornados.bind(this),
        error: onError
    });
 * 
 * , ele troca, na hora que ele executar esse onEstadosRetornados, ele vai trocar o contexto dessa funcao para o objeto dele. Entao, eu falo, 'Nao, eu nao quero que voce faca isso, eu quero que voce de um bind em this, e esse this aqui dentro do Estado, oh,
 * 
 * >>>Estado<<<.prototype.iniciar = function () {
     $.ajax({
        url: 'http://localhost:8080/estados',
        method: 'GET',
        dataType: 'jsonp',
        success: onEstadosRetornados.bind(this),
        error: onError
    });
 * };
 * 
 * , Estado.prototype, nao eh?, entao, eh o objeto Estado,
 * 
 * var >>>Estado<<< = (function() {
 * 
 * })();
 * 
 * 65. A mesma coisa aqui, no forEach, ele trocou tambem, ele tambem trocou o contexto, a gente viu la, para o Window. E, ai, eu falo assim, 'Nao, eu quero que voce faca o bind para this, execute essa funcao oh, essa function,
 * 
function (estado) {
    var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
    this.comboEstado.append(optionEstado);
};
 * 
 * nesse contexto,
 * 
 function (estado) {
    var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
    this.comboEstado.append(optionEstado);
}>>>.bind(this)<<<; 
 * 
 * , para eu poder dar um this aqui em comboEstado.
 * 
 * 66. Normandes, como eh que voce consegue descobrir isso? O instrutor usa muito o console.log(), e, tambem, assim, com o tempo, voce vai acostumando. E ficou na duvida? Coloque o log(), faca igual ao que o instrutor fez aqui, nao eh?, 
 * 
 * console.log('this', this);
 * 
 * , e verifique esse this, nao eh? Ah, tah, eh porque ele trocou aqui, e, ai, a medida que voce for ganhando experiencia, voce vai aprendendo isso tambem.
 * 
 * 67. Na proxima aula, a gente implementa a Cidade recebendo eventos, eu vou colocar, lancar eventos aqui no Estado, eventos customizados, para a gente alterar a cidade.
 * 
 * 68. Fim da Aula 09.007. Usando a Funcao bind().
 * 
 * 
 * 
 * 
 * 
 * 
 */



/**Version 1 *
var estado = (function () {

    var comboEstado = $('#combo-estado');

    function iniciar() {
        /** console.log('Iniciando o estado...');**
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

**/

/**Version 2 */
var Estado = (function () {
    function Estado () {
        /** var comboEstado = $('#combo-estado'); **/
        this.comboEstado = $('#combo-estado');
    }

    Estado.prototype.iniciar = function () {
        /** console.log('Iniciando o estado...'); **/
        console.log('this no prototype', this);
        $.ajax({
            url: 'http://localhost:8080/estados',
            method: 'GET',
            dataType: 'jsonp',
            success: onEstadosRetornados.bind(this),
            error: onError
        });        
    };

    function onEstadosRetornados (estados) {        
        /** var comboEstado = $('#combo-estado'); **/
        console.log('this', this);
        this.comboEstado.html('<option>Selecione o estado</option>');
        estados.forEach(function (estado) {

            console.log('this no forEach', this);

            var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
            this.comboEstado.append(optionEstado);

        }.bind(this));
    }

    function onError () {
        alert('Erro carregando estados do servidor!');
    }     

    /** *
    var comboEstado = $('#combo-estado');

    function iniciar() {
        $.ajax({
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

    /** *
    return {
        iniciar: iniciar
    }
    **/
    return Estado;

})();

/** estado.iniciar(); **/

$(function () {
    var estado = new Estado();
    estado.iniciar();    

    // var cidade = new Cidade(estado);
    // cidade.iniciar();
});
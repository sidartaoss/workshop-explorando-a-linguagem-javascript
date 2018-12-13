/**
 * 
 * Aula 09.010. Namespaces
 * 
 * 1. Voce vai ver que namespaces eh algo muito simples, mas que ajuda bastante a organizar o codigo.
 * 
 * 2. Por que? Vamos pegar esse mesmo exemplo aqui, do combo Estado / Cidade, okay? ta aqui, funcionando, quando eu seleciono o Estado, depois, ele vai ali buscar a Cidade, volto, beleza, desabilita.
 * 
 * 3. So que, vamos dar uma olhada aqui no codigo Javascript. Eh o mesmo da aula passada, nao foi mudado nadinha. Entao, olha so, vamos dar uma olhada nessa variavel Estado, 
 * 
 * var Estado = (function () {
 * 
 *      ...
 * 
 * })();
 * 
 * , aqui. Qual Contexto, nao eh?, onde que essa variavel esta?, quando eu executo? Essa variavel, ela foi para o Window, ela esta no Contexto global, beleza?
 * 
 * 3. Entao, isso, lembra que o instrutor falou?, 'Colocar coisas no escopo global nao eh muito legal'.
 * 
 * 4. Porque vamos supor que eu tenha varios arquivos Javascript. Aqui,
 * 
 * <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
 * <script src="namespaces.js></script>
 * 
 * , eu so tenho o do jQuery e tenho mais o meu. Mas, eu posso ter, aqui, varios arquivos Javascript, se eu quiser,
 * 
 * <script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>
 * <script src="namespaces.js></script>
 * <script src="namespaces2.js></script>
 * <script src="namespaces3.js></script>
 * <script src="namespaces4.js></script>
 * 
 * , nao eh? Posso vir aqui e ir colocando varios e varios, cada um fazendo, tratando alguma coisa, nao eh?
 * 
 * 5. E, ai, beleza, se, em um desses outros arquivos, se eu tambem tiver uma variavel Estado, talvez, Estado seja um nome de variavel mais dificil de repetir, mas, vamos imaginar que tenha, sei la, vamos supor que seja Pessoa,
 * 
 * var Pessoa = ()
 * 
 * , nao eh?, voce esteja criando alguma coisa assim. Entao, assim, pode ser que isso aconteca, nao eh?
 * 
 * 6. E isso eh comum, pode ser, as vezes, voce buscou, voce criou uma variavel, por algum motivo, sei la, variavel x;, eu sei la, alguma coisa assim, no Contexto Global, e algum framework que voce esta usando tambem chamou a variavel de x e isso pode dar problema.
 * 
 * 7. No Javascript, nao existe uma form de a gente criar, uma forma nativa de a gente criar modulos isolados.
 * 
 * 8. Tem como eu falar assim, oh, esse arquivo Javascript, aqui, namespaces.js, nao interage com outro arquivo Javascript. Tanto que integage que olha so, 
 * 
    function Estado () {
        this.comboEstado = >>>$<<<('#combo-estado');
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);        
    }
 * 
 * , o jQuery, nao eh?, eu so coloquei o jQuery aqui, antes,
 * 
 * >>><script src="https://code.jquery.com/jquery-2.2.3.min.js"></script><<<
   <script src="namespaces.js></script>
 * 
 * , ele carregou antes, significa que ja esta disponivel, aqui, para mim, 
 * 
     function Estado () {
        this.comboEstado = >>>$<<<('#combo-estado');
        this.emitter = $({});
        this.on = this.emitter.on.bind(this.emitter);        
    }
 * 
 * , poder usar o jQuery. Nao eh?, entao, tudo vai sendo reaproveitado. Entao, o que que a gente pode fazer?
 * 
 * 9. A gente pode usar um truque, aqui, muito simples, usando objetos, aqui, para nos criarmos um namespace, uma especie de modulo, assim, que eu vou colocar as coisas dentro de um local dominado por mim, ao inves de eu colocar no Escopo Global.
 * 
 * 10. Beleza? Como que vai funcionar isso? Entao, olha so, ao inves de eu ter, aqui, essa variavel Estado direto, solta, assim, eu vou colocar ela dentro de um objeto, que, esse objeto, sim, mas esse seria so 1 objeto no Namespace Global. E esse objeto, normalmente, o instrutor costuma colocar o nome do projeto, eu vou colocar AlgaWorks.
 * 
 * 11. Entao, eu vou criar aqui, oh, um objeto vazio chamado AlgaWorks,
 * 
 * var AlgaWorks = {};
 * 
 * , ai, voce concorda que eh mais dificil ter um objeto AlgaWorks sendo usado, nao eh?, por outra biblioteca, nao eh?, as vezes, o instrutor colocaria no nome do Projeto, o instrutor colocaria o nome do Projeto, as vezes. 
 * 
 * 12. Beleza? Entao, defini esse objeto aqui, AlgaWorks. Ai, ao inves dessa variavel, aqui, 
 * 
 * >>>var Estado<<< = (function () {
 * 
 *      ...
 * 
 * })();
 * 
 * 
 * estar solta no Escopo Global, eu vou jogar ela como uma propriedade aqui desse objeto AlgaWorks. Entao, eu vou chamar, aqui, oh, AlgaWorks.Estado, 
 * 
 * var AlgaWorks = {};
 * 
 * AlgaWorks.Estado = (function () {
 * 
 *      ...
 * 
 * })();
 * 
 * , ta vendo, oh? Normalzinho, nada de especial. Eh a mesma coisa de eu ter feito isso daqui, oh, que a gente ja fez varias vezes, nao eh?,
 * 
 * var fox = {};
 * fox.nome = 'Fox';
 * 
 * , eh, extamente, a mesma coisa, aqui, oh,
 * 
 * >>>AlgaWorks.Estado<<< = (function () {
 * 
 *      ...
 * 
 * })();
 *
 * 
 * , nao eh? So que, aqui, eu estou atribuindo uma funcao, mas, assim, a ideia eh a mesma, eu crio um objeto vazio 
 * 
 * var fox = {};
 * 
 * e, depois, eu atribuo,
 * 
 * fox.nome = 'Fox';
 * 
 * 13. So que, aqui, 
 * 
 * var AlgaWorks = {};
 * 
 * AlgaWorks.Estado = (function () {
 * 
 *      ...
 * 
 * })();
 * 
 * , por questoes de Convencao de Nome, a gente usa letra maiuscula, nao eh?, entao, criei esse objeto,
 * 
 * var AlgaWorks = {};
 * 
 * , coloquei a propriedade Estado, aqui, dentro desse objeto AlgaWorks.
 * 
 * 14. Vamos fazer a mesma coisa aqui para Cidade, oh?
 * 
 * AlgaWorks.Cidade = (function () {
 * 
 *      ...
 * 
 * })();
 * 
 * , olha la, esta dentro de AlgaWorks.
 * 
 * 15. E, ai, na hora de executar aqui,
 * 
    $(function () {
        var estado = new Estado();
        estado.iniciar();    

        var cidade = new Cidade(estado);
        cidade.iniciar();
    });
 * 
 * , ao inves de eu dar new Estado(), eu vou dar new AlgaWorks.Estado(), AlgaWorks.Cidade(),
 * 
    $(function () {
        var estado = new AlgaWorks.Estado();
        estado.iniciar();    

        var cidade = new AlgaWorks.Cidade(estado);
        cidade.iniciar();
    });
 * 
 * 16. So isso. Agora, eu ja tenho um namespace AlgaWorks. Tudo que eu vou precisando colocar, que eu for criando Javascript, eu jogo dentro desse namespace, essas variaveis, que ficar isolado.
 * 
 * 17. Vamos ver, aqui, se continua funcionando? Recarregar a Pagina Html, Selecionar o Estado, Selecionar 'Selecione o estado'.
 * 
 * 18. Continua funcionando, ou seja, agora. Continua funcionando, foi coisa bem simples, nao eh?, eu fiz aqui para resolver isso.
 * 
 * 19. Tem gente que usa assim oh, coloca AlgaWorks ou o objeto vazio,
 * 
 * var AlgaWorks = AlgaWorks || {};
 * 
 * , por que? Se eu estou usando em varios arquivos JavaScript, pode ser que eu ja tenha definido o objeto AlgaWorks em algum momento. Entao, oh, lembrando do operador OU, ||, essa tecnica aqui,
 * 
 * var AlgaWorks = AlgaWorks || {};
 * 
 * , esta significando o que? Se ja existir o objeto AlgaWorks, 
 * 
 * var AlgaWorks = >>>AlgaWorks<<< || {};
 * 
 * use ele aqui,
 * 
 * >>>AlgaWorks<<<.Estado = (function () {
 * 
 *      ...
 * 
 * })();
 * 
 * , senao, cria o novo,
 * 
 * var AlgaWorks = AlgaWorks || >>>{}<<<;
 * 
 * , beleza? Eh so isso daqui que isso aqui faz,
 * 
 * var AlgaWorks = AlgaWorks || {};
 * 
 * 20. Entao, olha o tanto que eh simples e util, nao eh? 
 * 
 * 21. Fim da Aula 09.010. Namespaces
 */

var AlgaWorks = {};

/** *var Estado = (function () { **/
AlgaWorks.Estado = (function () {
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


/** *var Cidade = (function () { **/
AlgaWorks.Cidade = (function () {
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
    var estado = new AlgaWorks.Estado();
    estado.iniciar();    

    var cidade = new AlgaWorks.Cidade(estado);
    cidade.iniciar();
});

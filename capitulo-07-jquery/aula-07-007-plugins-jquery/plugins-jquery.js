/**     Aula 07.007. Plugins jQuery
 * 
 *  19. Vamos passar isso aqui para jQuery? Vamos la. Oh, document.getElementById(), no jQuery, nao eh assim, nao eh, no jQuery, eu vou usar o jQuery, e colocar o jogo-da-velha, aqui,
 * 
 * $('valor');
 * 
 * 20. Que mais tem de diferenca? Eu posso colocar aqui, oh, executar, ele vai dar erro, 
 * 
 * Uncaught TypeError: valorElement.addEventListener is not a function
 * 
 * , addEventListener, nao eh assim, tambem, nao eh? No jQuery, para a gente adicionar um evento, eh on(), a gente ja deu uma olhada em algum desses dai, nos vamos ver mais sobre eventos ainda, mas eu so coloco .on(), 'keyup', e passo a funcao aqui,
 * 
 * valorElement.on('keyup', function(e) {
 * 
 * });
 * 
 * 21. Nao eh?, entao, vamos la, vamos recarregar a pagina. Parou de dar erro, na hora que eu digitar alguma coisa no campo Valor, no Debug aqui, no Chrome DevTools, oh, nao esta funcionando, vamos ver aqui se tem algum erro.
 * 
 * 22. No Console do Chrome DevTools, nao aparece erro. O value do valorElement, nao eh assim que a gente recupera valores do jQuery, nao eh value, eh val(),
 * 
 * var valor = parseFloat(valorElement.val() ? valorElement.val() : 0);
 * 
 * , okay? Se nos testarmos novamente na pagina html, agora, voltou a funcionar.
 * 
 * 23. Entao, eh isso daqui, ja esta com jQuery, pelo menos, ate aqui. A variavel totalElement pode ficar sem passar para jQuery, porque nao vai fazer diferenca agora, para a gente.
 * 
 * 24. Beleza, vamos la. O que eu vou fazer agora? Eu vou ver como que eu faco para usar esse plugin. E ai, a maioria dos plugins do jQuery, eles sempre tem uma pagina, assim, para nos mostrar como eh que funciona, example page, http://plentz.github.io/jquery-maskmoney/, vai ter uma pagina, e, ai, ele vai falar como eh que funciona, tem varias opcoes aqui para a gente configurar e usar ele.
 * 
 * 25. Vamos comecar, aqui, pelo simples. O que que o plugin faz, no jQuery? Como eh que ele funciona? Bom, eu vou pegar o elemento via jQuery, os seletores via jQuery, normais, via ID, via Classe, qualquer forma, ou seja, eu preciso de um objeto jQuery e o plugin do jQuery, ele adiciona uma funcao no jQuery. Essa maskMoney() aqui, nao existe no jQuery, ela foi adicionada pelo plugin, eh isso que o plugin faz.
 * 
 * 
 *$(function() {
    $('#currency').maskMoney();
  })
 * 
 * , okay? Entao, so de colocar esse arquivo aqui embaixo,
 * 
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>
 * 
 * , pronto, aqui,
 * 
 * <script src='plugins-jquery.js'></script>
 * 
 * , ja vai ter essa funcao maskMoney() disponivel para eu poder usar.
 * 
 * 26. So isso. Isso mesmo. Vamos ver aqui, oh? A variavel valorElement, a gente ja passou para jQuery, 
 * 
 * valorElement.maskMoney()
 * 
 * , que eh como ele fala ali na documentacao, eh so a gente colocar aqui maskMoney(), olha la, ele esta dando um exemplo,
 * 
 * $("#demo1").maskMoney();
 * 
 * 27. Na documentacao, ele fez direto no seletor do jQuery, o instrutor apenas passou para uma variavel, mas eh a mesma coisa. E, ai, ja vai estar configurando, usando ponto como separador decimal, virgula para separador de milhagem, no formato americano, okay?
 * 
 * 28. Entao, ja salvamos aqui. Vamos voltar aqui na pagina HMTL, dar um Refresh na pagina, oh, so de eu clicar aqui no campo Valor, ja aparece la formatado.
 * 
 * 29. Seu eu digitar 1.00, o Valor total continua o mesmo, 6.3, 10.00, o Valor total continua sendo 13, e, para 100.00, o Valor total continua sendo 100.
 * 
 * 30. E, ai, para esses valores quebrados, eu nao estou aplicando plugin nenhum aqui para ter tantas casas decimais em Valor total, eh a conta que esta fazendo aqui que esta ficando aqui, nao eh? E, ai, se nos digitarmos 1000.00, o que que eh isso aqui? Por que que deu 6.3?
 * 
 * 31. Porque ele adicionou essa virgula aqui, 1,000.00, nao eh?, para formatar. Entao, ele adicionou a virgula. E, ai, quando eu estou pegando, aqui, o val(),
 * 
 * var valor = parseFloat(valorElement.val() ? valorElement.val() : 0);
 * 
 * , o que que esse cara aqui esta fazendo? Ele recupera, exatamente, o valor que esta aqui na tela. E esse valor aqui, 1,000.00, eu nao consigo transformar ele para um numero, porque essa virgula aqui nao vai dar certo, esta formatado aqui com a virgula, teria que tirar essa virgula aqui para dar certo.
 * 
 * 32. E, ai, olha so, o proprio plugin aqui do maskMoney(), oh, Bonus, ele vem aqui, oh, .maskMoney('unmasked'), ele vai retornar, oh, o float value, ja retorna o valor float, por exemplo, se estiver assim,
 * 
 * R$ 1.234,56
 * 
 * , ele vai retornar assim: 1234.56. O que que eh esse dolar, aqui, cifrao?, entao, eh possivel voce adicionar isso tambem. Da para voce adicionar o prefixo, daqui um pouco, o instrutor faz para nos mostrar.
 * 
 * 33. Entao, olha so, ele vai pegar o que esta formatado e desformatar e transformar em float, em um valor float, que eh seprado por ponto, que eh o que deve ser, okay? E, ai, ele fala aqui, nao eh?, se a gente tem, ele vai fazer isso como? se voce tem um input field, a gente deve sempre usar la oh, .maskMoney('unmasked')[0] e por um array, porque ele sempre vai retornar um array.
 * 
 * 34. Beleza? Entao, vamos la. Para eu nao ficar colocando em valorElement.val(), eu vou criar aqui uma variavel valor, e vou fazer o seguinte, oh, 
 * 
 * var valor = valorElement.maskMoney('unmasked')[0]
 * 
 * , que eh o que esta escrito na documentacao. Na documentacao, ele ja fala que me devolve um valor float. Entao, eu preciso fazer o parseFloat()?
 * 
 * 35. Nao. Se a documentacao ja esta falando que ele ja faz isso, entao, eu nao preciso fazer mais esse parseFloat() aqui, esse valor ja esta como float.
 * 
 * 36. Vamos testar? Entao, o 1,000.00, agora, tem que funcionar.
 * 
 * 37. Ai, agora, continua funcionando. 1,500.00, por exemplo, e, acima de 50, vai ser sempre o valor. Entao, eu posso ir digitando, ele sempre vai adicionar ali, vai mostrar o valor que esta na tela para mim.
 * 
 * 38. Okay? Isso eh bem interessante, nao eh?
 * 
 * 39. O plugin do maskmoney, o instrutor acha bem legal, e ele usa bastante. Vamos ver mais coisas que a gente consegue fazer com ele?
 * 
 * 40. Eu consigo, por exemplo, trocar, aqui, qual eh o separador decimal e o separador de milhagem. Oh, ele fala que o default eh virgula, e o decimal eh defualt eh o ponto. Mas eu consigo trocar, essas aqui sao as opcoes, lembra que o instrutor disse que o objeto eh muito usado para configurar coisas, nao eh?, Entao, aqui, no caso do plugin do jQuery, o objeto eh bastante usado, entao, olha so, como eh que eu posso fazer isso.
 * 
 * 41. Eu posso vir aqui no maskMoney(), e fazer isso daqui oh, { decimal }, dois ponto e passo, aqui, falando que eu quero virgula, e o thousands, eu quero o ponto
 * 
 * valorElement.maskMoney( { decimal: ',', thousands: '.' } );
 * 
 * , no Brasil, nao eh assim? Certo? Entao, vamos ver aqui? Vamos recarregar a pagina HTML.
 * 
 * 42. Okay, vamos digitar, o campo Valor ja esta como virgula, vamos digitar, aqui, o 1, ficou 1,00, oh, o 10, ficou 10,00, o 100, ficou 100,00, e o campo Valor total aparece como 100, oh, continua funcionando normalmente, so que, agora, olha la, no formato de moeda brasileiro.
 * 
 * 43. E se eu digitar letra, eu estou digitando um monte de letra aqui, agora, nao vai aceitar, ele nao deixa isso acontecer.
 * 
 * 44. Okay?, entao, oh, da para a gente configurar ele assim, da para a gente colocar, quer ver? Voltar aqui, eh so ler a documentacao, e ficar brincando aqui, oh, prefix, eu quero colocar o prefixo de alguma coisa, oh, um elemento aqui, sempre, entao,  eu posso usar esse prefix, vem, aqui, no objeto, normalmente, o instrutor faz isso aqui, oh, da um <ENTER>, assim, oh, cada um fica em uma linha, para ficar mais facil,
 * 
 * valorElement.maskMoney( {
 *      decimal: ',',
 *      thousands: '.',
 *      prefix: 'R$'
 * } );
 * 
 * , o prefix, vamos colocar o Real, assim, oh, R$.
 * 
 * 45. Vamos la ver? Oh, continua funcionando, vamos no 1, que da, no campo Valor total, 6.3, 10, tem que dar 13, e 100, tem que dar 100 no campo Valor total.
 * 
 * 46. Olha la, tudo continua funcionando, por que? Porque, na hora de eu recuperar o o valor, eu estou dando um unmasked, ou seja, eu estou tirando a mascara  que eu adicionei. Olha ai, interessante, nao eh?
 * 
 * 47. O que mais? Vamos fazer o seguinte, oh, vamos configurar, vamos formatar esse campo Valor total tambem? E, aqui, no maskedmoney, nos Bonus aqui tambem, olha so, se eu usar .maskMoney('mask'), ele vai aplicar a mascara a uma entrada. E, ai, eh importante a gente ler direitinho, nao eh?, ele esta falando que eh no input. Entao, voce nao consegue fazer uma mascara em um texto puro HTML, com esse plugin aqui. Pode ser que outro plugin sim, mas, com esse aqui, nao. Entao, e, aqui, o que ele esta falando, 'Este metodo pode funcionar como um setter tambem, se a gente passar o valor para ele, como? Assim oh, se eu fizer, maskMoney('mask', ), e passar um valor, ele vai formatar, mas em uma: entrada, input.
 * 
 * 48. Entao, olha so a ideia que o instrutor esta tendo aqui, oh. Se a gente vier aqui, oh, no index.html, 
 * 
 			<div class="col-xs-3">
				<div class="form-group">
					<label for="">Valor total</label>
					<p class="form-control-static" id="total">0</p>
				</div>
			</div>
 * 
 * eu vou criar um input, aqui, type hidden, ou seja, um carinha escondido, vamos dar um ID para ele aqui, vamos chamar ele de total-mascara,
 * 
 			<div class="col-xs-3">
				<div class="form-group">
                    <label for="">Valor total</label>
                    <input type="hidden" id="total-mascara" />
					<p class="form-control-static" id="total">0</p>
				</div>
			</div>
 * 
 * 49. Okay? Porque, ai, o que que eu vou fazer, qual que eh a ideia? Eu formato o valor total aqui nessa mascara, ta okay?, o total-mascara, e, ai, eu formato ele aqui e, depois, eu pego o valor e aplico para o texto do paragrafo, okay? Essa eh a ideia do instrutor, para a gente usar esse plugin.
 * 
 * 50. Beleza?, entao, vamos aqui. Eu preciso pegar, primeiro, aquele cara, nao eh?, entao, vamos pegar ele aqui,
 * 
 * var totalMascara = 
 * 
 * , vamos pegar ele com jQuery,
 * 
 * var totalMascara = $('total-mascara');
 * 
 * , e, ai, vamos la, vamos usar a variavel totalMascara dentro da funcao on(),
 * 
 * totalMascara.maskMoney()
 * 
 * , bom, eh um novo componente, entao, eu preciso adicionar, tambem, as configuracoes para ele, o que eu posso fazer, aqui, oh? eu vou melhorar, esse aqui eh um objeto, nao eh?
 * 
    {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ '
    }
 *
 * , entao, eu posso colocar aqui, oh, 
 * 
 * var mascaraConfig = {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ '
    }
 * 
 * , a configuracao da mascara vai ser essa. E, ai, eu uso esse mascaraConfig para passar aqui,
 * 
 * totalMascara.maskMoney(mascaraConfig);
 * 
 * , e, para passar aqui,
 * 
 * valorElement.maskMoney(mascaraConfig);
 * 
 * , para ser a mesma configuracao, okay?
 * 
 * 51. totalMascara.maskMoney('mask', ), e eu passo o valor, 
 * 
        totalMascara.maskMoney(mascaraConfig);

        totalMascara.maskMoney('mask', total);

        totalElement.innerHTML = total;
 * 
 * , okay? Nao eh assim que ele falou, na documentacao, oh, passa 'mask', e, depois, o valor, o valor total, eh o que eu quero configurar a mascara.
 * 
 * 52. Vamos ver se, o que eu fiz aqui estragou alguma coisa. Oh, se eu digitar 1, tem que dar 6.3, nao eh?, no campo Valor total, se digitar 10, deve aparecer 13 no campo Valor total e, para 100, continua o valor no campo Valor total.
 * 
 * 53. Beleza. E, nao deu nenhum erro, tambem, no Console. Entao, o que eu fiz aqui ainda nao estragou nada.
 * 
 * 54. Bom, esse input, sera que a gente consegue ver ele aqui no codigo html da pagina? Olha so, o input aqui, na Guia Elements do Chrome DevTools, hidden, esta ficando formatado la, esta ficando com a mascara.
 * 
 * 55. Entao, eh so pegar esse valor e colocar aqui no campo total, okay?, ao inves de eu setar o valor total direto, ou seja, eu tenho que pegar o valor de totalMascara e passar para o innerHTML de totalElement, que eh com o jQuery.val()
 * 
 * totalElement.innerHTML = totalMascara.val();
 * 
 * 56. Vamos ver? Olha la, funcionou, apareceu o valor formatado em Valor total, continua funcionando, a mascara esta sendo aplicada.
 * 
 * 57. Que mais aqui? O instrutor ira nos falar sobre outro plugin aqui, oh, bem interessante, Mask Plugin, https://igorescobar.github.io/jQuery-Mask-Plugin/, tambem, tem mais um monte, aqui, de formas de plugin, oh, de data, de telefone, telefone fixo, para hora, telefone com codigo de area, oh, para CPF, CNPJ, eh, interessante tambem, para um IP, e, ai, da para limitar tambem. E, a ideia dele, eh, basicamente, a mesma la do maskmoney. Ele vai adicionar uma funcao mask(), no jQuery, ai, voce pode usar, vai passando, aqui, os parametros, ai, eh so lendo a documentacao, aqui, para saber. Esse aqui voce pode passar opcoes aqui, oh, de mascara, on-the-fly, ou seja, troca a mascara a medida que ele vai digitando, ele faz isso daqui oh, para telefones de Sao Paulo, dando o nono digito, agora, ja tem, entao, vamos supor que nao tinha o nono digito, entao, vamos colocar 11 9123 0000, isso eh no telefone, se eu digitar mais um digito, olha la, ele trocou a mascara, 11 91230 0009, dependendo da quantidade de elementos que estava aqui, nao eh?, entao, esse tambem eh um plugin interessante, e varios outros, tem varios outros, se voce digitar jQuery plugin, no Google, voce vai ver varios.
 * 
 * 58. E como que eu crio o meu, Normandes? Eh possivel?
 * 
 * 59. Eh, as pessoas, aqui, fizeram, basicamente, esse caminho aqui, nao eh?, eles foram em https://learn.jquery.com/plugins/basic-plugin-creation/, olha la, vamos ver como eh que eu faco para criar um plugin?
 * 
 * 60. Entao, aqui, ele vai explicando, nao eh tao simplezinho nao, okay?, voce tem que entender algumas coisinhas, mas ele da o passo-a-passo, aqui, da para voce ir seguindo, se voce quiser criar, precisar criar o seu plugin.
 * 
 * 61. Oh, depois tem alguns conceitos avancados, em https://learn.jquery.com/plugins/advanced-plugin-concepts/, de plugin, okay? Nao eh tao simples, mas eh possivel, e, como o instrutor ja disse, voce quer fazer alguma coisa? Eh bem possivel que ja exista algum plugin que faca isso para voce, entao, da uma pesquisada, da uma olhada, eh so usar termos em ingles, infelizamente, nao tem como pesquisar plugin jQuery em portugues, deve ter poucos, no maskmoney, por exemplo, tem alguns nomes de brasileiros no projeto, mas ele publicaram tudo em ingles, nao eh?, entao, tem que pesquisar em ingles, e eh isso que o instrutor queria nos mostrar, nesta aula, a respeito dos plugins.
 * 
 * 62. Eh importante, mais uma vez, o que? Ler a documentacao. Normandes, voce decorou isso tudo? Nao, nao decorei isso de jeito nenhum, eu nao sei um monte de coisa, eu quero definir, aqui, nao eh, alguma coisa, eu tenho que vir aqui na documentacao, vamos supor, allowZero, nesse plugin do maskmoney, entao, olha la, ele vai usar essa configuracao para evitar que os usuarios deixem zero, o default eh false. Entao, ele nao deixa eu digitar zero, agora, se eu colocar allowZero true, ele vai deixar eu digitar zero. 
 * 
 * 63. Como assim, Normandes? Se eu tirar o mouse, oh, do campo Valor, e voltar, ele nao fica o zero ali. Ai, se eu colocar aqui, oh, 
 * 
    var mascaraConfig = {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        allowZero: true
    };
 *
 * , ai, o zero ja vai poder ser digitado, o zero ja fica la, o zero continua la. Beleza? Entao, assim, tem que ler a documentacao, mesmo, para entender, para aprender, tem que ler, devagarzinho, ler de novo, ler de novo, okay?, e vai fazendo os testes.
 * 
 * 64. O instrutor faz isso direto, ele cria um arquivinho assim, pequeno, igual a este aqui, para aprender. Se eh uma coisa um pouco mais complicada, eu nao estou entendendo, crie um projetinho pequeno nao vai ser um projeto grande de primeira, ja tentando fazer, nao, pode ser que voce nao consiga, entao, va com projetos mais simples, menores, e, ai, a partir dele, voce aprende e aplica no seu projeto maior, beleza?
 * 
 * 65. Fim da Aula 07.007. Plugins jQuery.
 * 
 */
$(function () {
    /** /var valorElement = document.getElementById('valor'); **/
    var valorElement = $('#valor');
    var totalElement = document.getElementById('total');
    var totalMascara = $('#total-mascara');
    var mascaraConfig = {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        allowZero: true
    };
    
    /** *valorElement.addEventListener('keyup', function(e) { **/
    valorElement.on('keyup', function(e) {
        var total = 0;
        /** *var valor = parseFloat(valorElement.value ? valorElement.value : 0); **/
        /** /var valor = parseFloat(valorElement.val() ? valorElement.val() : 0); **/
        var valor = valorElement.maskMoney('unmasked')[0];
    
        if (valor > 0 && valor < 10) {
            total = valor + valor * 0.3 + 5;
        } else if (valor >= 10 && valor < 50) {
            total = valor + valor * 0.1 + 2;
        } else {
            total = valor;
        }
    
        totalMascara.maskMoney(mascaraConfig);
        totalMascara.maskMoney('mask', total);
        /** *totalElement.innerHTML = total; **/
        totalElement.innerHTML = totalMascara.val();
    });

    /** *valorElement.maskMoney(); */
    /**  *valorElement.maskMoney( { decimal: ',', thousands: '.' } ); **/
    valorElement.maskMoney(mascaraConfig);


});

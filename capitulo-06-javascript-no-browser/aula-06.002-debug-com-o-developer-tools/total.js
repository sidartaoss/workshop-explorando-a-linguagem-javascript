/**
 * 
 *     Aula 06.002. Debug com o Developer Tools
 * 
 * 26. Para a gente comecar, vamos so mostrar aqui, 
 * 
 * console.log('Iniciando...');
 * 
 * 27. Vamos dar um refresh na pagina index.html. 
 * 
 * 28. Onde esta aparecendo esse console.log()?
 * 
 * 29. Se nos formos, no Browser, em More Tools - Developer Tools, ou usando o atalho, esta mostrando na Guia Console do Chrome DevTools.
 * 
 * 30. Vamos recarregar a pagina, aparece 'Iniciando...'. Ele mostra ate a linha do Javascript. A Guia Sources a gente tambem usa bastante aqui para ver o que que esta acontecendo. O comando console.log() foi que gerou essa saida aqui. 
 * 
 * 31. Quando acontecer erros tambem, as vezes aparece aqui, na Guia Console, para nos clicarmos e irmos na Guia Source e entendermos qual eh que eh o codigo, o que que esta acontecendo ali.
 * 
 * 32. Vamos la entao, o que que nos queremos fazer aqui nesse arquivo Javascript?
 * 
 * 33. O instrutor ira nos mostrar algumas coisas aqui do Javascript para manipular o DOM, ou seja, interagir com o HTML, mas, depois, o instrutor quer nos mostrar isso no jQuery, que o instrutor acha que eh mais facil, mais rapido, que tem mais funcoes, no jQuery, que nos ajudam, entao, o instrutor ira nos mostrar duas funcoes aqui bem simples, do Javascript, mas, depois, no jQuery, a gente vai trabalhar mais com elas.
 * 
 * 34. Entao, vamos la. Nos queremos pegar o elemento que tem o valor, nos queremos pegar o input do campo Valor, obter o valor do campo input.
 * 
 * 35. Entao, vamos la, vamos criar uma variavel para representar ele. Vamos chamar, aqui, de valorElement,
 * 
 * var valorElement = 
 * 
 * , para representar aquele emento, como eh que nos pegamos ele?
 * 
 * 36. Nos vamos pegar, aqui, pelo ID, nos definimos o ID la, tem o ID valor, e tem o ID total. O valorElemento, entao, nos queremos o getElementById(), entao, document.getElementById(), vamos pegar, aqui, o 'valor', okay?
 * 
 * var valorElement = document.getElementById('valor');
 * 
 * 37. Vamos pegar, agora, da mesma forma, o totalElement, 
 * 
 * var totalElement = document.getElementById('total');
 * 
 * 38. Ja vamos inicializar as variaveis aqui no inicio.
 * 
 * 39. Vamos dar uma olhada aqui o que que tem nesses caras?
 * 
 * 40. Podemos ver isso aqui oh, podemos colocar assim oh, 'valorElement', valorElement
 * 
 * console.log('valorElement', valorElement);
 * 
 * 41. E ai, se nos dermos um recarregar aqui, olha la, ele pegou o input,
 * 
 * <input type="text" class="form-control" id="valor">
 * 
 * 42. Vamos comentar esse  console.log().
 * 
 * 43. Beleza, o que que nos iremos fazer agora?
 * 
 * 44. Nos queremos adicionar um evento, quando nos digitarmos uma coisa, nos ja queremos atualizar aqui o campo 'Valor total', ou seja, se nos colocarmos no evento onChange(), o que que vai acontecer? So depois que nos digitarmos uma coisa e sair e perder o foco, eh que o campo 'Valor total' vai atualizar.
 * 
 * 45. Se nos colocarmos no evento keyUp(), ele vai, toda vez que nos digitarmos alguma coisa, ja vai atualizar o campo 'Valor total'.
 * 
 * 46. Entao, vamos la implementar isso daqui. 
 * 
 * 47. Nos vamos adicionar um EventListener no valorElement, okay? Vamos la, addEventListener, vai ser no valorElement, qual eh o evento? 'keyup', okay?
 * 
 * valorElement.addEventListener('keyup', function(e) {
 * 
 * });
 * 
 * 48. Eh isso daqui, beleza. 
 * 
 * 49. Quando, entao, uma tecla for teclada, ele vai chamar essa funcao, aqui, do EventListener. Entao, vamos dar uma olhada aqui, oh, vamos so fazer um teste aqui, oh, 'valor', valorElement.value,
 * 
 * console.log('valor', valorElement.value);
 * 
 * 50. Okay, ao digitar valores no campo Valor, aparece, no Console do Chrome DevTools, os valores digitados.
 * 
 * 51. Okay? Entao, deu certo. Vamos pegar esse cara aqui,
 * 
 * valorElement.value
 * 
 * 52. Vamos la, vamos colocar o seguinte, vamos criar uma variavel aqui oh, vamos inicializar essa variavel com 0,
 * 
 * var total = 0;
 * 
 * , e vamos pegar, aqui, uma variavel, vamos chamar de valor, e vamos pegar esse value aqui,
 * 
 * var valor = valorElement.value;
 * 
 * 53. Okay? E ai, no totalElement, nos vamos usar, aqui, o innerHTML, e vamos passar o total.
 * 
 * 54. Nos vamos calcular, baseado no valor e, ai, nos passamos o total para la. Vamos so colocar, aqui, so para brincar, o total vai receber o valor. Entao, tudo o que nos formos digitando la, nos vamos atribuir para total, e total vai ser colocado no HTML do totalElement,
 * 
 * var total = 0;
 * var valor = valorElement.value;
 * 
 * total = valor;
 * 
 * totalElement.innerHTML = total;
 * 
 * 55. Okay? Ou seja, substitui o 0 do campo Valor total por aquele valor.
 * 
 * 56. Vamos recarregar, vamos digitar aqui e vemos que ja vai atualizando em no campo 'Valor total'.
 * 
 * 57. Entao, eh isso que o instrutor gostaria de comecar a fazer aqui.
 * 
 * 58. Entao, vamos la, vamos pegar esse valor aqui, valorElement.value e vamos implementar a regrinha. O que que o instrutor pensou? O instrutor pensou: 'Se o valor for menor do que 10, por exemplo, a gente vai somar o valor 30% mais uma taxa de 5%, por exemplo, so para ter alguma regrinha. Se fosse um, se estivermos comprando algo que custe menos do que 10, tem um tanto de imposto e um tanto de taxa extra. Quando mais nos compramos, mais barato fica, essa eh a ideia que o instrutor pensou.
 *
 * 59. Okay? Entao, vamos la, se o valor for menor do que 10, nos vamos pegar o total, vai receber o valor, eh o que esta em valor + o valor * 0.3, ou seja, nos queremos pegar 30% + 5, por exemplo. Okay?
 * 
 * 60. Vaos deixar assim,
 * 
 * if (valor < 10) {
 *      total = valor + valor * 0.3 + 5;
 * }
 * 
 * , e ver o que que vai acontecer.
 * 
 * 61. Se digitarmos 1 no campo, o valor esperado no campo 'Valor total' deveria ser 6.3, no entanto, apareceu o valor 10.35. O que que aconteceu?
 * 
 * 62. O Normandes, mas essa conta aqui eh muito simples. Por que que deu isso:
 * 
 * 63. Ai vamos la. Ai que o instrutor vai nos mostrar como eh que a gente pode fazer o debug e tentar entender como o debug pode nos ajudar aqui. Beleza?
 * 
 * 64. Vamos la, como eh que nos podemos fazer isso?
 * 
 * 65. Se nos viermos aqui na Guia Source, nos conseguimos navegar e encontrar os nossos arquivos. Olha la, total.js, eh aqui. Entao, olha so, o nosso arquivo Javascript esta aqui, para nos podermos fazer o Debug nele. Como? Nos vamos colocar, aqui, um breakpoint, nos vamos clicar aqui na linha 129 e, quando o Javascript estiver executando aqui, ele vai parar aqui e nos vamos conseguir inspecionar as variaveis, ver o que que tem em cada valor, ver o que que esta acontecendo, okay?
 * 
 * 66. Entao, vamos la, vamos executar agora.
 * 
 * 67. Vamos digitar 1 mais uma vez. Ele ja parou. Reparemos que ele para aqui e nos vamos conseguir ver e verificar o que que tem aqui, okay? Vamos la.
 * 
 * 68. Ele coloca aqui, na frente, os valores que eles tem para as variaveis, entao, para total, o valor para a variavel total eh zero.
 * 
 * 69. Ele tambem mostra, no lado direito, na Guia Scope, o valor das variaveis locais.
 * 
 * 70. E ai, olha so, qual eh o valor da variavel valor? O que que ela contem? Olha so, se a gente olhar, mostra o valor no arquivo total.js e na Guia Scope ao lado direito.
 * 
 * 71. Mas foi o 1 que voce digitou, Normandes, esta certo.
 * 
 * 72. Eh, mas so que olha so, quando nos pegamos esse value aqui do valorElement, ele nos retornou uma String, olha so, com o Debug, nos conseguimos ver que eh uma String.
 * 
 * 73. Okay? Entao, ele vai avaliar, 1 eh menor do que 10?
 * 
 * if (valor < 10) {}
 * 
 * , ai, ele consegue, lembra do Javascript, o Javascript faz essa conversao aqui na comparacao, o String se torna numerico, entao, ele vai verificar: 1 eh menor do que 10? Eh, ele vai mudar isso aqui e ver.
 * 
 * 74. E, se nos clicarmos nesse botaozinho aqui, do lado direito, de 'Step over next function call F10', ele passa para a proxima linha. Entao, ele entrou nesse if, aqui, deu true, para: if (valor < 10) {}, 1 eh menor do que 10, okay.
 * 
 * 75. Mas, olha so, agora, o que que ele vai fazer. valor contem o valor de uma string 1, "1". Essa string 1, vezes 0.3, neste caso aqui,
 * 
 * total = valor + valor * 0.3 + 5
 * 
 * , ele vai converter a string 1 para um numero e vai multiplicar por 0.3. Entao, vai dar 0.3 o resultado. Okay? E, aqui, tem mais um 5.
 * 
 * 76. Olha so o que que ele vai fazer, uma string 1, mais, ai, o valor 1 * 0.3, que eh igual a 0.3, mais 5,
 * 
 * "1" + 0.3 + 5
 * 
 * , okay? So que o primeiro 1 eh uma string. Okay? Se o primeiro 1 eh uma string, "1" concatenado com 0.3 vai dar isso daqui: "10.3". E, essa string, mais 5, vai dar isso aqui: "10.35". Vai ser exatamente o que vai dar la.
 * 
 * 77. Se clicarmos no botao 'Pause script execution F8', ele da um resume, e continua o programa ate o final, ate o proximo breakpoint, se tiver.
 * 
 * 78. Okay? Entao, olha la, a gente percebeu que esse camarada aqui, valorElement.value, esta nos retornando uma string. Se nos pegarmos uma string aqui e formos tentar concatenar com valores, nao vai ser o que nos estamos esperando.
 * 
 * 79. Okay? Entao, o que que nos podemos fazer?
 * 
 * 80. Nos podemos transformar esse cara aqui, valorElement.value, em um numero.
 * 
 * 81. Como o instrutor nos disse, nao iremos validar se o Usuario digitou letra ou nao, vamos so transformar isso em um numero.
 * 
 * 82. Nos podemos fazer aqui um parseFloat(),
 * 
 * var valor = parseFloat(valorElement.value);
 * 
 * 83. Esse parseFloat() eh uma funcao que existe ja no Javascript para nos podermos usar. Ele vai e pega uma string e transforma em um numero.
 * 
 * 84. Okay? Salvamos, vamos voltar aqui, vamos recarregar.
 * 
 * 85. Vamos digitar, aqui, 1 novamente, o Debug esta ativado, ele vai parar la novamente.
 * 
 * 86. Mas olha so agora oh, o valor 1, agora, esta como numerico. Se nos formos passo-a-passo agora, quanto que esta o valor agora?
 * 
 * 87. 6.3. Vamos mandar executar ate o final, 6.3. Agora, sim, deu certo. Okay? Entao, com o Debug, nos conseguimos fazer esse tipo de coisa, interessante, nao eh?
 * 
 * 88. Vamos, agora, colocar, aqui, else if (), vamos supor, se o valor for maior ou igual a 10, e valor for menor do que 50, por exemplo, nos vamos calcular o total da seguinte forma, valor + valor * 0.1 + 2,
 * 
 *      if (valor < 10) {
            total = valor + valor * 0.3 + 5;
                //  1   +   0.3     +   5   = 6.3                   
        } else if (valor >= 10 && valor < 50) {
            total = valor + valor * 0.1 + 2;
        }
 * 
 * , um pouquinho menor a taxa, o juros, por exemplo, ou o imposto e uma taxa extra. Ele esta comprando mais, entao, nos queremos dar um desconto maior.
 * 
 * 89. Vamos ver se funciona? Se nos digitarmos 10, tem que ser 10 + 10 * 0.1, que eh igual a 1, mais 2, entao, 11 + 2, que eh igual a 13. Entao, se nos digitarmos 10, tem que dar 13 no campo 'Valor total'.
 * 
 * 90. 13, okay, apareceu 13 no 'Valor total', ao testarmos na pagina. Entao, esta certinho. Beleza?
 * 
 * 91. E, se, vamos colocar aqui, e se for maior do que isso, vamos colocar total recebe valor, ou seja, de 50 para cima, queremos que fique o valor que digitarmos,
 * 
 *      if (valor < 10) {
            total = valor + valor * 0.3 + 5;
                //  1   +   0.3     +   5   = 6.3                   
        } else if (valor >= 10 && valor < 50) {
            total = valor + valor * 0.1 + 2;
        } else {
            total = valor;
        }

 *  , entao, se nos digitarmos 100, no refresh, se nos digitarmos 100, nos queremos que continue 100. Vamos recarregar a pagina.

 * 
 *
 * 92. Beleza, esta funcionando. Vamos testar mais aqui. Se nos apagarmos tudo, aparece NaN, Not a Number, ou seja, se digitarmos e apagarmos, aparece NaN.
 * 
 * 93. Vamos ver por que?
 * 
 * 94. Vamos fazer o debug, nao eh?, ja esta ativado. Recarregamos a pagina e digitamos 1. Vamos mandar executar ate o final porque a gente ja viu que esta certo. 
 * 
 * 95. Agora, vamos apagar. e vamos ver o que que vai acontecer. 
 * 
 * 96. Olha so, apagamos e olha aqui o que que veio. valor = NaN, Not a Number. Esse valor aqui, a variavel valor, ja esta NaN, okay? Entao, se esse valor ja esta NaN, por que que ele ja esta NaN? Vamos tentar descobrir aqui? Olha so, clicando em cima aqui, em valorElement.value, o value eh uma string vazia. Se eh uma string vazia, esta tentando transformar uma string vazia em um numero atraves da funcao parseFloat(). Normandes, entao, nao tem jeito, nao eh? Ai, da Not a Number.
 * 
 * 97. Entao, uma solucao seria a gente usar ja os conhecimentos que a gente tem do que eh false no Javascript e usar o operador ternario aqui. Como assim que eh false? Lembremos, aqui no Console do node, que uma string vazia, ela eh false, 
 * 
 * > !!''
 * 
 * 98. Okay? Entao, uma string vazia eh false. Entao, nos podemos verificar o seguinte, se o que tiver aqui, em valorElement.value, for true, nos vamos deixar valorElement.value, senao, se for false, nos iremos deixar 0. Okay? Vai ficar como 0.
 * 
 * var valor = parseFloat(valorElement.value ? valorElement.value : 0)
 * 
 * 99. Beleza? Entao, vamos la, vamos testar mais uma vez? Voltando aqui na pagina no Browser, vamos recarregar a pagina, vamos digitar 1, vamos desligar o debug aqui, porque nos sabemos que vai funcionar, retorna 6.3. 
 * 
 * 100. Apagamos. Opa! Apareceu 5. Por que que deu 5 agora? Vamos ligar o debug de novo para descobrir. Digitamos 1, vamos executar, retornou 6.3. Apagamos, vamos la, olha so, o valor, aqui, esta 0. Beleza, como nos imaginamos, a string vazia transformou o valor em 0.
 * 
 * 101. Mas, vejamos so, 
 * 
 * if (valor < 10) {
 * ...
 * }
 * 
 * , valor eh menor do que 10?, 0 eh menor do que 10? Eh. Entao, ele vai entrar aqui no primeiro if. Entao, 0 + 0 + 5, vai dar 5.
 * 
 * 102. Entao, ja descobrimos aqui o probleminha. Faltou nos colocarmos uma outra condicao no if,
 * 
 * if (valor > 0 && valor < 10) {
 * ...
 * }
 * 
 * 103. Okay, vamos recarregar a pagina e testar novamente. 
 * 
 * 104. Beleza. Era essa a ideia aqui desse programinha, nos criarmos algumas regrinhas, ficticias, mas, para nos treinarmos a utilizacao do debug aqui no Javascript, eh bem interessante, eh bem util, quando nos estamos fazendo algumas logicas complexas, nos usamos isso bastante. 
 * 
 * 104. Assim como mostrar coisas no console. Devemos usar la o console.log(), que nos vamos ver algumas coisinhas na Guia Console do Chrome DevTools. Mas, deixar codigo, console.log('Iniciando...'), por exemplo, em Producao, nao eh legal nao. So para fazer, as vezes, algum testezinho, algum debugzinho ali mais direto, so para sabermos alguma coisa, mas deixar isso em Producao nao eh legal nao. 
 * 
 * 105. Fim da Aula 06.002. Debug com o Developer Tools.
 * 
 */
console.log('Iniciando...');

var valorElement = document.getElementById('valor');
var totalElement = document.getElementById('total');

/** console.log('valorElement', valorElement); **/

valorElement.addEventListener('keyup', function(e) {
    /** console.log('valor', valorElement.value); **/
    var total = 0;
    /**  *var valor = valorElement.value; **/
    var valor = parseFloat(valorElement.value ? valorElement.value : 0);

    /**  *total = valor; **/
    if (valor > 0 && valor < 10) {
        total = valor + valor * 0.3 + 5;
                //  1   +   0.3     +   5   = 6.3                   
                // "1"  +   1 * 0.3     +   5 = "1"     + 0.3   + 5 = "10.3"    +   5      = "10.35"
    } else if (valor >= 10 && valor < 50) {
        total = valor + valor * 0.1 + 2;
    } else {
        total = valor;
    }

    totalElement.innerHTML = total;
    
});

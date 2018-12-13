/**
 * Aula 03.004. Escopo de Funcao Global
 * 
 * 1. Vamos brincar um pouquinho, agora, com escopo de funcao e o instrutor ira falar mais um pouco sobre o escopo global, por que que temos que tomar cuidado com o escopo global. 
 * 
 * 2. Toda variavel, declarada fora de uma funcao, pertence ao escopo global. Essa eh a definicao.
 * 
 * 3. Entao, estamos no arquivo js, entao, se nos declararmos uma variavel aqui, var nome, por exemplo,
 * 
 * var nome = 'AlgaWorks';
 * 
 * , essa variavel eh uma variavel global. Por que? Porque ela esta fora de uma funcao.
 * 
 * 4. Vamos criar uma funcao aqui, usando function expression, 
 * 
 * var capitalizar = function() {
 *  
 * }
 * 
 * , e nos vamos criar uma variavel tambem chamada nome, e vamos atribuir o valor 'AlgaWorks', 
 * 
 * var capitalizar = function() {
 *      var nome = 'AlgaWorks'.toUpperCase();
 * }
 * 
 * 5. Entao, o que nos estamos fazendo? Pegando essa string 'AlgaWorks', e passando ela para letras tudo em maiusculo, e atribuindo para a variavel nome.
 * 
 * 6. Reparemos uma coisa, elas tem o mesmo nome. Mas eparemos, tambem, que declaramos, dentro da funcao, uma palavra chave var. Se declaramos aqui dentro da funcao com var, significa que essa variavel aqui eh local a essa funcao capitalizar().
 * 
 * 7. Vamos adicionar um comentario aqui, 
 * 
 * var nome = 'AlgaWorks';  // variavel global
 * 
 * 8. E esse nome aqui eh uma variavel local,
 * 
 * var capitalizar = function() {
 *      // nome eh uma variavel local a funcao capitalizar()
 *      var nome = 'AlgaWorks'.toUpperCase();
 * }
 * 
 * 9. Isso significa que, como elas tem o mesmo nome, quando chamarmos aqui, chamarmos a funcao, abrir/fechar parenteses para chamar a funcao, e mandarmos mostrar, aqui, o nome,
 * 
 * capitalizar();
 * console.log('nome', nome); 
 * 
 * , essa variavel nome que vamos mostrar sera a variavel global nome. Essa variavel global nao eh a mesma que a variavel local nome, entao, o que o instrutor quer nos dizer eh que o nome que vai aparecer aqui eh 'AlgaWors', e nao o nome em letras maiusculas. Okay? Vamos executar.
 * 
 * 10.  Exibiu: 
 * 
 * nome AlgaWorks
 * 
 * , olha so, apareceu com letras minusculas, por que? Porque nome eh a variavel global nome. Aqui dentro da funcao capitalizar(), nome eh uma variavel local.
 * 
 * 11. Agora, vamos criar uma nova variavel, var capitalizar2, uma nova funcao, onde iremos colocar assim,
 * 
 * nome = 'AlgaWorks'.toUpperCase();
 * 
 * var capitalizar2 = function() {
 *      nome = 'AlgaWorks'.toUpperCase();
 * }
 * 
 * 12. Agora, nao colocamos a palavra-chave var aqui, 
 * 
 *      nome = 'AlgaWorks'.toUpperCase();
 * 
 * , significa que nos vamos tentar acessar uma variavel de escopo global. Tem ela? Tem, essa variavel global nome aqui. Entao, essa nome em capitalizar2 eh esse mesmo nome aqui,
 * 
 * var nome = 'AlgaWorks';
 * 
 * , no escopo global. Significa que, se nos chamarmos o capitalizar2() e, depois, invocarmos,
 * 
 * console.log('nome2', nome);
 * 
 * , so para nos identificarmos que eh a segunda chamada, vamos executar e, no nome2, AlgaWorks ja esta em maiusculo, ou seja, com essa alteracao que nos fizemos aqui, na funcao capitalizar2, nos alteramos o valor na variavel global nome.
 * 
 * 13. E olha so que coisa, mesmo que, se nos nao tivessemos declarado aqui,
 * 
 * // var nome = 'AlgaWorks';
 * 
 * , vamos comentar em,
 * 
 * // console.log('nome', nome);
 * 
 * , tambem. Vamos deixar dessa forma aqui,
 * 
 * 
 * // var nome = 'AlgaWorks';        // variavel global

 var capitalizar = function() {
     // nome eh uma variavel local
     // var nome = 'AlgaWorks'.toUpperCase();
 }

 capitalizar();
 // console.log('nome', nome);
 

var capitalizar2 = function() {
    nome = 'AlgaWorks'.toUpperCase();
}

capitalizar2();
console.log('nome2', nome);

 , vamos ver o que vai acontecer? Vamos executar.

 * 14. Exibiu: nome2 ALGAWORKS
 *
 * 15. Olha so que doideira. Se nos nao colocarmos o var em nome, na funcao capitalizar2(), vamos comentar tambem, em capitalizar(), var nome, para nos nao acharmos que foi por conta dali. Executamos novamente. Essa variavel nome, como nao colocamos var, ela se torna uma variavel global, virou global essa variavel, entao, nos conseguimos acessa-la, agora, de fora da funcao, porque nome virou uma variavel global. Vamos voltar aqui como estava antes,
 * 
 * var nome = 'AlgaWorks';        // variavel global

 var capitalizar = function() {
     // nome eh uma variavel local
     var nome = 'AlgaWorks'.toUpperCase();
 }

 capitalizar();
 console.log('nome', nome);
 

var capitalizar2 = function() {
    nome = 'AlgaWorks'.toUpperCase();
}

capitalizar2();
console.log('nome2', nome);

 * 
 * 16. Entao, qual que eh o objetivo principal dessa aula? Sao dois objetivos principais, nos mostrar aqui o que eh declarado fora de uma funcao, a gente considera como um escopo global, o que esta dentro de uma funcao com a palavra-chave var, faz parte de um escopo local, local a esta funcao. E qual a consequencia dessas caracteristicas aqui?
 * 
 * 17. Que, se nos nao nos preocuparmos em colocarmos nomes as variaveis, declararmos as variaveis como locais, olha a confusao que isso pode dar no nosso codigo. Pensemos junto com o instrutor, em um programa medio para grande, nos criamos varias funcoes, e imaginemos se nos nao colocarmos o var aqui, por exemplo,
 * 
 * var capitalizar2 = function() {
 *      nome = 'AlgaWorks'.toUpperCase(); 
 * }
 * 
 * , nao criarmos variaveis locais a funcao. Isso pode dar um problema muito grande, por que? Imaginemos se, no metodo capitalizar, a gente ja tivesse acessado uma variavel global, em capitalizar2, acessando a mesma variavel global, e, em outra funcao, a mesma variavel global, e isso iria dar uma confusao muito grande, nos podemos nos confundir com os nomes das variaveis, eh bem provavel que nos nao vamos conseguir definir nomes diferentes para cada uma das variaveis, entao, moral da historia, escopo global nao eh legal.
 * 
 * 18. Entao, escopo global nao eh legal, e devemos tentar evitar ao maximo usar o escopo global, declarar variaveis assim, em escopo global,
 * 
 * var nome = 'AlgaWorks';
 * 
 * , nao eh bom, eh melhor a gente colocar tudo dentro de funcoes. E, quando o instrutor nos mostrar, em exemplos, quando a gente estiver avancando mais aqui, a gente comecar a usar alguns exemplos mais proximos do real, que tenham uma funcionalidade melhor, nos vamos entender essa teoria toda que a gente esta vendo aqui, mais na pratica.
 * 
 * 19. Mas, por enquanto, devemos nos lembrar disso que o instrutor falou, devemos nos lembrar desses detalhes de variavel local, variavel global.
 * 
 * 20. Fim da Aula 03.004. Escopo de Funcao e Global.
 * 
 */

 var nome = 'AlgaWorks';        // variavel global

 var capitalizar = function() {
     // nome eh uma variavel local
     var nome = 'AlgaWorks'.toUpperCase();
 }

 capitalizar();
 console.log('nome', nome);
 

var capitalizar2 = function() {
    nome = 'AlgaWorks'.toUpperCase();
}

capitalizar2();
console.log('nome2', nome);

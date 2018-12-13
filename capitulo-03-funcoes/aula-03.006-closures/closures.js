/**
 * Aula 03.006. Closures
 * 
 * 1. Este conceito de closures eh bem legal e pode ser que de um nozinho na nossa cabeca, mas vamos devagarzinho, para a gente conseguir entender. 
 * 
 * 2. Vamos la, vamos criar um contador, em Javascript. O exemplo classico para aprender sobre closure.
 * 
 * 3. Entao, nos poderiamos ter algo assim, vamos chamar uma funcao incrementar(), e essa funcao incrementar, ela vai pegar um valor, 
 * 
 * var valor = 0;
 * 
 * function incrementar() {
 *      var valor = 0;
 * }
 * 
 * , e vai retornar ++valor,
 * 
 * function incrementar() {
 *      var valor = 0;
 * 
 *      return ++valor;
 * }
 * 
 * , colocando ++ na frente de valor, ele incrementa, depois retorna. Entao, ele vai pegar o valor que foi definido anteriormente, vai incrementar e vai, depois, retornar. 
 * 
 * 4. Entao, se nos fizermos um log aqui,
 * 
 * console.log(incrementar());
 * 
 * , ele tem que retornar 1.
 * 
 * 5. Beleza, retornou 1. Se nos chamarmos mais de uma vez, ele vai retornar quanto?
 * 
 * console.log(incrementar());
 * console.log(incrementar());
 * console.log(incrementar());
 * 
 * 6. Todas as vezes 1.
 * 
 * 7. Por que todas as vezes 1? Se nos estamos chamando essa funcao aqui, incrementar(), chamamos a funcao, vai executar ela, entao, var valor = 0; definiu o valor como zero, incrementou esse valor, e retornou. Beleza, fez a primeira vez. Chamei novamente, comecou na linha da funcao em var valor = 0; retorna ++valor, vai voltar 1, a mesma coisa na chamada seguinte, console.log(incrementar()), entao, desse jeito aqui, nao vai dar certo de nos fazermos assim, se quisermos que incremente o valor a cada chamada.
 * 
 * 8. Entao, poderiamos colocar, transformar essa variavel valor em variavel global. Se transformarmos essa variavel em uma variavel global, ai, beleza, vai incrementar, resultando em 1, 2, 3, ao executarmos.
 * 
 * 9. Deu certo, por que? Porque o valor da variavel que nos estamos acessando eh um valor global.
 * 
 * 10. Mas, definir valores globais nao eh legal. O interessante eh a gente sempre encapsular esses valores. Entao, o interessante eh nos deixarmos esse valor dentro da funcao,
 * 
 * function incrementar() {
    var valor = 0;

    return ++valor;
   }
 * 
 * 11. So que, ai, nos voltamos nesse problema, em que os valores nao sao incrementados. Qual que eh a solucao?
 * 
 * 12. A solucao eh nos usarmos o conceito de closure aqui para a gente resolver isso. Sabe qual que eh o conceito aqui?
 * 
 * 13. Nos vamos retornar, nessa funcao aqui, uma outra funcao, vamos retornar function, e aqui, nessa funcao interna, nos vamos retornar o ++valor, 
 * 
 * function incrementar() {
    var valor = 0;

    return function() {
        return ++valor;
    };
}
 * 
 * 14. Vamos analisar o que que esse codigo aqui esta fazendo.
 * 
 * 15. Agora, nos temos uma variavel local que ela esta protegida, se nos deixassemos antes, como estava antes, com variavel global,
 * 
 var valor = 0;

function incrementar() {
    return ++valor;
}

console.log(incrementar());
console.log(incrementar());
console.log(incrementar());

 *  
 * , funciona, mas, porem, nos poderiamos vir aqui no meio, e colocar assim,
 * 
 * 
console.log(incrementar());
valor = 500;
console.log(incrementar());
console.log(incrementar());
 * 
 * 
 * , e ja mudaria todo o esquema de incremento que nos estavamos usando.
 * 
 * 16. Entao, o legal eh a gente deixa essa variavel valor dentro da funcao, e protege-la. Como? Ai que vai entrar o conceito de closure que a gente vai mostrar aqui, que eh o seguinte, nos vamos retornar uma funcao dentro dessa funcao. Entao, agora, reparemos que nos chamamos a funcao incrementar, o que que ela vai retornar? Uma nova funcao. 
 * 
 * 17. Vamos colocar, aqui, o log de typeof incrementar, executando incrementar(), o retorno de incrementar(), executamos uma vez, o que que ele vai retornar? Isso aqui vai aparecer function, ou seja, eh uma funcao e foi retornada.
 * 
 * 18. Se eh uma funcao, e foi retornada, nos poderiamos colocar, aqui, vamos chamar de fn, e vamos chamar aqui incrementar(), dessa forma,
 * 
 * var fn = incrementar();
 * 
 * , entao, fn eh uma funcao,
 * 
 * var fn = incrementar();
 * console.log(typeof fn);
 * 
 * , que retorna function tambem, ou seja, continua sendo uma function.
 * 
 * 19. Beleza, como eh que nos executamos uma function? Abrindo/fechando parenteses. 
 * 
 * 20. Entao, o que que nos podemos fazer aqui?
 * 
 * console.log(fn());
 * 
 * , e vai retornar undefined, porque nos nao pusemos o return, na funcao interna de incrementar(),
 * 
 * function incrementar() {
    var valor = 0;
    return function() {
        return ++valor;
    }
}
 * 
 * 21. Agora, retornou 1.
 * 
 * 22. Se duplicarmos essas linhas aqui,
 * 
 * console.log(fn());
 * console.log(fn());
 * console.log(fn());
 * 
 * , e executarmos, vai retornar 1, 2, 3, ou seja, ja passou a funcionar. Por que que passou a funcionar agora?
 * 
 * 23. Agora, vamos analisar aqui. Essa funcao interna, dessa funcao incrementar, ela tem acesso as variaveis declaradas da funcao que engloba ela. Qual que eh a funcao que esta englobando ela aqui? Eh a funcao incrementar. Entao, ela tem acesso a variavel valor. Entao, aqui, eh uma coisa que nos ja precisamos saber, que eh que a funcao interna tem acasso as variaveis de cima, de fora da funcao interna, e que, depois que essa funcao foi retornada, olha so, nos executamos incrementar aqui uma vez,
 * 
 * var fn = incrementar();
 * 
 * , e nos tivemos, de volta, essa funcao interna aqui,
 * 
 * return function() {
 *      return ++valor;
 * }
 * 
 * 24. Depois, ela terminou a execucao dessa funcao. E essa variavel local, 
 * 
 * var valor = 0;
 * 
 * , ela nao deveria ser destruida, teoricamente? Teoricamente, mas, com a closure, nao. Aqui,
 * 
 * return ++valor;
 * 
 * , nos vamos continuar, mesmo depois da execucao dessa funcao principal aqui, incrementar(), terminar, na chamada de,
 * 
 * var fn = incrementar();
 * 
 * , nos ainda continuamos com acesso a essa variavel valor dentro dessa funcao, dentro dessa closure,
 * 
 * return function() {
 *      return ++valor;
 * }
 * 
 * 25. A closure, o conceito, eh justamente esse de a gente encapsular alguma coisa, fechar alguma coisa, mas manter um acesso a ela. E, ai, nos podemos, executando essa funcao aqui, 
 * 
 * return function() {
 *      return ++valor;
 * }
 * 
 * , reparemos que eh como se estivessemos executando dessa forma aqui,
 * 
 * console.log(return function() {
 *                  return ++valor;
 *             });
 * 
 * , logico que nao funciona isso daqui, mas seria algo assim, como se estivessemos executando algo assim. Ah, mas cade a variavel valor nesta funcao aqui? Nao existe, ela foi definida aqui, na funcao que engloba, a funcao incrementar, entao, vai funcionar, ela tem acesso, e, ai, mantem, ao executarmos, retorna 1, 2, 3, e continua incrementando.
 * 
 * 26. Nossa, Normandes, mas ficou estranho, neh, voce chamar e incrementar assim, voce chama aqui,
 * 
 * var fn = incrementar();
 * 
 * , e, depois, chama de novo. Eh, pode ser que fique estranho aqui, mas, a gente, ainda, vai ver, mais para frente, funcoes auto-executaveis, mas deixa o instrutor ja dar uma adiantada, nos poderiamos chamar isso aqui de incrementar, uma expressao de funcao, 
 * 
 * var incrementar = function() {
 * 
 * }
 * 
 * , e incrementar vai continuar sendo uma function, so que nos vamos ja executar essa primeira funcao de uma vez. Como que nos executamos uma funcao? O instrutor ja nos falou isso umas 20 vezes, nos abrimos e fechamos parenteses, entao, vamos colocar entre parenteses aqui, e abre/fecha parenteses no final, e, nos executamos essa funcao aqui,
 * 
 * var incrementar = (function() {
 *      
 * })();
 * 
 * , e a execucao dessa funcao retorna o que? Uma outra funcao. 
 * 
 * 27. Entao, significa que nos podemos, agora, tirar a declaracao da variavel fn e podemos substituir por fn() por incrementar() na chamada de log,
 * 
 * console.log(incrementar());
 * 
 * 28. Ai, executamos e continua funcionando, continua incrementando. 
 * 
 * 29. O conceito parece que eh simples, realmente, nao eh tao complicado assim, mas eh importante nos sabermos sobre isso, da funcao auto-executavel, nos declaramos a funcao e executamos-na ja para pegarmos o retorno.
 * 
 * 30. Nos criamos essa funcao auto-executavel, ja mandamos executar para pegar o retorno dela, ja de cara. Okay? Entao, nos ja temos essa funcao na volta e nos nao perdemos o acesso a essa variavel, 
 * 
 * var valor = 0;
 * 
 * , depois de ter executado essa funcao incrementar().
 * 
 * 31. Fim da Aula 03.006. Closures.
 */
/**Version 1.
function incrementar() {
    var valor = 0;

    return ++valor;
}
**/
/**Version 2.
var valor = 0;

function incrementar() {
    return ++valor;
}
**/

/**Version 3. 
function incrementar() {
    var valor = 0;

    return function() {
        return ++valor;
    }
}
**/

/**Version 4.
function incrementar() {
    var valor = 0;
    return function() {
        ++valor;
    }
}
**/
 
/**Version 5. 
function incrementar() {
    var valor = 0;
    return function() {
        return ++valor;
    }
}
**/

/**Version 6. */
var incrementar = (function () {
    var valor = 0;
    return function() {
        return ++valor;
    }
})();

/**Version 1.
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());
**/
/**Version 2. 
console.log(incrementar());
valor = 500;
console.log(incrementar());
console.log(incrementar());
**/
/**Version 3.
console.log(typeof incrementar());
**/
/** Version 4 
var fn = incrementar();
console.log(typeof fn);
**/
/**Version 5.
var fn = incrementar();
console.log(fn());
**/
/**Verion 6. 
var fn = incrementar();
console.log(fn());
console.log(fn());
console.log(fn());
**/

/**Version 7. */
console.log(incrementar());
console.log(incrementar());
console.log(incrementar());


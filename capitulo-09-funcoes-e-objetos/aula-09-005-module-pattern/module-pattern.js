/**
 * 
 * Aula 09.005. Module Pattern
 * 
 * 24. Com Module Pattern, como eu faria esse contador aqui?
 * 
 * 25. Vou criar uma variavel contador, okay?, e, ai, olha so, eu vou colocar dentro de uma funcao um valor, uma variavel, valor = 0,
 * 
 * var contador = function () {
 *      var valor = 0;
 * }
 * 
 * 26. Essa variavel dentro da funcao, ela eh encapsulada. Aqui de fora, eu nao consigo mais fazer contador.valor, isso daqui vai dar errado,
 * 
 * var contador = function () {
 *      var valor = 0;
 * }
 * 
 * contador.valor
 * 
 * , okay? Isso nao vai funcionar. Beleza? Oh, posso colocar, aqui, o log(),
 * 
 * console.log(contador.valor);
 * 
 * , retornou undefined.
 * 
 * 27. Eu nao consigo acessar uma variavel dentro de uma funcao, okay? Entao, qual que foi a sacada, entao, dos caras?
 * 
 * 28. Eu posso, entao, adicionar, aqui dentro dessa funcao, as variaveis que eu quero que fiquem privadas, entao, isso daqui ficou privado, oh, isso daqui esta privado,
 * 
 * var contador = function () {
 *      var valor = 0;  // privado
 * }
 * 
 * , okay? E eu vou retornar apenas o que eu quero que seja publico.
 * 
 * 29. Entao, eu posso retornar aqui um objeto, incrementar, por exemplo, incrementar: function () {}, e, aqui, sim, eu vou colocar valor++, e vou colocar a funcao reset, como sendo uma funcao, e eu vou mostrar aqui o log, 'Valor do contador:', valor, e, aqui, eu faco valor = 0,
 * 
 * var contador = function() {
 *      var valor = 0; // privado
 * 
 *      return {
 *          incrementar: function () {
 *              valor++;
 *          }
 *          reset: function () {
 *              console.log('Valor do contador:', valor);
 *              valor = 0;
 *          }
 *      }
 * }
 * 
 * 30. Eu nao preciso colocar this aqui porque eh uma variavel local, aqui, oh, dentro da funcao, nao eh dentro de um objeto, entao, eu nao preciso por esse this aqui,
 * 
  * var contador = function() {
 *      var valor = 0; // privado
 * 
 *      return {
 *          incrementar: function () {
 *              >>>valor++<<<;
 *          }
 *          reset: function () {
 *              console.log('Valor do contador:', >>>valor<<<);
 *              >>>valor<<< = 0;
 *          }
 *      }
 * }
 * 
 * 31. Beleza? E como que eu faco, agora, para executar essa funcao incrementar e esse reset, aqui?
 * 
 * 32. Vamos la, oh, o que essa variavel contador eh?
 * 
 * 33. Eh uma funcao.
 * 
 * 34. Certo? Eh uma funcao, contador eh uma funcao. Entao, se eu fizer isso daqui oh, contador.incrementar(),
 * 
 * contador.incrementar();
 * 
 * , se eu fizer isso daqui, pensa aqui comigo, oh, antes de eu executar, vamos pensar o que que vai acontecer, contador eh uma funcao. 
 * 
 * 35. Se eu chamar incrementar(), na funcao, existe essa funcao incrementar() dentro de uma funcao?
 * 
 * 36. Nao, existe, nao eh?, entao, isso daqui vai dar erro, olha la,
 * 
TypeError: contador.incrementar is not a function
 * 
 * , oh, incrementar nao eh uma funcao. Por que? Porque eu nao estou executando essa funcao. Para isso daqui funcionar, eu teria que executar aqui a funcao, oh,
 * 
 * contador().incrementar();
 * 
 * , contador, ai, eu executo ela, e incrementar(). Vamos executar. Nao retornou mais erro.
 * 
 * 37. Ai, sim, eu conseguiria fazer isso daqui. So que, beleza, vamos fazer aqui, vamos colocar o contador().reset(),
 * 
 * contador().reset();
 * 
 * , aqui, dessa forma. Olha so, 
 * 
 * contador().incrementar();
 * contador().reset();
 * 
 * , retornou,
 * 
 * Valor do contador: 0
 * 
 * 38. Eu posso colocar isso aqui,
 * 
 * >>>contador().incrementar();<<<
 * contador().reset();
 * 
 * , quantas vezes eu quiser, que vai ser sempre 0, oh,
 * 
 * contador().incrementar();
 * contador().incrementar();
 * contador().reset();

 * , retornou, 
 * 
 * Valor do contador: 0
 * 
 * 39. Porque eu estou executando a funcao toda hora,
 * 
 var contador = >>>function () {<<<
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
             valor = 0;
        }
    }
}
 * 
 * , nao eh?, entao, eu estou executando essa funcao toda hora, entao, toda hora esse valor aqui esta 0.
 * 
 * 40. Qual que foi a sacada dos caras, entao?
 * 
 * 41. Eu vou mandar executar essa funcao logo de cara, entao, esse contador,
 * 
 * var contador = function () {}
 * 
 * , ja vai receber o o retorno da execucao dessa funcao,
 * 
 function () {
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
             valor = 0;
        }
    }
}
 * 
 * , entao, ele executa ela uma vez aqui. Nessa funcao, eu ja pego o retorno, o que eu quero que seja publico.
 * 
 * 42. Como que eu faco para executar uma funcao?
 * 
 * 43. Voce sabe como que faz para executar uma funcao. Nao eh colocar parenteses, nao eh abrir/fechar parenteses, para executar?
 * 
 * 44. Entao, olha so, eu vou englobar essa funcao aqui entre parenteses, entao, eu vou colocar, abre parenteses aqui no inicio e fechar aqui no final,
 * 
 var contador = >>>(function () {
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
            valor = 0;
        }
    }
})<<<
 * 
 * 45. Repara, oh, que o que esta dentro desses parenteses eh essa funcao, 
 * 
 function () {
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
            valor = 0;
        }
    }
}
 * 
 * 46. Beleza? E para eu executar ela agora? Eu abro e fecho parenteses, la no final,
 * 
 var contador = (function () {
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
            valor = 0;
        }
    }
})>>>()<<<;
 * 
 * 47. Beleza? Agora, sim, eu posso tirar o parenteses em contador(),
 * 
 * contador.incrementar();
 * contador.incrementar();
 * contador.reset();
 * 
 * , significa que esse contador ja pegou a execucao dessa funcao. Agora, se eu fizer isso aqui, 
 * 
 * contador.incrementar();
 * contador.incrementar();
 * contador.reset();
 * 
 * 
 * , vai dar certo. Oh, incrementou uma vez, incrementou a segunda, e, ai, vai mostrar o 'Valor do contador: 2, e, depois, vai resetar.
 * 
 * 48. Vamos executar. Retornou,
 * 
 * Valor do contador: 2
 * 
 * 49. Agora sim, oh, la, 'Valor do contador: 2', okay?
 * 
 * 50. Entendido? Eh estranho isso daqui ou nao? Eh bem simples, depois que voce entende, nao eh?
 * 
 * 51. Entao, vou tirar aqui os parenteses,
 * 
 var contador = function () {
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
            valor = 0;
        }
    }
};
 * 
 * 
 * , oh, eu tenho uma funcao, contador eh uma funcao. So que eu quero ja executar essa funcao de cara.
 * 
 * 52. Entao, eu coloco um parenteses aqui no inicio e um parenteses aqui no final,
 * 
var contador = >>>(function () {
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
            valor = 0;
        }
    }
})<<<;
 * 
 * 53. Ai, eu quero executar, abre/fecha parenteses,
 * 
 var contador = >>>(function () {
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
            valor = 0;
        }
    }
})<<< >>>()<<<;
 * 
 * 54. Ah, Normandes, mas eu ja vi esses parenteses aqui dentro,
 * 
var contador = (function () {
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
            valor = 0;
        }
    }
}>>>()<<<);
 * 
 * , beleza, pode ser qualquer um dos dois, ou voce coloca aqui,
 * 
 * }());
 * 
 * , ou voce coloca aqui,
 * 
 * })();
 * 
 * , qualquer um dos dois da certo. Oh, coloquei do lado de dentro, executei e deu certo tambem.
 * 
 * 55. Beleza? Entao, essa foi a grande sacada dos caras de retornar o que voce quer que seja publico.
 * 
 * 56. Beleza? Tem gente que faz assim oh, para deixar um pouco mais legivel, ele poderia implementar aqui dessa forma, colocar uma funcao aqui, oh, 
 * 
 * var incrementar = function () {
 *      valor++
 * }
 * 
 * , okay? E, posso colocar aqui, 
 * 
 * var reset = function () {
 *      console.log('Valor do contador:' valor);
 *      valor = 0;
 * }
 * 
 * , e, aqui, agora, ao inves de eu retornar a function, eu posso colocar, simplesmente retorna incrementar, e, abaixo, retorna reset, 
 * 
 * var contador = (function () {
 *  var valor = 0; // privado
 * 
 *  var incrementar = function () {
 *      valor++;
 *  }
 *  var reset = function () {
 *      console.log('Valor do contador:', valor);
 *      valor = 0;
 *  }
 * 
 *  return {
 *      incrementar: incrementar,
 *      reset: reset
 *  }
 * }());
 * 
 * , que foi definido, que sao essas variaveis aqui em cima, que sao funcoes.
 * 
 * 57. Okay? Vamos ver se esta funcionando. Retornou,
 * 
 * Valor do contador: 2
 * 
 * , continua funcionando da mesma forma. Okay? Module Pattern, eh legal?
 * 
 * 58. Demais. O instrutor gosta muito de usar Module Pattern, o instrutor acha que o codigo fica muito organizado, nao eh?, fica, 'Ah, Normandes, fica meio estranho'. Eh, pode parecer estranho, no inicio, mas, a medida que voce for trabalhando com Module Pattern, esse tipo de codigo aqui fica natural para nos, okay?, fica mais simples, fica bem legal de ver.
 * 
 * 59. Beleza? Entao, olha so, eh isso aqui, em https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#modulepatternjavascript, que ele fez, o Addy Osmani. Eh bem interessante. Ai, ele da algumas variacoes, ai, mas eh, basicamente, isso que o instrutor falou, ele retorna o que voce quiser que fique publico, voce retorna aqui nesse objeto,
 * 
 * return {
 *      incrementar: incrementar,
 *      reset: reset
 * }
 * 
 * , o que voce quiser que fique privado, fica ali dentro, tudo que for privado, voce declara aqui dentro,
 * 
var contador = (function () {

    /** p r i v a d o *

    var valor = 0;
    var incrementar = function () {
        valor++;
    };
    var reset = function () {
        console.log('Valor do contador:', valor);
        valor = 0;
    };

    /** p r i v a d o *

}());
 * 
 * 60. Beleza? Voce quer ter uma funcao privada? Voce pode declarar, aqui, uma funcao, vamos chamar, aqui, funcaoPrivada(),
 * 
 * 
var contador = (function () {
    var valor = 0;
    var incrementar = function () {
        valor++;
    };
    var reset = function () {
        console.log('Valor do contador:', valor);
        valor = 0;
    };

    function funcaoPrivada() {

    }

    return {
        incrementar: incrementar,
        reset: reset
    }
}());
 * 
 * , okay?, e, aqui, voce pode executar alguma coisa aqui dentro dela, 'funcao privada...', por exemplo. E, ai, na hora que fosse incrementar aqui, voce poderia chamar ela, oh, vou chamar a funcaoPrivada(), ali, para fazer alguma coisa,
 * 
 var contador = (function () {
    var valor = 0;
    var incrementar = function () {
        valor++;
        >>>funcaoPrivada();<<<
    };
    var reset = function () {
        console.log('Valor do contador:', valor);
        valor = 0;
    };

    function funcaoPrivada() {
        >>>console.log('funcao privada...');<<<
    }

    return {
        incrementar: incrementar,
        reset: reset
    }
}());
 * 
 * , vamos executar, olha ali, olha la, chamou a funcao privada duas vezes, 
 * 
funcao privada...
funcao privada...
Valor do contador: 2
 * 
 * , por que? Porque eu chamei aqui o incrementar() duas vezes,
 * 
contador.incrementar();
contador.incrementar();
contador.reset();
 * 
 * 
 * 61. Beleza? 
 * 
 * 62. Fim da Aula 09.005. Module Pattern.
 * 
 * 
 */

/**Version 1 *
var contador = (function () {
    var valor = 0;

    return {
        incrementar: function () {
            valor++;
        },
        reset: function () {
            console.log('Valor do contador:', valor);
            valor = 0;
        }
    }
/** })(); **
}());
**/

/**Version 2 *
var contador = (function () {
    var valor = 0;
    var incrementar = function () {
        valor++;
    };
    var reset = function () {
        console.log('Valor do contador:', valor);
        valor = 0;
    };

    return {
        incrementar: incrementar,
        reset: reset
    }
}());
**/

/**Version 3 *
var contador = (function () {
    var valor = 0;
    var incrementar = function () {
        valor++;
        funcaoPrivada();
    };
    var reset = function () {
        console.log('Valor do contador:', valor);
        valor = 0;
    };

    function funcaoPrivada() {
        console.log('funcao privada...');
    }

    return {
        incrementar: incrementar,
        reset: reset
    }
}());
 */

/**Version 4 */
var contador = (function () {
    var valor = 0;
    var incrementar = function () {
        valor++;
    };
    var reset = function () {
        console.log('Valor do contador:', valor);
        valor = 0;
    };

    return {
        incrementar: incrementar,
        reset: reset
    }
}());

/** console.log(contador.valor); **/

/** contador.incrementar(); **/

/** *
contador().incrementar();
contador().incrementar();
contador().reset();
**/
contador.incrementar();
contador.incrementar();
contador.reset();

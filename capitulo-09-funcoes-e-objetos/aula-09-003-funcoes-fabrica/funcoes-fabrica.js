/**
 * Aula 09.003. Funcoes Fabrica
 * 
 * 1. Nos ja vimos essa forma aqui de criar os objetos,
 * 
 * var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    fabricante: 'VW'
}
 * 
 * , nao eh?, em que eu coloco o nome da variavel, igual, abro chaves, e defino aqui as propriedades desse meu objeto.
 * 
 * 2. Entao, aqui, eu tenho o objeto fox, e, ai, se eu mandar dar o log() nele, a gente vai ver todas as propriedades desse objeto,
 * 
 * fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'VW' }
 * 
 * 3. Okay? se eu quiser criar um novo objeto, gol, por exemplo, ai, eu vou, 
 * 
 * var gol = {
 *      nome: 'Gol',
 * 
 * }
 * 
 * , nome: 'Gol', vou digitar de proposito, aqui, errado, vou colocar, aqui, plac, e vou esquecer o 'a' ali, oh,
 * 
 * 
var gol = {
    nome: 'Gol',
    plac: 'AAA-2222',
    fabricante: 'VW'
}
 * 
 * , e eu vou colocar, aqui, o log,
 * 
 * console.log('gol', gol);
 * 
 * 4. Vamos executar. Ta la, 
 * 
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'VW' }
gol { nome: 'Gol', plac: 'AAA-2222', fabricante: 'VW' }
 * 
 * , beleza, nao eh?, os dois objetos, aqui. So que, repara bem, eu fiz esse erro aqui de proposito,
 * 
 var gol = {
    nome: 'Gol',
    >>>plac: 'AAA-2222',<<<
    fabricante: 'VW'
}
 * 
 * , para mostrar que, quando eu preciso criar varios objetos com as mesmas propriedades, so trocando os valores aqui dessas propriedades, desse jeito que eu estou fazendo nao eh legal.
 * 
 * 5. Concorda? Porque eu digitei errado aqui, alguma coisa,
 * 
 var gol = {
    nome: 'Gol',
    >>>plac: 'AAA-2222',<<<
    fabricante: 'VW'
}
 * 
 * , isso pode dar um problema, pode dar um bug ai no nosso sistema. Nao eh?, as vezes, voce pode estar tentando, em determinado momento, voce vai la acessar, ah, agora, deixa eu mostrar a placa do Gol, e voce vai digitar certo la na frente,
 * 
 * console.log('gol.placa', gol.placa);
 * 
 * , e voce vai receber um undefined,
 * 
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'VW' }
gol { nome: 'Gol', plac: 'AAA-2222', fabricante: 'VW' }
gol.placa undefined
 * 
 * , nao eh?, entao, essa forma nao eh legal quando eu quero criar varios objetos. 
 * 
 * 6. E, ai, nesta aula, o instrutor vai nos mostrar a funcao fabrica.
 * 
 * 7. Como que eu posso fazer esse objeto ser criado, mas, eu escrevendo so uma vez, nao ficar com esse tanto de codigo repetido.
 * 
 * 8. Beleza? Entao, vou apagar isso aqui tudo, e vamos la, eu vou criar aqui uma funcao criarCarro, onde eu vou receber o nome e a placa, okay?, e, aqui, eu vou dar um return de um objeto,
 * 
 * var criarCarro = function(nome, placa) {
 *      return {
 *          
 *      };
 * }
 * 
 * , e, aqui, eu vou colocar, nome, vai retornar o nome, a placa, vai retornar a placa, e fabricante, vamos colocar, fixo aqui, 'VW',
 * 
 * var criarCarro = function(nome, placa) {
 *      return {
 *              nome: nome,
 *              placa: placa,
 *              fabricante: 'VW'
 *      };
 * }
 * 
 * , beleza? E, ai, agora, eu posso fazer o seguinte, oh,
 * 
 * var fox = criarCarro()
 * 
 * , ai, eu passo, aqui, 'Fox', e a placa, 'AAA-1111'. Beleza? Vamos dar um log nele aqui, 
 * 
 * console.log('fox', fox);
 * 
 * 9. Executei, olha la,
 * 
 fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'VW' }
 * 
 * 10. Se eu quiser criar um gol, 
 * 
 * var gol = criarCarro('Gol', 'AAA-2222');
 * 
 * , log do gol,
 * 
 * console.log('gol', gol);
 * 
 * 11. Executei, olha la,
 * 
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'VW' }
gol { nome: 'Gol', placa: 'AAA-2222', fabricante: 'VW' }
 * 
 * 12. Beleza, como fabricante, aqui oh, esta sempre fixo, eu poderia fazer algo assim, oh, 
 * 
 * var criarCarroDaVolks = function(nome, placa) {};
 * 
 * , nao eh? Poderia fazer algo assim, para ficar ja certo, estou criando um carro da Volks, porque o fabricante eh sempre esse.
 * 
 * 13. Mas o objetivo aqui eh nos mostrar que eu posso deixar fixos aqui,
 * 
var criarCarroDaVolks = function(nome, placa) {
    return {
        nome: nome,
        placa: placa,
        fabricante: 'VW'
    };
}
 * 
 * , ou receber parametros daqui, 
 * 
 * function(nome, placa) {}
 * 
 * , e criar esse objeto,
 * 
 *  return {
        nome: nome,
        placa: placa,
        fabricante: 'VW'
    }; 
 * 
 * , para ser retornado, okay?
 * 
 * 14. Esse eh o objetivo, entao, da Funcao Fabrica, fabricar um objeto para a gente.
 * 
 * 15. Fim da Aula 09.003. Funcoes Fabrica.
 * 
 * 
 * 
 * 
 */

/**Version 1.
var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    fabricante: 'VW'
}

console.log('fox', fox);

var gol = {
    nome: 'Gol',
    plac: 'AAA-2222',
    fabricante: 'VW'
}

console.log('gol', gol);

console.log('gol.placa', gol.placa);
**/


/**Version 2 */
var criarCarro = function(nome, placa) {
    return {
        nome: nome,
        placa: placa,
        fabricante: 'VW'
    };
}

var fox = criarCarro('Fox', 'AAA-1111');
console.log('fox', fox);

var gol = criarCarro('Gol', 'AAA-2222');
console.log('gol', gol);
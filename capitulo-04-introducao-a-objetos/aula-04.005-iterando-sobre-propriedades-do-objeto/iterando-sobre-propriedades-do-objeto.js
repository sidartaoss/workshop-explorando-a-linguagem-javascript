/**
 * Aula 04.005. Iterando Sobre Propriedades do Objeto.
 * 
 * 1. O instrutor ira mostrar algo bem util tambem, que eh iterar sobre as propriedades de um objeto.
 * 
 * 2. As vezes, nos estamos fazendo algum sistema, qu nos tenhamos o objeto, e nos queremos navegar por essas propriedades, saber quais sao as chaves aqui desse objeto? Tomar alguma decisao, baseado nisso, inclusive ver os valores, pegar um valor por um desse objeto, entao, eh isso que nos vamos ver nesta aula.
 * 
 * 3. A gente vai usar o 'for in' para fazer isso.
 * 
 * 4. Como eh que ele funciona?
 * 
 * 5. Vamos escrever aqui,
 * 
 * for ()
 * 
 * , e nos vamos colocar o nome de uma variavel, vamos chamar, aqui, de prop,
 * 
 * for (var prop i in joao) {
 * 
 * }
 * 
 * , ou seja, nos estamos falando que, para o objeto joao, dentro do objeto joao, eu quero que voce pegue as propriedades de joao e entregue nessa variavel prop, pode ser qualquer nome, propriedade, p, vamos definir como prop.
 * 
 * 6. E sao as propriedades diretas aqui de joao. No caso aqui, nome, idade, endereco. Ele nao vai navegar aqui dentro de endereco, e mostrar logradouro, numero, complemento, cidade, estado.
 * 
 * 7. Para mostrar isso aqui, vamos imprimir a variavel prop,
 * 
 * for (var prop i in joao) {
 *      console.log(prop);
 * }
 * 
 * , imprimiu:
 * 
nome
idade
endereco

 * 8. Ah, Normandes, mas eu quero ver tambem os valores. Lembra da propriedade dinamica, que o instrutor falor que nos podemos fazer isso aqui,
 * 
 * joao['nome']
 * joao['idade']
 * joao['endereco']
 * 
 * ? Entao, nos conseguimos acessar de forma dinamica. 
 * 
 * 9. Significa que nos podemos vir aqui e fazer isso aqui, 
 * 
 * for (var prop in joao) {
 *      console.log(prop, '->', joao[prop])
 * }
 * 
 * , esse prop aqui eh a string que esta representando a chave das propriedades do objeto. Entao, vamos pegar essa chave e colocar entre colchetes aqui para acessar o valor representaod por essa propriedade.
 * 
 * 10. Aqui, vai sair, vai aparecer nome, setinha, e o valor 'Joao', depois, idade, setinha, e o valor 25, endereco, setinha, esse objeto. Vamos executar,
 * 
 * nome -> Joao
idade -> 25
endereco -> { logradouro: 'Av Brasil',
  numero: 100,
  complemento: 'Apto 202',
  cidade: 'Rio de Janeiro',
  estado: 'RJ' }

  , aparece nome, idade, endereco, a setinha, e o objeto todo aqui na frente. 
 * 
 * 11. Entao, tambem, eh bem util isso aqui, nos podemos, dependendo, nos queremos navegar, aqui, nas propriedades, encontrar uma delas, vamos supor que nos quisessemos saber, eu quero encontrar a propriedade idade, alguma coisa assim, logamos, 'Acei idade!', alguma coisa assim, vamos executar,
 * 
 * for (var prop in joao) {
    console.log(prop, '->', joao[prop]);

    if (prop === 'idade') {
        console.log('Achei idade!');
    }
}
 * 
 * , exibiu,
 * 
 * nome -> Joao
idade -> 25
Achei idade!
endereco -> { logradouro: 'Av Brasil',
  numero: 100,
  complemento: 'Apto 202',
  cidade: 'Rio de Janeiro',
  estado: 'RJ' }
 * 
 * , depois que ele mostrou o 25, 'Achei idade!'. Pode ser algum momento em que nos precisemos, Ah, quando eu vou navegar aqui nas propriedades, quando eu encontrar, e, se tiver essa, as vezes, nos estamos fazendo algo assim, e vai ser util para nos sabermos que tem essa forma de navegacao aqui tambem nos objetos.
 * 
 * 12. Fim da Aula 04.005. Iterando Sobre Propriedades do Objeto.
 * 
 */

var joao = {
    nome: 'Joao',
    idade: 25,
    endereco: {
        logradouro: 'Av Brasil',
        numero: 100,
        complemento: 'Apto 202',
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }    
}

for (var prop in joao) {
    console.log(prop);
}

for (var prop in joao) {
    console.log(prop, '->', joao[prop]);
}

for (var prop in joao) {
    console.log(prop, '->', joao[prop]);
    if (prop === 'idade') {
        console.log('Achei idade!');
    }
}
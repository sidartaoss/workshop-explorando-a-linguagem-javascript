/**
 * Aula 02.010 Estrutura de Controle If, Else If, Else
 * 
 * 1. Vamos conversar, agora, sobre a estrutura de controle if, else.
 * 
 * 2. Talvez nao tenha tanto segredo para nos essa parte inicial aqui, mas
 * depois, o instrutor quer nos mostrar um segredinho, na verdade, nao
 * eh um segredinho, a gente ja ate viu, sobre os valores que sao 
 * false, que sao true, no Javascript.
 * 
 * 3. Entao, de reprente, se nos estamos acostumados com Java, por exemplo,
 * no Javascript, nos podemos fazer diferente.
 * 
 * 4. Imaginemos que tenhamos, aqui, uma variavel, que possa ser informado
 * pelo usuario, 
 * 
 * var pessoa = 'FISICA';
 * 
 * alguma coisa assim, por um combo, nao sabemos, alguma
 * coisa, de alguma forma, esse tipo de pessoa, e, ai, nos queremos
 * decidir, por exemplo, se for fisica, nos vamos formatar a mascara
 * de um input text para um CPF, se for pessoa juridica,
 * nos formatamos a mascara para CNPJ, por exemplo.
 * 
 * 5. Entao, poderiamos usar o if, onde, aqui, nos colocamos, caso a expressao
 * que coloquemos aqui dentro dos parenteses der true, vai ser executado esse
 * bloco de codigo,
 * 
 * if () {
 * 
 * }
 * 
 * , entao, se pessoa, a  gente usa 3 iguais, certo?, for igual a 
 * 'FISICA', por exemplo, ai, aqui, ai, aqui, define mascara de CPF: 
 * 000.000.000-00, como a gente nao esta trabalhando no browser agora,
 * vamos deixar so assim, e mostrar, aqui, 'Selecionado pessoa',
 * 
 * if (pessoa === '') {
 *  // define mascara de CPF: 000.000.000-00
 *  console.log('Selecionado pessoa fisica');
 * }
 * 
 * 6. Okay, vamos executar isso daqui. Ao executar, deu certo, apareceu
 * 'Selecionado pessoa fisica', porque essa variavel pessoa
 * tem exatamente esse valor 'FISICA', se nos trocarmos para
 * JURIDICA, ai ja nao vai executar nada,
 * 
 * var pessoa = 'JURIDICA';

 if (pessoa === 'FISICA') {
  // define mascara de CPF: 000.000.000-00
  console.log('Selecionado pessoa fisica');
 }
 * 
 * 7. Para isso, nos poderiamos colocar um else if, ai, se for igual a
 * JURIDICA, ai sim nos definimos a mascara de CNPJ, 
 * 
 *  if (pessoa === 'FISICA') {
        // define mascara de CPF: 000.000.000-00
        console.log('Selecionado pessoa fisica');
    } else if (pessoa === 'JURIDICA') {
        // define mascara de CNPJ: 00.000.000/0000-00
        console.log('Selecionado pessoa juridica');
    }
 * 
 * 8. Okay, vamos executar, aparece 'Selecionado pessoa juridica'.
 * 
 * 9. E se nos colocarmos um else? nos oderiamos colocar uma mensagem
 * do tipo 'Tipo pessoa invalido', por exemplo,
 * 
   if (pessoa === 'FISICA') {
        // define mascara de CPF: 000.000.000-00
        console.log('Selecionado pessoa fisica');
    } else if (pessoa === 'JURIDICA') {
        // define mascara de CNPJ: 00.000.000/0000-00
        console.log('Selecionado pessoa juridica');
    } else {
        console.log('Tipo pessoa invalido');
    }
 * 
 * 10. Se nos nao informarmos nada, por exemplo,
 * 
 *  var pessoa = '';
 * 
 * , ao executar, aparece 'Tipo pessoa invalido'.
 * 
 * 11. Entao, nos vimos que nos podemos colocar no Javascript, somente o 
 * if, o if com o else if e, se nao quisermos colocar o else if, nos 
 * poderiamos deixar tambem so o else,
 * 
 * if (pessoa === 'FISICA') {
    // define mascara de CPF: 000.000.000-00
    console.log('Selecionado pessoa fisica');
 * } else {
 *   console.log('Tipo pessoa invalido');
 * }
 * 
 * , entao, todas essas opcoes sao validas no Javascript.
 * 
 * 12. Ver o arquivo estrutura-de-controle-if-else-2.js.
 * 
 * 
 * 
 */

/**var pessoa = 'FISICA'; */
/** var pessoa = 'JURIDICA'; **/
var pessoa = '';

if (pessoa === 'FISICA') {
    // define mascara de CPF: 000.000.000-00
    console.log('Selecionado pessoa fisica');
} else if (pessoa === 'JURIDICA') {
    // define mascara de CNPJ: 00.000.000/0000-00
    console.log('Selecionado pessoa juridica');
} else {
    console.log('Tipo pessoa invalido');
}
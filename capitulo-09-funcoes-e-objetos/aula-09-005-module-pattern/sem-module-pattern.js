/**
 * Aula 09.005. Module Pattern
 * 
 * 1. O instrutor ira nos mostrar, nesta aula agora, um padrao que o instrutor utiliza bastante, que eh o Module Pattern.
 * 
 * 2. Eh um padrao que a gente usa para encapsular as coisas dentro do Javascript.
 * 
 * 3. Beleza? Eu vou criar aqui um objeto. O exemplo classico para explicar sobre Module Pattern eh implementar um contador, okay?
 * 
 * 4. O instrutor ira, ate, nos mostrar esse endereco aqui, https://addyosmani.com, que eh o site do Addy Osmani. Ele eh um engenheiro no Google, ele eh muito fera em Javascript, ele ja escreveu um livro, ja escreveu mais de um, na verdade, e esse aqui, oh, Learning javaScript Design Patterns, eh muito interessante, e esta aqui, oh, esta disponivel na internet, para nos lermos. Eh um livro um pouco mais avancado, okay?, por isso que eu estou pegando so essa parte do Module Pattern, que o instrutor acha importantissima, Module Pattern, https://addyosmani.com/resources/essentialjsdesignpatterns/book/index.html#modulepatternjavascript, 
 * 
 * 5. Okay? Entao, o exemplo que ele da aqui, que eh o exemplo, como o instrutor disse, o exemplo mais famoso para falar sobre isso, eh implementar um contador.
 * 
 * 6. Beleza? e o instrutor ira implementar isso daqui nos explicando passo-a-passo do que isso funciona, por que que isso existe.
 * 
 * 7. Okay? Primeiro, o instruor ira nos mostrar um contador, vamos imaginar que eu quero criar um objeto, ee, nesse objeto, eu quero ir incrementando um contador la. Beleza?
 * 
 * 8. Entao, vamos criar esse objeto aqui, eu vou chamar ele de contador, okay?, eu vou criar um objeto simples,
 * 
 * var contador = {
 * 
 * }
 * 
 * 9. Esse objeto aqui teria uma propriedade, que seria o valor, vai comecar com 0, okay? e eu quero ter uma funcao, um metodo dentro desse objeto, para incrmentar esse valor. Entao, eu vou colocar aqui, uma propriedade incrementar, onde eu vou adicionar, nao eh?, uma funcao,
 * 
 * var contador = {
 *      valor: 0,
 *      incrementar: function() {
 *      
 *      }
 * }
 * 
 * 10. E o que que essa funcao faz? Ela pega o valor, eu uso this, this.valor, e dou um this.valor++, aqui, oh, eu estou incrementando esse valor,
 * 
  * var contador = {
 *      valor: 0,
 *      incrementar: function() {
 *          valor++;    
 *      }
 * }
 * 
 * , okay?, e vou colocar aqui tambem uma funcao reset, para a gente dar um log aqui, no valor do que esta sendo incrementado, e, ai, a gente coloca, aqui, this.valor, e, ai, nos resetamos esse valor aqui,
 * 
  * var contador = {
 *      >>>valor<<<: 0,
 *      incrementar: function() {
 *          valor++;    
 *      },
 *      reset: function () {
 *          console.log('Valor do contador agora', this.valor);
 *      }
 * }
 * 
 * , para comecar uma contagem nova,
 * 
  * var contador = {
 *      valor: 0,
 *      incrementar: function() {
 *          valor++;    
 *      },
 *      reset: function () {
 *          console.log('Valor do contador agora:', this.valor);
 *          this.valor = 0;
 *      }
 * }
 * 
 * 11. Beleza? Vamos testar, aqui, entao, contador.incrementar(), vou fazer novamente, contador.incrementar(). Nesse momento, eh para o valor ter ido para 2, nao eh? Se eu passei aqui, oh, tava 0, foi para 1, e, depois, foi para 2,
 * 
 * contador.incrementar();
 * contador.incrementar();
 * 
 * 12. Se eu resetar ele aqui,
 * 
 * contador.reset();
 * 
 * , aqui, ele vai aparecer aqui, 'Valor do contador agora', e vai mostrar o valor. Okay? Vou mandar executar.
 * 
 * 13. Retornou,
 * 
 * Valor do contador agora: 2
 * 
 * , olha la, agora: 2.  
 * 
 * 14. Se eu,
 * 
 * contador.incrementar()
 * 
 * , aqui, e, depois, fizer um reset,
 * 
contador.incrementar();
contador.incrementar();

contador.reset();
 * 
contador.incrementar();
contador.reset();
 * 
 * , aqui, o contador ja deve ser 1. Vamos executar. Retornou,
 * 
Valor do contador agora: 2
Valor do contador agora: 1
 * 
 * 15. Nao eh?, na segunda vez, olha la, agora, eh 1, porque eu resetei ele aqui.
 * 
 * 16. Beleza? Bom, essa aqui seria uma forma de implementar, eh uma forma legal?
 * 
 * 17. Nao. Por que nao?
 * 
 * 18. Porque eu tenho acesso direto a esse valor aqui, oh,
 * 
 * var contador = {
 *      >>>valor: 0,<<<
 *      incrementar: function() {
 *          valor++;    
 *      },
 *      reset: function () {
 *          console.log('Valor do contador agora:', this.valor);
 *          this.valor = 0;
 *      }
 * }
 * 
 * , eu nao estou conseguindo colocar esse 'valor' como privado, nao existe, no Javascript, algo assim, coloca um private aqui, para mim nao acessar,
 * 
 * var contador = {
 *      >>>private valor: 0,<<<
 *      incrementar: function() {
 *          valor++;    
 *      },
 *      reset: function () {
 *          console.log('Valor do contador agora:', this.valor);
 *          this.valor = 0;
 *      }
 * }
 * 
 * 19. Entao, eu poderia vir facilmente aqui e colocar isso daqui oh, 
 * 
contador.valor = 'AlgaWorks';
 * 
contador.incrementar();
contador.incrementar();

contador.reset();

contador.incrementar();
contador.reset();
 * 
 * , olha so, estou sabotando aqui o programa. Entao, 'AlgaWorks', eu vou colocar essa string aqui,
 * 
  * var contador = {
 *      >>>valor: 0,<<<
 *      incrementar: function() {
 *          valor++;    
 *      },
 *      reset: function () {
 *          console.log('Valor do contador agora:', this.valor);
 *          this.valor = 0;
 *      }
 * }
 * 
 * , eu posso fazer isso, sem problema. Ai, vai dar ++ em uma string, vamos ver o que que vai acontecer? Vamos executar. Retornou,
 * 
Valor do contador agora: NaN
Valor do contador agora: 1
 * 
 * , olha la, NaN aqui, oh, esse cara aqui a gente incremenou duas vezes,
 * 
contador.valor = 'AlgaWorks';

contador.incrementar();
contador.incrementar();
 * 
 * , tentamos la incrementar em uma string, foi NaN, ai, eu dei o reset, entao, ele fala assim, oh, 'Qual que eh o valor?'. Nao sei. Mas, ai, depois, ele passou o valor para zero,
 * 
 *      reset: function () {
 *          console.log('Valor do contador agora:', this.valor);
 *          this.valor = 0;
 *      }
 * 
 * , ai, eu consigo incrementar e dar o reset, ja passou a funcionar.
 * 
 * 20. Entao, esta vendo que nao encapsular as coisas nao eh legal?
 * 
 * 21. Porque voce pode, nao eh?, acessar, de repente, alguma coisa e fazer algo errado, o que nao eh bom.
 * 
 * 22. E, ai, por isso qu existe o Module Pattern.
 * 
 * 23. Ver arquivo module-pattern-2.js.
 * 
 * 
 */

var contador = {     
    valor: 0,
    incrementar: function () {
        this.valor++;
    },
    reset: function () {
        console.log('Valor do contador agora:', this.valor);
        this.valor = 0;
    }
}

contador.valor = 'AlgaWorks';

contador.incrementar();
contador.incrementar();

contador.reset();

contador.incrementar();
contador.reset();


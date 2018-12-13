/**
 * Aula 04.006. Comparando Objetos.
 * 
 * 1. Vamos comparar, agora, dois objetos para o instrutor aproveitar e nos explicar sobre o this, sobre a palavrinha this, aqui neste contexto.
 * 
 * 2. Nos ainda vamos ver muito mais coisas sobre o this, mas, por enquanto, ja vai ser util para a gente aqui.
 * 
 * 3. Imaginemos que nos queremos, nos temos, aqui o objeto joao, o objeto maria, e nos queremos comparar esses dois.
 * 
 * 4. No Javascript, nao existe um equals igual no Java, la, que a gente pode usar para comparar esses objetos.
 * 
 * 5. Entao, nos precisamos implementar isso, se a gente quer comparar objetos.
 * 
 * 6. Entao, vamos mostrar aqui, o joao, eh igual a maria?
 * 
 * console.log(joao === maria);
 * 
 * 7. Obviamente, nos ja sabemos que isso vai dar false, porque joao nao eh igual a maria, nem com o 2 iguais, vai dar certo. Por que?
 * 
 * 8. Sao dois objetos diferentes, entao, isso aqui,
 * 
 * console.log(joao === maria);
 * 
 * so pode dar false.
 * 
 * 9. Entao, o que que nos podemos fazer?
 * 
 * 10. Nos podemos ensinar a esse objeto como ele se compara com o outro.
 * 
 * 11. Entao, nos vamos adicionar no joao, uma funcao, um metodo, vamos chamar de metodo, chamado de igualA, dois pontos, e vamos adicionar, aqui, uma funcao, que recebe um objeto, e como nos vamos fazer? 
 * 
var joao = {
    nome: 'Joao',
    idade: 25,
    email: 'teste@email.com',
    igualA: function(obj) {

    }
}

var maria = {
    nome: 'Maria',
    idade: 27,
    email: 'teste@email.com'
}

 * 
 * 12. Nos queremos comparar se o email do joao eh  igual ao email da maria, vamos supor que eles informaram teste@email.com, ambos aqui, eles estavam tentando fazer um cadastro la, e informaram um e-mail de teste, por exemplo, e, ai, nos queremos validar, se tem o mesmo e-mail, nos nao vamos deixar cadastrar, seria algo assim.
 * 
 * 13. Entao, vamos la. Tem essa funcao, agora, igualA, no objeto joao. E nos vamos retornar, se forem iguais, nos vamos retornar true, vamos colocar aqui direto, se forem iguais o que? O email do joao com o email que veio de obj, do objeto que nos estamos recebendo.
 * 
 * 14. Nos vamos colocar, da primeira vez vai dar errado, depois, a gente conserta.
 * 
 * 15. Entao, vamos colocar, se o email for exatamente igual ao email do objeto que eu estou recebendo, entao, ele vai retornar true, caso contrario, ele retorna false.
 * 
 * 
 var joao = {
    nome: 'Joao',
    idade: 25,
    email: 'teste@email.com',
    igualA: function(obj) {
        return email === obj.email;
    }
}

var maria = {
    nome: 'Maria',
    idade: 27,
    email: 'teste@email.com'
}
 * 
 * 16. Vamos dar uma olhada? Joao e Maria tem os mesmos e-mails?, e, ai, a gente coloca aqui, joao.igualA(maria),
 * 
 * console.log('Joao e Maria tem os mesmos e-mails?', joao.igualA(maria));
 * 
 * , nos queremos comparar isso daqui, se for igual, eh para dar true, senao, eh para dar false. 
 * 
 * 17. So que, nesta primeira vez qu nos vamos executar, vai dar um erro, e ai, a gente vai analisar o erro e vai identifica por que.
 * 
 * 18. Ja fala ate a linha para a gente onde ocorreu o erro, na linha onde esta definido,
 * 
 * return email === obj.email;
 * 
 * e o erro: 'ReferenceError: email is not defined'.
 * 
 * 19. Como assim o email nao esta definido? O email nao esta aqui?
 * 
 *  var joao = {
    nome: 'Joao',
    idade: 25,
    email: 'teste@email.com',
    igualA: function(obj) {
            return email === obj.email;
        }
    }
 * 
 * , por que que ele nao achou esse email? 
 * 
 * 20. Bem, nos precisamos falar pra ele, aqui, lembremos do escopo. Ele vai falar: da onde voce esta querendo recuperar esse email?
 * 
 * 21. Se quisermos recuperar de dentro deste objeto joao, que nos estamos trabalhando, entao, nos vamos colocar um 'this', aqui,
 * 
 * return this.email === obj.email;
 * 
 * 22. Entao, esse this nos estamos definindo o escopo, falando, 'Eu quero que seja dentro do escopo deste objeto, que esta funcao esta sendo executada'.
 * 
 * 23. Entao, agora, ele vai la buscar essa funcao e coloca aqui, 'teste@email.com' eh igual a obj.email. Esse obj vai se a maria, nos vamos tentar acessar a propriedade emial de maria, e eles sao iguais.
 * 
 * 24. Entao, agora, vai dar true, ao executarmos, 
 * 
 * Joao e Maria tem os mesmos e-mails? true
 * 
 * 25. Se, por acaso, a Maria for la e mudar o email, 'Ah, nao, vou testar com um email diferente,
 * 
 * email: 'teste2@email.com'
 * 
 * , agora, aqui, ja vai passar a ser false, ao executarmos, false,
 * 
 * Joao e Maria tem os mesmos e-mails? false
 * 
 * 26. Okay? Se for o mesmo, true, se for diferente, false.
 * 
 * 27. Entao, no Javascript, nao existe uma funcao de comparacao, entao, a gente precisa implementar. Entao, nos poderiamos pegar essa funco de joao e colar em maria e, agora, maria tambem tem essa funcao igualA para poder comparar. 
 * 
 * 28. Bah, Normandes, mas a gente vai ter que fica duplicando codigo assim? 
 * 
 * 29. Calma, calma que nos vamos chegar la, o instrutor ainda vai nos mostrar muita coisa sobre objetos, sobre outras formas de a gente fazer isso daqui.
 * 
 * 30. Mas eh importante a gente ir comecando aos poucos, a gente ir entendendo aos pouquinhos, nessa parte.
 * 
 * 31. Fim da Aula 04.006. Comparando Objetos.
 * 
 */

/**Version 1.
var joao = {
    nome: 'Joao',
    idade: 25,
    email: 'teste@email.com',
    igualA: function(obj) {
        return email === obj.email;
    }
}
**/

/**Version 2. */
var joao = {
    nome: 'Joao',
    idade: 25,
    email: 'teste@email.com',
    igualA: function(obj) {
        return this.email === obj.email;
    }
}

/**Version 1. 
var maria = {
    nome: 'Maria',
    idade: 27,
    email: 'teste@email.com'
}
**/

/**Version 2.
var maria = {
    nome: 'Maria',
    idade: 27,
    email: 'teste2@email.com'
}
**/

/**Version 3. */
var maria = {
    nome: 'Maria',
    idade: 27,
    email: 'teste2@email.com',
    igualA: function(obj) {
        return this.email === obj.email;
    }    
}

console.log(joao === maria);
console.log(joao == maria);

console.log('Joao e Maria tem os mesmos e-mails?', joao.igualA(maria));
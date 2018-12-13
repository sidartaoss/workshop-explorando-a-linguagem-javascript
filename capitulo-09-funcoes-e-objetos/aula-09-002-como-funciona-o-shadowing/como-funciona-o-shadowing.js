/**
 * Aula 09.002. Como Funciona o Shadowing
 * 
 * 
 * 1. O instrutor vai nos falar, nesta aula, como funciona o Shadowing, que eh como a gente vai acessar as propriedades dos objetos quando a gente esta trabalhando com os Prototipos.
 * 
 * 2. Entao, usando esse exemplo, ai, do carro fox,
 * 
 * |============================|               |=====================|
 * |           fox              |       |======>|       volks         |
 * |===============|============|       |       |==============|======|
 * |   nome        |  Fox       |       |       | fabricante   |  VW  |
 * |   placa       |  AAA-1111  |       |       |==============|======|
 * | [[Prototype]] |   o----------------|       |[[Prototype]] |  o   |
 * |===============|============|               |==============|==|===|
 *                                                                |
 *                                                                |
 *                                                                |
 *                                              |=================V===|
 *                                              |   Object.prototype  |
 *                                              |==============|======|
 *                                              |[[Prototype]] | null |
 *                                              |==============|======|
 *        
 * , olha la, as propriedades dele, aqui, oh, nome: 'Fox', placa: 'AAA-1111', o Prototipo dele apontando para um objeto volks, que tem la a propriedade fabricante: 'VW', okay?, entao, nos vamos trabalhar nisso daqui, vamos fazer uns testes aqui para a gente aprender.
 * 
 * 3. Olha so, tem la oobjeto volks, o objeto fox, igual o instrutor mostrou no slide. Se eu tentar acessar, aqui, oh, fox.fabricante, aqui, 
 * 
>>>console.log('fox.fabricante:', fox.fabricante);<<<
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante:', fox.fabricante);
 * 
 * qual vai ser o retorno?
 * 
 * 4. Vai ser undefined. Por que aqui vai ser undefined?
 * 
 * 5. Cade a propriedade fabricante aqui? 
 * 
var fox = {
    nome: 'Fox',
    placa: 'AAA-1111'
} 
 * 
 * 6. Nao tem. E o prototipo, neste momento aqui,
 * 
 var fox = {
    nome: 'Fox',
    placa: 'AAA-1111'
}  
 * 
 * , eh Object.prototype. Entao, nao tem a propriedade fabricante. Entao, tem que aparecer aqui,
 * 
>>>console.log('fox.fabricante:', fox.fabricante);<<<
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante:', fox.fabricante);  
 * 
 * , undefined.
 * 
 * 7. Depois, eu alterei o Prototipo de fox para volks. Agora, sim, tera essa propriedade fabricante no Prototipo, aqui,
 * 
console.log('fox.fabricante:', fox.fabricante);
Object.setPrototypeOf(fox, volks);
>>>console.log('fox.fabricante:', fox.fabricante);<<<
 * 
 * , okay? Entao, se eu executar, tem que exibir undefined e, depois, 'VW', de Volkswagen, nao eh?
 * 
 * 8. Olha, la, 
 * 
fox.fabricante: undefined
fox.fabricante: VW
 * 
 * 9. Perfeito, eh o que a gente imaginava. Entao, como funciona, nao eh?, o Shadowing?
 * 
 * 10. Ele vai procurar, primeiro, neste objeto aqui,
 * 
 * |============================|               
 * |           fox              |       
 * |===============|============|       
 * |   nome        |  Fox       |       
 * |   placa       |  AAA-1111  |       
 * | [[Prototype]] |   o---------
 * |===============|============| 
 * 
 * , se existe a propriedade que eu estou tentando acessar. Entao, tentei acessar fabricante, tem? Nao tem. Vamos ver se no Prototipo tem? 
 * 
 * 
   |============================|               |=====================|
 * |           fox              |       |======>|       volks         |
 * |===============|============|       |       |==============|======|
 * |   nome        |  Fox       |       |       | fabricante   |  VW  |
 * |   placa       |  AAA-1111  |       |       |==============|======|
 * | [[Prototype]] |   o----------------|       |[[Prototype]] |  o   |
 * |===============|============|               |==============|==|===| 
 * 
 * 11. Ah, no Prototipo tem, entao, beleza, vou acessar.
 * 
 * 12. Beleza? Entao, por isso que aqui mostrou. E interessante tambem, se eu colocar aqui o toString, nao eh?, mostrar o objeto inteiro, 
 * 
 * console.log('fox', fox);
 * 
 * , ele nao vai mostrar a propriedade fabricante, 
 * 
 * fox { nome: 'Fox', placa: 'AAA-1111' }
 * 
 * , apesar de ele ter,
 * 
fox.fabricante: undefined
>>>fox.fabricante: VW<<<
fox { nome: 'Fox', placa: 'AAA-1111' }
 * 
 * 13. Porque ele, aqui, so vai mostrar as propriedades , nao eh?, o objeto, o toString aqui do objeto, so mostra o que ele tem diretamente nele.
 * 
 * 14. Beleza? Entao, vamos la. E se eu fizer isso daqui oh, eu alterar, da uma olhada aqui nessa caixinha,
 * 
 * |============================|               
 * |           fox              |       
 * |===============|============|       
 * |   nome        |  Fox       |       
 * |   placa       |  AAA-1111  |       
 * | [[Prototype]] |   o---------
 * |===============|============|
 * 
 * , e adicionar uma propriedade fabricante em fox, deixar desse jeitinho que esta aqui oh,
 * 
 * |============================|               
 * |           fox              |       
 * |===============|============|       
 * |   nome        |  Fox       |       
 * |   placa       |  AAA-1111  |
 * |   fabricante  |  GM        |     
 * | [[Prototype]] |   o---------
 * |===============|============|
 * 
 * , eu tenho a propriedade fabricante e troquei para GM, nao eh?, suponha ai que a GM comprou o Fox, nao eh?, e, ainda, o prototipo de fox esta apontando para volks, e, nele, tem a propriedade fabricante,
 * 
 * |============================|               |=====================|
 * |           fox              |       |======>|       volks         |
 * |===============|============|       |       |==============|======|
 * |   nome        |  Fox       |       |       | fabricante   |  VW  |
 * |   placa       |  AAA-1111  |       |       |              |      |
 * |   fabricante  |  GM        |       |       |==============|======|
 * | [[Prototype]] |   o----------------|       |[[Prototype]] |  o   |
 * |===============|============|               |==============|==|===|
 * 
 * 
 * 15. Quando eu tentar acessar essa propriedade fabricante, qual que ele vai acessar? Essa do fox ou a do volks?
 * 
 * 16. Vamos testar para a gente descobrir?
 * 
 * 17. Entao, olha so, eu vou vir aqui e vou colocar fabricante: 'GM',
 * 
 * var fox = {
 *      nome: 'Fox',
 *      placa: 'AAA-1111',
 *      fabricante: 'GM'
 * }
 * 
 * 18. Okay? Olha so, vamos, aintes de eu executar, vamos tentar interpretar o que que vai acontecer aqui,
 * 
console.log('fox.fabricante:', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante:', fox.fabricante);
console.log('fox', fox);
 * 
 * 19. fox.fabricante, aqui, 
 * 
>>>console.log('fox.fabricante:', fox.fabricante);<<<
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante:', fox.fabricante);
console.log('fox', fox);
 * 
 * , agora, tem, nao tem? Esquecendo que tem Prototipo aqui,
 * 
 * var fox = {
 *      nome: 'Fox',
 *      placa: 'AAA-1111',
 *      fabricante: 'GM'
 * }
 * 
 * , nessa linha aqui,
 * 
>>>console.log('fox.fabricante:', fox.fabricante);<<<
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante:', fox.fabricante);
console.log('fox', fox);
 * 
 * , vai aparecer fabricante e vai aparecer 'GM'. Ate ai, normal, nada de estranho, como se eu estivesse, aqui, acessando o nome, nao eh?
 * 
 * 20. E, aqui, 
 * 
 * Object.setPrototypeOf(fox, volks);
 * 
 * , eu alterei o Prototipo de fox para volks. Agora, o Prototipo de fox tem a propriedade fabricante. E, se eu acessar fox.fabricante, 
 * 
console.log('fox.fabricante:', fox.fabricante);
Object.setPrototypeOf(fox, volks);
>>>console.log('fox.fabricante:', fox.fabricante);<<<
console.log('fox', fox);
 * 
 * , o que que vai aparecer? Aqui, nao eh?, que seria o segredo. Okay?
 * 
 * 21. E, por fim, mostrando, aqui, o toString de fox, 
 * 
 console.log('fox.fabricante:', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante:', fox.fabricante);
>>>console.log('fox', fox);<<<
 * 
 * , vamos ver o que que aparece no toString dele.
 * 
 * 22. Beleza? Entao, o que que vai aparecer aqui?
 * 
console.log('fox.fabricante:', fox.fabricante);
Object.setPrototypeOf(fox, volks);
>>>console.log('fox.fabricante:', fox.fabricante);<<<
console.log('fox', fox);
 * 
 * 
 * 23. Consegue imaginar? Eu estou com esse cenario aqui agora, oh,
 * 
 * |============================|               |=====================|
 * |           fox              |       |======>|       volks         |
 * |===============|============|       |       |==============|======|
 * |   nome        |  Fox       |       |       | fabricante   |  VW  |
 * |   placa       |  AAA-1111  |       |       |              |      |
 * |   fabricante  |  GM        |       |       |==============|======|
 * | [[Prototype]] |   o----------------|       |[[Prototype]] |  o   |
 * |===============|============|               |==============|==|===|
 *                                                                |
 *                                                                |
 *                                                                |
 *                                              |=================V===|
 *                                              |   Object.prototype  |
 *                                              |==============|======|
 *                                              |[[Prototype]] | null |
 *                                              |==============|======|
 * 
 * , o fox tem a propriedade fabricante, e o Prototipo, tambem.
 * 
 * 24. O Shadowing funciona assim, ele vai procurar a propriedade primeiro no objeto que ele esta. Se nao tiver, ele vai para o Prototipo. Isso eh ate interessante por questoes de performance, nao eh? Entao, ele procura aqui,
 * 
 * |============================|               
 * |           fox              |       
 * |===============|============|       
 * |   nome        |  Fox       |       
 * |   placa       |  AAA-1111  |
 * |   fabricante  |  GM        |     
 * | [[Prototype]] |   o---------
 * |===============|============|
 * 
 * , tem? Beleza, ja encerrou a busca. 
 * 
 * 25. Se nao tem, ai que ele vai para volks,
 * 
 * |============================|               |=====================|
 * |           fox              |       |======>|       volks         |
 * |===============|============|       |       |==============|======|
 * |   nome        |  Fox       |       |       | fabricante   |  VW  |
 * |   placa       |  AAA-1111  |       |       |              |      |  |               |            |       |       |==============|======|
 * | [[Prototype]] |   o----------------|       |[[Prototype]] |  o   |
 * |===============|============|               |==============|==|===|
 * 
 * 
 * 26. Entao, oh, a saida aqui,
 * 
console.log('fox.fabricante:', fox.fabricante);
Object.setPrototypeOf(fox, volks);
>>>console.log('fox.fabricante:', fox.fabricante);<<<
console.log('fox', fox);
 * 
 * , tem que ser 'GM'. Okay?, mesmo eu trocando o Prototipo dele. Vamos executar?
 * 
fox.fabricante: GM
fox.fabricante: GM
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'GM' }
 * 
 * , olha la, GM, GM,
 * 
fox.fabricante: GM
fox.fabricante: GM
 * 
 * , GM aqui, e GM aqui, normal,
 * 
>>>console.log('fox.fabricante:', fox.fabricante);<<<
Object.setPrototypeOf(fox, volks);
>>>console.log('fox.fabricante:', fox.fabricante);<<<
 * 
 * 27. E olha so o toString,
 * 
 fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'GM' }
 * 
 * , agora, apareceu fabricante 'GM', por que? Porque tem aqui no objeto fox diretamente,
 * 
var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    fabricante: 'GM'
}
 * 
 * 28. E se eu apagar essa propriedade? Lembra que eu posso usar o delete? Entao, eu posso usar aqui o delete fox.fabricante,
 * 
 * delete fox.fabricante;
 * 
 * 29. Neste momento, eu estou apagando essa propriedade aqui, de fox,
 * 
 var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    fabricante: 'GM'
}
 * 
 * 30. Okay? E, ai, se eu mandar mostrar, aqui, agora, oh, 
 * 
 * console.log('fox.fabricante ->', fox.fabricante);
 * 
 * , aqui, vai voltar a ser 'VW'. Beleza? Vamos executar.
 * 
 * 31. Retornou,
 * 
fox.fabricante: GM
fox.fabricante: GM
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'GM' }
fox.fabricante -> VW
 * 
 * , aqui, 
 * 
fox.fabricante: GM
fox.fabricante: GM
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'GM' }
>>>fox.fabricante -> VW<<<
 * 
 * , voltou a ser 'VW'.
 * 
 * 32. E o toString, desse cara, tambem parou de mostrar a propriedade fabricante,
 * 
 console.log('fox.fabricante:', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante:', fox.fabricante);
console.log('fox', fox);

delete fox.fabricante;

console.log('fox.fabricante ->', fox.fabricante);

console.log('fox', fox);
 * 
 * 33. Retornou,
 * 
fox.fabricante: GM
fox.fabricante: GM
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'GM' }
fox.fabricante -> VW
fox { nome: 'Fox', placa: 'AAA-1111' }
 * 
 * , porque eu removi ela, 
 * 
 * delete fox.fabricante
 * 
 * , tirei a propriedade fabricante desse objeto fox,
 * 
var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    fabricante: 'GM'
}
 * 
 * 34. Okay? Ah, Normandes, mas tem alguma forma de eu navegar aqui no objeto em todas as propriedades, inclusive nos Prototipos?
 * 
 * 35. Tem sim. O 'for in' ja faz isso para a gente. Entao, se eu colocar, aqui, oh, for, colocar aqui a propriedade, in fox,
 * 
 * for (propriedade in fox) {}
 * 
 * , vamos dar uma olhada aqui o que que tem na propriedade?
 * 
 * for (propriedade in fox) {
 *      console.log(propriedade);
 * }
 * 
 * 36. Vamos executar, dar uma olhada la. Retornou,
 * 
fox.fabricante: GM
fox.fabricante: GM
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'GM' }
fox.fabricante -> VW
fox { nome: 'Fox', placa: 'AAA-1111' }
nome
placa
fabricante
 * 
 * , esse fabricante aqui esta vindo do Prototipo. Oh, repara que, no ultimo toString, aqui, de fox, que eh esse,
 * 
fox.fabricante: GM
fox.fabricante: GM
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'GM' }
fox.fabricante -> VW
>>>fox { nome: 'Fox', placa: 'AAA-1111' }<<<
nome
placa
fabricante
 * 
 * , nao mostrou fabricante, nao eh?, nao mostrou. Mas, a propriedade, aqui, no for in, tem fabricante, ou seja, o for in, ele sai navegando pelo Prototipo para mostrar para a gente todas as propriedades. Beleza?
 * 
 * 37. Ah, Normandes, e tem como eu descobrir se a propriedade eh, realmente, so do fox ou de um Prototipo?
 * 
 * 38. Tem sim. Voce poderia colocar assim, oh, fox.hasOwnProperty
 * 
 * for (propriedade in fox) {
 *      console.log(propriedade, fox.hasOwnProperty(propriedade));
 * }
 * 
 * , ou seja, essa propriedade eh dele mesmo, eh do fox?
 * 
 * 39. Se for, ele vai retornar true, se nao for, ele retorna false. Entao, aqui tem que aparecer assim, oh, nome true, placa true, fabricante false, eh isso que tem que aparecer. Vamos executar.
 * 
 * 40. Retornou,
 * 
 fox.fabricante: GM
fox.fabricante: GM
fox { nome: 'Fox', placa: 'AAA-1111', fabricante: 'GM' }
fox.fabricante -> VW
fox { nome: 'Fox', placa: 'AAA-1111' }
nome true
placa true
fabricante false
 * 
 * , olha la, nome true, placa true, fabricante false. Beleza? Isso aqui, fox.hasOwnProperty(propriedade), voce poderia usar, nao eh?, alguma logica, nao sei, ai, depende do sistema, nao eh? 
 * 
 * 41. Poderia fazer algo assim,
 * 
for (propriedade in fox) {
    console.log(propriedade, fox.hasOwnProperty(propriedade));

    if (fox.hasOwnProperty(propriedade)) {

    }
}
 * 
 * , se tem a propriedade do fox, ai, voce executa alguma logica, nao eh?, se for, dependendo do seu problema.
 * 
 * 42. Mas essa eh a ideia. Entao, o for in navega em todas as propriedades do objeto, inclusive subindo nos Prototipos, e a funcao hasOwnProperty verifica se essa prorpiedade que ele esta usando aqui no for in eh realmente do fox ou de algum de seus Prototipos.
 * 
 * 43. Fim da  Aula 09.002. Como Funciona o Shadowing.
 * 
 * 
 * 
 * 
 */


var volks = {
    fabricante: 'VW'
}

/**Version 1 *
var fox = {
    nome: 'Fox',
    placa: 'AAA-1111'
}
**/

/**Version 2 */
var fox = {
    nome: 'Fox',
    placa: 'AAA-1111',
    fabricante: 'GM'
}


console.log('fox.fabricante:', fox.fabricante);
Object.setPrototypeOf(fox, volks);
console.log('fox.fabricante:', fox.fabricante);
console.log('fox', fox);

delete fox.fabricante;

console.log('fox.fabricante ->', fox.fabricante);

console.log('fox', fox);

for (propriedade in fox) {
    console.log(propriedade, fox.hasOwnProperty(propriedade));
}

/*
    o metodo de vetores find() encontra o primeiro elemento que corresponde ao retorno de uma funcao passada como parametro
*/

const numeros = [12, 19, 3, -4, 13, -11,15,-1, 0]
const frutas = ['laranja', 'abacaxi', 'maca', 'uva','jabuticaba']

//encontrar o primeiro numero negativo do vetor
console.log('primeiro numero negativo',numeros.find(n=> n < 0))

// encontrar o primeiro multiplo de 5
console.log('primeiro multiplo de 5:',numeros.find( x => x % 5 === 0))

//encontrar o primeiro numero maior que 20
console.log('primeiro numero maior que 20:', numeros.find(i => i > 20 ))      // como nao existe nenhum maior que 20 o resultado é undefined

//encontrar a primeira fruta que comeca com m
console.log('primeira fruta com M:', frutas.find(fr => fr.charAt[0] === 'm' ))
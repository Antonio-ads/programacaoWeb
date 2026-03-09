/* 
    o metodo de vetores filter () cria um novo vetor contendo apenas numeros os elementos que atendam ao criterio representado  pela funcao passada como parametro 
*/

const numeros = [12, 19, 3, -4, 13, -11,15,-1, 0]
const frutas = ['laranja', 'abacaxi', 'maca', 'uva','jabuticaba']


// cria um novo vetor so com numeros negativos
console.log('apenas numeros negativos:', numeros.filter(n=> n < 0))

//cria um novo vetor so com numeros multiplos de 5
console.log('cria vetores com multiplos de 5:',numeros.filter(n1 => n1 % 5 === 0 ))

//criar vetores so com nyumeros maior que 20
console.log('vetor com numeros maior com 20:',numeros.filter(x => x > 20))     // neste caso a funcao cria um vetor vazio ja que nao ha numero que corresponda ao cliterio

//criar vetor apenas com frutas que tenham a letra M no nome
console.log('Apenas fruta que começam com letra m:',frutas.filter(el => el.charAt(0) === 'm'))

//criar vetor apenas com frutas que tenham a letra r no nome
console.log('Apenas fruta que começam com letra r:',frutas.filter(lf => lf.charAt(0) === 'r'))
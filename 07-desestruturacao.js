const carros = ['fusca','chevette','opala']

//desestruturacao 
const [c1,c2,c3] = carros 



/*
sem destruturacao

c1 = carros[0]
c2 = carros[1]
c3 = carros[2]
*/

console.log({c1,c2,c3})

// desestruturacao parcial

const [u1, ,u3] = carros

console.log({u1,u3})

const [p1,p2] = carros

console.log({p1,p2})

/*
    problema rocar variaveis entre si, swap

*/

let var1 = 10, var2 = 20

console.log('antes:',{var1,var2})


// modo classico de swap

// let aux = var1
//var1 = var2
//var2 = aux


//swap usando desentruturacao

{[var1,var2] = [var2,var1]}
console.log('Depois:',{var1,var2})

console.log('-'.repeat(80))

//desestruturacao de objeto
const pessoa = {
    nome: 'Orkutilson Osorio Oliveira',
    sexo: 'M',
    dataNasc:'2010-04-09',
    email: 'orkutilson@gmail.com'
}

/*
    Na desestruturacao de objetos, as variaveis avulsas:
    -> Devem ter o Mesmo nome das propriedades do objeto que extraem
    -> Podem ser especifico de qualquer ordem 
    -> pode ser feitas a desestruituracao parcial 
*/

const {sexo,nome,email} = pessoa

console.log ('Nome:',nome)
console.log ('sexo:',sexo)
console.log ('email:',email)

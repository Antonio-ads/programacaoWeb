const carros = ['chevette', 'fusca','opala','maverick','belina','delrey']

/* 
    o metodo includes() testa se um determinado elemento no vetor.Rteurno true se existir e false caso contrario.
*/

console.log('tem fusca?',carros.includes('fusca'))
console.log('tem corcel?',carros.includes('corcel'))
console.log('tem belina?',carros.includes('belina'))

/*
    o metodo indexof() retorna o indice posicao de um elemento no vetor.caso o item nao exista returna -1.
*/
console.log("posiçao de maverick?",carros.indexOf('maverick'))
console.log("posiçao de chevette?",carros.indexOf('chevette'))
console.log("posiçao de kombi?",carros.indexOf('kombi'))

/*
    O metodo includes() so passou a ser parte da linguagem em 2015, antes desta data e versoes mais antigas era necessario testar se um elemento existia e testar se o indexOf era maior que )...

*/
console.log('tem fusca?', carros.indexOf('fusca') >= 0)
console.log('tem corcel?', carros.indexOf('corcel') >= 0)
console.log('tem belina?', carros.indexOf('belina') >= 0)
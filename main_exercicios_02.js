// import soma, { sub } from './funcoes';//Usando a função default.
import * as funcoes from './funcoes';//Usando a função default.
// import { soma as somaFunction, sub } from './funcoes';
// import soma from './soma';
// import somaFunction from './soma'; //Alterando o nome.
console.log(funcoes);
// console.log(somaFunction(1,2));
console.log(funcoes.soma(1,2));
console.log(funcoes.sub(4,2));
console.log(funcoes.mult(4,2));


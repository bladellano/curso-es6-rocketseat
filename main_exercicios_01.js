
class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{  
    constructor(){
        super();
        this.usuario = 'Diego';
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function (){
    MinhaLista.add('Novo todo');
}
MinhaLista.mostraUsuario();

// -------------//
const arr = [1,2,3,4,5,6];
const newArr = arr.map(function(item){
return item * 2;
});
console.log(newArr);

// -------------//
const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);

// -------------//

const filter = arr.filter(function(item){
    return item % 2 === 0;
});
console.log(filter);
// -------------//

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);

//////////////////
//Arrow funcions//
//////////////////
const arr1 = [1,2,3,4,5,6];
const newArr1 = arr1.map(item => item * 1.45);

console.log(newArr1);
/* const teste = ()=> {
    return 'teste';
} */

// const teste = ()=> [1,2,3,4,5,{}];
// const teste = ()=> 'String';
// const teste = ()=> 0;
const teste = ()=> ({nome:'Diego'});

console.log(teste());

const soma = (a =3,b = 5)=> a + b;

console.log(soma(1));
console.log(soma(3));

///////////////////
//Desestruturação//
///////////////////

const usuario = {
    nome:'Diego',
    idade:23,
    endereco:{
        cidade:'Rio do Sul',
        estado:'SC',
    }
};

const {nome, idade, endereco:{cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome, idade}){
    console.log('Nome: '+ nome, 'Idade: ' + idade);
}
mostraNome(usuario);

///////////////////
///////REST////////
///////////////////

const usuario2 = {
    nome1:'Diego',
    idade:23,
    empresa:'Rocketseat'
};

const { nome1,...rest } = usuario2;
console.log('--------------------');
console.log(nome1);
console.log(rest);

console.log('--------------------');
const arr2 = [1,2,3,4,5];
const[ x, y, ...z ] = arr2;
console.log(x,y);
console.log(z);

console.log('--------------------');

function soma1(...params){
    return params.reduce((total, next)=> total + next);
}
console.log(soma1(12,22,32)); 

console.log('--------------------');
function soma2(a,b,...params){
    console.log(a,b);
    return params;
}
console.log(soma2(1,2,3,4,5,6,7,8));

///////////////////
//////SPREAD///////
///////////////////
console.log('--------------------');
const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1,...array2];

console.log(array3);

console.log('--------------------');

const user1 = {
nome:'Diego',
idade:23,
empresa:'Rocketseat'
};

const user2 = {...user1, nome:'Gabriel'};
console.log(user2);

console.log('--------------------');
const nome3 = 'Diego';
const idade3 = 23;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

///////////////////////
//Object Short Syntax//
///////////////////////

const nome4 = 'Diego';
const idade4 = 23;

const usuario4 = {
    nome4,
    idade4,
    empresa: 'Rocketseat'
};

console.log('teste',usuario4);



/* 1) Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario". */
class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }
    isAdmin(){        
        return this.admin === false ? this.admin : true;
    }
   
}

class Admin extends Usuario{
    constructor(email,senha){
        super(email, senha);
        this.admin = true;
    }
 
}
const User1 = new Usuario('bladellano@gmail.com','123');
const Admin1 = new Admin('bladellano@yahoo.com.br','123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());

/* 2) A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find): */

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
console.log('-----------------------------');

const newIdade = usuarios.map( item => (item.idade) );   
console.log(newIdade);
console.log('-----------------------------');

const newUsuariosFilter = usuarios
    .filter(item =>(item.empresa == "Rocketseat" && item.idade >= 18));  
console.log(newUsuariosFilter);
console.log('-----------------------------');

const usuariosFind = usuarios.find( item =>(item == 'Google')); 

console.log(usuariosFind);//underfined

console.log('-----------------------------');

const usuariosMapFilter = usuarios.map(item => {
    const {idade, nome, empresa} = item;
    return {
        nome,
        idade: idade * 2,
        empresa,
    }
}).filter( usuario => usuario.idade <= 50 ); 

console.log(usuariosMapFilter);

// 3)

const usuario = { nome: 'Diego', idade: 23 };

const showIdade = usuario => usuario.idade;

console.log( showIdade(usuario) );

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const showUsuario = (nome = 'Carlos', idade = 18)=> ({nome, idade});  

console.log(showUsuario(nome,idade));
console.log(showUsuario());

// Desestruturação
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
   }
  const result = mostraInfo(usuario);
  console.log(result)
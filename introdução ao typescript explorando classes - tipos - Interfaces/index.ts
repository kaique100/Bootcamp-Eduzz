import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao()






// function soma(a: number, b: number) {
//     return a + b;
// }

// Types 
// interface 

// interface IAnimal {
//     nome: string,
//     tipo: 'terrestre' | 'aquático';
// }

// type IAnimal = {
//     nome: string,
//     tipo: 'terrestre' | 'aquático',
//     domestico: boolean;
// }

// interface Ifelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal{
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// type IDomestico = Ifelino | ICanino;

// const animal: IDomestico = {
//     domestico: true,
//     nome: 'cachorro',
//     porte: 'medio',
//     tipo: 'terrestre',
//     // visaoNoturna: true
// }

// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) =>{
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// })


const imprimir = console.log;

import {cliente} from "./modelos/Cliente.js";

import {contaCorrente} from "./modelos/ContaCorrente.js";


// Criando o cliente
const cliente1 = new cliente(`Leonardo`, 61177777771);

const cliente2 = new cliente(`Alice`, 61177777772);

const cliente3 = new cliente(`Luciana`, 61177777773);


// Criando a conta corrente
const contaCorrenteLeonardo = new contaCorrente(cliente1, 1001);
// Assossiando cliente1 a contaCorrenteLeonardo

const contaCorrenteAlice = new contaCorrente(cliente2, 1001);
// Assossiando cliente1 a contaCorrenteAlice

const contaCorrenteLuciana = new contaCorrente(cliente3, 1003);
// Assossiando cliente1 a contaCorrenteLuciana


imprimir('\n', cliente1, '\n', cliente2, '\n', cliente3,'\n');

contaCorrenteLeonardo.depositar(100);

imprimir('\n');

contaCorrenteLeonardo.transferir(200, contaCorrenteLuciana);

imprimir(contaCorrenteLeonardo,`\n`)

imprimir(contaCorrenteLuciana,`\n`);
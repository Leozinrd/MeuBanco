const imprimir = console.log;

import {Cliente} from "./modelos/Cliente.js";

import {ContaCorrente} from "./modelos/ContaCorrente.js";


// Criando o cliente
const cliente1 = new Cliente(`Leonardo`, 61177777771);

const cliente2 = new Cliente(`Alice`, 61177777772);

const cliente3 = new Cliente(`Luciana`, 61177777773);

// Criando a conta corrente
const ContaCorrenteLeonardo = new ContaCorrente(cliente1, 1001);
// Assossiando cliente1 a contaCorrenteLeonardo

const ContaCorrenteAlice = new ContaCorrente(0, 1001);
// Assossiando cliente1 a contaCorrenteAlice

const ContaCorrenteLuciana = new ContaCorrente(cliente3, 1003);
// Assossiando cliente1 a contaCorrenteLuciana


imprimir('\n', cliente1, '\n', cliente2, '\n', cliente3,'\n');

imprimir('\n', ContaCorrenteLeonardo, '\n', ContaCorrenteAlice, '\n', ContaCorrenteLuciana,'\n');

ContaCorrenteLeonardo.depositar(100);

imprimir('\n');

ContaCorrenteLeonardo.transferir(200, ContaCorrenteLuciana);

imprimir(ContaCorrenteLeonardo,`\n`)

imprimir(ContaCorrenteLuciana,`\n`);
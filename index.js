import{ContaCorrente} from "./ContaCorrente.js"
import {Cliente} from "./Cliente.js"

const cliente1 = new Cliente();
const cliente2 = new Cliente();
 cliente1.nome = "Ricardo";
 cliente1.cpf = "11122233309";


cliente2.nome = "Alice";
cliente2.cpf = "22233344410";

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;


ContaCorrenteRicardo.depositar(100);
const valorSacado = ContaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(ContaCorrenteRicardo);

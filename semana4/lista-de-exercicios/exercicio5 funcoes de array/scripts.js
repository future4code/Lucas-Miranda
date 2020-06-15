const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]


contas.forEach((saldo, index, array) =>{
    for( let banco of saldo.compras){
        saldo.saldoTotal = saldo.saldoTotal - banco    }
})

console.log(contas);

//0: {cliente: "João", saldoTotal: 400, compras: Array(3)}
//1: {cliente: "Paula", saldoTotal: 6260, compras: Array(2)}
//2: {cliente: "Pedro", saldoTotal: -3340, compras: Array(4)}
//3: {cliente: "Luciano", saldoTotal: -1900, compras: Array(3)}
//4: {cliente: "Artur", saldoTotal: 1300, compras: Array(2)}
//5: {cliente: "Soter", saldoTotal: 1200, compras: Array(0)}
//length: 6

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}
const resultado1 = minhaFuncao(2)
console.log(resultado1);
const resultado2 = minhaFuncao(5)
console.log(resultado2);
const resultado3 = minhaFuncao(8)
console.log(resultado3);
/* a. [] : Na primeira iteração i vale 0 , pois o array está vazio 

 length: 0
__proto__: Array(0)

b.
(6) [0, 1, 0, 1, 2, 3] Na segunda iteração j < i e vai incrementar + 1 ao J dando o total de 6 elementos no array.
0: 0
1: 1
2: 0
3: 1
4: 2
5: 3
length: 6
__proto__: Array(0)

c.
(12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5] Por último entra na segunda iteração e soma i + 2 dando o total dentro do índice que tem 12 elementos.
0: 0
1: 1
2: 0
3: 1
4: 2
5: 3
6: 0
7: 1
8: 2
9: 3
10: 4
11: 5
length: 12
__proto__: Array(0)
*/


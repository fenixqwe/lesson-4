/*2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив. 
*/
/*function massive(arr, callback){
 return arr > 5;
}

console.log([6, 7, 8, 9].every(massive))
function (){

}*/
//На основе массива [1,2,3,5,8,9,10] сформировать новый массив,каждый элемент которого будет хранить информацию о числе и его четности:
//[{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

/*let arr = [1, 2, 3, 5, 8, 9, 10];

let newArr = arr.map(function some(){
	for (let i = 0; i < arr.length; i++){
		let arr[i] = {digit:1, odd:true}
	}
	return arr
})
console.log(newArr)*/
//Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

/*function zero(arr){
	if (arr.includes(0)){
		console.log(false)
	}else{
		console.log(true)
	}
}
console.log(zero([12, 4, 50, 1, 0, 18, 40]))*/
//Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

/*let res = 0;
function string(str){
	for (let i = 0;i < str.length; i++){
			if (str[i].length >= 3){
				res++
			}
	}
	return res >= 1 ? true : false;
}
console.log(string([['ye', 'he', 'no', 'ea', 'wh']]))*/
//Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы

/*let arr = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

arr.sort((a,b) =>{
	return a.index - b.index
});
console.log(arr);
let row = arr.reduce((acc, arr) => {
	return acc + arr.char; 
}, '');
console.log(row)*/

//Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

/*let arr = [  [14, 45],  [1],  ['a', 'c', 'd']  ];
console.log(arr.sort()) */

/*let arr = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]
function sorting(a, b){
	 if(a.cores < b.cores){
	 	return -1;
	 }
	 if(a.cores > b.cores){
	 	return 1;
	 }
	 if(a.cores == b.cores){
	 	return 0
	 }

}
arr.sort(sorting)
console.log(arr)*/
//Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим
/*let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

let fn = (products, price1, price2) => products.filter(product => {
	if (price1 > price2){
		return product.price < price1 && product.price > price2;
	}else{
		return product.price > price1 && product.price < price2;
	}
}).sort((products1, products2) => products1.price > products2.price)
console.log(fn(products, 15, 30))*/
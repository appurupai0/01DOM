// DOM Document Object Modelの略
// HTMKのタグをObject（部品）と見立てて、JavaScriptで操作できる方法のこと

// タグ名を指定して、DOM操作する方法
// getElementByTagName
let list = document.getElementsByTagName('a');
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[0].href);

// getElementByClassName
let fuga = document.getElementsByClassName('fuga');
console.log(fuga);

for(let i = 0; i < fuga.length; i++){
	console.log(fuga[i].textContent);
}

// querySelector（単一要素の取得）
let tako = document.querySelector('#tako .ika');
console.log(tako);

// querySelectorAll（合致するすべての要素の取得）
let ika = document.querySelectorAll('#tako .ika');
console.log(ika);
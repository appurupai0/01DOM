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



// 親要素取得方法
var first_ika = document.querySelector('.ika');
console.log('子要素の取得');
console.log(first_ika);
var ul = first_ika.parentElement;
console.log('親要素の取得');
console.log('ul')

// 子要素取得方法
console.log('親要素の用意');
var parent = document.querySelector('#hogehoge');
console.log(parent);
console.log('子要素の取得');
console.log(parent.children);


// クラスの追加
first_ika.classList.add('textblue');

// 問題
// id = hogehogeのリストの文字をすべてクラスtextblueを追加して青色にしましょう

// ul全体にtextblueのクラスを追加しているパターン
  var parent = document.querySelector('#hogehoge');
  console.log(parent);
  parent.classList.add('textblue');
 // document.querySelector('#hogehoge').classList.add('textblue');とまとめて書いても上のコートと同じである。

// 子要素一つ一つにtextblueを追加しているパターン
var parent = document.querySelector('#hogehoge');
for(var li of parent.children){
	li.classList.add('textblue');
}



// クラスの削除（もともとついているクラスをとる）
// let ul = first_ika.parentElement;
// console.log(ul);
var takolist = ul.children;
takolist[1].classList.remove('textblue');



// inputタグの入力欄の文字の取得方法
var input = document.querySelector('#input_name');
console.log(input.value);

function getInput(){
	var input = document.querySelector('#input_name');
	console.log(input.value);
	// 編集方法
	input.value = input.value + '様';
}



// イベント登録
var text = document.querySelector('#text');
// 要素.addEventListener(イベント名,function(){イベント時に行いたい処理});
text.addEventListener('click',function(){
	// this はイベントを受け取った要素そのもの
	this.style.color = 'red';
});

var html = document.querySelector('#html');
html.addEventListener('mouseover',function(){
	this.style.color = 'yellow';
})
html.addEventListener('mouseleave',function(){
	this.style.color = '';
})


// 要素の追加-------------------------------------------------
// 親要素の取得
var parent_text = document.querySelector('#text');

// pタグを生成する----------------------------
var child_p = document.createElement('p');
// タグ内で表示される文字を設定
child_p.textContent = 'ほへ';

// 親要素の生成したpタグを追加------------------
// 親要素.appendChild(追加したい要素);
parent_text.appendChild(child_p);

// pタグの生成
child_p_moge = document.createElement('p');
// タグ内で表示される文字の設定
child_p_moge.textContent = 'もげ'
// ほへの上にもげを追加する
// 親要素.insertBefore(追加したい要素 , その手前に追加したい対象の要素);
parent_text.insertBefore(child_p_moge,child_p);


// 要素をいろいろ設定できる
// 押したボタンの文字を、id=textの中に追加する
function btna_click(){
	let parent_text = document.querySelector('#text');

	// 追加するpタグを生成
	let child_p_for_btn = document.createElement('p');
	child_p_for_btn.textContent = document.querySelector('#btnA').textContent;
	parent_text.appendChild(child_p_for_btn);

	// ボタンAを押したときに、新しく生成されるボタンAのid名やclass名、textの色などをここで設定できる。
	child_p_for_btn.id = 'add_id'
	child_p_for_btn.style.color = 'blue';
}


// 要素の削除-------------------------------------------------------------
// 削除したい要素.remove();
// var ant = document.querySelector('#ant');
// ant.remove();

// 削除したい要素が含まれている親要素.removeChild(削除したい要素);
var room = document.querySelector('#room');
// roomの一番最初の子要素を削除
// room.removeChild(room.firstElementChild);

// ゴキブリだけを削除する
room.removeChild(document.querySelector('#cockroach'));


// スライダーswiper
var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides : true,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev'
})

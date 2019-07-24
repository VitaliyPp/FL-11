const todoItems = [
	{isDone: false, id: 1, description: 'Todo 1'}
];
let id = 'todoItems_' + todoItems.length;
const rootNode = document.getElementById('root');
let main = 			 document.getElementById('main');
let add = 			 document.getElementById('add');
let modyfy = 		 document.getElementById('modyfy');	
let newItem = 	 document.getElementById('newItem');
let changeItem = document.getElementById('changeItem');
let list = 			 document.getElementById('list');
let empty = 		 document.getElementById('empty');
let item = 			 document.querySelector('#item');
let form = 			 document.querySelector('form');

function hide(e){
	e.target.style.display = 'none';
	localStorage.removeItem(e.target);
}

list.addEventListener('click', hide, false);

function cancel () {
	location.hash = '';
	add.style.display = 'none';
	main.style.display = 'inline';
	modyfy.style.display = 'none';
	newItem.value = '';
}

function addNewItem () {
	location.hash = 'add';
	add.style.display = 'inline';
	main.style.display = 'none';
	modyfy.style.display = 'none';
}

function save () {
	if (newItem.value) {
		list.innerHTML += '<li onclick="hide()">' + 
											'<img src="assets/img/todo-s.png">' +
											newItem.value + 
											'<img src="assets/img/remove-s.jpg">' +
											'</li>';
		todoItems.push({isDone: false, id: todoItems.length, description: newItem.value});
		store();
		empty.style.display = 'none';
	}
	newItem.value = '';
	location.hash = '';
	add.style.display = 'none';
	main.style.display = 'inline';
	modyfy.style.display = 'none';
	console.log(todoItems.length);
}

function store() {
	window.localStorage.id = list.innerHTML;
}
  
function getValues() {
	let storedValues = window.localStorage.id;
	if(!storedValues) {
		empty.style.display = 'inline';
	} else {
		empty.style.display = 'none';
	}
}
getValues();

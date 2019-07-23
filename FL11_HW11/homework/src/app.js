let rootNode = document.getElementById('root');
let mainInput = document.querySelector('.addAction');
let addButton = document.querySelector('.button');
let addIcon = document.querySelector('.addIcon');
let error = document.querySelector('.error');
let containerLength = 11;
inputCheck();

mainInput.addEventListener('input', inputCheck);

function inputCheck () {
	if(!mainInput.value){
		addIcon.style.color = '#c8d0d8';
	}else{
		addIcon.style.color = '#41b5fe';
	}
}

addButton.addEventListener('click', addNewNote);

function addNewNote(event) {
	if(!mainInput.value) {
		event.preventDefault();
	}else{
		if (rootNode.childNodes.length === containerLength) {
			error.style.display = 'block';
			addIcon.style.color = '#c8d0d8';
			addIcon.disabled = true;
			mainInput.disabled = true;
		} else {
			let itemContainer = document.createElement('div');
			itemContainer.setAttribute('draggable', 'true');

			let newItem = document.createElement('input');
			newItem.setAttribute('type', 'text');
			newItem.value = mainInput.value;
			newItem.id = 'itemId';
			newItem.style.display = 'none';

			let checkBox = document.createElement('i');
			checkBox.className = 'material-icons added_ico_checkbox';
			checkBox.textContent = 'check_box_outline_blank';
			checkBox.addEventListener('click', unclick)

			checkBox.addEventListener('click', () => {
				checkBox.textContent = 'check_box';
			});

			let label = document.createElement('label');
			label.textContent = newItem.value;
			label.className = 'itemsLabel';
			label.setAttribute('for', newItem.id);

			let edit = document.createElement('i');
			edit.className = 'material-icons';
			edit.textContent = 'create';
			edit.addEventListener('click', () => {
				itemContainer.removeAttribute('draggable');
				checkBox.style.display = 'none';
				newItem.style.display = 'inline-block';
				label.style.display = 'none';
				edit.style.display = 'none';
				remove.style.display = 'none';
				save.style.display = 'inline-block';
			});

			let remove = document.createElement('i');
			remove.className = 'material-icons removeIcn';
			remove.textContent = 'delete';
			remove.addEventListener('click', removeItem)

			let save = document.createElement('i');
			save.className = 'material-icons';
			save.textContent = 'save';
			save.style.display = 'none';

			save.addEventListener('click', () => {         
				label.textContent = newItem.value;
				checkBox.style.display = 'inline-block';
				newItem.style.display = 'none';
				label.style.display = 'inline-block';
				edit.style.display = 'inline-block';
				remove.style.display = 'inline-block';
				save.style.display = 'none';
				itemContainer.setAttribute('draggable', 'true');                
			});

			itemContainer.appendChild(checkBox);
			itemContainer.appendChild(newItem);
			itemContainer.appendChild(label);
			itemContainer.appendChild(edit);
			itemContainer.appendChild(save);
			itemContainer.appendChild(remove);
			rootNode.appendChild(itemContainer);
			mainInput.value = '';
			addIcon.style.color = '#c8d0d8';

			if(rootNode.childNodes.length === containerLength) {
				error.style.display = 'block';
				addIcon.style.color = '#c8d0d8';
				addIcon.disabled = true;
				mainInput.disabled = true;
			}
		}
	}
}

function unclick () {
	this.disabled = true;
}

function removeItem () {
	let parrent = this.parentNode;
	rootNode.removeChild(parrent);
	addIcon.disabled = false;
	mainInput.disabled = false;
	error.style.display = 'none';
	addIcon.style.color = '#41b5fe';
	mainInput.value = '';
	addIcon.style.color = '#c8d0d8';
}

let dragging = null;

rootNode.addEventListener('dragstart', function(event) {
	dragging = event.target;
	event.dataTransfer.setData('text/html', dragging);
});

rootNode.addEventListener('dragover', function(event) {
	event.preventDefault();
});

rootNode.addEventListener('dragenter', function(event) {
	if(event.target.tagName === 'DIV'){
		event.target.style['border-bottom'] = 'solid 3px #41b5fe';
	}
});

rootNode.addEventListener('dragleave', function(event) {
	if(event.target.tagName === 'DIV'){
		event.target.style['border-bottom'] = '';
	}
});

rootNode.addEventListener('drop', function(event) {
	event.preventDefault();
	if(event.target.tagName === 'DIV'){
		event.target.style['border-bottom'] = '';
		event.target.parentNode.insertBefore(dragging, event.target.nextSibling);
	}
});

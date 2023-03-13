const addBtn = document.getElementById('add');
const saveBtn = document.getElementById('save-btn');
const dialogBox = document.querySelector('.dialog-box');
const textInput = document.getElementById('text-input');
const background = document.querySelector('.background');


// this function well show the dialog box that well add the task
addBtn.addEventListener('click', () => {
    dialogBox.classList.add('show');
    background.classList.add('show');
});

saveBtn.addEventListener('click', () => {
    dialogBox.classList.remove('show');
    background.classList.remove('show');
    //TODO: save the text

    let str = textInput.value;
//`<li> <input type="checkbox"> ${str} <button id="remove-btn">Remove</button></li>`;
    const ul = document.getElementById('item-list');
    const li = document.createElement('li');
    li.id = 'item';
    const textLi = document.createTextNode(str);
    const check = document.createElement('input');
    check.type = 'checkbox';
    const removeBtn = document.createElement('button');
    const textBtn = document.createTextNode('Remove');
    removeBtn.id = "remove-btn";
    removeBtn.appendChild(textBtn);

    li.appendChild(check);
    li.appendChild(textLi);
    li.appendChild(removeBtn);
    ul.appendChild(li);

  });

  const removeBtn = document.getElementById('remove-btn');
  removeBtn.addEventListener('click', () => {
    console.log('hi')
    const li = document.getElementById('item');
    li.remove()
  });
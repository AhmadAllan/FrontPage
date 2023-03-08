// this part responsible for show text area after click on add buton
document.getElementById("addBtn").addEventListener("click", () =>{
  let addItemContainer = document.getElementById("add-item-container");
    if (addItemContainer.style.display === "none") {
      addItemContainer.style.display = "flex";
      addItemContainer.style.gap = "10px"
    } else {
      addItemContainer.style.display = "none";
    }
});

// this part responsible for svae the text and send it to php to process it and savr it in database
document.getElementById("saveBtn").addEventListener("click", () => {
    let newItemText = document.getElementById("new-item-textarea").value;
    let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    savedItems.push({text: newItemText, checked: false});
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    loadSavedItems();
    document.getElementById("new-item-textarea").value = "";
});
  

  // edit item
  function editItem(paragraph, index) {
    let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    let item = savedItems[index];
    let newText = prompt("Edit item text", item.text);
    if (newText != null) {
      item.text = newText;
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      paragraph.innerHTML = newText;
    }
  }

  // save an edited item in the list
  function saveEditedItem(newTextarea) {
    let itemText = newTextarea.value;
    let newItemParagraph = document.createElement("p");
    let newItemParagraphNode = document.createTextNode(itemText);
    newItemParagraph.appendChild(newItemParagraphNode);
    newItemParagraph.setAttribute("onclick", "editItem(this)");
    newTextarea.parentNode.replaceChild(newItemParagraph, newTextarea);
  }

   // update item
  function updateItem(checkbox, index) {
    let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    savedItems[index].checked = checkbox.checked;
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    const done = document.getElementById("item-list-done");
  }
  
  
  // load the saved items from local storage
  function loadSavedItems() {
    let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    let itemList = document.getElementById("item-list");
    let doneList = document.getElementById("item-list-done");
    itemList.innerHTML = "";
    doneList.innerHTML = "";
    for (let i = 0; i < savedItems.length; i++) {
      let item = savedItems[i];
      let newItemElement = document.createElement("li");
      let newItemCheckbox = document.createElement("input");
      newItemCheckbox.setAttribute("type", "checkbox");
      newItemCheckbox.setAttribute("onclick", "updateItem(this, " + i + ")");
      newItemCheckbox.checked = item.checked;
      newItemElement.appendChild(newItemCheckbox);
      let newItemParagraph = document.createElement("p");
      newItemParagraph.setAttribute("onclick", "editItem(this, " + i + ")");
      let newItemTextNode = document.createTextNode(item.text);
      newItemParagraph.appendChild(newItemTextNode);
      newItemElement.appendChild(newItemParagraph);
      let newItemDeleteButton = document.createElement("button");
      newItemDeleteButton.innerHTML = "Remove";
      newItemDeleteButton.setAttribute("onclick", "removeItem(" + i + ")");
      newItemElement.appendChild(newItemDeleteButton);
      const donePara = document.getElementById("done");
      if (item.checked) {
        donePara.style.display = "block";
        newItemParagraph.style.textDecoration = "line-through";
        doneList.appendChild(newItemElement);
      } else {
        itemList.appendChild(newItemElement);
      }
    }
  }
  
  // remove item throught button
  function removeItem(index) {
    let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    savedItems.splice(index, 1);
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    loadSavedItems();
  }

  // finish loading the element before call loadSavedItem to make sure all the necessary elements on the page are available.
  window.onload = function() {
    loadSavedItems();
  };

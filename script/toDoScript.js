function showTextArea() {
    var addItemContainer = document.getElementById("add-item-container");
    if (addItemContainer.style.display === "none") {
      addItemContainer.style.display = "flex";
      addItemContainer.style.gap = "10px"
    } else {
      addItemContainer.style.display = "none";
    }
  }
  
  // JavaScript code to save the new item to the list
function saveNewItem() {
    var newItemText = document.getElementById("new-item-textarea").value;
    var savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    savedItems.push({text: newItemText, checked: false});
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    loadSavedItems();
    document.getElementById("new-item-textarea").value = "";
  }
  

  // JavaScript code to save an edited item in the list
  function saveEditedItem(newTextarea) {
    var itemText = newTextarea.value;
    var newItemParagraph = document.createElement("p");
    var newItemParagraphNode = document.createTextNode(itemText);
    newItemParagraph.appendChild(newItemParagraphNode);
    newItemParagraph.setAttribute("onclick", "editItem(this)");
    newTextarea.parentNode.replaceChild(newItemParagraph, newTextarea);
  }

  
  
  // JavaScript code to load the saved items from local storage
  function loadSavedItems() {
    var savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    var itemList = document.getElementById("item-list");
    itemList.innerHTML = "";
    for (var i = 0; i < savedItems.length; i++) {
      var item = savedItems[i];
      var newItemElement = document.createElement("li");
      var newItemCheckbox = document.createElement("input");
      newItemCheckbox.setAttribute("type", "checkbox");
      newItemCheckbox.setAttribute("onclick", "updateItem(this, " + i + ")");
      newItemCheckbox.checked = item.checked;
      newItemElement.appendChild(newItemCheckbox);
      var newItemParagraph = document.createElement("p");
      newItemParagraph.setAttribute("onclick", "editItem(this, " + i + ")");
      var newItemTextNode = document.createTextNode(item.text);
      newItemParagraph.appendChild(newItemTextNode);
      newItemElement.appendChild(newItemParagraph);
      var newItemDeleteButton = document.createElement("button");
      newItemDeleteButton.innerHTML = "Remove";
      newItemDeleteButton.setAttribute("onclick", "removeItem(" + i + ")");
      newItemElement.appendChild(newItemDeleteButton);
      itemList.appendChild(newItemElement);
    }
  }
  function updateItem(checkbox, index) {
    var savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    savedItems[index].checked = checkbox.checked;
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  }

  function editItem(paragraph, index) {
    var savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    var item = savedItems[index];
    var newText = prompt("Edit item text", item.text);
    if (newText != null) {
      item.text = newText;
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      paragraph.innerHTML = newText;
    }
  }

  function removeItem(index) {
    var savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    savedItems.splice(index, 1);
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    loadSavedItems();
  }

  // finish loading the element before call loadSavedItem to make sure all the necessary elements on the page are available.
  window.onload = function() {
    loadSavedItems();
  };
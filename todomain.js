let itemList = [];
let inputButton = document.querySelector(".input_button");
inputButton.addEventListener("click", addItem);


function addItem() {
    let item = document.querySelector(".item").value;
    if (item !=null) {
        itemList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }

    showList();
}

function showList() {
    let list ="<ul>"
    for (let i =0; i<itemList.length; i++){
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span><li>";
    }
    list += "</ul>";
    document.querySelector(".item_list").innerHTML = list;

    let deleteButton = document.querySelectorAll(".close");
    for (let i=0; i< deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", deleteItem);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}

let checkList = document.querySelector('.item_list');
checkList.addEventListener('click', event=> {
    if (event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
});
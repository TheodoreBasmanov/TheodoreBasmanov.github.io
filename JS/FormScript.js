
function getAppStorage() {
    var appStorage = localStorage.getItem('FormContainer');
    if (appStorage == null) {
        localStorage.setItem('FormContainer', JSON.stringify({}));
    }
    appStorage = JSON.parse(localStorage.getItem('FormContainer'));
    return appStorage;
}

function addToAppStorage(id, data) {
    var s = getAppStorage();
    s[id] = data;
    localStorage.setItem('FormContainer', JSON.stringify(s));
    //window.alert(localStorage.getItem('FormContainer'));
}

function removeFromAppStorage(id) {
    var s = getAppStorage();
    delete s[id];
    localStorage.setItem('FormContainer', JSON.stringify(s));
}

function cleanAllLocalStorage() {
    localStorage.removeItem('FormContainer');
}

function loadSavedItems() {
    let savedItems = JSON.parse(localStorage.getItem('FormContainer'));
    if (savedItems) {
        savedItems.items.forEach((item) => {
            processItem(item, false);
        });
    }
}
function createNewItem(text, id) {
    var v = document.createElement('div');
    v.classList.add('form_item');
    v.setAttribute("itemId", id)
    v.innerText = text;
    v.innerHTML += "<img class=\"img-removeButton\" src=\"Resources/RemoveButton.png\" width=\"30\" height=\"30\"/>";
    v.querySelector('.img-removeButton').onclick = function(event) {
        var h = document.querySelector('[itemId="' + id + '"]');
        h.parentElement.removeChild(h);
        removeFromAppStorage(id);
    };
    //window.alert(v);
    //window.alert(document.getElementById("FormContainer"));
    document.getElementById("FormContainer").append(v);
}
function getFormValue() {
    //window.alert("Submitted");
    //window.alert(document.getElementById("smth").value());
    //return document.getElementById("smth").value();
    var inputs = document.getElementById("form").elements;
    var input = inputs[0].value;
    //window.alert(input)
    return input;
}
function cleanFormValue() {
    document.getElementById("smth").value = '';
}
function onFormSubmit() {
    event.preventDefault();
    try {
        let form_value = getFormValue();
        //window.alert(form_value);
        processItem(form_value);
    } catch (e) {
        console.error(e);
    }

    return false;
}
function processItem(text) {
    //window.alert("Submitted");
    if (text.length > 0) {
        var id = document.getElementById("FormContainer").lastElementChild.getAttribute("itemId");
        if(id == null){
            id = 0;
        }
        id++;
        addToAppStorage(id, text);
        createNewItem(text, id);
        cleanFormValue();
    }
}
const list = document.querySelector("FormContainer");
document.addEventListener("DOMContentLoaded", function() {
    var appStorage = getAppStorage();
    for (var i in appStorage) {
        //window.alert(i);
        //window.alert(appStorage[i])
        createNewItem(appStorage[i], i);
    }
});

(() => {
    $(window).on("load", () => {
        document.getElementById("form").on("submit", onFormSubmit);
        //loadSavedItems();
    });
})();
function createNewItem(text) {
    var v = document.createElement('div');
    v.classList.add('form_item');
    var id = document.getElementById("FormContainer").children.length;
    v.setAttribute("itemId", id)
    v.innerText = text;
    v.innerHTML += "<img class=\"img-removeButton\" src=\"Resources/RemoveButton.png\" width=\"30\" height=\"30\"/>";
    v.querySelector('.img-removeButton').onclick = function(event) {
        var h = document.querySelector('[itemId="' + id + '"]');
        h.parentElement.removeChild(h);
        //removeFromAppStorage(id);
    };
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
    document.getElementById("smth").val('').trigger('blur');
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
function processItem(text, save=true) {
    //window.alert("Submitted");
    if (text.length > 0) {
        //if (save) {
        //    saveToLocalStorage(text);
        //}
        createNewItem(text);
        cleanFormValue();
    }
}
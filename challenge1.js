var outputEl = document.getElementById("outputField");
var createButtonEl = document.getElementById("create");
var textEl = document.getElementById("userText");
var cardEl = document.getElementsByClassName("card");

createButtonEl.addEventListener("click", insertCard);

function insertCard() {
  outputEl.innerHTML += "<div class='card'>" + 
    '<input type="color" name="colorPicker" id="bgPicker" value="#FF0000">' +
    '<input type="color" name="colorPicker" id="fontColorPicker" value="#FF0000">' +
    '<input type="button" value="Delete" id="deleteButton">' +
    '<p>' + textEl.value + '</p>' +
    '</div>';
}


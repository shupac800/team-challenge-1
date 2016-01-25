var outputEl = document.getElementById("outputField");
var createButtonEl = document.getElementById("create");
var textEl = document.getElementById("userText");
var cardEl = document.getElementsByClassName("card");

createButtonEl.addEventListener("click", insertCard);

function insertCard() {
  outputEl.innerHTML += "<div class='card'>" + 
    '<input type="color" name="colorPicker" class="bgPicker" value="#FF0000">' +
    '<input type="color" name="colorPicker" class="fontColorPicker" value="#FF0000">' +
    '<input type="button" value="Delete" class="deleteButton">' +
    '<p>' + textEl.value + '</p>' +
    '</div>';

  var bgPickerEl = document.getElementsByClassName("bgPicker");
  for (var i = 0; i < bgPickerEl.length; i++) {
    bgPickerEl[i].addEventListener("change", changeBg, false);
  }

  var cardDeleteEl = document.getElementsByClassName("deleteButton");
  for (var i = 0; i < cardDeleteEl.length; i++) {
    cardDeleteEl[i].addEventListener("click", deleteCard, false);
  }
}

function changeBg() {
  var newColor = event.target.value;
  event.target.parentElement.style.backgroundColor = newColor;
  
}

function deleteCard() {
  event.target.parentElement.remove();
}
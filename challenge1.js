var outputEl = document.getElementById("outputField");
var createButtonEl = document.getElementById("create");
var textEl = document.getElementById("userText");
var cardEl = document.getElementsByClassName("card");

createButtonEl.addEventListener("click", insertCard);

function insertCard() {
  var newNode = document.createElement('div');

  var outputHTML = "<div class='card'>";
  outputHTML += '<input type="color" name="colorPicker" class="bgPicker" value="#FF0000">';
  outputHTML += '<input type="color" name="colorPicker" class="fontColorPicker" value="#FF0000">';
  outputHTML += '<input type="button" value="Delete" class="deleteButton">';
  outputHTML += '<p>' + textEl.value + '</p>' + '</div>';

  newNode.innerHTML = outputHTML;

  while (newNode.firstChild){
    outputEl.appendChild(newNode.firstChild);
  }

  var bgPickerEl = document.getElementsByClassName("bgPicker");
  bgPickerEl[bgPickerEl.length-1].addEventListener("change", changeBg);

  var fontColorPickerEl = document.getElementsByClassName("fontColorPicker");
  fontColorPickerEl[fontColorPickerEl.length-1].addEventListener("change", changeTextColor);

  var cardDeleteEl = document.getElementsByClassName("deleteButton");
  for (var i = 0; i < cardDeleteEl.length; i++) {
    cardDeleteEl[i].addEventListener("click", deleteCard, false);
  }
}

function changeBg() {
  var newColor = event.target.value;
  event.target.parentElement.style.backgroundColor = newColor;
}

function changeTextColor() {
  var newColor = event.target.value;
  event.target.parentElement.style.color = newColor;
}


function deleteCard() {
  event.target.parentElement.remove();
}
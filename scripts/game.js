window.onload = randomizeBoard;

function gameButtonPressed(buttonNumber) {
  switch (buttonNumber) {
    case 1:
      toggleButtons([1, 2, 4]);
      break;
    case 2:
      toggleButtons([1, 2, 3, 5]);
      break;
    case 3:
      toggleButtons([2, 3, 6]);
      break;
    case 4:
      toggleButtons([1, 4, 5, 7]);
      break;
    case 5:
      toggleButtons([2, 4, 5, 6, 8]);
      break;
    case 6:
      toggleButtons([3, 5, 6, 9]);
      break;
    case 7:
      toggleButtons([4, 7, 8]);
      break;
    case 8:
      toggleButtons([5, 7, 8, 9]);
      break;
    case 9:
      toggleButtons([6, 8, 9]);
      break;
    default:
      break;
  }
}

function toggleButtons(buttonNumbers) {
  for (const buttonNumber of buttonNumbers) {
    button = document.getElementById("button" + buttonNumber);
    let status = button.getAttribute("data-status");
    if (status === "on") {
      button.dataset.status = "off";
      button.innerHTML = "&#9899"
    }
    else {
      button.dataset.status = "on";
      button.innerHTML = "&#9788";
    }
  }
}

function randomizeBoard () {
  gameButtons = document.getElementsByClassName("game-button");
  for (const gameButton of gameButtons) {
    let roll = Math.random();
    if (roll < 0.5) {
      gameButton.dataset.status = "off";
      gameButton.innerHTML = "&#9899"
    }
    else {
      gameButton.dataset.status = "on";
      gameButton.innerHTML = "&#9788";
    }
  }
}
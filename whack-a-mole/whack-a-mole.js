// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// Create variable for the individual cells in the HTML Table
let cells = document.getElementsByTagName('TD')

// Create a varible for the randomly selected index - this cannot be longer then the length of the table
let randomNum = Math.floor(Math.random() * cells.length)

// set new variable for the randomCell selected using randomNum
let randomCell = cells[randomNum]

// create a variable for the mole png that represents an image
// set image src to the mole png
// set id to mole - changed id in css to match - this is to change the width and height to match the table and prevent stretching
// using random.Cell and the .appendChild method, insert the mole.png into a randomly selected cell
let mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole'
randomCell.appendChild(mole)

// create an onclick method for a whacking function. this is to execute the function using the mole that was selected with the mouse
mole.onclick = whackedMole

function whackedMole() {
  // Function for whacking the mole. this takes the random cell and num variables from before and randomizes them again
  randomNum = Math.floor(Math.random() * cells.length)
  randomCell = cells[randomNum]
  // Then it takes the mole image and places it in the new randomCell with the appendChild method
  randomCell.appendChild(mole)
  // Then it takes the audio from specified location and places it into a new variable for audio
  const audio = new Audio('./whack-audio.wav')
  // play audio from the variable
  audio.play()
}

var colors = [];
var pickedColor;
var numsq = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//easy and hard button event listeners
	for(var i= 0; i< modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numsq = 3: numsq = 6;
			reset();
		});
	}

	for(var i = 0; i < squares.length; i++){
	//add click listeners
		squares[i].addEventListener("click", function(){
			//get color of clicked square
			var clickedColor = this.style.backgroundColor;
			//code run if you WIN
			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}

	reset();
}

function reset(){
	colors = generateRandomColors(numsq);
	//pick new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			//brings back the other squares/
			squares[i].style.display = "block";	
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
			}
		}
		h1.style.background = "steelblue";
	}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColor(color){
	//loop through sqared
	for(var i = 0; i < colors.length;i++){
		//change each color to match the "right" color.
		squares[i].style.backgroundColor = color;
	}
}
	
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		//get random color
		arr.push(randomColor())
	}
	//return the array
	return arr;
}

function randomColor(){
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	//needs spaces after the commas so it prints the same as the DOM
	return "rgb" + "(" + r + ", " + g + ", " + b + ")";
};


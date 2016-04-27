var library = ["A","B","C","D","E","F","G","H"];

var guess;
var gameWin;
var gameGuess;
var lvl = 1;
var pauseTime = [5000,2000,1000,700,500];

function startGame () {
	guess = Math.floor(Math.random()*8)
	gameWin = library[guess];
	document.getElementById('image').innerHTML = library[guess];
	document.getElementById('startButton').innerHTML = "<button onclick='startRandom()'>Let's Go</button>";
	document.getElementById('level').innerHTML = "Level "+lvl;
	console.log("memorize Letter");
}

var randomLetter

function startRandom () {
	console.log("Guessing Letter");
	console.log(gameWin);
	changeLetter()
	document.getElementById('startButton').innerHTML = "<button onclick='found()'>That's It</button>";
	randomLetter = setInterval(changeLetter,pauseTime[lvl]);
}


function changeLetter () {
	guess = Math.floor(Math.random()*8)
	gameGuess = library[guess];
	document.getElementById('image').innerHTML = library[guess];
}

function found () {
	if (gameWin === gameGuess){
		document.getElementById('check').innerHTML = "You Win!";
		clearInterval(randomLetter);
		document.getElementById('startButton').innerHTML = "<button onclick='startGame()'>Start Game</button>";
		document.getElementById('image').innerHTML = "";
		if (lvl === 4) {
			document.getElementById('check').innerHTML = "You Win The Game Until you Lose again";
		} else {
			lvl++;
		};

	} else {
		clearInterval(randomLetter);
		document.getElementById('check').innerHTML = "You 'tupid";
		document.getElementById('startButton').innerHTML = "<button onclick='startGame()'>Start Game</button>";
		document.getElementById('image').innerHTML = "";
		if (lvl === 1) {
			lvl=1;
		} else {
		lvl--;
		}
	}
}

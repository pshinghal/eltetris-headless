var ElTetris = require("./eltetris");

var game = new ElTetris(10, 20);
console.log("Built Game");
var score = 0;
var i;

console.log("Completed " + game.rows_completed + " rows");
for (i = 0; i < 100000000; i++) {
	if (i % 100000 === 0)
		console.log("On move number " + i);
	game.play();
	score = game.rows_completed;
	if (score % 10000 === 0)
		console.log("Score: " + score);
	/*
	if (game.rows_completed !== score) {
		score = game.rows_completed;
		//console.log("Score: " + score);
	}
	*/
}

console.log("Completed " + game.rows_completed + " rows");

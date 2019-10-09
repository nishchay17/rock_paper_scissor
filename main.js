var user_score = 0 ;
var comp_score = 0 ;
const user = document.getElementById("user");;
const comp = document.getElementById("comp");
const rock_img = document.getElementById("rock");
const scissor_img = document.getElementById("scissor");
const paper_img = document.getElementById("paper");
const message_p = document.querySelector(".message");


function getchoice() {
	list = ["paper" , "rock" , "scissor"]
	var index = Math.floor(Math.random() * 4);
	return list[index];
}

function win(user_choice, comp_choice) {
	user_score ++;
	user.innerHTML = user_score;
	message_p.innerHTML = user_choice + " beats " + comp_choice + ". You win!";
	document.getElementById(user_choice).classList.add("green");
	setTimeout(function(){document.getElementById(user_choice).classList.remove("green");}, 400)
}

function lose(user_choice, comp_choice) {
	comp_score ++;
	comp.innerHTML = comp_score;
	message_p.innerHTML = comp_choice + " beats " + user_choice + ". You loss...";
	document.getElementById(user_choice).classList.add("red");
	setTimeout(function(){document.getElementById(user_choice).classList.remove("red");}, 400)
}

function draw(choice) {
	message_p.innerHTML = choice + " is same as " + choice + ". It's a draw.";
	document.getElementById(choice).classList.add("grey");
	setTimeout(function(){document.getElementById(choice).classList.remove("grey");}, 400)	
}

function game(user_choice) {
	
	comp_choice = getchoice();

	switch(user_choice+comp_choice){
		case "rockscissor":
		case "scissorpaper":
		case "paperrock":
			win(user_choice, comp_choice);
			break;
		case "rockpaper":
		case "scissorrock":
		case "paperrock":
			lose(user_choice, comp_choice);
			break;
		case "rockrock":
		case "scissorscissor":
		case "paperpaper":
			draw(user_choice);
			break;
	}

}


function main() {
	rock_img.addEventListener('click' , function(){
		game("rock");
	} )

	scissor_img.addEventListener('click' , function(){
		game("scissor");
	})

	paper_img.addEventListener('click' , function(){
		game("paper");
	})
}
main();
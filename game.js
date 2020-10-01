
//count how many times button have been clicked 
var countClick = 0;
function count(){
	countClick ++;
	document.getElementById("displayCount").innerHTML = countClick; 
}

var countPaper = 0;
var countScissors = 0;
var countRock = 0;
var user = "";  
function play(){ 
	//display user choose 
		if (document.getElementById('paper').checked){
			document.getElementById("display").innerHTML = "Paper";
			user = "Paper";
		} 
		else if (document.getElementById('scissors').checked){
			document.getElementById("display").innerHTML = "Scissors";
			user = "Scissors";
		}
		else if(document.getElementById('rock').checked){
			document.getElementById("display").innerHTML = "Rock";
			user = "Rock"; 
		}
		else { //promt an alert when user not selected 
		window.alert("Please choose one to play");
		}

	//display random computer choose
	var option = ["Paper","Scissors","Rock"];
	var random = option[Math.floor(Math.random()*3)];
	document.getElementById('computerChoose').innerHTML = random; 
	document.getElementById('computerChoose2').innerHTML = random;  

	//count output of computer
	if (random === "Paper"){
		countPaper++;
		document.getElementById('countPaper').innerHTML = countPaper; 
	}
	else if (random === "Scissors"){
		countScissors++; 
		document.getElementById('countScissors').innerHTML = countScissors; 
	} 
	else {
		countRock++; 
		document.getElementById('countRock').innerHTML = countRock; 
	}

	//call the compare function 
	document.getElementById('resultDisplay').innerHTML = compare (user,random);
	document.getElementById('resultDisplay2').innerHTML = compare (user,random);

	return random; 
	

}

function go(){
	play();
	count(); 

}

function compare(yourInput,computerGen){
	//case 1: tie
	if (yourInput === computerGen){
		return ("It's a tie!");	
	}

	//case 2: paper vs scissors, paper
	if (yourInput === "Paper"){
		if (computerGen === "Scissors"){
			return ("You lose!");
		}
		else {
			return ("You win!");	
		}
	}

	//case 3: scissors vs paper, rock
	if (yourInput === "Scissors"){
		if (computerGen === "Rock"){
			return ("You lose!");
		}
		else {
			return ("You win!");
		}
	}
	//case 4: rock vs paper, scissors
	if (yourInput === "Rock"){
		if (computerGen === "Paper"){
			return ("You lose!");
		}
		else {
			return ("You win!");
		}
	}
}

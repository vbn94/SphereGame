
var currentNum = 0;
var count = 0;
var money = [500, 1000, 2000, 5000, 10000, 20000, 30000, 50000, 100000, 1000000];


function hide(){
	document.getElementById("b2").style.display = "none";
	document.getElementById("b3").style.display = "none";
	document.getElementById("b4").style.display = "none";
}

function show(){
	document.getElementById("b2").style.display = "inline";
	document.getElementById("b3").style.display = "inline";
	document.getElementById("b4").style.display = "inline";
}

function reset(){
	count = 0;
	currentNum = 1 + Math.floor(Math.random() * 50);
	document.getElementById("res").innerHTML = "Твоята печалба е: " + money[count]  + " лева.";
	document.getElementById("num").innerHTML = currentNum;
    show();	
}

function action(choise){
	var rand = 0;
	while ((rand = 1 + Math.floor(Math.random() * 50)) == currentNum);
	document.getElementById("num").innerHTML = rand;
	// 1-> up, other->down
	var condition = (choise == 1) ? (rand > currentNum) : (rand < currentNum);
	if (condition) {
		count++;
		if (count == 9){
			document.getElementById("res").innerHTML = "Честито!!!! Твоята печалба е: " + money[count] + " лева.";
			hide();
		} else {
			document.getElementById("res").innerHTML = "Твоята печалба е: " + money[count] + " лева.";
			currentNum = rand;
		}			
	} else {
		document.getElementById("res").innerHTML = "Изгуби всичко!";
		hide();
	}
}

function takeMoney() {
	hide();
	document.getElementById("res").innerHTML = "Честито! Ти спечели " + money[count] + " лева.";
}
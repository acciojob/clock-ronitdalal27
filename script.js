//your JS code here. If required.
function updateTimer(){
	const timer = document.getElementById("timer");
	const date = new Date();
	
	const year = date.getFullYear();
	const month = String(date.getMonth()+1).padStart(2,"0"); //bcoz Date() function takes month from 0 so +1 and padstart is to make single month look 07 instead of 7
	const day = String(date.getDate()).padStart(2,"0");
	const hours = date.getHours();
	const formatedHours = hours % 12 || 12;
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");
	const ampm = hours>=12 ? "PM" : "AM";
	const formatedTime = `${month}/${day}/${year}, ${formatedHours}:${minutes}:${seconds} ${ampm}`;

	timer.textContent = formatedTime;
}

updateTimer();

setInterval(updateTimer,1000); //after every 1 second updateTimer will get called
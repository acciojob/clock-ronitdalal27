//your JS code here. If required.
function updateTimer{
	const timer = document.getElementById("timer");
	const date = new Date();
	
	const year = date.getFullYear();
	const month = String(date.getMonth()+1).padStart(2,"0"); //bcoz Date() function takes month from 0 so +1 and padstart is to make single month look 07 instead of 7
	const day = String(date.getDate()).padStart(2,"0");
	const hours = date.getHours();
	const minutes = String(date.getminutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");

	const formatedTime = month+"/"+date+"/"year+","+hours+":"+minutes+":"+seconds+"PM";

	timer.textContent = formatedTime;
}

updateTimer();
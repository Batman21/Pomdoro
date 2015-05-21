/*jslint browser:true */

notID = 0;

// iconURL
path = "/images/tomato-icon.png";

var options = {
	type : "basic",
	priority : 1,
	title : "Pomodoro Timer",
	message : "00:00", // return in real time
	iconUrl : path,
};

// Create notification
function notify(evt) {
	chrome.notifications.create("id"+notID++, options);
	console.log("testing one two three.");
}

// Countdown
// Notify every -10min, last 5min, last 1min, and last 10 seconds


// Window initialization, sets up event handler *is a must*
window.addEventListener("load", function() {
	document.getElementById("start").addEventListener("click", notify);

	/* set up event listeners for interaction w/ desktop notification
	chrome.notifications.onClosed.addListener(notificationClosed);
	chrome.notifications.onClicked.addListener(notificationClicked);
	chrome.notifications.onButtonClicked.addListener(notificationBtnClick);
	*/
});
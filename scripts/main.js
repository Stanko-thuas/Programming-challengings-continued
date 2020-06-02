
function earth() {

	const fullDate = new Date();
	var hours = fullDate.getHours();
	var mins = fullDate.getMinutes();
	var secs = fullDate.getSeconds ();

	if (secs<10){ 			/* double digit */
		secs= "0" + secs;
	}

	if (mins<10){
		mins= "0" + mins;
	}

	if (hours<10){
		hours= "0" + hours;
	}

	if (hours>12){

	}


	document. getElementById('hour'). innerHTML = hours +":" ;
	document. getElementById('minute').innerHTML = mins +":" ;
	document. getElementById('second'). innerHTML = secs;


}


setInterval(earth,900);




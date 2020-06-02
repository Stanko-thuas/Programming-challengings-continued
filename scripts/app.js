
function mars() {

	var fullDate = new Date();
	var hours = fullDate.getHours(24);
	var mins = fullDate.getMinutes(61);
	var secs = fullDate.getSeconds (61);
	var mdiff=2;
  

	

	if (secs<10){ 
		secs= "0" + secs;
	}

	if (mins<10){
		mins= "0" + mins;
		
	}

	if (hours<10){
		hours= "0" + hours;
	}

	if (mins>10){
		mins= "" + mins;
	}
	if (mins>"61"){
		mins= "0" + mins / 2;
	}

	// Since a 24 hours day has 1440 minutes I added 40 which takes for mars to complete a full circle making it 1480, which I devided//
	// by 24 making it 1.6 I feel its weird to add a decimal number so i rounded
	// it up to 2. I add 2 minutes for each hour making it 24x2=48 minutes. The math is wrong and unrealistic but this is the best I could do//

	document. getElementById('hour'). innerHTML = hours +":" ;
	document. getElementById('minute').innerHTML = mins*mdiff +":"   // *2 minutes 
	document. getElementById('second'). innerHTML = secs;
	

}



setInterval(mars,1000);






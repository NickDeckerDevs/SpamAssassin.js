var data = {
        'email': 'emailtext',
        'options': 'long',  // long or short
  	}
		
function sendJsonSubmission() {
	data.email = emailInsert;  // This is your email, Header and ALL
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://spamcheck.postmarkapp.com/filter");
	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	xhr.send(JSON.stringify(data));
	xhr.onreadystatechange = function () {
		if (this.readyState == 4) {
			var mailReport = JSON.parse(xhr.responseText);
			// var successText = mailReport.success;  
			// var messageText = mailReport.message;  
			var reportText = mailReport.report;
			var scoreText = mailReport.score;
			document.getElementById("divReport").innerText = reportText;
			document.getElementById("divScore").innerText = scoreText;
			return;
		} else {
			var serverStatus = "Loading, Please Wait";
		}
	}
}

function compute()
	{
	//defining variables
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate /100;
	var year = new Date().getFullYear()+parseInt(years);
	//Writing interest sentence based on variables
  if(interest >= principal){
	document.getElementById("result").innerHTML = "If you deposit <span class='highlight'>" + principal + 
	"</span>,\<br\>at an interest rate of <span class='highlight'>" + rate + "</span>%\<br\>You will recieve an amount of <span class='highlight'>" + interest + "</span>,\<br\>in the year <span class='highlight'>" + year + "</span>\<br\>Interest is greater than or equal to principle";
  }
  if(interest < principal){
	document.getElementById("result").innerHTML = "If you deposit <span class='highlight'>" + principal + 
	"</span>,\<br\>at an interest rate of <span class='highlight'>" + rate + "</span>%\<br\>You will recieve an amount of <span class='highlight'>" + interest + "</span>,\<br\>in the year <span class='highlight'>" + year + "</span>\<br\>Interest is less than principle";
  }
	//if amount 0 or negative, dispay alert and take user back to text box
	if (principal <= 0) {
	alert("Enter a positive number");
	document.getElementById("principal").focus();
	}
	}
	

	function updateRate() // Changes Rate Text when slider moved
	{
	    var rateval = document.getElementById("rate").value + "%";
	    document.getElementById("rate_val").innerText=rateval;
	}

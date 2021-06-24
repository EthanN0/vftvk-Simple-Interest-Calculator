function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
if (principal > 0) {
document.getElementById("result").innerHTML = "If you deposit <span class='highlight'>" + principal + 
"</span>,\<br\>at an interest rate of <span class='highlight'>" + rate + "</span>%\<br\>You will recieve an amount of <span class='highlight'>" + interest + "</span>,\<br\>in the year <span class='highlight'>" + year + "</span>";
}else{
document.getElementById("result").innerHTML = "Enter a positive number";
}
}
        

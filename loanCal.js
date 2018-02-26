 document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed")
    setListeners();
  });

 function setListeners(){
 	var amount = document.querySelector('#amount');
 	var borrow = document.querySelector('#borrow');

 	var period = document.querySelector('#period');
 	var month = document.querySelector('#month');

 	var apr = document.querySelector('#apr');
 	

//update amount output
 	amount.addEventListener('input', function() {
  console.log(this.value);
  borrow.value = this.value;
  AMOUNT = parseFloat(this.value);
  instalment();
  totalRepayable()
});


	amount.addEventListener('input', function() {
  console.log(this.value);
  borrow.value = this.value;
  AMOUNT = parseFloat(this.value);
});

//set APR listener 
amount.addEventListener('input', function() {
	if (this.value < 1001) {
		apr.value = 42.6;


	} else if (this.value < 5001) {
		apr.value = 26.8;
	
	} else {
		apr.value = 9;
	}

	APR = parseFloat(apr.value);
	instalment();
	totalRepayable()
});

 //set period listener
	period.addEventListener('input', function() {
  console.log(this.value);
  month.value = this.value;
  PERIOD = parseFloat(month.value);
  instalment();
  totalRepayable()
});


}

var AMOUNT = 2000;
var APR = 26.8;
var PERIOD = 24;


//Period repayments
function instalment(){

	var interestPerMonth = APR * (1/1200);

	var emi = (interestPerMonth * AMOUNT) / (1 - (Math.pow((1+interestPerMonth), PERIOD*-1)));

	var repayment = document.querySelector('#repayment');

	repayment.value = emi.toFixed(2);

	console.log( "Print");
	console.log(emi);
	}

	function setDefaultState() {
  borrow.value = amount.value;
  month.value = period.value;
}

document.addEventListener('DOMContentLoaded', function(){
  setDefaultState();
  instalment();
});

function totalRepayable(){
	totalRepayment = document.querySelector('#total-repayment');
	total = parseFloat(repayment.value) * parseFloat(period.value);
	totalRepayment.value = total.toFixed(2);
};
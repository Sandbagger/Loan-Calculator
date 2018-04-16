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

 	var homeSearch = document.querySelector('#home-postcode');
 	var workSearch = document.querySelector('#work-postcode');
 	var employer = document.querySelector('#employer');
 	

//update amount output
 	amount.addEventListener('input', function() {
  console.log(this.value);
  borrow.value = this.value;
  AMOUNT = parseFloat(this.value);
  instalment();
  totalRepayable()
});


borrow.addEventListener('input', function() {
	amount.value = this.value;
})

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
		apr.value = 10.9;
	}

	APR = parseFloat(apr.value);
	instalment();
	totalRepayable()
});

 //set period listener
	period.addEventListener('input', function() {
  console.log("this period of months: " + this.value);
  month.value = this.value;
  PERIOD = parseFloat(month.value);
  instalment();
  totalRepayable()
});

//set listener for postcode search
     homeSearch.addEventListener('input', function () {
         var url = "https://www.findyourcreditunion.co.uk/search?Location=" + this.value + "&EmploymentLocation=&EmploymentName=&Associations="
         document.querySelector('#cta').setAttribute("href", url);

     });

//set listener for postcode search
     workSearch.addEventListener('input', function () {
         var url = "https://www.findyourcreditunion.co.uk/search?Location=&EmploymentLocation=" + this.value + "&EmploymentName=&Associations="
         document.querySelector('#cta').setAttribute("href", url);

     });

//set listener for postcode search
employer.addEventListener('input', function(){
	var url = "https://www.findyourcreditunion.co.uk/search?Location=&EmploymentLocation=&EmploymentName="+ this.value +"&Associations="
	document.querySelector('#cta').setAttribute("href", url);
});

//popover
$(function () {
  $('[data-toggle="popover"]').popover()
})

}

var AMOUNT = 2000;
var APR = 26.8;
var PERIOD = 24;



//Period repayments
function instalment(){

	var annualRate; 

	if (APR === 10.9) {
		annualRate = 8.65;
	} else if (APR === 26.8){
		annualRate = 24;
	} else {
		annualRate = 36;
	}	

	console.log(annualRate);

	var interestPerMonth = annualRate * (1/1200);

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

//CSS Chrome hack for sliders

var isChromium = !!window.chrome;


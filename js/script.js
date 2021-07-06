const txtElement = ['illustrator', 'Web Developer', 'Engineer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words= '';

(function ngetik(){
	
	if (count == txtElement.lenght){
		 count = 0;
	}

	currentTxt = txtElement[count];



	if(words.lenght == currentTxt.lenght){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 500);

})(); 

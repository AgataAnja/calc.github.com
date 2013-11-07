function Controller (node) {
    var calculator = new Calc(),
    	operand_first,
        operand_second,
        rezult,
        arithmetic_keys,
        numeric_keys,
        input_fields,
        current_field;    

    this.wrapper = node;
    arithmetic_keys = this.wrapper.getElementsByClassName('arithmetic_keys');
    numeric_keys = this.wrapper.getElementsByClassName('numeric_keys');
    input_fields = this.wrapper.getElementsByClassName('input');
    current_field = input_fields[1];

    arithmetic_keys[0].addEventListener('click', calculating, false);
    numeric_keys[0].addEventListener('click', inputNumeric, false);
    input_fields[0].addEventListener('click', inputOperand, false);

	function inputOperand (event) {
    	event = event || window.event;
    	var target  = event.target||event.srcElement;

    	if (target.tagName === 'INPUT') {
    		current_field = target;
    	}
	}

	function inputNumeric (event) {
    	event = event || window.event;
    	var target  = event.target||event.srcElement;

    	if (target.tagName === 'BUTTON') {
    		current_field.value += target.value;
    	}		
	}
    
    function calculating (event) {
    	event = event || window.event;
    	var target  = event.target||event.srcElement;

    	operand_first = parseFloat(input_fields[1].value);
    	operand_second = parseFloat(input_fields[2].value);

        if (target.tagName === 'BUTTON') {
        	switch (target.value) {
                	case 'add' : { 
                		calculator.addition(operand_first, operand_second); 
                		break; 
                	}
                	case 'sub' : { 
                		calculator.subtraction(operand_first, operand_second); 
                		break; 
                	}
                	case 'mult' : { 
                		calculator.multiply(operand_first, operand_second); 
                		break; 
                	}
                	case 'div' : { 
                		calculator.division(operand_first, operand_second); 
                		break; 
                	}
                }
        	
        }
    }

    this.showRezult = function (rezult) {
        input_fields[3].value = rezult;
        alert(rezult);
    }
}
function Calc () {
	var	ajax = new AjaxRequest();

    this.addition = function (operand_first, operand_second) {
    	ajax.create('add', operand_first, operand_second);
    }

    this.subtraction = function (operand_first, operand_second) {
    	ajax.create('sub', operand_first, operand_second);
    }

    this.multiply = function (operand_first, operand_second) {
    	ajax.create('mul', operand_first, operand_second);
    }

    this.division = function (operand_first, operand_second) {
    	ajax.create('div', operand_first, operand_second);
    }

    return this;	
}
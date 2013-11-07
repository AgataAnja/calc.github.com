function AjaxRequest () {
	var ajax = new XMLHttpRequest();

    this.create = function (operation, operand_first, operand_second) {
	    ajax.open('GET', operation+'.php?operand1='+operand_first+'&operand2='+operand_second+'', true);
        ajax.onreadystatechange = function () {
	   	if ((ajax.readyState == 4) && (ajax.status == 200)) {
            alert('hello');
	   		control.showRezult(ajax.responseText);
	   		console.log(ajax);
	   	}
	   };
	   ajax.send();
    }

    return this;
}
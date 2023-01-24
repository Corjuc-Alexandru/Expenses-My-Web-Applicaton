
function addNewLine() {
	var countRows = document.getElementById("table").rows.length;
	let table = document.querySelector('#table');

	let tr = document.createElement('tr');
	tr.setAttribute("id", countRows);

	var newCell = tr.insertCell(0);
	var tBox = document.createElement('input');
	tBox.setAttribute('type', 'text');
	tBox.setAttribute('id', 'dataName' +countRows);
	tBox.setAttribute('value', '');
	newCell.appendChild(tBox);

    var newCell = tr.insertCell(1);
	var dBox = document.createElement('input');
	dBox.setAttribute('type', 'date');
	dBox.setAttribute('id', 'dataDate' +countRows);
	dBox.setAttribute('value', '');
	newCell.appendChild(dBox);

    var newCell = tr.insertCell(2);
	var nBox = document.createElement('input');
	nBox.setAttribute('type', 'number');
	nBox.setAttribute('id', 'dataPaid' +countRows);
	nBox.setAttribute('value', '');
	newCell.appendChild(nBox);

	var newCell = tr.insertCell(3);
	var cBox = document.createElement('input');
	cBox.setAttribute('type', 'checkbox');
	cBox.setAttribute('value', '');
	cBox.setAttribute('id', "cb" + countRows);
	newCell.appendChild(cBox);
	table.appendChild(tr);

		
}

function remALine() {

	var countRows = document.getElementById("table").rows.length;
	var rowsmustbedeleted = new Array();
	var index = 0;
	for (var i = 1; i < countRows; i++) {
		var table = document.getElementById("table");
		var trid = table.getElementsByTagName("tr")[i].id;
	
		if (document.getElementById("cb" + trid).checked == true) {
			rowsmustbedeleted[index] = trid;
			index++;
		}
	}
    for (var i = 0; i < rowsmustbedeleted.length; i++) {

		document.getElementById(rowsmustbedeleted[i]).remove();

    }
}

function sellectAllLine() {

		// this refers to the clicked checkbox
		// find all checkboxes inside the checkbox' form
		var elements = this.table.getElementsByTagName('input');
		// iterate and change status
		for (var i = elements.length; i--;) {
			if (elements[i].type == 'checkbox', elements[i].checked == false)
			{
				document.querySelectorAll('input[type="checkbox"]')
					.forEach(el => el.checked = true);
				break;
			}
			
			else {
				document.querySelectorAll('input[type="checkbox"]')
					.forEach(el => el.checked = false);
				break;
			}
		
	    }
}
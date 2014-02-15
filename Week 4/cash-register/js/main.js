// enter value~
// get that value~
// create new row in table~
// format currency~
// calculate total~

// var entryValue;
// var total;
// var rowTotal;
// var d = document;

d.getElementById ('entry').onsubmit = addNewEntry;

var entryField = d.getElementById('newEntry');

function addNewEntry (){
	//add a new entry
	var entryValue = entryFeild.value;
	var entryRow = '<tr><td></tr></td>' + entryValue + '</td></tr>'

	d.getElementById ('entries').innerHTML += entryRow;

	clearInput();
	return false;
}
function convertCurrency(entryValue){	
	return '£" + entryValue.toFixed(2);
}
function clearInput (){
	entryValue.toFixed(2);
}
function clearInput(){
	entryField.value = '';

	} 
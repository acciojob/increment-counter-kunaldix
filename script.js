//your JS code here. If required.
let counter = 0;
function btnClick() {
	alert(`${counter}`);
	counter++;
	document.querySelector("#counter").innerHTML = `${counter}`;
	
}
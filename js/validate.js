const form = document.getElementById('regForm');
const patientName = document.getElementById('floatingInput');
const NinFields = document.getElementById('Input');
const regDate = document.getElementById('date-pick');




form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


const checkInputs = () => {

	if(patientName.value === ""){
	patientName.style.border = '2px solid red';
	patientName.focus();
	}else{
	patientName.style.border = '2px solid green';
	patientName.focus();
	}

	if(NinFields.value ===""){
		NinFields.style.border = '2px solid red';
		NinFields.focus();
	}else{
		NinFields.style.border = '2px solid green';
		NinFields.focus();
	}

	if(regDate.value ===""){
		regDate.style.border = '2px solid red';
		regDate.focus();
	}else{
		regDate.style.border = '2px solid green';
		regDate.focus();
	}

}
const form = document.getElementById('regForm');
let txtinput = document.querySelectorAll('.form-control');
let tblsel = document.querySelectorAll('.form-check-input');
const select = document.getElementById('select');
let gender = document.querySelectorAll('.radio1');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


const checkInputs = () => {

	// for input fields
    for(var i = 0; i < txtinput.length; i++){
        if(txtinput[i].value === ""){
           txtinput[i].style.border = '4px solid red';
            txtinput[i].focus();
        }else{
            txtinput[i].style.border = '4px solid green';
            txtinput[i].focus();
        }
    }

    // for table
    for(var j = 0; j < tblsel.length; j++){
        if(tblsel[j].checked === true){
            tblsel[j].style.border= '4px solid green';
            tblsel[j].focus();
        }
    }

   
//   select region
    for(var k =0; k<select.length; k++){

        if(select.innerText === try1){
            select.style.border = '2px solid red';
            select.focus();
        }else{
            select.style.border = '2px solid green';
            select.focus();
        }
    }
  

    // radio btn
    for(var z=0; z < gender.length; z++){

        if(gender[z].selected === false){
            gender[z].style.border = '4px solid red';
            gender[z].focus();
        }else{
            gender[z].style.border = '4px solid green';
            gender[z].focus();
        }
    }
}



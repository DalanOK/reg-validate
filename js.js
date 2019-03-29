function valid(form){
	var username = document.getElementById('username').value;
	var password = document.querySelector("#pass").value;

	if(password.length<6){
		document.getElementById('pass').style.border = '1px solid red';
	}
	else if(isNumeric(password)){
		document.getElementById('pass').style.border = '1px solid red';
	}
	else if(isBig(username)){
       document.getElementById('username').style.border = '1px solid red';
	}
    else{
		document.getElementById('pass').style.border = '1px solid green';
		document.getElementById('username').style.border = '1px solid green';
		alert("Вы залогинились")
	}

}
function isNumeric( value ) {
  return (/\d/).test( value );
}
function isBig( value ){
	return (/[A-Z]/).test( value );
}
function signup(){
	var email = document.getElementById('semail').value
	var pass = document.getElementById('spass').value
	localStorage.setItem('Email' ,email)
	localStorage.setItem('Password' ,pass)
	location.href = "./signin.html"
}


function signin(){
	var email = document.getElementById('lemail').value
	var pass = document.getElementById('lpass').value
	if(localStorage.getItem('Email') == email && 
		localStorage.getItem('Password') == pass)
		 location.href = './welcome.html'


	 //    if(email == 'uzma@gmail.com' && pass == '1234555')

	// 	{ alert ("welcome user...")

	 // }
	else{
		alert("sorry try again")
		location.href = './signup.html'
	}
}

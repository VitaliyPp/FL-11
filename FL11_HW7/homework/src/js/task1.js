let email = prompt('write your email', '');

let list = {
	num: 6,
	user: {
		email:'user@gmail.com', 
		pass: 'UserPass'
	},
	admin: {
		email: 'admin@gmail.com',
		pass: 'AdminPass'
	},
	text: {
		cancel: 'Canceled.',
		length:'I don\'t know any emails having name length less than 6 symbols',
		wrong: 'Wrong password',
		failed: 'You have failed the change.',
		pass: 'New password created',
		success: 'You have successfully changed your password.'
	}
};

if (email === null) { 
	alert(list.text.cancel);
} else if (email === list.user.email) {
	let password = prompt('write your password', '');
	if (password === null) { 
		alert(list.text.cancel);
	} else if (password.length < list.num) { 
		alert(list.text.length);
	} else if(password === list.user.pass) { 
		alert('user, you are welcome');
		let change = confirm('Do you want to change your password?');
		if(change) {
			password = prompt('Write your password again', '');
			if (password === null) { 
				alert(list.text.cancel);
			} else if (password.length < list.num) { 
				alert(list.text.length);
			} else if(password === list.user.pass) {
				let newPass = prompt('Write your new password', '');
				if (newPass.length < list.num) {
					alert('It’s too short password. Sorry.');
				} else if (newPass === null) {
					alert(list.text.cancel);
				} else {
					let updated = prompt('Write your new password again', '');
					if (updated === newPass) {
						alert(list.text.success);
					} else {
						alert(list.text.wrong);
					}
				}
			} else { 
				alert(list.text.pass);
			}
		} else { 
			alert(list.text.failed); 
		}
	} else { 
		alert(list.text.wrong); 
	}
} else if (email !== list.user.email) {
	alert('I don’t know you');
} else if (email === list.admin.email) {
	let password = prompt('write your password', '');
	if (password === null) { 
		alert(list.text.cancel);
	} else if (password.length < list.num) { 
		alert(list.text.length);
	} else if(password === list.admin.pass) { 
		alert('admin, you are welcome');
		let change = confirm('Do you want to change your password?');
		if(change) {
			password = prompt('Write your password again', '');
			if (password === null) { 
				alert(list.text.cancel);
			} else if (password.length < list.num) { 
				alert(list.text.length);
			} else if(password === list.admin.pass) {
				let newPass = prompt('Write your new password', '');
				if (newPass.length < list.num) {
					alert('It’s too short password. Sorry.');
				} else if (newPass === null) {
					alert(list.text.cancel);
				} else {
					let updated = prompt('Write your new password again', '');
					if (updated === newPass) { 
						alert(list.text.success);
					} else { 
						alert(list.text.wrong);
					}
				}
			} else { 
				alert(list.text.pass);
			}
		} else { 
			alert(list.text.failed);
		}
	} else { 
		alert(list.text.wrong);
	}
} else if (email !== list.user.email) { 
	alert('I don’t know you');
}

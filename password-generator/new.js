function generatePassword() {
    
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = '';
    
    for (let i = 0; i <10; i++) {
        let  randomIndex = Math.floor(Math.random() *10);
        password += charset.charAt(randomIndex);
    }

    document.getElementById('result').value = password;
}
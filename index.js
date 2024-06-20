const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordlength = 15
let pwdOneEl = document.getElementById("pwdOne")
let pwdTwoEl = document.getElementById("pwdTwo")

function randomPassword() {
    let randomChar = Math.floor( Math.random() * characters.length )
    return characters[randomChar]
}

function generatePassword() {
    let  pass = " "
    for (let i = 0; i <= passwordlength ; i++) {
        pass += randomPassword()
    }
    return pass
}

function renderPassword() {
    pwdOneEl.textContent = generatePassword()
    pwdTwoEl.textContent = generatePassword()
}


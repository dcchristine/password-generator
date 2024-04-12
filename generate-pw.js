function generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols) {
    const lowerCaseChars ="abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers ="1234567890"
    const symbols="!@#$%^&*()_+-=";
    let allowedChars= "";
    let generatedPW= "";
    
    allowedChars+= includeSymbols ? symbols : "";
    allowedChars+= includeLowerCase ? lowerCaseChars : "";
    allowedChars+= includeUpperCase ? upperCaseChars : "";
    allowedChars+= includeNumbers ? numbers : "";

    for(let i = 0; i<passwordLength;i++){
        const randomIndex = Math.floor(Math.random()*allowedChars.length);
        generatedPW +=allowedChars[randomIndex];
    }
    
    return generatedPW;
}

function  getPassword (){
    let passwordLength = document.getElementById("PWRange").value;
    let includeLowerCase = document.getElementById("includeLowerCase").checked ? true : false;
    let includeUpperCase = document.getElementById("includeUpperCase").checked ? true : false;;
    let includeNumbers = document.getElementById("includeNumbers").checked ? true : false;;
    let includeSymbols = document.getElementById("includeSymbols").checked ? true : false;;

    if(includeLowerCase==false && includeUpperCase==false && includeNumbers==false && includeSymbols==false){
        let password = "";
    } else {
        let password = generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);
        const generatedPassword = document.getElementById("generatedPassword");
        const msg = document.getElementById("msg");
        console.log(password)
        generatedPassword.textContent=`Password : ${password} `;

    }
} 

getPassword();
var slider = document.getElementById("PWRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}


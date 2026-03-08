const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")


 function randomizer() {
    let generated = true
    let random1 = "";
    let random2 = "";
    if (generated) {
    
        for (let i = 1; i <= 15; i++) {
             random1 += characters[Math.floor(Math.random() * characters.length)];     
        }
            password1.textContent = random1
    
        for (let i = 1; i <= 15; i++) {
             random2 += characters[Math.floor(Math.random() * characters.length)];     
        }
            password2.textContent = random2
    }
 }
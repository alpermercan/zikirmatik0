

let countEl = document.getElementById("count-el")

console.log(countEl)

let saveEl = document.getElementById("save-el")

let sonZikir = document.getElementById("son-zikir")




let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    
}

function save() {
    
    saveEl.textContent = ""

    if (count == 31){
        saveEl.textContent += "En son " + count + " kere zikir çektiniz. (Anlayan anladı)"
        sonZikir.textContent += " " + count + ", "
    
        count = 0
    
        countEl.innerText = count
    }
    else{
        saveEl.textContent ="En son " + count + " kere zikir çektiniz."
    

        sonZikir.textContent += " " + count + ", "
    
        count = 0
    
        countEl.innerText = count
    }
    
}






/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const conversion = {
    feet: 3.281,
    gallon: 0.264, 
    pound: 2.204 
}

console.log(conversion["feet"])


let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

let input = ""



convertBtn.addEventListener("click", function(){
    input = inputEl.value
    lengthEl.innerText = generateConversion("feet")
    volumeEl.innerText = generateConversion("gallon")
    massEl.innerText = generateConversion("pound")
})


function generateConversion(unit){
    let firstConversion = (input*conversion[unit]).toFixed(3)
    if(firstConversion.countDecimals <3){
        firstConversion = addTrailingZeros(firstConversion, String(firstConversion).length+2)
    }
    let secondConversion = (input/conversion[unit]).toFixed(3)
    if(secondConversion.countDecimals <3){
        secondConversion = addTrailingZeros(secondConversion, String(secondConversion).length+2)
    }
    if(unit === "feet"){
        return `${input} meters = ${firstConversion} feet | ${input} feet = ${secondConversion} meters`
    } else if(unit === "gallon"){
        return `${input} liters = ${firstConversion} gallons | ${input} gallons = ${secondConversion} liters`
    } else {
        return `${input} kilos = ${firstConversion} pounds | ${input} pounds = ${secondConversion} kilos`
    }

}

function addTrailingZeros(num, totalLength) {
    return String(num).padEnd(totalLength, '0');
  }

Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}

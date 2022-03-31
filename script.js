let h3Element = document.querySelector('[data-h4]')
let inputElement = document.querySelector('[data-input]') 
let btnElement = document.querySelector('.btn') 

btnElement.addEventListener('click', ()=>{
    h3Element.innerText = halloSagen()+datumGeben()
    // value will be changed later
})

// Hallo function
function halloSagen(){
    let userName = inputElement.value;
    return `Hallo ${userName}`
}

// date function
function datumGeben(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    
    if (day == "Saturday"|| day == "Sunday") return `.. Today is ${day} , it is a weekend day !`

    else {
        let x = weekday.indexOf('Saturday') - weekday.indexOf(day)
        return `.. Today is ${day} , only ${x} days left until weekend`
    }    
}

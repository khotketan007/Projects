// Selecting Form
const form = document.querySelector('form')

// Setting the Event to the form 
form.addEventListener('submit', function(e){
    // To prevent the submit the form
    e.preventDefault()

    // To get the Value from input field
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    // Now to put the Check
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please Give Valid Height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Give Valid Weight ${weight}`
    }else{
        //Calculating Formulae
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // Show the Result on console
        // result.innerHTML = `<span>Your BMI : ${bmi}</span>`
        if (bmi <= 18.6) {
            result.innerHTML = `BMI : ${bmi}, Under Weight `
        } else if(bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML = `BMI : ${bmi}, Normal Weight`
        }else{
            result.innerHTML = `BMI : ${bmi}, Over Weight`
        }
    }   
})
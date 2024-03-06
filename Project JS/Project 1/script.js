// Creting variable for Accessing the All buttons
const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.querySelector('body')

// Now I am Applying the Foreach Loop
buttons.forEach(function(btn){
    // console.log(btn);
    // Adding Event Listner to the Button
    btn.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        // Logic to set the backGround color to button
        if (e.target.id == 'grey') {
            body.style.backgroundColor = e.target.id
        } else if(e.target.id == 'brown'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id
        }else if(e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
})
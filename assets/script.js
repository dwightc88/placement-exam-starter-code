// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Dwight Chazell" // HINT: Replace this with your own nam
// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function() {
    
    console.log('Ginger bread + button was clicked!')

    document.getElementById('qty-gb').textContent = gb++;
    document.getElementById ('qty-total').textContent = gb + cc + sugar
    document.getElementById('qut-total').textContent = gb - cc - sugar

})

document.getElementById('minus-gb').addEventListener('click',function() {
    
    console.log ('Ginger bread - botton was clicked! ')
    
    if (gb >= 0) {
        document.getElementById('qty-gb').textContent = gb--
    }
})
  


//
  
  

document.getElementById('add-cc').addEventListener('click', function() {
    
    console.log('Chocolate Chip + button was clicked!')

    
    document.getElementById('qty-cc').textContent =cc++

    document.getElementById ('qty-total').textContent = gb + cc + sugar
})

document.getElementById('minus-cc').addEventListener('click',function() {

    console.log ('Chocolate Chip - botton was clicked! ')
    
    if (cc >=0) {
        document.getElementById('qty-cc').textContent = cc--
    }
})

//

document.getElementById('add-sugar').addEventListener('click', function() {
    
    console.log('Sugar Sprinkle + button was clicked!')

    
    document.getElementById('qty-sugar').textContent =sugar++

    document.getElementById ('qty-total').textContent = gb + cc + sugar
})

document.getElementById('minus-sugar').addEventListener('click',function() {

    console.log ('Sugar Sprinkle - botton was clicked! ')
    
    if (sugar >=0) {
        document.getElementById('qty-sugar').textContent = sugar--

    }
})

//


//document.getElementById('add-gb,add-sugar,add-cc').addEventListener('click', function() {

  //  console.log ('Cookie added to total') 

    //document.getElementById ('qty-total').textContent =total++
//})

//document.getElementById('minus-cc,minus-sugar,minus-gb') .addEventListener ('click',function() {  

  //  if (total !=0) {
  //      document.getElementById('qty-total').textContent =total--
    //}
//})




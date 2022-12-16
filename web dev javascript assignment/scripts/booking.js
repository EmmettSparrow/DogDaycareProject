/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDaysSelected = 0;
let halfDayButton = document.getElementById("half");
let fullDayButton = document.getElementById("full");
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let clearButton = document.getElementById("clear-button");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
monday.addEventListener("click",function colorChange(){
    if (!monday.classList.contains("clicked")){
        monday.classList.add("clicked");
        numberOfDaysSelected++;
    }
});
tuesday.addEventListener("click",function colorChange(){
    if (!tuesday.classList.contains("clicked")){
        tuesday.classList.add("clicked");
        numberOfDaysSelected++;
    }
});
wednesday.addEventListener("click",function colorChange(){
    if (!wednesday.classList.contains("clicked")){
        wednesday.classList.add("clicked");
        numberOfDaysSelected++;
    }
});
thursday.addEventListener("click",function colorChange(){
    if (!thursday.classList.contains("clicked")){
        thursday.classList.add("clicked");
        numberOfDaysSelected++;
    }
});
friday.addEventListener("click",function colorChange(){
    if (!friday.classList.contains("clicked")){
        friday.classList.add("clicked");
        numberOfDaysSelected++;
    }
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click",function Cleared(){
     if(monday.classList.contains("clicked")){
        monday.classList.remove("clicked");
    }
    if(tuesday.classList.contains("clicked")){
        tuesday.classList.remove("clicked");
    }
    if(wednesday.classList.contains("clicked")){
        wednesday.classList.remove("clicked");
    }
    if(thursday.classList.contains("clicked")){
        thursday.classList.remove("clicked");
    }
    if(friday.classList.contains("clicked")){
        friday.classList.remove("clicked");
    }
    numberOfDaysSelected = 0;
    calculate();
});






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.addEventListener("click",function halfDay(){
    if(fullDayButton.classList.contains("clicked")){
        fullDayButton.classList.remove("clicked");

    }
    if(!halfDayButton.classList.contains("clicked")){
        halfDayButton.classList.add("clicked");
    }
    costPerDay = 20;
    calculate();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener("click",function halfDay(){
    if(halfDayButton.classList.contains("clicked")){
        halfDayButton.classList.remove("clicked");

    }
    if(!fullDayButton.classList.contains("clicked")){
        fullDayButton.classList.add("clicked");
    }
    costPerDay = 35;
    calculate();
});





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(){
    document.getElementById("calculated-cost").innerHTML = costPerDay*numberOfDaysSelected;
}
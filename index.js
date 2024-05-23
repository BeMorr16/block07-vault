// declare variable and set to the string
let text = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
//Use the remainder and subtraction to get 10
let num1 = 71 % 12 - 1;
//Division to get 40
let num2 = 120 / 3;
//Addition to get 39
let num3 = 30 + 9;

//function to add text to the paragraph tag
let buttonNotClicked = true;
function addText(message) {
    // Create text from the input message
    if (buttonNotClicked) {
        const newT = document.createTextNode(message);
        //Access the HTML p element
        const p1 = document.getElementById("p1");
        //Add the text to the element
        p1.appendChild(newT);
        buttonNotClicked = false;
    }
};

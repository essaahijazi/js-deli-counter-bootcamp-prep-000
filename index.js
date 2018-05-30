/*
Returns the name of the new customer that has been added as
well as their position in the array(customer queue).
*/

var counter = 1;
function takeANumber(katzDeliLine, counter, timeArray) {
    katzDeliLine.push(counter);
    counter++;
    
    timeArray.push();
    
    return "Welcome, Customer Number" + counter - 1 + ". You are number " + katzDeliLine.length + " in line.";
}

/*
Returns and removes the name of the customer at the front
of the array(customer queue).
If the array is empty, it will return "There is nobody 
waiting to be served!".
*/
function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
        return "There is nobody waiting to be served!";
    } else {
        var currentCustomer = katzDeliLine.shift();
        return "Currently serving " +  currentCustomer + ".";
    }
}


/*
Prints the the names of all the customers in the order 
which they appear in the array(customer queue).
Format :
"The line is currently: 1. name1, 2. name2 .... n. namen"

If the array(cusotmer queue) is empty it will return "The line 
is currently empty."
*/
function currentLine(katzDeliLine) {
    var lineContent = "";
    
    if (katzDeliLine.length === 0) {
        return "The line is currently empty.";
    } else {
      
      /*
      Iterates through the array of customers concatenating
      their position number with their name.
      */
        for (var i = 0; i < katzDeliLine.length; i++) {
            lineContent += (i + 1) + ". " + katzDeliLine[i];
            
            //adds ',' after each name except fot the last one. 
            if (i !== katzDeliLine.length - 1) {
                lineContent += ", ";
            }
        }
        
        return "The line is currently: " +  lineContent;
    }
}
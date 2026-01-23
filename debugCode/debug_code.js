function performOperation() {
    //Get user input from fields
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);

    //Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        
        //Perform operation and display result
        let result = operation(num1, num2);
        displayResult(result);
    }
    else {
        alert("Please enter valid numbers");
    }

}

//Create operation function
function operation(a,b) {
    //Add debugger statement to pause execution
    debugger;
    const add = a+b;
    const multiply = a*b;
    const divide = a/b;
    return {add, multiply, divide};
}

//Create displayResult function
function displayResult(result) {
    //Display result with paragraph elements

    const resultElement = document.getElementById("result")
    resultElement.innerHTML = `<p>The addition result is: ${result.add}</p>
                                <p>The multiplication result is: ${result.multiply}</p>
                                <p>The division result is: ${result.divide}</p>
                                `;
}
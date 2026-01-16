
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    //Set the test text
    document.getElementById("inputText").value = testText;

    //Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";

    //Start timer
    startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();

    //Disable user input
    document.getElementById("userInput").readOnly = true;
    
    //Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; //in seconds
    var userTypedText = document.getElementById("userInput").value;
    var totalTextLength = userTypedText.length;

    //Replace  testText with new words entered
    document.getElementById("inputText").value = userTypedText;

    //Split text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(word => word !="").length;

    var wpm = 0; //default value

    if (timeElapsed != 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60)
    }

    //Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Typing Test Results:</h2>
        <p>Total Text Length: ${totalTextLength}</p> 
        <p>Words Typed: ${typedWords}</p>
        <p>Time Elapsed: ${timeElapsed.toFixed(2)} seconds</p>
        <p>Words Per Minute (WPM): ${wpm}</p>
        `;
}

//Executes endTest() function if user presses enter key
const textArea = document.getElementById("userInput");
textArea.addEventListener("keydown",(event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        endTest();
    }
    
})
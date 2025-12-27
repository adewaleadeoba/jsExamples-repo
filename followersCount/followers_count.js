let count = 0;

function increaseCount() {
    count++;
    displayCount();
    console.log("Follower count has been incremented!");
    checkCountValue();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    if (count === 20) {
        alert("Awesome! You have reached 20 suscribers!")
    }
    else if (count === 10) {
        alert("Great! You have reached 10 suscribers")
    }
}
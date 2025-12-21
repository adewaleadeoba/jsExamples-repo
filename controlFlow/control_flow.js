//Example of if else-if else statement
let userRole = "admin";
let accessLevel;

if(userRole === "admin") {
    accessLevel = "Full access granted";
}
else if (userRole === "manager") {
    accessLevel = "Limited access granted";
}
else {
    accessLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);

//Example of nested if else statement
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if(userRole === "admin") {
        userMessage = "Welcome, Admin!";
    }
    else {
        userMessage = "Welcome, User!";
    }
}
else {
    userMessage = "Please log in to access the system";
}

console.log("User Message: ", userMessage)

//Example of switch Statement
let userType = "admin";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory)

//Example of ternary operator use
let isAuthenticated = true;
let authenticationStatus = isAuthenticated? "Authenticated":"Not authenticated";

console.log("Authentication Status: ", authenticationStatus)

//Practice Task
let role = "Employee";
let accessType;
let accessTypeMessage;

if (role === "Employee") {
    accessType = "access to dietary services"
}
else {
    switch (role) {
        case "Enrolled Member":
            accessType = "access to dietary services and one-on-one with dietician";
            break;
        case "Subscriber":
            accessType = "partial access to facility dietary services only";
            break;
        case "Non-Subscriber":
            accessType = "no access. You need to enroll or subscribe";
            break;
    }   
}
accessTypeMessage = `You have ${accessType}`
console.log(accessTypeMessage);

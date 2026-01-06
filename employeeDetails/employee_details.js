
const employees = [
    { id: 1, name: 'Alice Johnson', age: 28, department: 'Marketing', specialization: 'Digital', salary: 55000 },
    { id: 2, name: 'Brian Smith', age: 35, department: 'Engineering', specialization: 'Development', salary: 75000 },
    { id: 3, name: 'Catherine Lee', age: 42, department: 'HR', specialization: 'Recruitment', salary: 62000 },
    { id: 4, name: 'David Brown', age: 30, department: 'Finance', specialization: 'Analysis', salary: 68000 },
    { id: 5, name: 'Emily Davis', age: 26, department: 'Sales', specialization: 'Relations', salary: 50000 },
    { id: 6, name: 'Dave Ashlocke', age: 45, department: 'HR', specialization: 'Recruitment', salary: 67000 }
  ];
  

function displayEmployees() {
    let eDetails = employees.map(e => `<p>${e.id} : ${e.name} - ${e.age} - ${e.department} - ${e.specialization} - $${e.salary}</p>`).join('')

    // let eName = '';
    // employees.forEach(employee => eName += `<p>${e.id} : ${e.name} - ${e.age} - ${e.department} - ${e.specialization} - $${e.salary}</p>`)

    document.getElementById('employeesDetails').innerHTML = eDetails;
}

function calculateTotalSalaries() {
    let totalSalary = employees.reduce((acc, e) => acc + e.salary, 0);
    alert(`Total Salary is $${totalSalary}`);

    // document.getElementById('employeesDetails').innerHTML = `Total Salary is $${totalSalary}`;
}

function displayHREmployees() {
    let hrEmployees = employees.filter(e => e.department === 'HR').map(e => `<p>${e.id} : ${e.name} - ${e.age} - ${e.department} - ${e.specialization} - $${e.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployees;
}

function findEmployeeById() {
    let inputId = parseFloat(prompt("Please enter employee ID"))

    let fId = employees.find(e => e.id === inputId);
    if (fId) {
        document.getElementById('employeesDetails').innerHTML = `<p>${fId.id} : ${fId.name} - ${fId.age} - ${fId.department} - ${fId.specialization} - $${fId.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>Employee ID not present in database</p>`
    }
}

function findEmployeeBySpecialization() {
    let input = prompt("Please enter employee specialization").trim().toLowerCase()
    if (input === null) return;

    let fskill = employees.filter(e => e.specialization.toLowerCase() === input).map(e => `<p>${e.id} : ${e.name} - ${e.age} - ${e.department} - ${e.specialization} - $${e.salary}</p>`).join('');
    if (fskill) {
        document.getElementById('employeesDetails').innerHTML = fskill;
    } else {
        document.getElementById('employeesDetails').innerHTML = `<p>Specialization not found</p>`
    }    
}
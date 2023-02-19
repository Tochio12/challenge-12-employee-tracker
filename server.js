const inquirer = require('inquirer');
const db = require("./db/connection");

db.connect(function(err) {
    if (err) throw err;
    mainPrompts();
  });

function mainPrompts() {
    inquirer.prompt({
            type: "list",
            name: "option",
            message: "What would you like to do?",
            choices: [
                
                    "View All Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View All Roles",
                    "Add Role",
                    "View All Departments",
                    "Add Department",
                    "Quit",
            ],
        })
    .then(function(results) {
        console.log("You entered: " + results.option);
        switch (results.option) {
            case "View All Employees":
                viewEmployees();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "Add Role":
                addRole();
                break;
            case "View All Departments":
                viewAllDepartments();
                break;
            case "Add Department":
                addDepartment();
                break;
            default:
                quit();
        }
    })
};


function viewEmployees() {
    let query = "SELECT * FROM employee";
    db.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        mainPrompts();
    })
};

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the first name of the employee?",
            name: "FirstName"
        },
        {
            type: "input",
            message: "What is the last name of the employee?",
            name: "LastName"
        },
        {
            type: "input",
            message: "What is the employee's role id number?",
            name: "roleID"
        },
        {
            type: "input",
            message: "What is the manager id number?",
            name: "managerID"
        }
    ])
    .then(function(answer) {
        db.query
        ("INSERT INTO employee SET ?",
        {
            first_name: answer.FirstName,
            last_name: answer.LastName,
            role_id: answer.roleID,
            manager_id: answer.managerID,
        }, function(err, res) {
            if (err) throw err;
            console.table(res);
            mainPrompts();
        })
    })
};

function updateEmployeeRole() {
    inquirer.prompt([
        {
        type: "input",  
        message: "Which employee would you like to update?",
        name: "eeUpdate"
        },
        {
            type: "input",
            message: "What do you want to update to?",
            name: "updateRole"
        }   
    ])
    .then(function(answer) {
        db.query
        ('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.updateRole, answer.eeUpdate],function(err, res) {
            if (err) throw err;
            console.table(res);
            mainPrompts();
        })
    })
}

function viewAllRoles() {
    let query = "SELECT * FROM roles";
    db.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        mainPrompts();
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What's the name of the role?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the salary for this role?",
            name: "salaryTotal"
        },
        {
            type: "input",
            message: "What is the department id number?",
            name: "deptID"
        }
    ])
    .then(function(answer) {
        db.query
        ("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {
            if (err) throw err;
            console.table(res);
            mainPrompts();
        })
    })
}

function viewAllDepartments() {
    let query = "SELECT * FROM department";
    db.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      mainPrompts();
    });
  }

function addDepartment() {
    inquirer.prompt(
    {
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"
    })
    .then(function(answer){
        db.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            mainPrompts()
      })
   })
}

function quit() {
    console.log("Goodbye!");
    process.exit();
  }
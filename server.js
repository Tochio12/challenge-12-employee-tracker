const inquirer = require('inquirer');
const { removeEmployee, viewDepartmentBudgets, removeDepartment } = require('../../RUT-VIRT-FSF-PT-10-2022-U-LOLC/12-SQL/02-Challenge/Main/db');
const db = require("./db/connection");

const mainPrompts = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                
                    "View All Employees",
                    "View All Employees By Department",
                    "View All Employees By Manager",
                    "Add Employee",
                    "Remove Employee",
                    "Update Employee Role",
                    "Update Employee Manager",
                    "View All Roles",
                    "Add Role",
                    "Remove Role",
                    "View All Departments",
                    "Add Department",
                    "Remove Department",
                    "View Total Utilized Budget By Department",
                    "Quit",
            ],
        },
    ])
    .then((data) => {
        console.log(data.choice);
        switch (data.choice) {
            case "View All Employees":
                viewEmployees();
                break;
            case "View All Employees By Department":
                viewEmployeesByDepartment();
                break;
            case "View All Employees By Manager":
                viewEmployeeByManager();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "Update Employee Role":
                updateEmployeeRole();
                break;
            case "Update Employee Manager":
                updateEmoloyeeManager();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "Add Role":
                addRole();
                break;
            case "Remove Role":
                removeRole();
                break;
            case "View All Departments":
                viewAllDepartments();
                break;
            case "Add Department":
                addDepartment();
                break;
            case "Remove Department":
                removeDepartment();
                break;
            case "View Total Utilized Budget By Department":
                viewTotalUtlilizedBudgetDepartment();
                break;
            default:
                quit();
        }
    })
};

mainPrompts();

function viewEmployees() {
    db.query("SELECT * FROM employee;", function (err, res){
        if (err) throw err;
        console.clear();
        console.table(res);
    })
}

function viewEmployeesByDepartment()

function viewEmployeeByManager()

function addEmployee()

function removeEmployee()

function updateEmployeeRole()

function updateEmoloyeeManager()

function viewAllRoles()

function addRole()

function removeRole()

function viewAllDepartments()

function addDepartment()

function removeDepartment()

function viewTotalUtlilizedBudgetDepartment()
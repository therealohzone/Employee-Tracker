const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update employee role",
                "Exit"
            ]
        })
        .then(function(answer) {
            if (answer.action === 'View all departments') {
                viewDepartments();
            } else if (answer.action === 'View all roles') {
                viewRoles();
            } else if (answer.action === 'View all employees') {
                viewEmployees();
            } else if (answer.action === 'Add a department') {
                addDepartment();
            } else if (answer.action === 'Add a role') {
                addRole();
            } else if (answer.action === 'Add an employee') {
                addEmployee();
            } else if (answer.action === 'Update employee role') {
                updateRole();
            } else if (answer.action === 'Exit') {
                connection.end();
            }
        })
}

function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        console.log(`DEPARTMENTS:`)
        res.forEach(department => {
            console.log(`ID: ${department.id} | Name: ${department.name}`)
        })
        start();
    });
};

function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
        console.log(`ROLES:`)
        res.forEach(role => {
            console.log(`ID: ${role.id} | Title: ${role.title} | Salary: ${role.salary} | Department ID: ${role.department_id}`);
        })
        start();
    });
};

function viewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        console.log(`EMPLOYEES:`)
        res.forEach(employee => {
            console.log(`ID: ${employee.id} | Name: ${employee.first_name} ${employee.last_name} | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`);
        })
        start();
    });
};


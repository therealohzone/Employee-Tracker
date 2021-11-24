USE employee_db;

INSERT INTO department (name) VALUES ("Data Analyst");
INSERT INTO department (name) VALUES ("UI/UX");
INSERT INTO department (name) VALUES ("IT");
INSERT INTO department (name) VALUES ("Medical Staff");

INSERT INTO role (title, salary, department_id) VALUES ("Engineer", 90, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Web Designer", 60, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Assistant to the Regional Manager", 80, 2);
INSERT INTO role (title, salary, department_id) VALUES ("General Manger", 100, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Director", 120, 4);


INSERT INTO employee (first_name, last_name, role_id) VALUES ("John", "Oh", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Sarah", "Lee", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Taylor", "Brine", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Josh", "Smith", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Larry", "Shore", 5);
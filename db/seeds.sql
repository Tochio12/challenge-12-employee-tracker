INSERT INTO department (name)
VALUES  ("Human Resources"),
        ("Operations"),
        ("Finance"),
        ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES  ("Salesperson", 80000, 4),
        ("Marketing Director", 190000, 4),
        ("Office Manager", 100000, 1),
        ("Head of Recruitment", 180000, 1),
        ("Distribution Manager", 150000, 2),
        ("Production Controller", 180000, 2),
        ("Accountant", 125000, 3),
        ("Chief Accountant", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Justin", "Bieber", 1, 2),
        ("Peter", "Parker", 2, NULL),
        ("Lionel", "Messi", 3, 4),
        ("Gon", "Freeces", 4, NULL),
        ("Naruto", "Namkaze", 5, 6),
        ("Mike", "Chen", 6, NULL),
        ("Monica", "Geller", 7, 8),
        ("Selana", "Gomez", 8, NULL);
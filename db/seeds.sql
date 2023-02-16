INSERT INTO department (name)
VALUES  ("sales"),
        ("engineering"),
        ("finance"),
        ("legal");

INSERT INTO roles (title, salary, department_id)
VALUES  ('Sales Lead', 100000, 1),
        ('Salesperson', 80000, 1),
        ('Lead Engineer', 150000, 2),
        ('Software Engineer', 120000, 2),
        ('Accountant', 125000, 3),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES      ('John', 'Doe', 1, 3),
            ('Mike', 'Chan', 1, 1),
            ('Ashley', 'Rodriguez', 3, 2),
            ('Kevin', 'Tupik', 5, 2),
            ('Malia', 'Brown', 5, 2),
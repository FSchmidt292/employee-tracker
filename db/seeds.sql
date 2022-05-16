INSERT INTO department
    (desc_department)
VALUES
('test'),
('test 2');

INSERT INTO roles
    (title, salary, department_id)
VALUES
('sr developer', 110000, 1),
('jr developer', 70000, 1);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
('Trey', 'Schmidt', 2, NULL),
('Francis', 'Schmidt', 1, NULL);
INSERT INTO department
    (desc_department)
VALUES
('IT'),
('Quality Assurance'),
('Customer Service'),
('Management'),
('Upper-management');

INSERT INTO roles
    (title, salary, department_id)
VALUES
('sr developer', 110000, 1),
('jr developer', 70000, 1),
('tester', 60000, 2),
('Customer Care Rep', 30000, 3),
('Manager', 75000, 4),
('Director of Operations', 130000, 5);

INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
('Trey', 'Schmidt', 2),
('Francis', 'Schmidt', 1),
('John', 'Goodman', 3),
('Fran', 'Drescher', 5),
('Joe', 'Estevez', 4);
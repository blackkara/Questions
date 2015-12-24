CREATE TABLE EMPLOYEE (
     EMPLOYEE_ID int identity primary key, 
     FIRST_NAME varchar(100), 
     LAST_NAME varchar(100),
     EMAIL varchar(200),
     DEPARTMENT_ID int,
     SALARY decimal(8 ,2)
    );
 
INSERT INTO EMPLOYEE (FIRST_NAME, LAST_NAME, EMAIL, DEPARTMENT_ID, SALARY) VALUES
('Arda', 'Turan', 'abc1@abc.com', 1 , 120000.00),
('Selçuk', 'İnan', 'abc2@abc.com', 2 , 130000.00),
('Gökhan', 'Gönül', 'abc3@abc.com', 3 , 140000.00),
('Hakan', 'Şükür', 'abc4@abc.com', 1 , 150000.00),
('Burak', 'Yılmaz', 'abc5@abc.com', 2 , 160000.00),
('Nihat', 'Kahveci', 'abc6@abc.com', 3 , 170000.00),
('Mesut', 'Özil', 'abc7@abc.com', 1 , 180000.00),
('Hakan', 'Çalhanoğlu', 'abc8@abc.com', 2 , 180000.00),
('Ümit', 'Davala', 'abc9@abc.com', 3 , 170000.00),
('Volkan', 'Demirel', 'abc10@abc.com', 1 , 160000.00),
('Caner', 'Erkin', 'abc11@abc.com', 2 , 150000.00),
('Hasan', 'Şaş', 'abc12@abc.com', 3 , 140000.00),
('Olcay', 'Adın', 'abc13@abc.com', 1 , 130000.00),
('Pektemek', 'Mustafa', 'abc14@abc.com', 2 , 120000.00),
('Mustafa', 'Kara', 'abc15@abc.com', 3 , 120000.00)


SELECT FIRST_NAME, SALARY
FROM EMPLOYEE EMP
WHERE SALARY > (SELECT avg (SALARY)
		FROM EMPLOYEE
		WHERE EMP.DEPARTMENT_ID  = DEPARTMENT_ID )
		ORDER BY DEPARTMENT_ID ; 
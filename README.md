# Question 1 (Probability)

Writing a function that returns one of the following characters by probability
* 'A' with 15% probability
* 'B' with 20% probability
* 'C' with 25% probability
* 'D' with 40% probability

When the function called 100 times, should return 
* 'A' roughly 15 times 
* 'B' roughly 20 times
* 'C' roughly 25 times
* 'D' roughly 40 times

### Solution
For creating random values we are using Math.random() method in javascript. This method produces floating-point numbers from 0 to 1, uses it's randomness pool from 0 to 1.  In our example, we are creating our random pool including based on A, B, C and D with their probabilities

* 15% probability means 0.15 based on 1 (100%)
* 20% probability means 0.20 based on 1 (100%)
* 25% probability means 0.25 based on 1 (100%)
* 40% probability means 0.40 based on 1 (100%)
* Sum of probabilities equals (0.15 + 0.20 + 0.25 + 0.40) 1

### Run
It's global in Question1.js, can be used directly calling random() in browser or in node.js like
``` javascript
var random = require('./Question1');
console.log(random());
```

# Question 2 (Fibonacci)
Writing a function that return the n-th Fibonacci number.

### Solution
Fibonacci number is the sum of the previous two sequence numbers. The below code is the base and simple logic. It's recursive, so calls itself in process
``` javascript
var fibonacci = function(n){/*Processing*/}
fibonnaci(n) = fibonnaci(n - 2) + fibonnaci(n - 1)
```

But if we remember that fibonacci's 1th and 2th values is 1, and then make a loop instead of recusive using all operation time will be decreased.
``` javascript
var fibonacci = function(n){
    if(isNaN(n)){
        throw new Error('Input must be Number');
    } else if(n < 0){
        throw new Error('Input at least must be 0');
    }
    
    if(n === 0) return 0;
    if(n === 1 || n === 2) return 1;
    
    var fib_arr = [1, 1];
    for(var i=2; i<n; i++){
        fib_arr[i] = fib_arr[fib_arr.length-1] + fib_arr[fib_arr.length-2];
    }
    return fib_arr[fib_arr.length-1];
}
```
### Run
It's global in Question2.js, can be used directly calling fibonacci() in browser or in node.js like
``` javascript
var fibonacci = require('./Question2');
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(10));
```

# Question 3 (Sorting)
Writing a function to find the two biggest numbers in a list.
### Solution
Firstly, the given list must be sorted, then last two items of the sorted list must be returned.
### Run
It's global in Question3.js, can be used directly calling getTwoBiggest(input) in browser or in node.js like
``` javascript
var getTwoBiggest = require('./Question3');
var input = [9, 1, 8, 2, 7, 3, 6, 4, 5];
getTwoBiggest(input)
```


# Question 4 (Avarage)
Writing a query that returning names of employees whose salaries exceed their respective department’s average salary
### Solution
* Creating Table

```
CREATE TABLE EMPLOYEE (
  EMPLOYEE_ID int identity primary key, 
  FIRST_NAME varchar(100), 
  LAST_NAME varchar(100),
  EMAIL varchar(200),
  DEPARTMENT_ID int,
  SALARY decimal(8 ,2)
);
```
* Inserting Data
```
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
```
* Query 
```
SELECT FIRST_NAME, SALARY
FROM EMPLOYEE EMP
WHERE SALARY > (SELECT avg (SALARY)
		FROM EMPLOYEE
		WHERE EMP.DEPARTMENT_ID  = DEPARTMENT_ID )
		ORDER BY DEPARTMENT_ID ; 
```

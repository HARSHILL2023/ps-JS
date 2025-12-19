//  Q1 Check Even Odd

function evenOddCheck(n1) {
    if (n1 % 2 == 0) {
        console.log(n1, "is Even");
    } else {
        console.log(n1, "is Odd");
    }
}
// evenOddCheck(33);


// Q2 Check maximum 

function maximum(n2, n3) {
    if (n2 > n3) {
        console.log(n2, "is Big");
    } else {
        console.log(n3, "is Big");
    }
}
// maximum(223,33);


// Q3 maximum Of Three

function maximumOfThree(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1, "is Big");
    } else if (n2 > n3 && n2 > n1) {
        console.log(n2, "is Big");
    } else {
        console.log(n3, "is Big");
    }
}

// maximumOfThree(33,223,18);



// Q4 positive negitive and zero


function ponezo(num) {
    if (num > 0) {
        console.log(num, "is Pos+");
    } else if (num == 0) {
        console.log(num, "is Zero");
    } else {
        console.log(num, "is Neg-");
    }
}
// ponezo(33);


// Q5 Age Group

function ageGroup(age) {
    if (age <= 12 && age > 0) {
        console.log(age, "is Consider as Child");
    } else if (age > 12 && age < 19) {
        console.log(age, "is Consider as Teen");
    } else {
        console.log(age, "is Consider as Adult");
    }
}
// ageGroup(18);


//  Q6 Grade Calculator

function gradeCal(grade) {
    if (grade >= 90 && grade < 101) {
        console.log(grade, "-> Grade A");
    } else if (grade > 80 && grade < 90) {
        console.log(grade, "-> Grade B");
    } else if (grade > 70 && grade < 80) {
        console.log(grade, "-> Grade C");
    } else if (grade > 60 && grade < 70) {
        console.log(grade, "-> Grade D");
    } else {
        console.log("Fail");
    }
}
// gradeCal(99);

//  baki Swich Case


// function gradeCalSwichCase(ggrade){
//     swich(ggrade){
//         case(ggrade>=90 && ggrade<101):
//         console.log(ggrade , "-> Grade A");

//         case(ggrade>80 && ggrade<90):
//         console.log(ggrade , "-> Grade B");   

//         case(ggrade>70 && ggrade<80):
//         console.log(ggrade , "-> Grade C");

//         case(ggrade>60 && ggrade<70):
//         console.log(ggrade , "-> Grade D");

//         case(ggrade<60):
//         console.log(ggrade ,"-> is Fail");
//     }
// }
// gradeCalSwichCase(99);

//  vineet

function gradeCalculator2(marks) {
    switch (true) {
        case marks > 0 && marks < 59:
            console.log("F");
            break;
        case marks >= 60 && marks <= 69:
            console.log("D");
            break;
        case marks > 69 && marks <= 79:
            console.log("C");
            break;
        case marks > 79 && marks <= 89:
            console.log("B");
            break;
        case marks >= 89 && marks <= 100:
            console.log("A");
            break;
    }
}
gradeCalculator2(90);




//  Q7 Divisible by 5

function divisibleByFive(num) {
    if (num % 5 == 0) {
        console.log(num, "is Divisible By 5");
    } else {
        console.log(num, "is not Divisible By 5");
    }
}
// divisibleByFive(33);


//  Q8 Divisible by 3 and 5

function diviByThrAndFive(num1) {
    if (num1 % 5 == 0 && num1 % 3 == 0) {
        console.log(num1, "is Divisible by 3 and 5");
    } else {
        console.log(num1, "is not Divisible by 3 and 5");
    }
}
// diviByThrAndFive(15);


//  Q9 Leap Year

function checkLeapYear(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("Leap Year");
        }

        else {
            console.log("Not a leap year");
        }
    }
    else if (year % 4 === 0) {
        console.log("Leap year");
    }
    else {
        console.log("Not a leap year")

    }
}
// leapYear(2020);

//  Q10 In Range 10–50

function inRange(range) {
    if (range >= 10 && range <= 50) {
        console.log(range, "is in The Range");
    } else {
        console.log(range, "is not The Range");
    }
}
inRange(33);

//
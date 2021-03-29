
function welcomeingMessage(userName){ // parameter
    alert('Welcome User ' + userName )
}
welcomeingMessage('Bashar'); // arguemnt -> the value for the parameter

var age = prompt('whats your date of birth?');
// 1995
var user = 'Bashar';
function calculateAge(year){
    // var anotherUser = 'Jana';
    var userAge = 2021 - year;
}

// console.log(anotherUser);

calculateAge(age); // 1995


function square(number){
    var sqauareCalc = number * number;
    return sqauareCalc;

}

console.log(square(7));


var getAge = function(year){
    var calc = 2021 - year
    return calc;
}

var age = prompt('whats your age?');
// 28
function userAge(userAge ){
    if(userAge >= 18 && userAge < 35){
        alert('Welcome to my website!')
    
    }else if(userAge < 18 || userAge > 35){
        alert('Sorry your not allowed!')

    }else{
        alert('Have a nice day!')
    }
    return userAge;
}

console.log(userAge(age));
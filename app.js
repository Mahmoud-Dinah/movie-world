// function fn1()
// {
//     var str = document.getElementById("text1").value;
//     alert("Your Fav. Movie Is : "+str);
// }

// var userName = prompt('please type your name');

// document.write('<h2>' + "Welcome " +  userName + " here is an image for your Fav. Movie " + '</h2>');

// var favMovie = prompt('waht is your fav Movie.','intersteller , JhonQ , inciption');

// if(favMovie === 'intersteller'){
//     document.write('<img src="https://cdn.shopify.com/s/files/1/0969/9128/products/INST6_1_large.jpg?v=1533035060"/>')
// }else if(favMovie === 'JhonQ'){
//     document.write('<img src="https://c8.alamy.com/comp/BPHYWC/denzel-washington-poster-john-q-2002-BPHYWC.jpg"/>')
// }else if (favMovie === 'inciption'){
//     document.write('<img src="https://cdn.shopify.com/s/files/1/0969/9128/products/Cult_Classic_Movie_Poster_Art_-_Inception_-_Leonardo_deCaprio-_Tallenge_Hollywood_Poster_Collection_a0811908-f659-4460-b6ea-7214447d870b.jpg?v=1534415075"/>')
// }else {
//     alert(' Welcome Anyway')
// }

// var input = document.getElementById('color');
// var button = document.querySelector('button');
// button.addEventListener('click', function( event ) {
//    event.preventDefault();    
//    var color = input.value;
//    document.body.style.backgroundColor = color;
// });

// function changebackground(){
//     var url = document.getElementById('bgchanger').value;
//     document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + url + "')";
// }


// var x = 3; 

// var y = 1;

// console.log(x == y);


// var x = prompt('enter your age')

// if (x >= 18 && x < 35) {
// alert('welcome to my website')
    
// } else if (x < 18 || x > 35) {
//     alert('Sorry your not allowed')
// }else {
//     alert('have a nice day')
// }

// validation 
//  var welcome = prompt('Say Hi to enter');
//  var userInput = 'Hi';

// while(welcome !== userInput){ // validation 
//     welcome = prompt('Please Say Hi to enter the site')
// }

// function 1
function chooseOne(){

    var favMovie = prompt('Whats your favourite Movie !','intersteller , inciption');

while(favMovie !== 'intersteller' && favMovie !== 'inciption'){

    favMovie = prompt('please enter on of the following! intersteller or inciption');
}
}
chooseOne()


// var movieNum = prompt('How many intersteller or inciption would you like to see?');

// var image = ''; 
// // undifined

// // declaring a variable 
            
// for(var i = 1 ; i <=movieNum; i++ ){
//     if(favMovie === 'intersteller'){
//         image = image + '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3avP9gpf3XDKfaKkcSvlOMDvSHHIVPsyiw&usqp=CAU"/>';
//     }else if(favMovie === 'inciption'){
//         image = image + '<img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"/>';
//     }
// }
// console.log(image);
// document.write(image); // to show the image!
// document.write(' Your image is repated ' , movieNum , ' times');
function sum() {
var a = Number(prompt("Enter first number"));
var b = Number(prompt("Enter second number"));
alert(a + b);
}
sum();

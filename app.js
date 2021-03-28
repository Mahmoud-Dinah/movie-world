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

var input = document.getElementById('color');
var button = document.querySelector('button');
button.addEventListener('click', function( event ) {
   event.preventDefault();    
   var color = input.value;
   document.body.style.backgroundColor = color;
});

function changebackground(){
    var url = document.getElementById('bgchanger').value;
    document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + url + "')";
}


var x = 3; 

var y = 1;

console.log(x == y);


var x = prompt('enter your age')

if (x >= 18 && x < 35) {
alert('welcome to my website')
    
} else if (x < 18 || x > 35) {
    alert('Sorry your not allowed')
}else {
    alert('have a nice day')
}
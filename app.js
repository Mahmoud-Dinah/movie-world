// function fn1()
// {
//     var str = document.getElementById("text1").value;
//     alert("Your Fav. Movie Is : "+str);
// }

var userName = prompt('please type your name');

document.write('<h2>' + "Welcome " +  userName + " here is an image for your Fav. Movie " + '</h2>');

var favMovie = prompt('waht is your fav Movie.','intersteller , JhonQ , inciption');

if(favMovie === 'intersteller'){
    document.write('<img src="https://cdn.shopify.com/s/files/1/0969/9128/products/INST6_1_large.jpg?v=1533035060"/>')
}else if(favMovie === 'JhonQ'){
    document.write('<img src="https://c8.alamy.com/comp/BPHYWC/denzel-washington-poster-john-q-2002-BPHYWC.jpg"/>')
}else if (favMovie === 'inciption'){
    document.write('<img src="data:image/jpeg;base64,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"/>')
}else {
    alert(' Welcome Anyway')
}


var x = 3; 

var y = 1;

console.log(x == y);
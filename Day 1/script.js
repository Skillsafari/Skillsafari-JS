//  setInterval(()=>{
//         const titleElem = document.querySelector('h1');
//         if(titleElem.textContent === "Welcome All !"){
//         titleElem.innerText = "GoodBye All !";
//         return;
//         }
//         titleElem.innerText ="Welcome All !"

//     },2000)

console.log("hello world");
console.log("Hello Everyone");
// var [name of variable]

var priceOfChoclate = 50;
var cgst =10;
var sgst = 6;

var character= "c";
var string = "Jonas";
console.log(string);

var total = priceOfChoclate +cgst+sgst;
console.log(total);

// PEDMAS

/*
P - Paranthases
E-Exponentiation
D- Division
M - Multiplication
A - Addition
S - Subtraction

*/

/*
3+5 will be executed first then /2 according PEDMAS
*/
var result = (3+5)/2;
console.log(result);

//Exponentiation ,Raising to a power 
console.log(3**2);

// Includes method

var longString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu turpis ut velit rutrum aliquam eu eu nisi. Suspendisse nec lacus ornare, placerat purus nec, dictum lectus. Integer pretium, quam egestas blandit auctor, massa nisi venenatis nulla, sed tempor felis odio et erat. Ut volutpat congue elementum. In hac habitasse platea dictumst. Nulla non aliquam sem, vitae accumsan diam. Ut ultricies euismod lobortis. Suspendisse vitae pretium quam.

Duis viverra vestibulum rhoncus. Praesent mattis justo id lacinia vehicula. Pellentesque vitae justo ligula. Nullam vestibulum enim vel ex varius, sit amet efficitur quam faucibus. Sed id hendrerit lectus. Maecenas accumsan sem vitae mi ultricies aliquet a vitae tortor. Integer iaculis erat condimentum magna auctor condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tincidunt enim vestibulum tincidunt fermentum. Maecenas eget accumsan ipsum. Fusce eleifend dolor eu nibh imperdiet aliquam.`;
console.log(longString);
var isPresent = longString.includes("dolor");
console.log(isPresent);
console.log(longString.includes("Shelby"));

var firstName = "Thomas";
var lastName = "Shelby";
console.log(firstName+lastName);

function reverseString(){
    var string = "John";
    var newString = "";
    var len = string.length;
    for(var i=0; i<=len; i++){
        newString+=string[len-i];
    }
    console.log(newString)
}
reverseString()
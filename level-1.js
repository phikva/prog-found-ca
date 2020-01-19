// question 1

var myName ="Philip";


// question 2

var person = {
    name: "Philip",
    age: 4
}


// question 3

var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// question 4

var numbers = [1,2,3,4,5];

for(var i=0; i< numbers.length; i++){
    console.log(numbers[i]);

}



// question 5

for(var i =15; i <=25; i++) {
    console.log(15);
}


// question 6


for(var i =15; i <=25; i++){
    if(i=== 20){
        console.log(15);
    }

}
 

// question 7

var petArray=[
    {
        name: "Rocky",
        cat: true,
        age: 4
    },
    {
        name: "Bilbo",
        cat: false,
        age: 2


    }
];

for(var i= 0; i < petArray.length; i++) {
    console.log(petArray[i].age),
    console.log(petArray[i].cat);
}

// question 8
function whatIDontLike(foodIDontLike){
   console.log("I dont like",foodIDontLike);

    
}
whatIDontLike("fish");

// question 9   
function subtract(myAge,brotherAge){
    var total = myAge - brotherAge;
    console.log(total);
}
subtract(34,28);

// question 10
var dogArray=[];
function petTheDog(){
    console.log();
    
    
}
console.log(dogArray);
petTheDog();


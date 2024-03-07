//Question no 16
let guests: string[] = ["Arish","Mishal","Noor"];
console.log("Great News! I found a new bigger dinner table");

guests.unshift("Qurat");
guests.splice(guests.length/ 2, 0, "Usman");
guests.push("suleman");

guests.forEach(guests =>{
    console.log(`Dear ${guests},would you like to join me for dinner`)
});
//Question no 17
console.log("unfortunately,i can only invited two people for dinner");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`sorry,${removedGuest} i can't invite you to dinner`);
}
guests.forEach(guests => {
    console.log(`Dear ${guests}, you're still invited to yhe dinner`);
});

//Question no 18
let places: string[] = ["switzerland","Japna","Germany","Iceland","Norway"];

console.log("orignal order:", places);

console.log("Alphabetical order:",[... places].sort());

console.log("orignal order:", places);

console.log(" Reverse Alphabetical order:",[... places].sort().reverse());


console.log("orignal order:", places);

places.reverse();
console.log("Reverse order:", places);

places.reverse();
console.log("orignal order:", places);

places.sort();
console.log("Alohabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);




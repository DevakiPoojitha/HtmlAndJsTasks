//creating the cookie
const cookie1=document.cookie="username = Devaki Poojitha"
const cookie2=document.cookie="username1 = Devaki Renuka"

//Deleting the cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

console.log("This is Local & Session storage in JavaScript");


localStorage.setItem('username','Pojitha');
localStorage.setItem('username2','Varshitha');
localStorage.setItem('username3','meher');


//get and retrieve an item
let name=localStorage.getItem("username2");
console.log(name);

//Removing Item
localStorage.removeItem("Name4");

//clear all storage
localStorage.clear();

//store array
let users=['rotty','mon','jay'];

localStorage.setItem('names',JSON.stringify(arr));
name=JSON.parse(localStorage.getItem('names'));
console.log(name);

//Session Storage objects can be accessed using the sessionStorage read-only property. The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends.
//session storage
sessionStorage.setItem('user1','Poojitha');
sessionStorage.setItem('user2','varshitha');
sessionStorage.setItem('user3','meher');

//sessionStorage.getItem(key)
sessionStorage.getItem("user1")

//clear 1 item
sessionStorage.removeItem("user3");


//clear all storage
sessionStorage.clear();




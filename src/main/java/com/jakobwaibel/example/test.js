function sayHi(user) {
  console.log(user);
 }
  
function sayBye(user) {
  alert(`Bye, ${user}!`);
}

function add(a) {
  return a + 2;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

foo("some argument", function(result) {
  console.log(result);
})
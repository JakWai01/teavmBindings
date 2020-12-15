alert('I am test')

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

define([], function() {
  console.log("Hei")

  var test = {};

  test.sayHi = function(arg) {
    console.log(arg);
  }

  test.showAlert = function(arg) {
    alert(arg);
  }

  return test;
});
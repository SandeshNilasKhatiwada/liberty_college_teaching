//hoisting

hoisting(); // 5
{
  var hoisting = () => {
    var a = 5;
    console.log(a); // 5
  };
}

function hoisting() {}

const hoisting = function () {};
const hosting = ()=>{}


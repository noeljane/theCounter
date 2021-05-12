console.log("hello")

let button = document.getElementById('button');

let count = 0;

button.addEventListener(('click'), ()=> {
  count++;
  console.log(count);
})



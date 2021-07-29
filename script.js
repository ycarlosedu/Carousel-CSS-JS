const back = document.querySelector('#back');
const forward = document.querySelector('#forward');
const items = document.querySelector('#items');
let count = 0

forward.addEventListener('click', (event) => {
  if(count > 6200) count = -900
  count += 900;
  console.log(count);
  items.scrollTo(count, 0)
})

back.addEventListener('click', (event) => {
  if(count < 200) count = 7200
  count -= 900;
  console.log(count);
  items.scrollTo(count, 0)
})

// Scroll com a roda do mouse
items.addEventListener("wheel", (event) => {
  if(event.deltaY < 0){
    event.target.scrollBy(300, 0)
  }
  else{
    event.target.scrollBy(-300, 0)
  }
})


// Scroll automático
// let count = 0
// setInterval(function(){
//   count += 400
//   if(count > 8000) count = 0
//   document.querySelector("#items").scrollTo(count, 0)
// }, 1500)
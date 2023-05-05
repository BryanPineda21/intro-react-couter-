// TODO: Add counter code here.


// A display that shows the user what the count is at. The count should be initialized at 0.

const countSpan = document.getElementById('count');
const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');



let count = 0;
countSpan.innerText = count;


// A increment button that subtracts 1 from the current count and updates the display.


increment.addEventListener('click', () => {
  countSpan.innerText = count;
  console.log({count});
  count ++;
 

});


decrement.addEventListener('click', () => {
  countSpan.innerText = count;
  console.log("count: " + count);
  count --;

});

// An decrement button that adds 1 to the current count and updates the display.





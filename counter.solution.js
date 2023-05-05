// get elements
const countSpan = document.getElementById('count');
const incrementButton = document.querySelector('#increment');
const decrementButton = document.querySelector('#decrement');

// set up state
let count = 0;

// create mechanism to refresh
const refresh = () => {
  countSpan.innerText = count;
};

// install handlers
incrementButton.addEventListener('click', () => {
  count++;
  refresh();
});
decrementButton.addEventListener('click', () => {
  count--;
  refresh();
});

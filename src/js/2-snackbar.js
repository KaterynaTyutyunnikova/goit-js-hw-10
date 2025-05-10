
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(e.target.elements.delay.value);
  const state = e.target.elements.state.value;

  createPromise(delay, state === 'fulfilled')
    .then(delay => {
      iziToast.success({
       
        message:`✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
       
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });


});

function createPromise(delay, shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

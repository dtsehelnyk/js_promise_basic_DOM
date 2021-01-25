'use strict';

const logo = document.querySelector('.logo');
const promise = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });

  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise.then(
  () => showMessage('Promise was resolved!')
).catch(
  () => showMessage('Promise was rejected!')
).finally(
  () => showMessage('Finish')
);

function showMessage(message) {
  //  eslint-disable-next-line no-console
  console.log(message);
}

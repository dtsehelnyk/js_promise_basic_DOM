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
  () => showMessage('message', 'Promise was resolved!')
).catch(
  () => showMessage('error-message', 'Promise was rejected!')
);

function showMessage(messageType, messageText) {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<p class='${messageType}'>${messageText}</p>`
  );
}

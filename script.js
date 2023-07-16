const passInput = document.querySelectorAll('input[type="password"]');
const submit = document.querySelector('input[type="submit"]');
const comm = document.querySelector('.comm');

submit.addEventListener("click", () => {
  if(passInput[0].value !== passInput[1].value) {
    comm.classList.remove('invisible');
    passInput.forEach(inp => {
      inp.classList.add('error');
    })
  } else {
    comm.classList.add('invisible');
    passInput.forEach(inp => {
      inp.classList.remove('error');
    })
  }
});
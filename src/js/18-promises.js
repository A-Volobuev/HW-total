import Notiflix from 'notiflix';

const formPromise = document.querySelector('.form');

formPromise.addEventListener('submit', onFormPromiseSubmit);

function onFormPromiseSubmit(event) {
  // При отправке формы страница не должна перезагружаться.
  event.preventDefault();
   
  // Получаем значения с полей 
  const formElements = event.currentTarget.elements;

  // Возвращать нужно ЧИСЛО
  const delay = Number(formElements.delay.value);
  const step = Number(formElements.step.value);
  const amount = Number(formElements.amount.value);

  // Пробую перебором
  for(let i = 0; i < amount; i++){
    const stepByDelay = delay + i * step;
    createPromise(i + 1, stepByDelay).then(result =>{
      console.log(result);
    }).catch(error => {
        console.log(error);
    });
  };
};

  //position - Просто номер промиса (каким он выполняется, первый, второй и тд)
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // Симулируем успешное выполнение 70% промисов
        if (shouldResolve) {
            Notiflix.Notify.success(`Промис✅: ${position} Задержка: ${delay}ms`);
        } else {
            Notiflix.Notify.warning(`Промис❌: ${position} Задержка: ${delay}ms`);
        }
    }, delay);
  });
}

let totalDivCreate = 0;
const input = document.getElementById('numberInput')
const createButton = document.getElementById('createBtn');
const divContainer = document.getElementById('boxes');
const destroyButton = document.getElementById('destroyBtn');

function onInputChange() {
  console.log(input.value);
  totalDivCreate = input.value;
  console.log('Всего создать дивов', totalDivCreate);
};
input.addEventListener('change', onInputChange );

function onCreateButtonClick () {
  createBoxes();
}
createButton.addEventListener('click', onCreateButtonClick)

function createBoxes(amount) {
  amount = totalDivCreate;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.classList.add('div-css-style');
    div.textContent = `D${i + 1}`;
    div.style.width = `${20 + i * 10}px`;
    div.style.height = `${20 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.borderRadius = '5px';

    divContainer.appendChild(div);
  }
}

function onDestroyButtonClick() {
  divContainer.innerHTML = ''
};
destroyButton.addEventListener('click', onDestroyButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 


// Решение

  // 1. Создал инпут с слушателем чейндж, что бы получать число которое ввели
      //Создам переменную в которое запищу число 
    // let totalDivCreate = 0;
// const input = document.getElementById('numberInput')
// function onInputChange() {
//   console.log(input.value);
//   totalDivCreate = input.value;
//   console.log('Всего создать дивов', totalDivCreate);
// };
// input.addEventListener('change', onInputChange );



  // 2. Создаю кнопку при клике на которую мы получаем значение с инпута (сколько дивов нужно создать?)
// const createButton = document.getElementById('createBtn');
// function onCreateButtonClick () {
//   console.log('click');

// // Добавляю слушателя только при клике на кнопку и получаю количество дивов которые нужно создать --- При таком использовании при нажатии на кнопку первый раз ничего не происходит(
// // input.addEventListener('change', onInputChange );

//       // Вызываю функцию создания дивов из п.4
//   createBoxes();
// }
// createButton.addEventListener('click', onCreateButtonClick)



  // 3. Добавляю контейнер для дивов
// const divContainer = document.getElementById('boxes');



  // 4. Делаем функцию создания дивов  
// function createBoxes(amount) {
//   amount = totalDivCreate;
//   console.log(amount);

//       // Поочередно создаем дивы
//   for (let i = 0; i < amount; i++) {
//     const div = document.createElement('div');
//     div.classList.add('div-css-style');
//     div.textContent = `D${i + 1}`;
//     div.style.width = `${20 + i * 10}px`;
//     div.style.height = `${20 + i * 10}px`;
//       // Добавляем в стили функцию рандом цвета
//     div.style.backgroundColor = getRandomHexColor();
//     div.style.borderRadius = '5px';

//       // Закидываем все дивы в контейнер из п.3
//     divContainer.appendChild(div);
//   }
// }



// 5. Добавляем кнопку удаления всего
// const destroyButton = document.getElementById('destroyBtn');
// function onDestroyButtonClick() {
//   divContainer.innerHTML = ''
// };
// destroyButton.addEventListener('click', onDestroyButtonClick);


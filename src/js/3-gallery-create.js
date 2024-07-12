const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery');

const htmlImg = images.map(option => `

  <li>
  <img src="${option.url}" alt="${option.alt}" width="300" height="200" class="gallery__img">
  </li>

`).join('');

galleryListEl.insertAdjacentHTML('afterbegin',` ${htmlImg} `);



  // Старое решение 
// const elements = images.map(option=> {
//   const imgContainer = document.createElement('li');
//   const imgEl = document.createElement('img');
//   imgEl.src = option.url;
//   imgEl.alt = option.alt;
//   imgEl.width = 300;
//   imgEl.height = 200;

//   imgContainer.appendChild(imgEl);
//   return imgContainer
// });


// galleryListEl.append(...elements)

// Я не придумал как это можно решить при помощи insertAdjacentHTML(), по этому решил по примуру как в видосах было
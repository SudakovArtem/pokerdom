import {modals} from './modals/init-modals.js';

const gifts = [
  {
    id: 1,
    rotation: 1080,
    img: {
      name: 'gift-5',
      format: 'png',
    },
    bg: {
      name: '',
      format: '',
    },
    text: 'Macbook Air',
  },
  {
    id: 2,
    rotation: 1125,
    img: {
      name: '',
      format: '',
    },
    bg: {
      name: 'modal-gift-bg-1',
      format: 'jpg',
    },
    text: 'Подарочная игра Plinko',
  },
  {
    id: 3,
    rotation: 1170.5,
    img: {
      name: 'gift-4',
      format: 'png',
    },
    bg: {
      name: '',
      format: '',
    },
    text: 'iPhone 15 Pro Max',
  },
  {
    id: 4,
    rotation: 1215,
    img: {
      name: 'gift-1',
      format: 'png',
    },
    bg: {
      name: '',
      format: '',
    },
    text: '4 000 000 ₽',
  },
  {
    id: 5,
    rotation: 1260.3,
    img: {
      name: 'gift-3',
      format: 'png',
    },
    bg: {
      name: '',
      format: '',
    },
    text: 'iPhone 15',
  },
  {
    id: 6,
    rotation: 1305.5,
    img: {
      name: '',
      format: '',
    },
    bg: {
      name: 'modal-gift-bg-2',
      format: 'jpg',
    },
    text: 'Подарочная игра  Lottery',
  },
  {
    id: 7,
    rotation: 1350.3,
    img: {
      name: 'gift-2',
      format: 'png',
    },
    bg: {
      name: '',
      format: '',
    },
    text: 'iPad',
  },
  {
    id: 8,
    rotation: 1395.2,
    img: {
      name: 'gift-6',
      format: 'png',
    },
    bg: {
      name: '',
      format: '',
    },
    text: 'Секретный приз',
  }
];

const getRandomGift = () => gifts[Math.floor(Math.random() * ((gifts.length - 1) + 1))];

const getPictureTemplate = (imgName = '', imgFormat = '') => {
  if (!imgName || !imgFormat) {
    return '';
  }
  return `
  <picture>
    <source type="image/webp" srcset="img/content/${imgName}.webp, img/content/${imgName}@2x.webp 2x">
    <img class="intro-card__header-img intro-card__header-img--front" src="img/content/${imgName}.${imgFormat}" srcset="img/content/${imgName}@2x.${imgFormat} 2x" alt="">
  </picture>`;
};


const initWheel = () => {
  const parent = document.querySelector('[data-wheel="parent"]');

  if (!parent) {
    return;
  }

  const element = parent.querySelector('[data-wheel="element"]');
  const button = parent.querySelector('[data-wheel="button"]');
  const giftNameElement = document.querySelector('[data-gift="name"]');
  const giftBgElement = document.querySelector('[data-gift="bg"]');
  const giftImgElement = document.querySelector('[data-gift="img"]');
  let rotation = 0;

  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    const {id, rotation: giftRotation, img, bg, text} = getRandomGift();
    const rotationRemainder = rotation % 1080;
    const newRotation = giftRotation - rotationRemainder;
    rotation += newRotation;
    element.style.transform = `rotate(${rotation}deg)`;
    giftNameElement.innerHTML = text;
    giftBgElement.innerHTML = getPictureTemplate(bg.name, bg.format);
    giftImgElement.innerHTML = getPictureTemplate(img.name, img.format);
    giftImgElement.setAttribute('data-gift', id);
    element.addEventListener('transitionend', () => {
      modals.open('success');
    }, {once: true});
  });
};

export {initWheel};

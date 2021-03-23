const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
});

// cart 

const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const buttonModalClose = document.querySelector('.modal-close');

const openModalCart = () => {
  modalCart.classList.add('show');
};

const closeModalCart = () => {
  modalCart.classList.remove('show');
};

buttonCart.addEventListener('click', openModalCart);
buttonModalClose.addEventListener('click', closeModalCart);

// scroll smooth

{
  const scrollLinks = document.querySelectorAll('a.scroll-link');
  for (let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', e => {
      e.preventDefault();
      const linkId = scrollLinks[i].getAttribute('href');
      document.querySelector(linkId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };
}
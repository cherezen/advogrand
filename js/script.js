window.addEventListener('DOMContentLoaded', () => {

const tabs = document.querySelectorAll('.feedback__tab'),
      tabsContent = document.querySelectorAll('.feedback__content'),
      tabsParent = document.querySelector('.feedback__tabs'),
      tariffTab = document.querySelectorAll('.tariff__tab'),
      cardItems = document.querySelectorAll('.card__items'),
      modalMenu = document.querySelector('.modal_menu'),
      modalClose = document.querySelectorAll('.modal__close'),
      overlay = document.querySelector('.overlay'),
      mobileBtn = document.querySelector('.promo__mobile-btn'),
      btnCons = document.querySelectorAll('.btn-cons'),
      btnCall = document.querySelectorAll('.btn-call'),
      modalQuestion = document.querySelector('.modal_question'),
      modalRecall = document.querySelector('.modal_recall'),
      list = document.querySelector('.list');

// ******************** ТАБЫ ВИДЕО ***********************//

function hideTabContent() {
    tabsContent.forEach(item => {
        item.style.display = 'none';
    });
    tabs.forEach(item => {
        item.classList.remove('feedback__tab_active');
    })
}

function showTabContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('feedback__tab_active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('feedback__tab')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabContent();
                showTabContent(i);
            }
        })
    }
});


// ************************ ТАБЫ ТАРИФЫ *************************//

tariffTab[0].addEventListener('click', () => {
    cardItems.forEach(item => {
        item.style.maxHeight = '0px';
        item.style.marginBottom = '0px';
    })
    tariffTab[0].classList.add('tariff__tab_active');
    tariffTab[1].classList.remove('tariff__tab_active');
});

tariffTab[1].addEventListener('click', () => {
    cardItems.forEach(item => {
        item.style.display = 'block';
        item.style.maxHeight = item.scrollHeight + 'px';
        item.style.marginBottom = '20px';
    })
    tariffTab[0].classList.remove('tariff__tab_active');
    tariffTab[1].classList.add('tariff__tab_active');
});


// **************** СТИЛИ ТАРИФОВ НА НЕБОЛЬШИЕ ЭКРАНЫ ****************//

function changeStyle() {
    if (document.documentElement.clientWidth < 768) {
        cardItems[0].style.height = '200px';
        cardItems[1].style.height = '240px';
        cardItems[2].style.height = '320px';
    }
}

changeStyle();

window.addEventListener('resize', () => {
    changeStyle();
});


//************************** МОДАЛЬНЫЕ ОКНА ***************************//

btnCons.forEach(item => {
    item.addEventListener('click', () => {
        overlay.style.display = 'block';
        modalQuestion.style.display = 'block';
    })
});

btnCall.forEach(item => {
    item.addEventListener('click', () => {
        overlay.style.display = 'block';
        modalRecall.style.display = 'block';
        
    })
});

mobileBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    modalMenu.style.display = 'block';
});


overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    modalMenu.style.display = 'none';
    modalRecall.style.display = 'none';
    modalQuestion.style.display = 'none';
});

modalClose.forEach(item => {
    item.addEventListener('click', () => {
        overlay.style.display = 'none';
        modalMenu.style.display = 'none';
        modalRecall.style.display = 'none';
        modalQuestion.style.display = 'none';
    })
});


list.addEventListener('click', () => {
    overlay.style.display = 'none';
    modalMenu.style.display = 'none';
});



});
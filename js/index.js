const tabCon = document.querySelectorAll(".tabcontent");
const tabHeaderItem = document.querySelectorAll(".tabheader__item");
const tabHeaderItems = document.querySelectorAll(".tabheader__items");

function HideBlocks() {
  tabCon.forEach((element) => {
    element.classList.add("hide");
  });

  tabHeaderItem.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
}

function ShowBlocks(num = 0) {
  tabCon[num].classList.remove("hide");
  tabCon[num].classList.add("show", "fade");
  tabHeaderItem[num].classList.add("tabheader__item_active");
}

HideBlocks();
ShowBlocks();

tabHeaderItems.forEach((items) => {
  items.addEventListener("click", (e) => {
    let targetItem = e.target;
    for (let i = 0; i <= tabHeaderItem.length; i++) {
      if (tabHeaderItem[i] == targetItem) {
        HideBlocks();
        ShowBlocks(i);
      }
    }
  });
});

// Таймер
function getTimeRemainging(date) {
  let stockEndDate = new Date(date);
  let currentDate = new Date();
  let gap = stockEndDate - currentDate;

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  let time = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    gap: gap,
  };
  return time;
}

function setClock() {
  const setClockDays = document.getElementById("days");
  const setClockHours = document.getElementById("hours");
  const setClockMinutes = document.getElementById("minutes");
  const setClockSeconds = document.getElementById("seconds");
  let intervalCall = setInterval(updateClock, 1000);

  function updateClock() {
    let funcCall = getTimeRemainging("2022-06-20T00:00:00");
    setClockDays.innerHTML = funcCall.days;
    setClockHours.innerHTML = funcCall.hours;
    setClockMinutes.innerHTML = funcCall.minutes;
    setClockSeconds.innerHTML = funcCall.seconds;

    if (funcCall.gap < 0) {
      clearInterval(intervalCall);
      setClockDays.innerHTML = 0;
      setClockHours.innerHTML = 0;
      setClockMinutes.innerHTML = 0;
      setClockSeconds.innerHTML = 0;
    }
  }
  updateClock();
}
setClock();

// Модальное окно
const modal = document.querySelector(".modal");
const btns = document.querySelectorAll(".btn");
const modalClose = document.querySelector(".modal__close");

btns.forEach((btn) => {
  if (!btn.classList.contains("btn_min")) {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      clearInterval(openModalTimeout);
    });
  }
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("keydown", (event) => {
  if (event.code == "Escape") {
    modal.style.display = "none";
  }
});

modal.addEventListener("click", (e) => {
  if (!e.target.closest(".modal__content", "form")) {
    modal.style.display = "none";
  }
});

// Автозапуск модального окна
const btn = document.querySelector(".btn");

let footerModalCall = true;
window.onscroll = function test() {
  if (
    window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
    footerModalCall
  ) {
    btn.click();
    footerModalCall = false;
  }
};

const openModalTimeout = setTimeout(() => {
  btn.click();
}, 10000);

// Конструктор автомобиля
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.riding = () => {
    console.log(`Автомобиль ${this.brand} ${this.model} едет по дороге`);
  };
}

let NewCar = new Car("Ferari", "m320");
NewCar.riding();

function maxSpeed(string) {
  console.log(
    `Автомобиль ${this.brand} ${this.model} имеет максимальную скорость ${string}км/ч`
  );
}

maxSpeed.call(NewCar, 56);
maxSpeed.apply(NewCar, [69]);

let value = {
  context: 10,
};

function multiplication(num) {
  console.log(num * this.context);
}

let FuncCall = multiplication.bind(value, 5);
FuncCall();

// Класс для добавления карточек
class Item {
  constructor(options, ...other) {
    this.$container = document.querySelector(".menu .container");
    this.img = options.img;
    this.imgAlt = options.imgAlt;
    this.subtitle = options.subtitle;
    this.description = options.description;
    this.price = options.price;
    this.currency = options.currency;
  }

  currencyTranslation() {
    return Math.floor(this.price * 29.85);
  }
  AddCard() {
    const div = document.createElement("div"),
      img = document.createElement("img"),
      subtitle = document.createElement("div"),
      description = document.createElement("div"),
      divider = document.createElement("div"),
      ItemPrice = document.createElement("div"),
      cost = document.createElement("div"),
      total = document.createElement("div"),
      totalSpan = document.createElement("span"),
      ItemCurrency = document.createElement("span");

    div.className = "menu__item";
    img.src = this.img;
    img.alt = this.imgAlt;
    subtitle.className = "menu__item-subtitle";
    !this.subtitle
      ? (subtitle.textContent = "Нет данных")
      : (subtitle.textContent = this.subtitle);
    description.className = "menu__item-descr";
    !this.description
      ? (description.textContent = "Нет данных")
      : (description.textContent = this.description);
    divider.className = "menu__item-divider";
    ItemPrice.className = "menu__item-price";
    cost.className = "menu__item-cost";
    cost.textContent = "Цена:";
    total.className = "menu__item-total";
    !this.price
      ? (totalSpan.textContent = 0)
      : (totalSpan.textContent = this.currencyTranslation());
    ItemCurrency.id = "menu__item-currency";
    ItemCurrency.textContent = " " + this.currency + "/день";

    this.$container.append(div);
    div.append(img, subtitle, description, divider, ItemPrice);
    ItemPrice.append(cost, total);
    total.append(totalSpan, ItemCurrency);
  }
}

const item1 = new Item({
  img: "img/tabs/post.jpg",
  imgAlt: "post",
  subtitle: 'Меню "Постное"',
  description:
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
  price: 14.41,
  currency: "грн",
});
item1.AddCard();

const item2 = new Item({
  img: "img/tabs/vegy.jpg",
  imgAlt: "vegy",
  subtitle: 'Меню "Фитнес"',
  description:
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
  price: 20,
  currency: "грн",
});
item2.AddCard();
item2.AddCard();

// Задание 7- Слайдер

const offerSlide = document.querySelectorAll(".offer__slide");
const nextSlideBtn = document.querySelector(".offer__slider-next");
const prevSlideBtn = document.querySelector(".offer__slider-prev");
const currentSlide = document.getElementById("current");
const sliderDots = document.querySelectorAll(".dot");

let offset = 0;
let slideIndex = 1;

function activeDot(num) {
  for (dot of sliderDots) {
    dot.classList.remove("active-dot");
  }
  sliderDots[num].classList.add("active-dot");
}

function nextSlide() {
  offset = offset + 650;
  slideIndex++;
  if (offset > 1950) {
    slideIndex = 1;
    offset = 0;
  }

  offerSlide.forEach((element) => {
    element.style.left = -offset + "px";
  });

  currentSlide.innerHTML = "0" + slideIndex;
  activeDot(slideIndex - 1);
}

function prevSlide() {
  offset = offset - 650;
  slideIndex--;
  currentSlide.innerHTML = "0" + slideIndex;
  if (offset < 0) {
    offset = 1950;
    slideIndex = 4;
  }
  offerSlide.forEach((element) => {
    element.style.left = -offset + "px";
  });

  currentSlide.innerHTML = "0" + slideIndex;
  activeDot(slideIndex - 1);
}

nextSlideBtn.addEventListener("click", nextSlide);
prevSlideBtn.addEventListener("click", prevSlide);

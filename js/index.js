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

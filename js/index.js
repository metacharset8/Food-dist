const tabCon = document.querySelectorAll(".tabcontent");
const tabHeaderItems = document.querySelectorAll(".tabheader__item");

function HideBlocks() {
  tabCon.forEach((element) => {
    element.classList.add("hide");
  });

  tabHeaderItems.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
}

function ShowBlocks(num = 0) {
  tabCon[num].classList.remove("hide");
  tabCon[num].classList.add("show");
  tabHeaderItems[num].classList.add("tabheader__item_active");
}

HideBlocks();
ShowBlocks();

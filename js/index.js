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

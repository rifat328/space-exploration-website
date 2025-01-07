const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// tab

const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", (e) => {
  const keydownLeft = 37;
  const keydownRight = 39;

  let tabPointer = 0;
  // while (tabPointer < 4) {
  //   tabs[tabPointer].getAttribute("tabindex");
  //   tabs[tabPointer].setAttribute("tabindex", "-1");
  //   if (e.keyCode === keydownRight) {
  //     tabPointer = +1;
  //     tabs[tabPointer].setAttribute("tabindex", "-1");
  //     console.log(tabPointer);
  //   } else if (e.keyCode === keydownRight) {
  //     tabs[tabPointer].setAttribute("tabindex", "-1");
  //     tabPointer = -1;
  //     console.log(tabPointer);
  //   } else {
  //     break;
  //     console.log("Braked....");
  //   }
  // }

  console.log(tabs[0].getAttribute("tabindex"));
  // change the tabindex of the current tab to -1

  // if the right key is pushed, move to the next tab on the right

  // if the left key is pushed, move to the next tab on the left
});

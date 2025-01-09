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

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanal);
});

const keydownLeft = 37;
const keydownRight = 39;
let tabPointer = 0;

function changeTabFocus(e) {
  if (e.keyCode === keydownRight || e.keyCode === keydownLeft) {
    tabs[tabPointer].setAttribute("tabindex", -1);
  }
  if (e.keyCode === keydownRight) {
    tabPointer++;
    if (tabPointer >= tabs.length) {
      tabPointer = 0;
    }
  }
  if (e.keyCode === keydownLeft) {
    tabPointer--;
    if (tabPointer < 0) {
      tabPointer = tabs.length - 1;
    }
  }

  tabs[tabPointer].setAttribute("tabindex", 0);
  tabs[tabPointer].focus();

  // change the tabindex of the current tab to -1

  // if the right key is pushed, move to the next tab on the right

  // if the left key is pushed, move to the next tab on the left
}

function changeTabPanal(e) {
  const targetTab = e.target;
  const targetPanal = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;
  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  hideContent(mainContainer, '[role="tabpanel"]');
  showContent(mainContainer, [`#${targetPanal}`]);

  hideContent(mainContainer, "picture");
  showContent(mainContainer, `#${targetImage}`);
}

function hideContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden");
}

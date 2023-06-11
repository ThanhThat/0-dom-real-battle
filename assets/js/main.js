const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

class Tabs {
  constructor() {
    const tabs = $$(".tabs__item");
    const panes = $$(".tab-pane");

    this.createLine($(".tabs__item.active"));

    tabs.forEach((tab, index) => {
      tab.addEventListener(
        "click",
        this.handleTabItemClick.bind(this, tab, panes, index)
      );
    });
  }

  // add class active
  addActive(...elmList) {
    elmList.forEach((elm) => elm.classList.add("active"));
  }

  // Remove class active
  removeActive(...elmList) {
    elmList.forEach((elm) => elm.classList.remove("active"));
  }

  // Create line bottom of tab item
  createLine(tab) {
    const line = $(".line");
    Object.assign(line.style, {
      width: `${tab.offsetWidth}px`,
      left: `${tab.offsetLeft}px`,
    });
  }

  // handle when Tab item clicked
  handleTabItemClick(tab, panes, index) {
    // Remove class active
    this.removeActive($(".tabs__item.active"), $(".tab-pane.active"));

    // Add class active;
    this.addActive(tab, panes[index]);

    // Create line bottom of tab item
    this.createLine(tab);
  }
}

// object tab initialization <=> call the constructor.
new Tabs();

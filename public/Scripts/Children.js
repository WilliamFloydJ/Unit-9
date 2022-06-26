class Children {
  constructor(firstName, number) {
    this.firstName = firstName;
    this.number = number;
  }
  appending() {
    const elem = document.createElement(`${this.firstName}`);
    const article = document.querySelector("article");
    article.appendChild(elem);
    elem.textContent = `New ${this.firstName} ${this.number}`;
  }
}

export { Children as default };

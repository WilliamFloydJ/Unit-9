import Children from "./Children.js";

const Update = (message) => {
  const article = document.querySelector("article");
  let Child = new Children(
    "h2",
    `${article.childNodes.length + 1} ${message} `
  );
  Child.appending();
};

const Await = async () => {
  const { data } = await axios.get("/api/Await");
  Update(data);
};

const awaitButton = document.getElementById("await");
awaitButton.addEventListener("click", Await);

const windowWidth = visualViewport.width;

const balls = 3;

for (let i = 0; i < balls; i++) {
  const rock = document.createElement("img");
  rock.setAttribute("src", "/public/Images/Rock.webp");
  rock.setAttribute("id", `rock${i}`);
  let rockRight = Math.floor(Math.random() * windowWidth);
  rock.setAttribute(
    "style",
    `
    width: 5vw;
    height: 5vw;
    position: absolute;
    top: 0px;
    right: ${rockRight}px;
  `
  );

  const body = document.querySelector("body");
  body.appendChild(rock);
  let time = 0;
  let intervalId = setInterval(function () {
    console.log(window.screen.orientation.angle);
    let rockElement = document.getElementById(rock.getAttribute("id"));
    let currentId = intervalId;
    rock.setAttribute(
      "style",
      `
    width: 5vw;
    height: 5vw;
    position: absolute;
    top: ${time}px;
    right: ${rockRight}px;
  `
    );
    if (time < 900) {
      time++;
    } else {
      clearInterval(currentId);
      rockElement.remove();
    }
  }, 5);
}

const introLanguages = {
  eng: {
    title: "Hi, I'am Alan",
    subTitle: "Web Developer Portfolio",
    intro:
      "Hey A Web Dev who loves to make an impact. Im a self thought developer who is passionate about design and loves to create solutions for complex problems through usercentric design.",
  },
  es: {
    title: "Hola, soy Alan",
    subTitle: "Web Developer Portfolio",
    intro:
      "Hey A Web Dev who loves to make an impact. Im a self thought developer who is passionate about design and loves to create solutions for complex problems through usercentric design.",
  },
};

const languageButton = document.querySelectorAll(".language-menu a");

for (let i = 0; i <= languageButton.length; i++) {
  if (languageButton[i]) {
    languageButton[i].onclick = function click() {
      setTimeout(function () {
        location.reload(true);
      }, 200);
    };
  } else {
    console.log("language option does not exist");
  }
}

export default introLanguages;

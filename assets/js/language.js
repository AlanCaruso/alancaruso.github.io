const language = function () {
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
};

export default language;

const language = function () {
  //   const url = "https://www.linkedin.com/in/alancaruso/";
  //   const linkedinUrl = document.querySelector(".linkedin-url");

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

  //   linkedinUrl.setAttribute("src", url);
};

export default language;

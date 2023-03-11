const btnDarkMode = document.querySelector(".dark-mode-btn");

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode-btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			btnDarkMode.classList.remove("dark-mode-btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
    });

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

var copyLink = document.getElementById("copyLink");
  copyLink.addEventListener("click", function(event) {
    event.preventDefault();

    var linkText = copyLink.textContent;
    var tempInput = document.createElement("input"); 
    tempInput.setAttribute("value", linkText); 
    document.body.appendChild(tempInput); 
    tempInput.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(tempInput); 

    alert("link successfully copied");
  });

  var copyEmail = document.getElementById("copyEmail");
  copyEmail.addEventListener("click", function(event) {
    event.preventDefault(); 

    var emailText = copyEmail.textContent; 
    var tempInput = document.createElement("input"); 
    tempInput.setAttribute("value", emailText); 
    document.body.appendChild(tempInput); 
    tempInput.select(); 
    document.execCommand("copy"); 
    document.body.removeChild(tempInput); 

    alert("Mail copied successfully");
  });
const title = document.querySelector(".hello h1");

function handleTitleClick() {
    title.style.color = "white";
}

title.addEventListener("click", handleTitleClick);
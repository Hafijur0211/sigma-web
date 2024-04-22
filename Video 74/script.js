let button = document.getElementById("btn");
// list of mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick", () => {
    //   alert("I was clicked");
    document.querySelector(".box").innerHTML =
        "<b>Yayy I was clicked</b> Enjoy your click";
});

button.addEventListener("contextmenu", () => {
    //   alert("I was clicked");
    document.querySelector(".box").innerHTML = alert("Don't Right click please");
});

document.addEventListener("keydown", (e) => {
    console.log(e.key, e.keyCode);
});

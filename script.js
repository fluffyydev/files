var p = document.getElementById("pText");

var fileTypes = [
    "video",
    "image",
    "audio",
    "text"
];

var text = window.location.pathname.replace(/^\/+|\/+$/g, '');
if (text == undefined || text == "") { text = "nothing" };

p.textContent = text;
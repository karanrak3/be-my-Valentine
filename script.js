function yesClicked() {
    document.getElementById("result").innerHTML =
        "YAYYYY 💕 Happy Valentine’s Day, my forever ❤️";
}

function moveButton() {
    const btn = document.getElementById("noBtn");
    btn.style.position = "relative";
    btn.style.left = Math.random() * 200 - 100 + "px";
    btn.style.top = Math.random() * 200 - 100 + "px";
}

let rsp = document.querySelectorAll(".game div");
let game = document.querySelector(".game");
let final = document.querySelector(".final");
let fspan = document.querySelector(".final span");
let fbut = document.querySelector(".final button");
let score = document.querySelector(".result span");
let picked = document.querySelector(".picked");
let comput = [];
let counter = 0;
rsp.forEach((ele) => {
    comput.push(ele.cloneNode(true));
});
function chosse() {
    rsp.forEach((ele) => {
        ele.onclick = _ => {
            rsp.forEach((e) => {
                e.style.display = "none";
                e.style.pointerEvents = "none";
            });
            ele.style.display = "flex";
            final.style.display = "flex";
            game.style.columnGap = "50px";
            game.style.width = "500px";
            picked.style.display = "flex";
            let c = computer();
            results(ele, c);
        };
    });
}
function computer() {
    let random = Math.floor(Math.random() * comput.length);
    let x = game.appendChild(comput[random]);
    x.classList.add("f");
    return x;
}
function results(ele, c) {
    if ((ele.className === "p" && c.className[0] === "s") || (ele.className === "s" && c.className[0] === "r") || (ele.className === "r" && c.className[0] === "p")) {
        fspan.innerHTML = "You Lose";
        counter--;
    } else if (ele.className === c.className[0]) {
        fspan.innerHTML = "Equal";
    }
    else {
        fspan.innerHTML = "You Win";
        counter++;
    }
    score.innerHTML = counter;
}
chosse();
fbut.onclick = _ => {
    final.style.display = "none";
    let rsp = document.querySelectorAll(".game div");
    rsp.forEach((ele) => {
        if (ele.classList.contains("f")) {
            ele.remove();
        }
        ele.style.display = "flex";
        ele.style.pointerEvents = "all";
    });
    game.style.columnGap = "100px";
    picked.style.display = "none";
};






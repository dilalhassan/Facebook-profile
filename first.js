var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var box = document.querySelector("#box")
var h4 = document.querySelector("h4");
var h5 = document.querySelector("h5");
var flag = 0;

btn.addEventListener("click", function() {
    var a = Math.floor(Math.random() * 10000);

    if (flag == 0) {
        h2.innerHTML = "Request sending..";
        h2.style.color = "royalblue";
        btn.innerHTML = "Request sending";
        btn.style.fontWeight = "600";
        btn.style.color = "black";
        h4.style.color = "white";
        btn.style.backgroundColor = "white";
        h5.style.color = "white";
        flag = 1;
        box.style.backgroundColor = "cornflowerblue";

        setTimeout(function() {
            h4.innerHTML = "Sydney Black";
            h2.innerHTML = "Frinds";
            h2.style.color = "green";
            btn.innerHTML = "Remove";
            btn.style.color = "black";
            btn.style.backgroundColor = "white";
            h5.style.color = "white";
            box.style.backgroundColor = "black"
        },a)
    } else {
        h4.innerHTML = "you often come here";
        h4.style.color = "black";
        h2.innerHTML = "Stranger";
        h2.style.color = "red";
        btn.innerHTML = "Request";
        btn.style.color = "white";
        btn.style.backgroundColor = "black";
        box.style.backgroundColor = "white";
        btn.style.fontWeight = "600";
        h5.style.color = "black";
        flag = 0;
    }
    console.log(a);
})
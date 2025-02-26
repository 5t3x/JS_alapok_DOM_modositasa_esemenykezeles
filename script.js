window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
});

function elemekElerese1() {
    let elem1 = document.querySelectorAll("section h2")[0];
    let grab = elem1.innerHTML;
    console.log(grab);
}

function elemekElerese2() {
    let elem2 = document.getElementById("ide");
    elem2.innerHTML = "<p>Jó reggelt</p>";
}

function elemekElerese3() {
    let elem3 = document.querySelectorAll(".ide")[0];
    elem3.innerHTML = "<p>Jó reggelt</p>";
}

function elemekElerese4() {
    let elem4 = document.getElementsByClassName("lista")[0];
    let txt = "<ul>";
    const hanyszor = 5;
    for (let i = 0; i < hanyszor; i++) {
        let szam = Math.floor(Math.random() * 21 + 10);
        txt += `<li> ${szam} </li>`;
    }
    txt += "</ul>";
    elem4.innerHTML = txt;
}

function elemekFormazasa1() {
    let elem5 = document.getElementsByClassName("lista")[0];
    elem5.classList.add("formazott"); 
    elem5.innerHTML;
}

function esemenyKezeles1() {
    let elem6 = document.getElementsByClassName("lista")[0];
    let elem7 = document.getElementsByClassName("kattintasutan")[0];
    elem6.addEventListener("click", function () {
        elem7.appendChild(elem6);
    });
}

function esemenyKezeles2() {
    feladatElem = document.getElementsByClassName("feladat")[0];
    let feladatElem = "<button>OK</button>";
    let feladatGomb = document.querySelectorAll(".feladat button")[0];
    elem8.addEventListener(".feladat button", function () {
       
    });
    /*feladatGomb.appendChild('<img>cica.webp</img>');*/
}
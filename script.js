
screen = document.getElementById('screen');
let n = 0;
var opr = document.getElementsByClassName('opr');
for (var i = 0; i < opr.length; i++) {
    opr[i].addEventListener('click', () => {
        n = 0;
    });
}
var num = document.getElementsByClassName('num');
for (var i = 0; i < num.length; i++) {
    num[i].addEventListener('click', () => {
        if (n === 1) {
            screen.innerHTML = screen.innerHTML.slice(-1);
            n = 0;
        }
    });
}
var eql = document.querySelector('.eql');
eql.addEventListener('click', () => {
    n = 1;
});
clr = document.querySelector('.clr');
function result() {
    try {
        let result = eval(screen.innerHTML);
        screen.innerHTML = result;
    } catch (error) {
        screen.innerHTML = 'Syntax Error';
        console.error('Error evaluating expression:', error);
    }
}
mbody = document.getElementById("mbody");
sclr = document.getElementById('clr');
mt = document.getElementById('mt');
swtch = document.getElementById('switch');
function changet() {
    if (mbody.style.backgroundColor === "rgb(66, 66, 66)") {
        sclr.style.backgroundColor = 'rgb(25, 26, 28)';
        mt.style.display = "none";
        swtch.style.backgroundColor = 'rgb(196, 125, 35)';
        mbody.style.backgroundColor = "white";
        document.getElementById("calc").style.backgroundColor = "rgb(25, 26, 28)";
        document.querySelector("h1").style.color = "black";
        screen.style.backgroundColor = "rgb(25, 26, 28)";
        screen.style.color = 'white';
        for (var i = 0; i < num.length; i++) {
            num[i].style.borderRadius = '50%';
            num[i].style.backgroundColor = 'rgb(60, 61, 63)';
            num[i].style.color = 'white';
        }
        for (var i = 0; i < opr.length; i++) {
            opr[i].style.borderRadius = '50%';
            opr[i].style.backgroundColor = 'rgb(196, 125, 35)';
        }
        clr.style.borderRadius = '50%';
        clr.style.backgroundColor = 'rgb(129, 131, 133)';
        clr.style.color = 'black';
    } else {
        sclr.style.backgroundColor = 'rgb(188, 188, 188';
        mt.style.display = "block";
        swtch.style.backgroundColor = 'rgb(67, 67, 67)';
        mbody.style.backgroundColor = "rgb(66, 66, 66)";
        document.getElementById("calc").style.backgroundColor = "#bcbcbc";
        document.querySelector("h1").style.color = "white";
        screen.style.backgroundColor = "#ffffff";
        screen.style.color = 'black';
        for (var i = 0; i < num.length; i++) {
            num[i].style.borderRadius = '4px';
            num[i].style.backgroundColor = '#dcdcdc';
            num[i].style.color = 'black';
        }
        for (var i = 0; i < opr.length; i++) {
            opr[i].style.borderRadius = '4px';
            opr[i].style.backgroundColor = '#434343';
        }
        clr.style.borderRadius = '4px';
        clr.style.backgroundColor = '#b00000';
        clr.style.color = 'white';
    }
}

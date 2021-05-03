/* menu mobile */
const ope = document.getElementById("open");
const clos = document.getElementById("close");
const back = document.getElementById("back");

function openn() {
    ope.style.display = "none";
    clos.style.display = "block";
    back.style.display = "block";
}

function closee() {
    ope.style.display = "block";
    clos.style.display = "none";
    back.style.display = "none";
}


/* duze zdjecie */

var closebig = document.getElementById('close__big');
var big = document.getElementById('big__picture__background');
var picBig = document.getElementsByClassName('zdj__big');

/* pokaz */
function showBig() {
    
    big.style.display = "block";
    closebig.style.display = "block"
}

/*ukryj*/
function hiddenBig() {
    
    closebig.style.display = "none";
    big.style.display = "none";
}

/*przewijanie*/
console.log("ilosc zdjec : "+ picBig.length);

var n = 0;

function next(n) {
        picBig[n].style.display = "block";
}

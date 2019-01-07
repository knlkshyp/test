let btn = document.getElementById('btn');
let msg = document.getElementById('msg');
let det = document.getElementById('det');

let toggle = false;

btn.textContent = 'Show message';
msg.style.visibility = 'hidden';
det.setAttribute("value",getYmd());


function getYmd() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();
    return `${year}-0${month}-0${date}`;
}

let click = () => {
    toggle = !toggle;
    if (toggle) {
        msg.style.visibility = 'visible';
        btn.textContent = 'Hide message';
    } else {
        msg.style.visibility = 'hidden';
        btn.textContent = 'Show message';
    }
}

btn.addEventListener('click', click);
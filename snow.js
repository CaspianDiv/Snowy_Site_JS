const snow = document.getElementById('snow');
const dene = document.getElementById('dene');
let i = 0;
let snowArr = [];
let flake = ['❄' , '❅' ,' ❆' ,' ❈' , '❋' , '❊' , '❉' ,'❉' , '❆'];

setInterval(newFlake, 1000);
setInterval(move,40);

function newFlake() {
    let id = i++;
    let x = rnd(0, snow.offsetWidth);
    let size = rnd(10, 20) / 10;
    let y = -16 * size;
    let color = (50, 100) / 100;
    let shape = rnd(0, flake.length -1);
    let speed = rnd(1, 3)

    snowArr.push([id , x , y ,shape,size,color,speed]); 
    snow.innerHTML += `<div id="dene${id}">${flake[shape]}</div>`
}

function move() {
    for(i = 0; i < snowArr.length; i++){
        const dene = snowArr[i];

        if(dene) {
            dene[2] += dene[6]
            const elem = document.getElementById(`dene${dene[0]}`);

            elem.style.left = dene[1] + 'px';
            elem.style.top = dene[2] + 'px';
            elem.style.color = '#fff';
            elem.style.opacity = dene[5];

            if(dene[2] > snow.offsetHeight){
                elem.remove();
                delete snowArr[dene[0]]
            }
        }
    }
}


function rnd(min,max) {
    return (Math.floor(Math.random() * (max - min)) + 1) + min;
}
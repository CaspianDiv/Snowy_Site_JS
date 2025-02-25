<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Document</title>
        <style>
            body { min-height: 100vh; margin: 0; background: url('img/winter.jpg') center/cover; }
            #qar { height: 100vh; position: relative; overflow: hidden;}
            #qar > * { position: absolute; }
        </style>
    </head>
    <body>
        <div id="qar"></div>

        <script>
            const qar = document.getElementById('qar')
            let i = 0
            const snowArr = []
            const flakes = ['❄', '❅', '⁕', '❆', '*']

            setInterval(newFlake, 1000)
            setInterval(move, 40)

            function newFlake() {
                    let id = i++,
                        x = rnd(0, qar.offsetWidth),
                        shape = rnd(0, flakes.length - 1),
                        size = rnd(10, 20) / 10,
                        color = rnd(50, 100) / 100,
                        speed = rnd(1, 3),
                        y = -16 * size
                    
                snowArr.push( {id, x, y, shape, size, color, speed} )
                qar.innerHTML += `<div id="dene${id}">${flakes[shape]}</div>`
            }
            
            function move() {
                for (let i = 0; i < snowArr.length; i++) {
                    const dene = snowArr[i]
                    if (dene) {
                        const elem = document.getElementById(`dene${dene.id}`) 
                        dene.y += dene.speed
                        dene.x += Math.sin(dene.y/50)
                        
                        elem.style.left = dene.x + 'px'
                        elem.style.top = dene.y + 'px'
                        elem.style.fontSize = dene.size + 'em'
                        elem.style.color = '#fff'
                        elem.style.opacity = dene.color

                        if (dene.y > qar.offsetHeight) {
                            elem.remove()
                            delete snowArr[dene.id]
                        }
                    }
                }
            }
            
            function rnd(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            }
        </script>
    </body>
</html>

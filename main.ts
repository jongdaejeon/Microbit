let index = 0
function plot(index: number) {
    let x = index % 5
    let y = Math.idiv(index, 5)
    led.plot(x, y)
}

function unplot(index: number) {
    let x = index % 5
    let y = Math.idiv(index, 5)
    led.unplot(x, y)
}

basic.forever(function on_forever() {
    
    unplot(index)
    index += 1
    if (index == 25) {
        index = 0
    }
    
    plot(index)
    basic.pause(100)
})

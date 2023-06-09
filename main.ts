let click = 0
let skore = 0
let odpočet = 0
input.onButtonPressed(Button.A, function () {
    if (click == 1) {
        skore += 1
    }
})
input.onButtonPressed(Button.B, function () {
    click = 2
})
basic.forever(function () {
    if (click == 2) {
        basic.showString("Mackej tlacitko A")
        odpočet = 3
        for (let index = 0; index < 4; index++) {
            basic.showNumber(odpočet)
            odpočet += -1
            basic.pause(1000)
        }
        click = 1
        odpočet = 30
        for (let index = 0; index < 4; index++) {
            basic.showNumber(odpočet)
            odpočet += -5
            basic.pause(2000)
        }
        for (let index = 0; index < 11; index++) {
            basic.showNumber(odpočet)
            odpočet += -1
            basic.pause(200)
        }
        click = 0
        basic.showString("Konec! Pocet kliku:")
        basic.showNumber(skore)
    }
})

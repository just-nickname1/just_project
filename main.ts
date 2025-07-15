input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (input.lightLevel() < 128) {
        if (input.temperature() < 19) {
            basic.showArrow(ArrowNames.South)
        } else if (input.temperature() > 23) {
            basic.showArrow(ArrowNames.North)
        } else {
            basic.showIcon(IconNames.Heart)
        }
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() < 128) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
    basic.pause(500)
    basic.clearScreen()
})

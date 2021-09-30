let yVal = 0
let xVal = 0
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    xVal = pins.analogReadPin(AnalogPin.P1) * 11.9 / 14.24
    yVal = pins.analogReadPin(AnalogPin.P2) * 11.9 / 14.25
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    basic.clearScreen()
    led.plot(pins.map(
    xVal,
    0,
    1023,
    0,
    5
    ), pins.map(
    yVal,
    0,
    1023,
    0,
    5
    ))
    serial.writeValue("x", xVal)
    serial.writeValue("y", yVal)
})

// Anything past the loading animation is your code.
music.play(music.stringPlayable("G A G C - - - - ", 120), music.PlaybackMode.InBackground)
basic.showLeds(`
    . # . # .
    # . . . #
    . . . . .
    # . . . #
    . # . # .
    `)
basic.pause(200)
basic.showLeds(`
    # . # . #
    . . . . .
    # . . . #
    . . . . .
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . #
    # . . . #
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . # . # .
    . # . # .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # . # .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(500)
// Loading animation loop. Put any of your code under this
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
}
basic.forever(function () {
	
})

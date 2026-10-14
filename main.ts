input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . # # # .
        # . . . #
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.LoopingInBackground)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Angry)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.LoopingInBackground)
})

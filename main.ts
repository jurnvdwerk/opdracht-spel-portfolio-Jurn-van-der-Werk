input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let pixel: game.LedSprite = null
let sprite: game.LedSprite = null
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # .
    `)
basic.showLeds(`
    . . # # #
    # # # # #
    # # # # #
    # # # # #
    # # # . .
    `)
basic.showLeds(`
    . . . # #
    # # # # #
    # # # # #
    # # # # #
    # # . . .
    `)
basic.showLeds(`
    . . . . #
    # # # # #
    # # # # #
    # # # # #
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    # # # # #
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    # # # # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    `)
sprite = game.createSprite(2, 4)
basic.forever(function () {
    pixel = game.createSprite(randint(0, 4), 0)
    while (pixel.get(LedSpriteProperty.Y) < 4) {
        pixel.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (pixel.get(LedSpriteProperty.Y) > 3 && pixel.get(LedSpriteProperty.X) != sprite.get(LedSpriteProperty.X)) {
        pixel.delete()
        sprite.delete()
        music.playMelody("C5 B A G F E D C ", 500)
        basic.showString("LOSE")
        basic.showNumber(game.score())
        basic.pause(2000)
        sprite = game.createSprite(2, 4)
        game.setScore(0)
    } else {
        game.addScore(1)
        pixel.delete()
        music.playMelody("C E A C5 - - - - ", 900)
    }
})

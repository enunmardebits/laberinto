controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cochechicas.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 3 3 3 . . 
. . . . . 3 c 3 3 3 3 3 3 d 3 . 
. . . . 3 c c 3 3 3 3 3 3 d c 3 
. . d 3 d c c 3 d d d d d d c c 
. d 3 3 d c b a a a a a a a 3 c 
. 3 3 3 d b a a b b b a b b a 3 
. 3 3 3 3 3 a b b b b a b b b a 
. 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
. 3 d d 3 a f a a a f a a a a a 
. d d 3 a a a f a a f a a a a a 
. a a a a a a a f f f a a a a a 
. a a a a f f f a a a a f f f f 
. . . a f f f f f a a f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cochechicas.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 3 . . . . 
. . . . . 3 3 d d 3 3 3 3 . . . 
. . . . . c d 3 3 3 3 3 c . . . 
. . . . 3 c d 3 3 3 3 3 c 3 . . 
. . . a 3 c d 3 3 3 3 3 c 3 a . 
. . . f 3 c d 3 3 3 3 3 c 3 f . 
. . . f a c 3 3 3 3 3 3 c a f . 
. . . f 3 c 3 b b b b 3 c 3 f . 
. . . a 3 3 b c c c c b 3 3 a . 
. . . a a b c c c c c c b a a . 
. . . f a d d d d d d d d a f . 
. . . f a d 3 3 3 3 3 3 d a f . 
. . . . 3 d d 3 3 3 3 d d 3 f . 
. . . . f 3 d 3 3 3 3 d 3 f . . 
. . . . . a 3 3 3 3 3 3 a . . . 
`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cochechicas.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . 3 d 3 3 3 3 3 3 c 3 . . . 
. . 3 c d 3 3 3 3 3 3 c c 3 . . 
. 3 c c d d d d d d 3 c c d 3 d 
. 3 c 3 a a a a a a a b c d 3 3 
. 3 3 a b b a b b b a a b d 3 3 
. 3 a b b b a b b b b a 3 3 3 3 
. a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
. a a a a a a f a a a f a 3 d d 
. a a a a a a f a a f a a a 3 d 
. a a a a a a f f f a a a a a a 
. a f f f f a a a a f f f a a a 
. . f f f f f a a f f f f f a . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cochechicas.setImage(img`
. . . . . . a a c c a a . . . . 
. . . . . a 3 3 3 3 3 3 a . . . 
. . . . 3 c 3 3 3 3 3 3 c 3 . . 
. . . a 3 c d 3 3 3 3 3 c 3 a . 
. . . f 3 3 d 3 3 3 3 3 c 3 f . 
. . . f 3 3 d 3 3 3 3 3 3 3 f . 
. . . f 3 3 d 3 3 3 3 3 3 3 f . 
. . . f 3 c 3 d d 3 3 3 c 3 f . 
. . . a 3 c a c c c c a c 3 a . 
. . . a 3 a c b b b b c a 3 a . 
. . . a 3 a b b b b b b a 3 a . 
. . . a a a a a a a a a a a a . 
. . . f a d a a a a a a d a f . 
. . . f a 3 d a a a a d 3 a f . 
. . . f f a a a a a a a a f f . 
. . . . f f . . . . . . f f . . 
`)
})
let cochechicas: Sprite = null
cochechicas = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . 3 d 3 3 3 3 3 3 c 3 . . . 
. . 3 c d 3 3 3 3 3 3 c c 3 . . 
. 3 c c d d d d d d 3 c c d 3 d 
. 3 c 3 a a a a a a a b c d 3 3 
. 3 3 a b b a b b b a a b d 3 3 
. 3 a b b b a b b b b a 3 3 3 3 
. a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
. a a a a a a f a a a f a 3 d d 
. a a a a a a f a a f a a a 3 d 
. a a a a a a f f f a a a a a a 
. a f f f f a a a a f f f a a a 
. . f f f f f a a f f f f f a . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(cochechicas)
scene.setBackgroundColor(13)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,
            [],
            TileScale.Sixteen
        ))

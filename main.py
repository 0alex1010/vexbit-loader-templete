def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        """)
    else:
        basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    basic.pause(100)

basic.forever(on_forever)
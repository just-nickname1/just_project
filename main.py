def on_button_pressed_a():
    led.plot(1, 3)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    led.unplot(1, 3)
input.on_button_pressed(Button.B, on_button_pressed_b)

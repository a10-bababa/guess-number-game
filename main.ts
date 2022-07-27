let number = 0
input.onButtonPressed(Button.A, function () {
    number = randint(0, 9)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
    basic.showNumber(number)
})
basic.forever(function () {
	
})

Framer.Defaults.Animation = time: .1, curve: "spring(500, 10, 0)"

bg = new BackgroundLayer
	image: "images/bg.jpg"

cell1 = new Layer
	width: 750, height: 300
	y: 128
	backgroundColor: "transparent"

cell2 = new Layer
	width: 750, height: 300
	y: 128 + 300
	backgroundColor: "transparent"
	
toast = new Layer
	width: 240, height: 200
	backgroundColor: "transparent"	
loading = new Layer
	backgroundColor: "Black"
	opacity: .7
	superLayer: toast
	
done = new Layer
	width: 80, height: 80
	image: "images/common-toast-done.png"
	superLayer: toast

spinner = new Layer
	width: 80, height: 80
	image: "images/common-toast-spinner.png" 
	superLayer: toast
		
fail = new Layer
	width: 80, height: 80
	image: "images/common-toast-fail.png" 
	superLayer: toast
	
wording = new Layer
	width: 240, height: 30
	html: "Damn it!"
	superLayer: toast
	backgroundColor: "transparent"
wording.style = {
	"text-align": "center"
	"font-size": "12"
}

# Add states
toast.states.add
	off:
		scale: 0, opacity: 0
	on:
		scale: 1, opacity: 1
toast.states.switchInstant("off")

loading.states.add
	circle:
		width: 200, height: 200, borderRadius: 100, x: 20
	rectangle:
		width: 240, height: 200, borderRadius: 20, x:0
loading.states.switchInstant("circle")

done.states.add
	off:
		rotationZ: 40, opacity: 0
	on:
		rotationZ: 0, opacity: 1
done.states.switchInstant("off")

fail.states.add
	off:
		rotationZ: 40, opacity: 0, y: 60
	on:
		rotationZ: 0, opacity: 1, y: 36
fail.states.switchInstant("off")

spinner.states.add
	off:
		rotationZ: 40, opacity: 0
	on:
		rotationZ: 0, opacity: 1
spinner.states.switchInstant("off")

wording.states.add
	off:
		opacity: 0, y: 85
	on:
		opacity: 1, y: 36 + 80 + 10
wording.states.switchInstant("off")


spinner.center()
fail.center()
done.center()
toast.center()
loading.center()


# Switch states on click
cell1.on Events.Click, ->
	toast.states.switch("on")
	done.states.switch("on")
	Utils.delay 1, ->
		toast.states.switch("off")	
		done.states.switch("off")
		
cell2.on Events.Click, ->
	toast.states.switch("on")
	spinner.states.switch("on")
	Utils.delay Utils.randomNumber(.5,3), ->
		spinner.states.switch("off")
		fail.states.switch("on")
		loading.states.switch("rectangle")
		wording.states.switch("on")
		Utils.delay 2, ->
			toast.states.switch("off")
			loading.states.switch("circle")
			fail.states.switch("off")
			wording.states.switch("off")
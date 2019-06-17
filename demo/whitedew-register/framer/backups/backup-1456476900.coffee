bg = new BackgroundLayer
	backgroundColor: "#FFF"

page1 = new Layer
	height: 1334, width: 750
	image: "images/page1.png"
	perspective: 1000
	
btn_clinic = new Layer
	image: "images/btn-clinic.png"
	height: 96, width: 690
	x: 30, y: 1124	
	superLayer: page1
	originY: 0.5
	
btn_verify = new Layer
	image: "images/btn-verify.png"
	height: 96, width: 690
	x: 30, y: 1124
	superLayer: page1


	
page2 = new Layer
	image: "images/page2.png"
	height: 1334, width: 750

code_null = new Layer
	image: "images/code-null.png"
	width: 216, height: 60
	superLayer: page2
	x: 134 * 2, y: 294 * 2
	
code_inputted = new Layer
	image: "images/code-inputted.png"
	width: 216, height: 60
	superLayer: page2
	x: 134 * 2, y: 294 * 2
	

page1.states.add
	blur:
		blur: 30
	nor:
		blur: 0
		
btn_verify.states.add
	hide:
		opacity: 0, rotationX: 180, z: -20
	show:
		opacity: 1, rotationX: 0, z: 0
		
btn_clinic.states.add
	hide:
		opacity: 0, rotationX: 180, z: -20
	show:
		opacity: 1, rotationX: 0, z: 0
btn_verify.states.animationOptions =
    curve: "spring(250, 25, 0)"
btn_clinic.states.animationOptions =
    curve: "spring(250, 25, 0)"
page2.states.add
	hide:
		y: 1334
	show:
		y: 0

code_null.states.add
	hide:
		opacity: 0
	show:
		opacity: 1
		
code_inputted.states.add
	hide:
		opacity: 0
	show:
		opacity: 1
		
toast = new Layer
	width: 200, height: 200
	backgroundColor: "transparent"	
	opacity: .7
	borderRadius: 100
loading = new Layer
	width: 200, height: 200
	backgroundColor: "Black"
	opacity: .7
	superLayer: toast
done = new Layer
	width: 80, height: 80
	image: "images/common-toast-done.png"
	superLayer: toast
done.center()
toast.center()
toast.states.add
	off:
		scale: 0, opacity: 0
	on:
		scale: 1, opacity: 1
toast.states.switchInstant("off")
done.states.add
	off:
		rotationZ: 40, opacity: 0
	on:
		rotationZ: 0, opacity: 1
done.states.switchInstant("off")


page2.states.animationOptions =
    curve: "spring(250, 25, 0)"
    

reset = () ->
	page2.states.switchInstant("hide")
	code_null.states.switchInstant("show")
	code_inputted.states.switchInstant("hide")
	btn_clinic.states.switchInstant("hide")
	btn_verify.states.switchInstant("show")
	
reset()

Framer.Defaults.Animation = time: .1, curve: "spring(500, 30, 0)"

btn_verify.on Events.Click, ->
	page2.states.switch("show")
	page1.states.switch("blur")
	
page1.on Events.Click, ->
	reset()
		
page2.on Events.Click, ->
	code_null.states.switchInstant("hide")
	code_inputted.states.switchInstant("show")
	Utils.delay 0.2, ->
		toast.states.switch("on")
		done.states.switch("on")
		Utils.delay 1, ->
			toast.states.switch("off")
			done.states.switch("off")
			Utils.delay 0.2, ->
				page2.states.switch("hide")
				page1.states.switch("nor")
				Utils.delay 0.2, ->
					btn_verify.states.switch("hide")
					btn_clinic.states.switch("show")
					
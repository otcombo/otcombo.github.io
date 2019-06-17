# Import file "bid"
S = Framer.Importer.load("imported/bid@1x")
	
light = "spring(50,50,0)"
halo = "spring(60,70,0)"

animateC1 = new Animation
	layer: S.c1
	properties: rotation: 360
	curve: light
animateC2 = new Animation
	layer: S.c2
	properties: rotation: 360
	curve: light
animateC3 = new Animation
	layer: S.c3
	properties: rotation: 360
	curve: halo


animateC1.start()
Utils.delay 0.1, ->
	animateC2.start()
Utils.delay 0.15, ->
	animateC3.start()


Utils.interval 3, ->	
	S.c1.rotation = 0
	animateC1.start()
	Utils.delay 0.1, ->
		S.c2.rotation = 0
		animateC2.start()
	Utils.delay 0.15, ->
		S.c3.rotation = 0
		animateC3.start()
			
counter = Utils.cycle(["9","8","7","6","5","4","3","2","1","0"])

S.time.visible = false

time_second = new Layer
time_second.centerX()
time_second.y = 183
time_second.style = 
	"font-size":"64px"
	"background-color" : "transparent"
	"color":"#F0CA99"
	"text-align":"center"
	
	
time_second.html = "0:4#{counter()}"
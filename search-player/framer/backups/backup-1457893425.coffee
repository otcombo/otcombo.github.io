bg = new BackgroundLayer image: "images/normal.png"
player = new Layer width: 750, height: 160, y: 128


img1 = new Layer image: "images/test1.png", superLayer: player, opacity: 0
img1.center()
img2 = new Layer image: "images/test2.png", superLayer: player, opacity: 0
img2.center()
img3 = new Layer image: "images/test3.png", superLayer: player, opacity: 0
img3.center()
img4 = new Layer image: "images/test4.png", superLayer: player, opacity: 0
img4.center()

btnbg = new Layer image: "images/btnbg.png", width: 750, height: 160, superLayer: player
btnplayall = new Layer image: "images/btn-playall.png", height: 90,width: 90, x: 330, y: 35, superLayer: player, opacity: 0.5

img1.animate
	properties:
			rotation: img1.rotation + 300
			opacity: 1
		curve: "ease"

	
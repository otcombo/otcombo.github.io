# This imports all the layers for "gotoAndBlinkBlink" into gotoandblinkblinkLayers5
importLayer = Framer.Importer.load "imported/gotoAndBlinkBlink"

Framer.Defaults.Animation.curve = "spring(300,40,0)"
spring = "spring(300,45,0)"
bounce = "spring(400,50,0)"
bezier = "cubic-bezier(0.19, 1, 0.22, 1)"

BG = new BackgroundLayer backgroundColor:"#EBEBEB"
importLayer.icon.originX = 0.5
importLayer.icon.originY = 1

init = () ->
	importLayer.Chats.y = -1500
	importLayer.Tip.x = 750 + 240
	importLayer.ChatActive.opacity = 0
	importLayer.ChatActiveBlue2.opacity = 0
	importLayer.ChatActive2.opacity = 0
	importLayer.icon.opacity = 1
	importLayer.icon2.opacity = 1
	Utils.delay 0.5 ,->
		importLayer.Tip.animateTo {x: 750 - 239},spring

GreenShow = new Animation({
    layer: importLayer.ChatActive2,
    properties: {opacity:1}
    curve: "ease-in"
    time: 1
})
GreenHide = new Animation({
    layer: importLayer.ChatActive2,
    properties: {opacity:0}
    curve: "ease-in"
    time: 1
})
LineShow = new Animation({
    layer: importLayer.ChatActiveBlue2,
    properties: {opacity:1}
    curve: "ease-in"
    time: 1
})
LineHide = new Animation({
    layer: importLayer.ChatActiveBlue2,
    properties: {opacity:0}
    curve: "ease-in"
    time: 1
})

myInterval = null
temp = 0
cycler = () ->
	if temp is 0
		importLayer.icon.animateTo {rotationZ : 8},0.06
		temp = 1
	else
		temp = 0
		importLayer.icon.animateTo {rotationZ : -8},0.06
startInterval = ->
	myInterval = Utils.interval 0.06, ->
		cycler()
stopInterval = ->
	clearInterval(myInterval)

# ==================================
init()
importLayer.Tip.click ->
	importLayer.Tip.animateTo {x: 750 + 240},"spring(200,40,0)"
	importLayer.Chats.animateTo {y: 84 - 300},bezier, ->
		importLayer.ChatActive.fadeIn()
		startInterval()
		Utils.delay 2 ,->
			stopInterval()
			importLayer.icon.fadeOut()
			importLayer.ChatActive.fadeOut()

importLayer.btnRefresh.click ->
	init()
	importLayer.Tip.click ->
		importLayer.Tip.animateTo {x: 750 + 240},"spring(200,40,0)"
		importLayer.Chats.animateTo {y: 84 - 300},bezier, ->
			importLayer.ChatActive.fadeIn()
			startInterval()
			Utils.delay 3 ,->
				stopInterval()
				importLayer.icon.fadeOut()
				importLayer.ChatActive.fadeOut()

	
importLayer.btnGreen.click ->
	init()
	importLayer.Tip.click ->
		importLayer.Tip.animateTo({x: 750 + 240},"spring(200,40,0)")
		importLayer.Chats.animateTo {y: 150},bezier, ->
			GreenShow.on(Events.AnimationEnd, GreenHide.start)
			GreenHide.on(Events.AnimationEnd, GreenShow.start)
			GreenShow.start()
			Utils.delay 6 ,->
				importLayer.icon2.fadeOut()
				GreenHide.stop()

importLayer.btnLine.click ->
	init()
	importLayer.Tip.click ->
		importLayer.Tip.animateTo({x: 750 + 240},"spring(200,40,0)")
		importLayer.Chats.animateTo {y: 84 - 300},bezier, ->
			LineShow.on(Events.AnimationEnd, LineHide.start)
			LineHide.on(Events.AnimationEnd, LineShow.start)
			LineShow.start()
			Utils.delay 6 ,->
				importLayer.icon.fadeOut()
				LineHide.stop()

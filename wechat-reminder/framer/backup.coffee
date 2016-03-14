# This imports all the layers for "gotoAndBlinkBlink" into gotoandblinkblinkLayers1
gotoandblinkblinkLayers1 = Framer.Importer.load "imported/gotoAndBlinkBlink"



Framer.Defaults.Animation.curve = "spring(300,40,0)"
spring = "spring(300,45,0)"
bounce = "spring(500,34,0)"
bezier = "cubic-bezier(0.19, 1, 0.22, 1)"

BG = new BackgroundLayer backgroundColor:"#EBEBEB"

importLayer.Chats.y = -1930
importLayer.Tip.x = 750 + 240

Utils.delay 0.5 ,->
	importLayer.Tip.animateTo({x: 750 - 239},spring)
	
importLayer.Tip.click ->
	this.animateTo({x: 750 + 240},"spring(200,40,0)")
	importLayer.Chats.animateTo({y: 168},bezier)
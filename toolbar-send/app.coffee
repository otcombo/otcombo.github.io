if Utils.isMobile()
	screenWidth = document.documentElement.clientWidth
	screenHeight = document.documentElement.clientHeight
else
	screenWidth = 750
	screenHeight = 1334
Framer.Defaults.Animation.curve = "spring(200,30)"
bg = new BackgroundLayer backgroundColor: "#EBEBEB"
bg.scroll = true

# --------- Initial Toolbar UI & input --------- 
toolbar = new Layer height: 100,backgroundColor: "#F7F7FA"
#  y:screenHeight - 100, 
toolbar.style["border-top"] = "1px solid #c9c9c9"
toolbar.style.width = "100%"
toolbar.style.position = "fix"
toolbar.style.bottom = "0"



icon3 = new Layer image:"images/Add.png", width: 56, height: 56, superLayer: toolbar, y: 22, x: screenWidth - 66
# icon3.style.position = "relative"
# icon3.style.float = "right"
# icon3.style.margin-left = "100"

icon2 = new Layer image:"images/Emotion.png", width: 56, height: 56, superLayer: toolbar, y: 22, x: icon3.x - 72
icon1 = new Layer image:"images/Voice.png", width: 56, height: 56, superLayer: toolbar, y: 22, x: 10

iconSend = new Layer width: 56, height: 56, borderRadius:28, superLayer: toolbar, y: 22, x: screenWidth - 66, originY: 1, opacity: 0, backgroundColor:"transparent"
iconSend.html = "发送"
iconSend.style.border = "2px solid #09bb07"
iconSend.style.color = "#09bb07"
iconSend.style["font-size"] = "32px"
iconSend.style["line-height"] = "54px"
iconSend.style["font-weight"] = "bold"
iconSend.style["text-align"] = "center"

inputbar = new Layer opacity:0.8, width: icon2.x - icon1.x - icon1.width - 32, height: 70,  borderRadius:10, superLayer:toolbar, y: 15, x: icon1.x + icon1.width + 16, backgroundColor:"#FFF"
inputbar.style.border = "1px solid #BFBFC3"





# States
iconfullsize = 100
iconSend.states.add
	hide: { width: 56, x: screenWidth - 66, opacity: 0 }
	show: { width: iconfullsize, x: screenWidth - 10 - iconfullsize, opacity: 1 }
icon2.states.add
	default: { x: icon3.x - 72 }
	moveright: { x: screenWidth - iconfullsize - icon2.width - 26 }
icon3.states.add
	show: { opacity: 1 }
	hide: { opacity: 0 }
inputbar.states.add
	short: { width: icon2.x - icon1.x - icon1.width - 32 - iconfullsize + 56}
	long: { width: icon2.x - icon1.x - icon1.width - 32 }
toolbar.states.add
	down: { y: screenHeight - 100 }
	up: { y: screenHeight - 100 }

stateKeydown = () ->
	iconSend.states.switch("show")
	icon2.states.switch("moveright")
	icon3.states.switch("hide")
	inputbar.states.switch("short")
stateDefault = () ->
	iconSend.states.switch("hide")
	icon2.states.switch("default")
	icon3.states.switch("show")
	inputbar.states.switch("long")




# This creates a text input and set the value.
inputElement = document.createElement("input")
inputElement.type = "email"
inputElement.style.width = "#{inputbar.width}px"
inputElement.style.height = "#{inputbar.height}px"
inputElement.style["font-size"] = "30px"
inputElement.style["padding-left"] = "20px"
inputElement.style.outline = "none"
# inputElement.placeholder = "#{document.documentElement.clientWidth} #{devicePixelRatio} #{Utils.isMobile()}"
inputElement.placeholder = "Plan A"
inputElement.value = ""
# Place input layer on screen
inputbar._element.appendChild(inputElement)


#Test
banner = new Layer image:"images/promo-recommand-share.png", width: screenWidth, height:180;

# --------- Events --------- 
inputElement.onfocus = () ->
	if inputElement.value
		stateKeydown()
# 	toolbar.states.switchInstant("up")
# 	inputElement.placeholder = "#{window.screen.height}"
# 	document.body.style.height = "200px"
# 	toolbar.y = window.screen.height
# 	document.write('<meta name="viewport" content="height=600">')

	
inputElement.onkeyup = (e) ->
	if inputElement.value
		stateKeydown()
	else
		stateDefault()

iconSend.on Events.Click, ->
	inputElement.value = ""
	stateDefault()

bg.on Events.Click, ->
	inputElement.blur()
	stateDefault()	
	
planChoice = "A"
icon1.on Events.Click, ->
	stateDefault()
	inputElement.value = ""
	inputElement.blur()	
	if planChoice is "A"
		planChoice = "B"
		iconSend.backgroundColor = "#09bb07"
		iconSend.style.color = "#FFF"
		inputElement.placeholder = "Plan B (˙ε ˙)  "
	else
		planChoice = "A"
		iconSend.backgroundColor = "transparent"
		iconSend.style.color = "#09bb07"
		inputElement.placeholder = "Plan A"
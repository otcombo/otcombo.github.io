# Set viewport
if Utils.isMobile()
	screenWidth = document.documentElement.clientWidth
	screenHeight = document.documentElement.clientHeight
else
	screenWidth = 750
	screenHeight = 1334
Framer.Defaults.Animation.curve = "spring(200,30)"

# Set background
bg = new BackgroundLayer 
bg.style["background"] = "-webkit-linear-gradient(#FFFFFF, #FBF9F7)"


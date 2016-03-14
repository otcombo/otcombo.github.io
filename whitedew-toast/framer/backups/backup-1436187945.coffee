# Set background
bg = new BackgroundLayer 
	backgroundColor: "#877DD7"

# Create Layers
layerA = new Layer
	width: 150, height: 150
	backgroundColor: "#fff"
	borderRadius: 6

layerB = new Layer
	width: 150, height: 150
	backgroundColor: "#fff"
	borderRadius: 150
	
layerA.center()
layerB.center()
layerA.x -= 90
layerB.x += 90

# Easing Curve Animation with Timing & Repeat
layerA.animate 
	properties:
		rotation: 90
	curve: "ease"

# Spring Curve Animation with Delay
# Tension, Friction, Velocity (Bounciness, Weight, Wind-Up)
layerB.animate 
	properties:
		rotation: 90, borderRadius: 6
	curve: "spring(200,30,0)"
	delay: 1
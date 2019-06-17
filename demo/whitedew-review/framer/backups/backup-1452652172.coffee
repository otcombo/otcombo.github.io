# Import file "review" (sizes and positions are scaled 1:2)
s = Framer.Importer.load("imported/review@2x")
bg = new BackgroundLayer(backgroundColor: "#F2F0F1")
Framer.Defaults.Animation.curve = "spring(180, 25, 0)"


# ====States of Clinic Selection====
s.clinicbg.states.add
	full: 
		height: 667*2
	hide:
		height: 0
s.labelselectclinic.states.add
	hide:
		opacity: 0
s.labelselectclinic.states.animationOptions =
    curve: "spring(400, 25, 0)"
s.labelselectdoctor.states.add
	hide:
		opacity: 0
s.labelselectdoctor.states.animationOptions =
    curve: "spring(400, 25, 0)"
# clinic1		
s.clinic1icon.states.add
	pressed:
		scale: 1.2
	selected:
		y:50*2, scale: 0.6
	hide:
		y:40*2, opacity: 0
s.clinic1icon.states.animationOptions =
    curve: "spring(400, 25, 0)"
s.clinic1name.states.add
	selected:
		x: 132*2, y:128*2
	hide:
		x: 132*2, y:120*2, opacity: 0
s.clinic1name.states.animationOptions =
    curve: "spring(400, 25, 0)"
    
# clinic2
s.clinic2icon.states.add
	selected:
		x: 163*2, y:68*2, height: 100, width: 100, opacity: 0
s.clinic2icon.states.animationOptions =
    curve: "spring(400, 25, 0)"
s.clinic2name.states.add
	selected:
		x: 132*2, y:128*2, opacity: 0
s.clinic2name.states.animationOptions =
    curve: "spring(400, 25, 0)"
    
# doctors
doctorList = [s.doctor1,s.doctor2,s.doctor3,s.doctor4,s.doctor5,s.doctor6,s.doctor7]
[0..6].map (n) ->
	doctorList[n].states.add
		hide:
			y:doctorList[n].y + 50, rotationZ: 10, opacity: 0
		selected:
			x:doctorList[1].x, y: 75 * 2, scale: 0.75
		pressed:
			scale: 1.2
	doctorList[n].states.switchInstant("hide")
	doctorList[n].states.animationOptions =
	    curve: "spring(400, 25, 0)"
s.name.states.add
	hide:
		y: s.name.y + 20, opacity: 0
	selected:
		y: s.name.y - 100, opacity: 0	
		
# card
s.info.states.add
	hide: 
		y: s.info.y - 50, opacity: 0	
s.qrcode.states.add
	hide: 
		y: s.qrcode.y - 50, opacity: 0	
s.labelqrcode.states.add
	hide: 
		y: s.labelqrcode.y - 50, opacity: 0	
s.border.states.add
	hide:
		height: 0,opacity: 0
s.bonus.states.add
	hide:
		y: 667 * 2

		
# ====Initialize====	
s.clinicbg.states.switchInstant("full")
s.name.states.switchInstant("hide")
s.info.states.switchInstant("hide")
s.border.states.switchInstant("hide")
s.qrcode.states.switchInstant("hide")
s.labelqrcode.states.switchInstant("hide")
s.bonus.states.switchInstant("hide")


# ====Events====
s.clinic1icon.on Events.TouchStart, ->
	s.clinic1icon.states.switch("pressed")
s.clinic1icon.on Events.TouchEnd, ->
	s.clinicbg.states.switch("default")
	s.labelselectclinic.states.switch("hide")
	s.clinic1icon.states.switch("selected")
	s.clinic1name.states.switch("selected")
	s.clinic2icon.states.switch("selected")
	s.clinic2name.states.switch("selected")
	Utils.delay 0.3, ->
		[0..2].map (n) ->
			doctorList[n].states.switch("default")
		Utils.delay 0.1, ->
			[3..5].map (n) ->
				doctorList[n].states.switch("default")
			Utils.delay 0.1, ->
				doctorList[6].states.switch("default")
				s.name.states.switch("default")

s.doctor1.on Events.TouchStart, ->
	s.doctor1.states.switch("pressed")		
s.doctor1.on Events.TouchEnd, ->
	s.clinicbg.states.switch("hide")
	s.clinic1icon.states.switch("hide")
	s.clinic1name.states.switch("hide")
	[0..6].map (n) ->
		doctorList[n].states.animationOptions =
		    curve: "spring(180, 25, 0)"
		doctorList[n].states.switch("selected")
	s.name.states.switch("selected")	
	s.labelselectdoctor.states.switch("hide")
	Utils.delay 0.5, ->
		s.info.states.switch("default")
		s.border.states.switch("default")
		Utils.delay 0.3, ->
			s.qrcode.states.switch("default")
			s.labelqrcode.states.switch("default")
			Utils.delay 0.1, ->
				s.bonus.states.switch("default")
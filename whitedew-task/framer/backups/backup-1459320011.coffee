
bg = new BackgroundLayer image: "images/home.jpg"
overlay = new Layer width: Screen.width, height: Screen.height, opacity: .93
overlay.style["background"] = "linear-gradient(#1D2026, #080A0D)"
task = new VideoLayer video: "images/task.m4v", width: 750, height:400,y:366, backgroundColor: "transparent"
btn = new Layer image: "images/btn-done.png", y: Screen.height - 140, x: Screen.width / 2 - 50


btn.states.add
	hide: opacity: 0, rotationZ: 50
	show: opacity: 1, rotationZ: 0
btn.states.switchInstant("hide")
btn.states.animationOptions = curve: "spring(400, 25, 0)"
overlay.states.add
	hide: opacity: 0
	show: opacity: .93
overlay.states.switchInstant("hide")
overlay.states.animationOptions = curve: "spring(250, 25, 0)"
task.states.add
	hide: opacity: 0
	show: opacity: 1
task.states.switchInstant("hide")
task.states.animationOptions =
    curve: "spring(250, 25, 0)"


bg.on Events.Click,() ->
	overlay.states.switch("show")
	Utils.delay .2, ->
		task.states.switch("show")
		btn.states.switch("show")
		task.player.play()
		
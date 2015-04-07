var startX,startY,oX,oY,oX2,oY2,
	canvas = document.getElementById("canvas");

function touchStart(e){
	var touch = e.changedTouches[0];
	startX = touch.pageX;
	startY = touch.pageY;
	oX = $("#canvas").position().left;
	oY = $("#canvas").position().top;
	oX2 = $("#canvasbg").position().left;
	oY2 = $("#canvasbg").position().top;
	// alert($('#container').css('background'));
}

function touchMove(e){
	var touch = e.changedTouches[0];
	$("#canvas").css({"top":oY - (startY - touch.pageY) / 20,"left":oX - (startX - touch.pageX) / 20});
	$("#canvasbg").css({"top":oY2 - (startY - touch.pageY) / 100,"left":oX2 - (startX - touch.pageX) / 100,"opacity":0.6+(startY - touch.pageY) / 3000});
	// container.style.cssText = 'background: -webkit-radial-gradient('+ gradX +'% '+ gradY +'%,circle,#203348 40%,#27323B 50%,#061010 70%,#04060A);';

}

function touchEnd(e){
	$("#canvas").animate({
		top:"-5%",
		left:"-5%"
	},"slow")
	$("#canvasbg").animate({
		top:"-20%",
		left:"-20%",
		opacity:"0.6"
		// background: "-webkit-radial-gradient(-60% 220%,circle,#203348 40%,#27323B 50%,#061010 70%,rgba(4, 6, 10, 0))"

	},"slow")
}

document.getElementById("container").addEventListener('touchstart',touchStart,false);
document.getElementById("container").addEventListener('touchmove',touchMove,false);
document.getElementById("container").addEventListener('touchend',touchEnd,false);




var i,
	ctx,
	circles, 
	tick = 0, 
	numCircles = 1000;
if (document.documentElement.clientWidth< 750) 
	var numCircles = 500;
if (document.documentElement.clientWidth< 350) 
	var numCircles = 200;

var colors = [
	"#282b30","#43645a","#624243", "#352b2c", "#26322e", "#3b3c3e", "#1f2022", "#4f7457", 
	"#272d2b", "#4b4d4a", "#27817b", "#3c8d86", "#4b5453", "#273737","#4f5d6a","#FFF"];
var randomColor = function() {
	return colors[Math.floor(Math.random() * colors.length)]
};

var e = function() {
		window.requestAnimFrame(e),
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var a = 0; a < circles.length; a++) 
			circles[a].frame()
};
resize = window.resize = function() {
	canvas.height = $(window).height();
	canvas.width = $(window).width();
};
var Circle = function(a, b) {
	this.pos = [a, b],
	this.r = Math.random() + 0.2,
	this.c = randomColor(),
	this.v = [.02 * (Math.random() - .5), .02 * (Math.random() - .5)]
};
Circle.prototype.getBound = function(a) {
	return a ? canvas.height: canvas.width
};
Circle.prototype.frame = function() {
	for (i = 0; 2 > i; i++) this.pos[i] > this.getBound(i) - 10 ? this.v[i] *= -1 : this.pos[i] < 10 && (this.v[i] *= -1),
	this.pos[i] += 3 * this.v[i];
	this.draw()
};
Circle.prototype.draw = function() {
	ctx.fillStyle = this.c,
	ctx.beginPath(),
	ctx.arc(this.pos[0], this.pos[1], this.r, 0, 2 * Math.PI, !1),
	ctx.fill()
};
$(window).load(function() {
	$("#words").css({"margin-top":$(window).height()*0.2});
	ctx = canvas.getContext("2d"),
	resize(),
	circles = [];
	for (var a = 0; numCircles > a; a++) {
		var b = Math.random() * canvas.width,
		c = Math.random() * canvas.height,
		d = new Circle(b, c, canvas.width, canvas.height);
		d.draw(),
		circles.push(d)
	}
	var e = function() {
		window.requestAnimFrame(e),
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var a = 0; a < circles.length; a++) circles[a].frame()
	};
	window.requestAnimFrame = function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function(a) {
			window.setTimeout(a, 1e3 / 60)
		}
	} (),
	e()
});

jQuery(document).ready(function(a){
	function b() {
		c(a(".headline.letters").find("b")),
		d(a(".headline"))
	};
	function c(b) {
		b.each(function() {
			var b = a(this),
			c = b.text().split(""),
			d = b.hasClass("is-visible");
			for (i in c) b.parents(".headline").length > 0 && (c[i] = "<em>" + c[i] + "</em>"),
			c[i] = d ? '<i class="in">' + c[i] + "</i>": "<i>" + c[i] + "</i>";
			var e = c.join("");
			b.html(e).css("opacity", 1)
		})
	};
	function d(b) {
		var c = l;
		b.each(function() {
			var b = a(this);
			if (b.hasClass("loading-bar")) c = m,
			setTimeout(function() {
				b.find(".wrapper").addClass("is-loading")
			},
			n);
			else if (b.hasClass("clip")) {
				var d = b.find(".wrapper"),
				f = d.width() + 10;
				d.css("width", f)
			} else if (!b.hasClass("type")) {
				var g = b.find(".wrapper b"),
				h = 0;
				g.each(function() {
					var b = a(this).width();
					b > h && (h = b)
				}),
				b.find(".wrapper").css("width", h)
			}
			setTimeout(function() {
				e(b.find(".is-visible").eq(0))
			},
			c)
		})
	}
	function e(a) {
		var b = j(a);
		if (a.parents(".headline").hasClass("type")) {
			var c = a.parent(".wrapper");
			c.addClass("selected").removeClass("waiting"),
			setTimeout(function() {
				c.removeClass("selected"),
				a.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
			},
			q),
			setTimeout(function() {
				f(b, p)
			},
			r)
		} else if (a.parents(".headline").hasClass("letters")) {
			var d = a.children("i").length >= b.children("i").length ? !0 : !1;
			g(a.find("i").eq(0), a, d, o),
			h(b.find("i").eq(0), b, d, o)
		} else a.parents(".headline").hasClass("clip") ? a.parents(".wrapper").animate({
			width: "2px"
		},
		s,
		function() {
			k(a, b),
			f(b)
		}) : a.parents(".headline").hasClass("loading-bar") ? (a.parents(".wrapper").removeClass("is-loading"), k(a, b), setTimeout(function() {
			e(b)
		},
		m), setTimeout(function() {
			a.parents(".wrapper").addClass("is-loading")
		},
		n)) : (k(a, b), setTimeout(function() {e(b)},l))
	}
	function f(a, b) {
		a.parents(".headline").hasClass("type") ? (h(a.find("i").eq(0), a, !1, b), a.addClass("is-visible").removeClass("is-hidden")) : a.parents(".headline").hasClass("clip") && a.parents(".wrapper").animate({
			width: a.width() + 10
		},
		s,
		function() { setTimeout(function() { e(a) },t) })
	}
	function g(b, c, d, f) {
		if (b.removeClass("in").addClass("out"), b.is(":last-child") ? d && setTimeout(function() {
			e(j(c))
		},
		l) : setTimeout(function() {
			g(b.next(), c, d, f)
		},
		f), b.is(":last-child") && a("html").hasClass("no-csstransitions")) {
			var h = j(c);
			k(c, h)
		}
	}
	function h(a, b, c, d) {
		a.addClass("in").removeClass("out"),
		a.is(":last-child") ? (b.parents(".headline").hasClass("type") && setTimeout(function() { b.parents(".wrapper").addClass("waiting")}, 200), c || setTimeout(function() {e(b)},l)) : setTimeout(function() {h(a.next(), b, c, d)},d)
	}
	function j(a) {
		return a.is(":last-child") ? a.parent().children().eq(0) : a.next()
	}
	function k(a, b) {
		a.removeClass("is-visible").addClass("is-hidden"),
		b.removeClass("is-hidden").addClass("is-visible")
	}
	var l = 1500,
		m = 3800,
		n = m - 3e3,
		o = 50,
		p = 150,
		q = 500,
		r = q + 800,
		s = 600,
		t = 1500;
	b()
})
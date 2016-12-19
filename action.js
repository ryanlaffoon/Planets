(function(window, document, $, undefined){
	var mercuryDiam,
	venusDiam,
	earthDiam,
	marsDiam,
	jupiterDiam,
	saturnDiam,
	uranusDiam,
	neptuneDiam,
	
	mercuryDist,
	venusDist,
	earthDist,
	marsDist,
	jupiterDist,
	saturnDist,
	uranusDist,
	neptuneDist,
	
	mercuryPeriod,
	venusPeriod,
	earthPeriod,
	marsPeriod,
	jupiterPeriod,
	saturnPeriod,
	uranusPeriod,
	neptunePeriod,
	
	mercuryColor,
	venusColor,
	earthColor,
	marsColor,
	jupiterColor,
	saturnColor,
	uranusColor,
	neptuneColor;
	
	mercuryDist = 16;
	venusDist = 32;
	earthDist = 48;
	marsDist = 64;
	jupiterDist = 224;
	saturnDist = 408;
	uranusDist = 820;
	neptuneDist = 1284;
	
	mercuryDiam = 2;
	venusDiam = 4;
	earthDiam = 4;
	marsDiam = 2;
	jupiterDiam = 34;
	saturnDiam = 30;
	uranusDiam = 12;
	neptuneDiam = 12;
	
	mercuryPeriod = 1;
	venusPeriod = 2.554279868;
	earthPeriod = 4.152097306;
	marsPeriod = 7.809253154;
	jupiterPeriod = 49.25338183;
	saturnPeriod = 122.2655451;
	uranusPeriod = 348.8365352;
	neptunePeriod = 684.2108673;
	
	mercuryColor,
	venusColor,
	earthColor,
	marsColor,
	jupiterColor,
	saturnColor,
	uranusColor,
	neptuneColor;
	

	function setOrbit(planet, period, distance){
		$(planet + ".orbit")
		.css("animation-duration", period + "s")
		.css("height", distance)
		.css("width", distance)
		.css("margin-top", -(distance/2.0))
		.css("margin-left", -(distance/2.0));
	}
	
	function setPlanet(planet, diameter, color){
		$(planet + ".planet")
		.css("height", diameter)
		.css("width", diameter)
		.css("margin-top", -(diameter/2.0))
		.css("margin-left", -(diameter/2.0))
		.css("box-shadow", "0 0 " + (diameter) + "px " + color)
		.css("background-color", color);
	}
	
	function setBody(planet, period, distance, diameter){
		setOrbit(planet, period, distance);
		setPlanet(planet, diameter);
	}
	
	$(document).ready(function() {
		setBody(".mercury", mercuryPeriod, mercuryDist, mercuryDiam);
		setBody(".venus", venusPeriod, venusDist, venusDiam);
		setBody(".earth", earthPeriod, earthDist, earthDiam);
		setBody(".mars", marsPeriod, marsDist, marsDiam);
		setBody(".jupiter", jupiterPeriod, jupiterDist, jupiterDiam);
		setBody(".saturn", saturnPeriod, saturnDist, saturnDiam);
		setBody(".uranus", uranusPeriod, uranusDist, uranusDiam);
		setBody(".neptune", neptunePeriod, neptuneDist, neptuneDiam);
	});
	
})(window, document, jQuery);
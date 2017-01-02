(function(window, document, $, undefined){

    function clearInfo() {
        $(".planetinfo").addClass("hidden");
        $(".selectable").parent("li").addClass("passive").removeClass("active");
    }

	function setClick(planet) {
	    $(planet + ".selectable").click(function () {
	        $(".planetinfo").not(planet).addClass("hidden");
	        $(".selectable").not(planet).parent("li").addClass("passive");
	        $(".selectable").not(planet).parent("li").removeClass("active");
	        $(planet + ".planetinfo").toggleClass("hidden");
	        $(planet + ".selectable").parent("li").toggleClass("passive active");

	        $(planet + ".planet").toggleClass("highlight");
	    });
	}

	function setPlanetOrbit(planet, period, distance) {
	    $(planet + ".orbit")
        .css("animation-duration", period + "s")
        .css("height", distance)
        .css("width", distance)
        .css("margin-top", -(distance / 2.0))
        .css("margin-left", -(distance / 2.0));
	}
	function setPlanetBody(planet, diameter, color) {
	    $(planet + ".planet")
        .css("height", diameter)
        .css("width", diameter)
        .css("margin-top", -(diameter / 2.0))
        .css("margin-left", -(diameter / 2.0))
        .css("background-color", color)
        .css("box-shadow", "0 0 " + (diameter / 2.0) + "px " + color);
	}

	function setPlanet(planet, period, distance, diameter, color) {
	    setPlanetOrbit(planet, period, distance);
	    setPlanetBody(planet, diameter, color);

		setClick(planet);
	}

	function getPlanetInfo(planet) {
	    var info =
            "<h3>" + planet.name + "</h3>" +
            "<div><span class='planetinfo-label'>Radius:</span><span class='planetinfo-figure'>" + planet.radius + "</span></div>" +
            "<div><span class='planetinfo-label'>Length of Day:</span><span class='planetinfo-figure'>" + planet.lengthOfDay + "</span></div>" +
            "<div><span class='planetinfo-label'>Mass:</span><span class='planetinfo-figure'>" + planet.mass + "</span></div>" +
            "<div><span class='planetinfo-label'>Orbital Period:</span><span class='planetinfo-figure'>" + planet.orbitalPeriod + "</span></div>" +
            "<div><span class='planetinfo-label'>Gravity:</span><span class='planetinfo-figure'>" + planet.gravity + "</span></div>";

	    //$.each(planet.moons, function (key, moon) {
	    //    info += ("<div>" + moon.name + "</div>");
	    //});

	    $("<div>", {
	        "class": "planetinfo hidden " + planet.name.toLowerCase(),
	        html: info
	    }).appendTo(".info");
	}

	function getMoonInfo(planet) {

	}
	
	function init() {
	    $.getJSON("planets.json", function (data) {
	        $.each(data, function (key, planet) {
	            setPlanet(planet.selector, planet.duration, planet.widthOrbit, planet.widthPlanet, planet.color);
	            getPlanetInfo(planet);
	        });
	    });

	    $(".clear").click(function () {
	        clearInfo();
	    });
	}

	$(document).ready(function() {
		/* Initialize */
	    init();
	});
	
})(window, document, jQuery);
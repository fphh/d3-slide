
// google-chrome -–allow-file-access-from-files --disable-web-security

window.stocksV1 = function stocksV1 () {

    function translate(x, y) {
        return "translate(" + x + ", " + y + ")";
    }

    var height = 280;
    var width = 1000;
    var margin = 60;

    var svg = d3.select("#app")
        .append("svg")
        .attr("width", width+2*margin)
        .attr("height", height+2*margin);


    var defs = svg.append("defs");

    defs.append("clipPath")
	.attr("id", "chart-clip-path")
	.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", width-margin)
	.attr("height", height-margin);

    var inner = svg
        .append("g")
        .attr("transform", translate(margin, margin));

    var xscale = d3.time.scale()
        .range([0, width-margin]);
    
    var xAxis = d3.svg.axis()
        .scale(xscale)
        .orient("bottom");

    var xAxisSel = inner.append("g")
        .attr("class", "x axis")
        .attr("transform", translate(0, height-margin))
        .call(xAxis);


    var yscale = d3.scale.linear()
        .range([height-margin, 0]);

    var yAxis = d3.svg.axis()
        .scale(yscale)
        .orient("left");

    var yAxisSel = inner.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    var pathSel = inner.append("path")
	.attr("clip-path", "url(#chart-clip-path)");

    var line = d3.svg.line();

    var yext;
    var xext;
    var data;

    function drawLine(err, ds) {
	data = ds;

	xext = d3.extent(ds.map(function (x) { return x.date; }));
	yext = [0, d3.extent(ds.map(function (x) { return x.value; }))[1]];


	xscale.domain(xext);
	yscale.domain(yext);

	xAxisSel.call(xAxis);
	yAxisSel.call(yAxis);

	line.x(function(d) { return xscale(d.date); })
	    .y(function(d) { return yscale(d.value); });

	pathSel.attr("d", line(ds));

    }

    // var url = "http://ichart.yahoo.com/table.csv?s=GOOG";
    var url = "GOOG.csv";
    d3.csv(url, drawLine)
	.row(function (d) {
	    return {
		date: new Date(d.Date),
		value: +d.Close
	    }
	});


    window.updateYear = function updateYear(year) {

	var ds = data.filter(function (x) {
	    return x.date.getFullYear() == +year;
	});

	var lxext;
	var lyext;

	if (year === undefined) {
	    lxext = xext;
	    lyext = yext;
	} else {
	    lxext = [new Date(year + "-01"), new Date((year+1) + "-01")];

	    var ds = data.filter(function (x) {
		return x.date.getFullYear() == +year;
	    });

	    lyext = d3.extent(ds.map(function (x) { return x.value; }));
	}


	var t0 = d3.transition().duration(500).each(function () {

	    yscale.domain(yext);

	    yAxisSel
		.transition()
		.call(yAxis);

	    pathSel
		.transition()
		.attr("d", line(data));
	});

	var t1 = t0.transition().duration(1200).each(function () {

	    xscale.domain(lxext);

	    xAxisSel
		.transition()
		.call(xAxis);

	    pathSel
		.transition()
		.attr("d", line(data));

	});

	var t2 = t1.transition().duration(500).each(function () {
	    yscale.domain(lyext);

	    yAxisSel
		.transition()
		.call(yAxis);

	    pathSel
		.transition()
		.attr("d", line(data));
	});

    };


}

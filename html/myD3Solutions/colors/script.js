

window.colorsV1 = function colorsV1 () {

    var height = 260;
    var width = 1000;
    var margin = 40;

    var mapHeight = 140;
    var mapWidth = 900;
    var dataPoints = 800;
    var ratio = mapWidth/dataPoints;

    function translate(x, y) {
        return "translate(" + x + ", " + y + ")";
    }

    function updateData() {
	var ds = d3.range(0, dataPoints).map(function () {
	    var sign = Math.random() < 0.5 ? 1 : -1;
	    return sign * Math.random();
	}).reduce(function (arr, x) {
	    var m = arr[arr.length-1];
	    arr.push(Math.abs(m+x));
	    return arr;
	}, [1000]);

	var ext = d3.extent(ds);

	return ds.map(function (x) {
	    return (x-ext[0]) / (ext[1]-ext[0]);
	});
    }

    var svg = d3.select("#app")
        .append("svg")
        .attr("width", width+2*margin)
        .attr("height", height+2*margin);

    var inner = svg
        .append("g")
        .attr("transform", translate(margin, margin));

    var colorScale = inner.append("g");

    var heatMap = inner
	.append("g")
        .attr("transform", translate(0, 60));

    var heatMapDy = 60;
    var heatMapChart = heatMap
	.append("g")
        .attr("transform", translate(0, heatMapDy));


    var colors = [
	{ percent: 0, color: "pink" },
	{ percent: 0.05, color: "pink" },
   	{ percent: 0.2, color: "cyan" },
	{ percent: 0.4, color: "green" },
	{ percent: 0.7, color: "yellow" },
	{ percent: 1, color: "red" } ];


    var color = d3.scale.linear()
	.domain(colors.map(function (c) { return c.percent*100; }))
	.range(colors.map(function (c) { return c.color; }));

    var xs = d3.range(0, 100);

    colorScale
	.selectAll("rect")
	.data(xs)
	.enter()
	.append("rect")
	.attr("x", function (d) { return 2*d; })
	.attr("y", 0)
	.attr("width", 2)
	.attr("height", 40)
	.style("stroke-width", 1)
	.style("stroke", function (d) { return color(d); })
	.style("fill", function (d) { return color(d); });

    var xscale = d3.scale.linear()
        .range([0, 200])
        .domain([0,100]);

    var xAxis = d3.svg.axis()
        .scale(xscale)
	.tickValues([0, 20, 40, 60, 80, 100])
	.tickFormat(function (x) { return x == 100 ? x+"%" : x; })
        .orient("bottom");

    colorScale.append("g")
        .attr("class", "x axis")
        .attr("transform", translate(0, 40))
        .call(xAxis);

    var es = updateData();

    var yscale = d3.scale.linear()
        .range([mapHeight,0])
        .domain([0,100]);

    var yAxis = d3.svg.axis()
        .scale(yscale)
	.tickValues([0, 20, 40, 60, 80, 100])
	.innerTickSize(-mapWidth)
	.outerTickSize(0)
        .orient("left");

    var yAxisSel = heatMapChart.append("g")
        .attr("class", "y axis")
        .attr("transform", translate(0, 0))
        .call(yAxis);

    var yAxis = d3.svg.axis()
        .scale(yscale)
	.tickValues([0, 20, 40, 60, 80, 100])
        .orient("left");

    var xscale2 = d3.scale.linear()
        .range([0, mapWidth])
        .domain([-1, dataPoints]);

    heatMapChart
	.selectAll("rect")
	.data(es)
	.enter()
	.append("rect")
	.attr("x", function (d, idx) { return xscale2(idx); })
	.attr("y", function (d) {
	    return mapHeight-mapHeight*d;
	}).attr("width", ratio)
	.attr("height", function (d) { return mapHeight*d; })
	.style("stroke-width", 0.3)
	.style("stroke", function (d) { return color(100*d); })
	.style("fill", function (d) { return color(100*d); });



    var xAxis2 = d3.svg.axis()
        .scale(xscale2)
        .orient("bottom");

    heatMapChart.append("g")
        .attr("class", "x axis")
        .attr("transform", translate(0, mapHeight))
        .call(xAxis2);

    tooltip = heatMap
	.append("g")
	.style("opacity", 0);

    var rect = tooltip.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", ratio)
	.style("stroke-width", 0.1)
	.style("stroke", "black")
	.attr("fill", "black");

    var text = tooltip.append("text")
	.attr("x", 10)
	.attr("y", 10)
	.style("stroke", "none");

    heatMap.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", mapWidth)
	.attr("height", 200)
	.style("fill", "transparent")
	.on("mousemove", function () {
	    var x = d3.mouse(this)[0];
	    var idx = Math.round(x*(1/ratio));
	    var data = es[idx-1 > 0 ? idx-1 : 0];
	    var dy = 20;

	    text.text((data*100).toFixed(2) + "%");
	    rect.attr("height", heatMapDy-dy + mapHeight - data*mapHeight);

	    tooltip
		.attr("transform", translate(ratio*idx, dy))
		.style("opacity", ratio/2);
	}).on("mouseout", function () {
	    tooltip.style("opacity", 0);
	});


    window.colorV1Update = function update() {
	var dur = 1200;

	es = updateData();

	var newH = heatMapChart
	    .selectAll("rect")
	    .data(es);

	heatMapChart
	    .selectAll("rect")
	    .data(es)
	    .transition()
	    //.duration(1000)
	    .delay(function(d, i) { return i / dataPoints * dur; })
	    .attr("x", function (d, idx) { return xscale2(idx); })
	    .attr("y", function (d) {
		return mapHeight-mapHeight*d;
	    }).attr("height", function (d) { return mapHeight*d; })
	    .style("stroke", function (d) { return color(100*d); })
	    .style("fill", function (d) { return color(100*d); });
    }
}

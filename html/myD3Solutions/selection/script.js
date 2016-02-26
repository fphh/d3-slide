

window.selection = function selection() {

    var letters0 = "abcdefghij".split("");
    var letters1 = "acexfghyj".split("");

    function translate(x, y) {
	return "translate(" + x + ", " + y + ")";
    }

    function identity(letter) { return letter; }

    var svg = d3.select("#app")
	.append("svg")
	.attr("width", 1000)
	.attr("height", 200);


    var rectsGroup = svg
	.selectAll(".rectangle")
	.data(letters0, identity)
	.enter()
	.append("g")
	.attr("class", "rectangle")
	.attr("transform", function (letter, idx) {
	    return translate(idx*100, 10);
	});

    rectsGroup.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", 80)
	.attr("height", 80)
	.style("fill", "#00bb33");

    rectsGroup.append("text")
	.attr("x", 24)
	.attr("y", 54)
	.text(identity);



    rectsGroup = svg
	.selectAll(".rectangle")
	.data(letters1, identity);

    function update() {

	rectsGroup
	    .select("rect")
	    .transition()
	    .duration(1000)
	    .style("fill", "#aa0033");
    }

    function enter() {

	var enterGroup = rectsGroup
	    .enter()
	    .append("g");

	enterGroup
	    .attr("class", "rectangle")
	    .attr("transform", function (letter, idx) {
		return translate(idx*100, 10);
	    })
	    .style("opacity", 0)
	    .transition()
	    .duration(1000)
	    .style("opacity", 1);


	enterGroup
	    .append("rect")
	    .attr("x", 0)
	    .attr("y", 0)
	    .attr("width", 80)
	    .attr("height", 80)
	    .style("fill", "#bb33bb");
	
	enterGroup
	    .append("text")
	    .attr("x", 24)
	    .attr("y", 54)
	    .text(identity);
    }

    function enterAndUpdate() {

	rectsGroup
	    .transition()
	    .duration(1000)
	    .attr("transform", function (letter, idx) {
		return translate(idx*100, 10);
	    })

	rectsGroup
	    .select("rect")
	    .transition()
	    .duration(1000)
	    .style("fill", "yellow");

    }


    function exit() {
	rectsGroup
	    .exit()
	    .transition()
	    .duration(1000)
	    .style("opacity", 0)
	    .remove();
    }


    setTimeout(update, 2000);
    setTimeout(exit, 4000);
    setTimeout(enterAndUpdate, 6000);
    setTimeout(enter, 8000);


    /*
      setTimeout(update, 2000);
      setTimeout(enter, 4000);
      setTimeout(enterAndUpdate, 6000);
      setTimeout(exit, 8000);
    */
};

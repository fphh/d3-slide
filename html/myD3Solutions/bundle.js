/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1),__webpack_require__(2),__webpack_require__(3),__webpack_require__(4),__webpack_require__(5),__webpack_require__(6);

/***/ },
/* 1 */
/***/ function(module, exports) {

	window.ex1v1=function(){var t=300,e=300,n=d3.range(0,10).map(function(){return 20+Math.round(200*Math.random())}).sort(d3.descending),r=d3.scale.category10().domain([0,n.length-1]),a=d3.select("#app").append("svg").attr("width",800).attr("height",600);a.selectAll("circle").data(n).enter().append("circle").attr("cx",t).attr("cy",e).attr("r",function(t){return t}).style("fill",function(t,e){return r(e)})};

/***/ },
/* 2 */
/***/ function(module, exports) {

	window.ex1v2=function(){function t(t,e){return"translate("+t+", "+e+")"}var e=300,n=300,r=d3.range(0,10).map(function(){return 20+Math.round(200*Math.random())}).sort(d3.descending),a=d3.scale.category10().domain([0,r.length-1]),i=d3.select("#app").append("svg").attr("width",800).attr("height",600),o=i.append("rect").attr("width","100%").attr("height","100%").attr("fill","transparent"),s=i.selectAll("circle").data(r).enter().append("circle").attr("cx",e).attr("cy",n).attr("r",function(t){return t}).style("fill",function(t,e){return a(e)}),l=i.append("g").attr("translate",t(0,0)).style("opacity",0),c=l.append("rect").style("fill","#eeffaa").style("stroke","#000000").style("stroke-width",1).style("shape-rendering","crispEdges"),d=l.append("text").style("fill","#000000");s.on("mouseenter",function(e){var n=d3.mouse(this),r=n[0],a=n[1],i=4,o=20;d.text(e);var s=d.node().getBBox();c.attr("x",s.x-i).attr("y",s.y-i).attr("width",s.width+2*i).attr("height",s.height+2*i),l.attr("transform",t(r+o,a-o)).style("opacity",1)}),s.on("mouseleave",function(t){l.style("opacity",0)}),l.on("mouseenter",function(){l.style("opacity",1)}),o.on("mouseenter",function(){l.style("opacity",0).attr("transform",t(-100,-100))})};

/***/ },
/* 3 */
/***/ function(module, exports) {

	window.ex1v3=function(){function t(t,e){return"translate("+t+", "+e+")"}var e=300,r=300,a=2,n=d3.range(0,10).map(function(){return 20+Math.round(200*Math.random())}).sort(d3.descending),i=d3.scale.category10().domain([0,n.length-1]),s=(d3.bisector(d3.descending).left,d3.select("#app").append("svg").attr("width",800).attr("height",600)),o=s.append("rect").attr("width","100%").attr("height","100%").attr("fill","transparent"),l=s.selectAll("circle").data(n).enter().append("circle").attr("cx",e).attr("cy",r).attr("r",function(t){return t}).style("stroke",function(t,e){return i(e)}).style("stroke-width",a).style("fill",function(t,e){return i(e)}),c=s.append("g").style("opacity",0).style("fill","none").style("stroke-width",a),y=c.append("circle").attr("cx",e).attr("cy",r),d=c.append("circle").attr("cx",e).attr("cy",r),p=s.append("g").attr("translate",t(0,0)).style("opacity",0),h=p.append("rect").style("fill","#eeffaa").style("stroke","#000000").style("stroke-width",1).style("shape-rendering","crispEdges"),u=p.append("text").style("fill","#000000");l.on("mouseenter",function(e,r){var s=d3.mouse(this),o=s[0],l=s[1],f=4;u.text(e);var g=u.node().getBBox();h.attr("x",g.x-f).attr("y",g.y-f).attr("width",g.width+2*f).attr("height",g.height+2*f),p.style("opacity",1).attr("transform",t(o+20,l-20));var m=n[r+1]?n[r+1]+a:n[r];y.attr("r",m).style("stroke",d3.rgb(i(r)).brighter()),d.attr("r",n[r]).style("stroke",d3.rgb(i(r)).brighter()),c.style("opacity",1)}),l.on("mouseleave",function(t){p.style("opacity",0),c.style("opacity",0)}),p.on("mouseenter",function(){p.style("opacity",1),c.style("opacity",1)}),o.on("mouseenter",function(){p.style("opacity",0),c.style("opacity",0)})};

/***/ },
/* 4 */
/***/ function(module, exports) {

	window.ex2v1=function(){function a(){return r.map(function(a){var t=Math.floor(Math.random()*n);return{cocktail:a,number:3>=t?0:t}})}function t(a,t){return"translate("+a+", "+t+")"}var r=["Bloody Mary","Mojito","White Russian","Pina Colada","Tequila Sunrise","Moscow Mule","Margarita"],n=10,e=a(),i=400,o=800,c=80,l=d3.select("#app").append("svg").attr("width",o+2*c).attr("height",i+2*c),s=l.append("g").attr("transform",t(c,c)),d=d3.scale.ordinal().rangeRoundBands([0,o],.1).domain(e.map(function(a){return a.cocktail})),u=d3.svg.axis().scale(d).orient("bottom");s.append("g").attr("class","x axis").attr("transform",t(0,i)).call(u);var p=d3.scale.linear().range([i,0]).domain([0,n]),f=d3.svg.axis().scale(p).orient("left");s.append("g").attr("class","y axis").call(f);var g=s.selectAll(".bar").data(e).enter();g.append("rect").attr("class","bar").attr("x",function(a){return d(a.cocktail)}).attr("width",d.rangeBand()).attr("y",function(a){return p(a.number)}).attr("height",function(a){return i-p(a.number)})};

/***/ },
/* 5 */
/***/ function(module, exports) {

	window.ex2v2=function(){function t(){return r.map(function(t){var a=Math.floor(Math.random()*e);return{cocktail:t,number:3>=a?0:a}})}function a(t,a){return"translate("+t+", "+a+")"}function n(){var a=t(),n=s.selectAll(".bar").data(a);n.transition().duration(1e3).attr("y",function(t){return p(t.number)}).attr("height",function(t){return o-p(t.number)})}var r=["Bloody Mary","Mojito","White Russian","Pina Colada","Tequila Sunrise","Moscow Mule","Margarita"],e=10,i=t(),o=400,c=800,u=80,l=d3.select("#app").append("svg").attr("width",c+2*u).attr("height",o+2*u),s=l.append("g").attr("transform",a(u,u)),d=d3.scale.ordinal().rangeRoundBands([0,c],.1).domain(i.map(function(t){return t.cocktail})),f=d3.svg.axis().scale(d).orient("bottom");s.append("g").attr("class","x axis").attr("transform",a(0,o)).call(f);var p=d3.scale.linear().range([o,0]).domain([0,e]),g=d3.svg.axis().scale(p).orient("left");s.append("g").attr("class","y axis").call(g);var m=s.selectAll(".bar").data(i).enter();m.append("rect").attr("class","bar").attr("x",function(t){return d(t.cocktail)}).attr("y",function(t){return p(t.number)}).attr("width",d.rangeBand()).attr("height",function(t){return o-p(t.number)}),window.ex2v2Update=n};

/***/ },
/* 6 */
/***/ function(module, exports) {

	window.ex2v3=function(){function t(){return e.map(function(t){var a=Math.floor(Math.random()*i);return{cocktail:t,number:3>=a?0:a}}).filter(function(t){return 0!==t.number}).sort(function(t,a){return a.number-t.number})}function a(t,a){return"translate("+t+", "+a+")"}function n(t){return t.cocktail}function r(){var a=t();f.domain(a.map(n));var r=d.selectAll(".bar").data(a,n),e=d3.transition().duration(g).each(function(){r.exit().transition().attr("y",c).attr("height",0).remove()}),i=e.transition().duration(g).each(function(){d.select(".x.axis").call(h),r.transition().attr("x",function(t){return f(t.cocktail)}).attr("width",f.rangeBand())});i.transition().duration(g).each(function(){r.enter().append("rect").attr("class","bar").attr("x",function(t){return f(t.cocktail)}).attr("width",f.rangeBand()).attr("y",c).attr("height",0),r.transition().attr("y",function(t){return m(t.number)}).attr("height",function(t){return c-m(t.number)})})}var e=["Bloody Mary","Mojito","White Russian","Pina Colada","Tequila Sunrise","Moscow Mule","Margarita"],i=10,o=t(),c=400,u=800,s=80,l=d3.select("#app").append("svg").attr("width",u+2*s).attr("height",c+2*s),d=l.append("g").attr("transform",a(s,s)),f=d3.scale.ordinal().rangeRoundBands([0,u],.1).domain(o.map(n)),h=d3.svg.axis().scale(f).orient("bottom");d.append("g").attr("class","x axis").attr("transform",a(0,c)).call(h);var m=d3.scale.linear().range([c,0]).domain([0,i]),p=d3.svg.axis().scale(m).orient("left");d.append("g").attr("class","y axis").call(p),d.selectAll(".bar").data(o,n).enter().append("rect").attr("class","bar").attr("x",function(t){return f(t.cocktail)}).attr("width",f.rangeBand()).attr("y",function(t){return c-m(t.number)}).attr("height",function(t){return m(t.number)});var g=1e3;window.ex2v3Update=r};

/***/ }
/******/ ]);
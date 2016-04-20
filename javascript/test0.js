
// Very imperativ version

// Array of objects that we modify
// as data arrives
var files = [
    { name: "A" },
    { name: "B" },
    { name: "C" }, 
    { name: "D" }, 
    { name: "E" } ];


function finalCallback() {
    console.log("See, I fetched it all:");
    console.log(files);
}

// fetchFile plays the part of d3.csv:
function fetchFile(file, cb) {
    console.log("Fetching data for file", file.name);
    return cb("Data for file " + file.name);
}

// Very imperativ because we modify the data elements
// of our array.
// Everybody from outside can see, what we did to
// our array.
var xs = files.reduceRight(function (acc, file) {
    return function () {
	fetchFile(file, function (data) {
	    file.data = data;
	    acc();
	});
    };
}, finalCallback);

xs();


console.log("Your array became:");
console.log(files);

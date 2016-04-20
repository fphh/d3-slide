

// Short Version
//
// but ugly, because the argument order of
// "fetchFile" (e.g. d3.csv) does not play
// nicely with the argument order for the
// first callback of Array.prototype.reduce.


// Nevertheless, I consider this to be the
// best solution of all three solutions,
// because the original array is not modified
// in any way.

var files = [ "A", "B", "C", "D", "E" ];

// The special variable "arguments" contains all
// the fetched data:
function finalCallback() {
    console.log("See, I fetched it all:");
    console.log(arguments);
}

// fetchFile plays the part of d3.csv.
// We successively bind all fetched data
// to the callback. In "finalCallback"
// we find our data as the special variable
// "arguments". 
function fetchFile(file, cb) {
    console.log("Fetching data for file", file);
    return cb.bind(null, "Data for file " + file);
}

// Ugly, because the first callback argument for 
// "reduce" only flips the arguments to "fetchFile".
// No real work is done inside the callback!
var xs = files.reduce(function (acc, file) {
    return fetchFile(file, acc);
}, finalCallback);

xs();


console.log("Your array became:");
console.log(files);

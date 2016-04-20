

// Very short version
// 
// which would even be shorter if we had not
// to overload "reduce".
// The need to to overload reduce stems
// from the fact that d3.csv (or "fetchFile") needs its
// argument in reversed order comparing to Array.prototype.reduce.

var files = [ "A", "B", "C", "D", "E" ];

// We overload the "reduce" method from Array.prototype
// for this particular instance of Array
// in order to flip the arguments of the callback "f".
// "this" points to the array "files" itself.
files.reduce = function (f, x) {
    return Array.prototype.reduce.call(this, function (a, b) {
	return f(b, a); 
    }, x);
};


// The special variable "arguments" contains all
// the fetched data:
function finalCallback() {
    console.log("See, I fetched it all:");
    console.log(arguments);
}

// fetchFile plays the part of d3.csv:
function fetchFile(file, cb) {
    console.log("Fetching data for file", file);
    return cb.bind(null, "Data for file " + file);
}

// Very short, because our special "reduce" method
// already flips the arguments for "fetchFile";
// Yeah, dig it!
var xs = files.reduce(fetchFile, finalCallback);

xs();


console.log("Your array became:");
console.log(files);

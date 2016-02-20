
module.exports = {
    entry: "./solutions.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
    },
    module: {
        loaders: [
	    {
		test: /.*\.js$/,
		loader: "uglify"
            }
	]
    }
};


module.exports = {
    entry: "./solutions.js",
    output: {
        path: __dirname,
        filename: "bundle.max.js",
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

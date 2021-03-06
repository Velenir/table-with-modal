const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
	app: path.join(__dirname, 'app'),
	build: path.join(__dirname, 'build'),
	style: path.join(__dirname, 'app', 'styles'),
	images: path.join(__dirname, 'app', 'images'),
	fonts: path.join(__dirname, 'app', 'fonts')
};

const templateConfig = {
	title: 'Table with Modal',
	inject: false,
	template: 'pug-loader!./app/index.pug',
	mobile: true,
	appMountId: 'app'
};

const SVGtoReact = {
	module: {
		rules: [{
			test: /\.svg$/,
			use: [
				{
					loader: 'babel-loader',
					options: {cacheDirectory: true}
				},
				{
					loader: 'react-svg-loader',
					options: {
						svgo: {floatPrecision: 2}
					}
				}
			],
			include: PATHS.images,
		}]
	}
};


const common = merge([
	{
		entry: {
			app: PATHS.app
		},
		output: {
			path: PATHS.build,
			filename: 'js/[name].js',
			chunkFilename: 'js/[name].async.js'
		},
		resolve: {
			extensions: ['.js', '.jsx']
		}
	},
	parts.loadJavaScript(PATHS.app),
	parts.lintCSS(),
	// parts.copySVG(PATHS.images)
	parts.copyFonts(PATHS.fonts),
	SVGtoReact
]);

module.exports = function(env) {
	if (env === 'production') {
		return merge([
			common,
			{
				output: {
					chunkFilename: 'js/[chunkhash].js',
					filename: 'js/[name].[chunkhash].js',
					// Tweak this to match your GitHub project name
					// publicPath: '/webpack-project/'
				},
				plugins: [
					new webpack.HashedModuleIdsPlugin()
				],
				recordsPath: path.join(__dirname, 'records.json')
			},
			parts.indexTemplate(templateConfig, {
				inline: 'manifest'
			}),
			parts.setFreeVariables({
				'process.env.NODE_ENV': 'production'
			}),
			parts.lintJavaScript(PATHS.app),
			parts.minifyJavaScript({
				sourceMap: true
			}),
			parts.extractBundles([
				{
					name: 'vendor',
					entries: ['react', 'react-dom', 'redux', 'react-redux']
				},
				{
					name: 'manifest'
				}
			]),
			parts.clean(PATHS.build),
			parts.generateSourcemaps('source-map'),
			parts.extractCSS(PATHS.style, {publicPath: '../'}),
			parts.optimizeImages(PATHS.images)
		]);
	}
	
	return merge([
		common,
		{
			// Disable performance hints during development
			performance: {
				hints: false
			},
			plugins: [
				new webpack.NamedModulesPlugin()
			]
		},
		parts.indexTemplate(templateConfig),
		parts.lintJavaScript(PATHS.app, {
      // Emit warnings over errors to avoid crashing
      // HMR on error.
			emitWarning: true
		}),
		parts.generateSourcemaps('eval-source-map'),
		parts.loadCSS(PATHS.style),
		parts.displayImages(PATHS.images),
		parts.devServer({
			// Customize host/port here if needed
			host: process.env.HOST,
			port: process.env.PORT
		})
	]);
};

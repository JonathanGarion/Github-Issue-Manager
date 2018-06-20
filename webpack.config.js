/* eslint-disable */
// disable eslint as this code is not being used in production
const WEBPACK             = require('webpack');
const PATH                = require('path');
const EXTRACT_TEXT_PLUGIN = require('extract-text-webpack-plugin');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');
const STYLE_LINT_PLUGIN   = require('stylelint-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./client/index.jsx'
	],
	output: {
		path: PATH.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel-loader', 'eslint-loader'],
				include: PATH.join(__dirname, 'client'),
				exclude: [/(node_modules\/build)/]
			},
			{
				test: /\.scss$/,
				use: EXTRACT_TEXT_PLUGIN.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								publicPath: '/build/css'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => {
									return [
										require('autoprefixer')
									];
								},
								publicPath: '/build/css'
							}
						},
						{
							loader: 'sass-loader',
							options: {
								publicPath: '/build/css'
							}
						},
					]
				})
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg)$/i,
				use: [
					'file-loader',
						{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							optipng: {
								enabled: false,
							}
						}
					},
				],
			}
		]
	},
	plugins: [
		new HTML_WEBPACK_PLUGIN({
			title: 'Headcount',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: './index.html'
		}),
		new EXTRACT_TEXT_PLUGIN({
			filename: 'main.css'
		}),
		new STYLE_LINT_PLUGIN({
			options: {
				configFile: '.stylelintrc',
				context: 'scss/main.scss',
				syntax: 'scss'
			}
		}),
	]
};

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); 
module.exports = {
	mode: 'development',
	// mode: 'production',
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/dist'),
		chunkFilename: 'chunks/[name].js'	// 这句代码是把vue-router异步组件的js文件, 
														// 在被webpack打包后丢到指定的chunks文件夹下并命名
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			favicon: path.resolve('favicon.ico') // 新增
		}),
		new VueLoaderPlugin(),
		new ExtractTextPlugin({
      filename: './css/style.css', // 从 .js 文件中提取出来的 .css 文件的名称
      allChunks: true	// 这句一定要加,不然vue-router的异步组件技术会报错
    })
	],
	module: {
		rules: [
			{test: /\.css$/, use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })},
			{test: /\.less$/, use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })},
			{test: /\.jpg|jpeg|png|gif$/, use: 'url-loader?limit=9000&name=images/[name].[ext]'},
			{test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
			{test: /\.vue$/, use: 'vue-loader'},
			{test: /\.(eot|woff2?|ttf|svg)$/, use: 'url-loader'}
		]
	},
	externals:{
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vue-resource':'VueResource'
}
}
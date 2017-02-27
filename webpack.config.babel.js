import { join } from 'path';

const include = join(__dirname, 'src');

export default {
	entry: './src/index',
	output: {
		path: join(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'bolivia-presidents',		
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
      			test: /\.js$/,
      			exclude: /node_modules/,
      			loader: 'babel-loader',
      			include
    		},
			{
				test: /\.json$/,
				loader: 'json-loader',
				include
			}
		]
	}
}
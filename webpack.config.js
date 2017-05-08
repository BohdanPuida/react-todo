var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
],
externals: {
jquery: 'jQuery'

},

plugins: [
 new webpack.ProvidePlugin({

   '$': 'jquery',
   'jQuery':'jquery'
 })

],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      'C:/Users/Bogdan/Desktop/ReactTodo/app/components'

    ],
    alias: {


      applicationStyles:'C:/Users/Bogdan/Desktop/ReactTodo/app/styles/app.scss',
      TodoApp:"C:/Users/Bogdan/Desktop/ReactTodo/app/components/TodoApp.jsx",
      TodoList:"C:/Users/Bogdan/Desktop/ReactTodo/app/components/TodoList.jsx",
      Todo:"C:/Users/Bogdan/Desktop/ReactTodo/app/components/Todo.jsx",
      AddTodo:"C:/Users/Bogdan/Desktop/ReactTodo/app/components/AddTodo.jsx",
      TodoSearch:"C:/Users/Bogdan/Desktop/ReactTodo/app/components/TodoSearch.jsx",
      TodoAPI:"C:/Users/Bogdan/Desktop/ReactTodo/app/api/TodoAPI.jsx",
      actions: 'C:/Users/Bogdan/Desktop/ReactTodo/app/actions/actions.jsx'

    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'C:/Users/Bogdan/Desktop/ReactTodo/node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};

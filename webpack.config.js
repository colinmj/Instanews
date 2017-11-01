module.exports = {
  entry: './js/script.js',
  output: {
     filename: './build/bundle.js'
  },


module: {
  rules: [
  // ...other loaders...
  { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
  
  {
       test: /\.scss$/,
       use: [
         {
           loader: 'style-loader'
         },
         {
           loader: 'css-loader'
         },
         {
           loader: 'sass-loader'
         }
       ]
    },
 ]
}
};
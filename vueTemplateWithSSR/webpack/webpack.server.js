const webpack=require('webpack')
const merge=require('webpack-merge')
const base=require('./webpack.config')
const nodeExternals=require('webpack-node-externals')
const VueSSRServerPlugin=require('vue-server-renderer/server-plugin')
const resolve=require('./config').lib.resolve

module.exports=merge(base,{
  target:'node',
  devtool:'#source-map',
  entry:resolve('src/entry-server.js'),
  output:{
    filename:'server-bundle.js',
    libraryTarget:'commonjs2'
  },
  externals:nodeExternals({
    whitelist: [/\.css$/, /\?vue&type=style/]
  }),
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV||'development'),
      'process.env.VUE_ENV':'"server"'
    }),
    new VueSSRServerPlugin()
  ]
})
const express = require('express')
const path = require('path')
const consolidate = require('consolidate')

const app = express()
const port = 8010
const isDev = process.env.NODE_ENV !== 'production'

//set view engine
app.engine('html', consolidate.ejs)
app.set('view engine', 'html')
app.set('views', path.resolve(__dirname))

console.log(process.env.NODE_ENV)
if(isDev){
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackDevConfig = require('./webpack.config.js')

  const compiler = webpack(webpackDevConfig)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    stats: {
      colors: true
    },
    index: "index.html",
    hot: true,
    inline: true
  }))
  app.use(webpackHotMiddleware(compiler))
}

app.use('/test', function(req, res, next) {
  console.log('222');
  next()
})


app.listen(port, ()=>{
  console.log(`App is running on port ${port}`)
})

/*if(module.hot) {
  module.hot.accept();
}
*/
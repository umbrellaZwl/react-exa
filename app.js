const express = require('express')
const path = require('path')
const consolidate = require('consolidate')
const routeConfig = require('./routes')
const bodyParser = require('body-parser')

const app = express()
const port = 8010
const isDev = process.env.NODE_ENV !== 'production'


//set view engine
app.engine('html', consolidate.ejs)
app.set('view engine', 'html')
app.set('views', path.resolve(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

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

//设置路由，处理请求
routeConfig(app)

app.listen(port, ()=>{
  console.log(`App is running on port ${port}`)
})

if(module.hot) {
  module.hot.accept();
}

var app = require('koa')()

app.use(require('koa-es6ify')({
  entry: './assets/js/main.js',
  path: '/js/bundle.js'
}))

app.use(require('koa-static')('public'))

app.listen(3000)

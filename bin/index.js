#!/usr/bin/env node

const { useKoaDevPack } = require('@ali/midway-faas-dev-pack')
const Koa = require('koa')
const proxy = require('koa-proxy')

const app = new Koa()

app.use(useKoaDevPack({}))
app.use(proxy({
  host: 'http://127.0.0.1:8888', // 本地开发的时候代理前端打包出来的资源地址
  match: /(\/static)|(\/sockjs-node)|hot-update/
}))

app.listen(3000, () => {
  console.log('server is listening on http://localhost:3000')
})

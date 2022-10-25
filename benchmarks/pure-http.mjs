'use strict'
import pureHttp from 'pure-http'
const app = pureHttp()
app.get('/', (_, res) => {
  res.json({ hello: 'world' })
})
app.listen(3000)

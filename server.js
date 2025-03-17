const express = require('express')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')
const app = express()
const port = process.env.PORT || 8000

app.use('/api/product/cake', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true })) 
app.use('/api/product/breads', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }))


app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
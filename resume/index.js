const express = require('express')
const { readFileSync } = require('fs')
const path = require('path')

const app = express()
app.set('view engine', 'ejs')

app.use('/static', express.static(path.resolve(__dirname, 'static')))

app.get('/', (req, res) => {
  const resumeJson = readFileSync(path.resolve(__dirname, 'resume.json'), 'utf8')
  const resume = JSON.parse(resumeJson)
  res.render(path.resolve(__dirname, 'resume.ejs'), { data: resume, require })
})
app.listen(3000)

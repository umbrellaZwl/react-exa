const fs = require('fs')
const Promise = require('es6-promise')

exports.readFileAsync = (fpath, encoding) => (
  new Promise((resolve, reject) => {
    fs.readFile(fpath, encoding, (err, content) => {
      if(err) reject(err)
      else resolve(content)
    })
  })
)

exports.writeFileAsync = (fpath, content) => (
  new Promise((resolve, reject) => {
    fs.writeFile(fpath, content, 'utf8', (err) => {
      if(err) reject(err)
      else resolve()
    })
  })
)
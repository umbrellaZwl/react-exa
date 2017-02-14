const path = require('path')
const util = require('../util')
const fpath = (__dirname, './database.txt')

module.exports = function(app) {
  app.get('/fetchQuestions', function(req, res){
    util.readFileAsync(fpath, 'utf8')
      .then(content => res.json(content))
      .catch(err => { res.send(err) })
    // res.json(questions)
  })

  app.post('/addNewQt', function(req, res){
    const questions = req.body.questions
    util.writeFileAsync(fpath, questions)
      .then(() => { res.json('saved success') })
      .catch(err => { res.send(err) })
  })
}
config =
  name: 'rupert-config-ionic.test'
  root: __dirname
  plugins:
    dependencies: {}
  stassets:
    root: __dirname

config.plugins.dependencies[__dirname + '/../src/config'] = yes

describe 'Rupert Config Ionic', ->
  app = null
  rupert = require('rupert')(config)
  before (done)->
    rupert.start ->
      app = rupert.app
      config = rupert.config
      done()

  it 'attaches types to the config', ->
    config.stassets.vendors.js.length.should.equal 1
    config.stassets.vendors.css.length.should.equal 1

  it 'registers Angular file types', ->
    config.stassets.scripts.types.length.should.equal 6

  it 'serves ionic fonts', ->
    config.static['/fonts'].should.match /ionic.release.fonts/ 

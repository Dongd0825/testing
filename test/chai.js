const { add, mul} = require('../src/math') 
const {should, expect, assert} = require('chai')

should()
add(2,3).should.equal(5)

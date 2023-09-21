const chai = require('chai')
global.expect = chai.expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code

jsdom({
  html, src
});


function calculatesFarePrice (start, destination) {
  let x = distanceFromHqInFeet(start, destination)
if (x<=400){
  return 0;
}
else if (x>400 & x<2000){
  let y=x-400
  let z =  y * 0.02;
  return z
}
else if (x>2000 & x<=2500 ){
  return 25;
}
 else {
 return 'cannot travel that far';}
}

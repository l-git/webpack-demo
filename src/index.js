
console.log('index')
console.log('webpack')
import 'babel-polyfill';
require('./style.css')
import print from './print'

import koala from './Koala.jpg'
var img=new Image();
img.src=koala
console.log(img)

var ii=document.querySelector('.ii')
ii&&ii.appendChild(img)


print()




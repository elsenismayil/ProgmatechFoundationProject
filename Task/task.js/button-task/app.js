let body = document.querySelector('body')
function changeBg(){
    body.style.background = "red"
}

let head = document.querySelector('h1')
function changeHeading(){
    head.style.color = "blue"
}

let metn = document.querySelector('p')
let ul = document.querySelector('ul')
function changeP(){
    metn.style.color = "green"
    ul.style.color = "green"
}


let herfler = document.querySelector('p').innerHTML
let ulc = document.querySelector('ul').innerHTML
let herflerarr = herfler.split("")   
let ulcarr = ulc.split("")
 let cem = herflerarr.length + ulcarr.length
 console.log(cem)
 
let sozler = document.querySelector('p').innerHTML
let ulSozler = document.querySelector('ul').innerHTML
let sozlerArr = sozler.split(' ')
let ulSozlerarr = ulSozler.split(' ')
let cemSozler = ulSozlerarr.length + sozlerArr.length
console.log(cemSozler)



  



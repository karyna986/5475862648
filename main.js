// Function Declaration


// function seyHi () {
//     console.log('Hello!')
// }
// seyHi()



// Function Expression 



// let seyHi = function() {
//     console.log('Hello!')
// }

// seyHi ()


//Стрелочные функции
// let seyHi = () =>  console.log('Hello world!')
// seyHi()



// function creatBlock () {
//     let box = document.querySelector('.box')
//     let block = document.createElement('div') // создать новый элемент 
//     block.classList = ('mini')

//     box.append(block)
// }

// function creatBlock2 () {
//     for(let i = 1; i<=2; i++) {
//         let box = document.querySelector('.box')
//         let block = document.createElement('div') // создать новый элемент 
//         block.classList = ('mini')

//          box.append(block) // вложить в box block
//     }
// }

// for (let i = 1; i<=3; i++) {
//     creatBlock ()
// }

// let box = document.querySelector('.box')
// let input = document.querySelector('.input-text')

// let item = document.createElement('ol')
// box.append(item)

// let num = 1

// function creatItem () {
//     let task = document.createElement('li')
//     task.classList = ('task')
//     task.id = `li_${num}`
// }


let input = document.querySelector('.input-text') 
let box = document.querySelector('.box') 

let item = document.createElement('ol')
box.append(item)

let num = 0
function creatItem() {
    num++
    let inputText = input.value
    let li = document.createElement('li')
    li.classList = ('item')
    li.id = `li_${num}`
    li.innerHTML = `
    <span class = "text">${inputText}</span>
    <span onclick= "deleteItem(${num}) " class = "close">x</span>
    `

    item.append(li)
    document.querySelector('.input-text').value = ' ' 
}

function deleteItem(e) {
    let li = document.querySelector(`#li_${e}`)
    li.remove()
}
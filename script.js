// tpSFqiCtPEJPqDxyOvQ3
const forum = document.querySelector("#forum")
const alertMsg = document.querySelector(".alert")
const getMessagesBtn = document.getElementById('get-chat-messages')
fetch('http://user08.test1.seschool.ru:3000/api/chat/').then((response)=> {
        if (response.ok) return response.json()
    }).then((messages)=> {
        //console.log(messages[2].message)
        // for (const message of messages) {
        //     console.log(message.message)
        // }
        let resultHtml = ''
        messages.forEach(message => {
            resultHtml += `<li class = "list-group-item">${message.username}: ${message.message}</li>`
        })
        forum.innerHTML = resultHtml
    })

    const evtSource = new EventSource("http://user08.test1.seschool.ru:3000/api/chat/subscribe");
    evtSource.onmessage = function (event) {
        const newElement = document.createElement("li");
        newElement.classList.add("list-group-item")
        const data = JSON.parse(event.data)
        //const eventList = document.getElementById('list');
        newElement.innerHTML = `${data.username}: ${data.message}</li>`;
        forum.insertBefore(newElement, forum.firstElementChild);
    }



getMessagesBtn.addEventListener('click', ()=>{
    fetch('http://user08.test1.seschool.ru:3000/api/chat/').then((response)=> {
        if (response.ok) return response.json()
    }).then((messages)=> {
        //console.log(messages[2].message)
        // for (const message of messages) {
        //     console.log(message.message)
        // }
        messages.forEach((message)=>{
            console.log(message.message)
    })
}) 
})



const postMessagesBtn = document.getElementById('post-chat-messages')
const userForm = document.querySelector("#user_form")
//postMessagesBtn.addEventListener('click', ()=>{
const postMessage = () => {
    const username = userForm[0].value
    const email = userForm[1].value
    const message = userForm[2].value
    //debugger
    fetch ('http://user08.test1.seschool.ru:3000/api/chat/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer TOKEN'
        },
        body: JSON.stringify({
                username,
                email: email,
                message: message
        })
    })
    .then(response => { 
        if (response.ok) {
            return response.json()  
        } else {
            throw new Error(`Status: ${response.status}.Message: ${response.statusText}`)
        }
                    
    })
    .then(json => {
        console.log(json)
        alertMsg.classList.remove('show')
        alertMsg.textContent = ''
    }).catch(err =>{
        console.error(err)
        alertMsg.classList.add('show')
        alertMsg.textContent = err
    })
}


console.log(userForm)
console.dir(userForm)
// let func = function(event) {
//     console.log(event)
//     event.preventDefault()
// }
userForm.addEventListener("submit", function(event) {
    //console.log(event)
    event.preventDefault()
    const formData = new FormData(userForm)
    if (!(userForm[0].value && userForm[1].value && userForm[2].value)) {
        const errorMsg = (userForm[0].value ?  "" : "Введите имя<br>") + 
        (userForm[1].value ? "" : "Введите email<br>") +
        (userForm[2].value ? "" : "Введите сообщение<br>")        
        alertMsg.innerHTML = errorMsg;
        //alertMsg.style.display = "block"
        alertMsg.classList.add('show')
        return
    }
    postMessage();

    // alertMsg.innerHTML = '';
    // //alertMsg.style.display = "block"
    // alertMsg.classList.remove('show')

    // const userMessage = {
    //     userName: formData.get('user_name'),
    //     userEmail: formData.get('user_email'),
    //     userMessage: formData.get('user_message')
    // }
    // userForm[0].value = ''
    // userForm[1].value = ''
    // userForm[2].value = ''
    // formData.set('user_name','')
   
    // forum.innerHTML += `<li class="list-group-item">    
    //    <sapn>${userMessage.userName}: </span>
    //    <sapn>${userMessage.userMessage}: </span>
    // </li>`

    // forum.insertAdjacentHTML('afterbegin', `<li class="list-group-item">    
    //     <span>${userMessage.userName}: </span>
    //     <span>${userMessage.userMessage}: </span>
    //  </li>`)    

})












































// function sumFunc(arg1, arg2, arg3) {
//     // let arg1, arg2, arg3
//     return arg1+arg2+arg3
// }

// let obj = {
//     a: 1
// }
// obj.b = 2

// let linkToFunc = sumFunc
// linkToFunc.someProperty = 'Hello'

// let result = sumFunc(1,2,3)
// // console.log(result)

// // console.log('Compare functions: ' + (linkToFunc == sumFunc))
// // console.log(sumFunc.someProperty)

// let resultMul = (function (arg1, arg2) {
//     return arg1 * arg2
// })(4,5)

// // console.log(resultMul)

// // const obj2 = 'Hello'

// const button = document.querySelector('#click')
// const userName = document.querySelector('input') // $(selector)
// const inputValue = document.querySelector('#input-value')

// const inputs = document.querySelectorAll('input') // $(selector)

// button.addEventListener('click', function (event) {
//     inputValue.innerText = userName.value
//     console.log(event)
// })

// const inputListener = function (event) {
//     const input = event.target
//     inputValue.innerText = input.value
// }

// for (const input of inputs) {
//     // console.log(input)
//     input.addEventListener('input', inputListener);
// }


// // userName.addEventListener('input', inputListener)
// // console.log('Step 1')
// // alert('Step 2') // Bad way
// // console.log('Step 3')
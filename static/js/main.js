console.log("main works")

let message_input=document.querySelector("#message-input")
let message_btn=document.querySelector("#message-btn")
let message_list=document.querySelector("#messages")
let username=document.querySelector("#username")
socket = new WebSocket("ws://"+window.location.host)
socket.addEventListener('open',e=>{
    console.log('Connection opened')
})
socket.addEventListener('close',e=>{
    console.log('Connection closed')
})
socket.addEventListener('error',e=>{
    console.log('Connection error')
})
socket.addEventListener('message',e=>{
    text=document.createElement('h5')
    data=JSON.parse(e.data)
    temp=''
    if (username.innerText==data['username']){
        temp=""
        text.className="ms-auto"
    }
    else {
        temp=`<p style="color:red;">${data['username']}</p>`
    }
    text.innerHTML=`${temp}<p style="color:white;">${data['message']}</p>`
    text.className+=" card-body p-1 m-4"
    message_list.appendChild(text)
    message_list.scrollTop=message_list.scrollHeight
})

message_input.addEventListener('keypress',e=>{
    if(e.key=='Enter'){
        message_btn.click()
    }
})
message_btn.addEventListener('click',async e=>{
message=message_input.value
message_input.value=''
await socket.send(JSON.stringify({'username':username.innerText,'message':message}))
})
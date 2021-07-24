console.log("It works")


let user_input=document.querySelector("#username")
let user_btn=document.querySelector("#user-join-btn")

user_input.addEventListener('keypress',e=>{
    if(e.key=="Enter")user_btn.click()
})
user_btn.addEventListener('click',e=>{
    console.log("click")
    username=user_input.value
    window.location="http://"+window.location.host+"/"+username
})
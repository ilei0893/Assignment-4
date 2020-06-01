console.log("hello")
//q1
const button1=document.getElementById('button1')
const button2=document.getElementById('button2')
const buttongroup=document.getElementById('buttongroup')
button1.addEventListener("click",(event)=> buttongroup.innerText="I'm right")
button2.addEventListener("click",(event)=>buttongroup.innerText="No,I'm right")
//q2
// const largeElement=document.getElementById('largeElement')
// largeElement.addEventListener("mouseover",(event)=>alert("Hey, I told you not to hover over me!"))
//q4
const submit=document.getElementById('submit')
submit.addEventListener("click",(event)=>
{
    if (password.value!='12345678'){
        alert("password is incorrect");
    }
}
)
//q5

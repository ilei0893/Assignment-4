console.log("hello")
//1: Create an HTML page with two buttons that argue with each other. When one button is clicked, 
//   the text "I'm right" should be placed next to it. When the other button is clicked, 
//   the text is replaced with, "No, I'm right!"
const button1=document.getElementById('button1')
const button2=document.getElementById('button2')
const buttongroup=document.getElementById('buttongroup')
button1.addEventListener("click",(event)=> buttongroup.innerText="I'm right")
button2.addEventListener("click",(event)=>buttongroup.innerText="No,I'm right")

//2: Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. 
//   When you hover over the element, send an alert to the user that says, 
//   "Hey, I told you not to hover over me!
const largeElement=document.getElementById('largeElement')
largeElement.addEventListener("mouseover",(event)=>alert("Hey, I told you not to hover over me!"))

//4: In a Javascript file, write a program which checks the following things:
//   a. checks that the password is 12345678
//   b. if the password is incorrect, send an alert message
//   c. Your page should also include an <h1> tag. If the information in the form is correct, 
//      have Javascript change the text in the <h1>.HTML page.
const submit=document.getElementById('submit')
submit.addEventListener("click",(event)=>
{
    if (password.value!='12345678'){
        alert("password is incorrect");
    }
}
)

//q5

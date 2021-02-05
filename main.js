const messageIn = document.querySelector(".msginput");
const messageOut = document.querySelector(".msgpassed")
const btn = document.querySelector(".btn")

btn.addEventListener("click", passMessage);

function passMessage(){
   let msg = messageIn.value;
   
   if(msg === ""){
   alert("Pass your message");
   }
   else{
   messageOut.textContent = msg;
   messageIn.value = "";
   }
}
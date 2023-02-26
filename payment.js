let bt= document.getElementById("btn")
let card= document.getElementById("card")
let otp= document.getElementById("otp")
let submit= document.getElementById("sumb")
submit.addEventListener("click",(()=>{
    alert("Your Order Placed")
    window.location.href="./index.html"
}))


bt.addEventListener("click",(()=>{
    card.style.display="none"
    bt.style.display="none"
    otp.style.display="block"
}))



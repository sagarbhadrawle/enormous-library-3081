
// let lsdata = JSON.parse(localStorage.getItem("added"))||[]
// let sign = document.getElementById("signbtn")
// let myip=  document.getElementById("myip>a")
// sign.addEventListener("click",()=>{
  
//     setInterval(()=>{
//         if(lsdata!==null)
//         {
//             lsdata.forEach((el,ind)=>{
//               myip.innerText=lsdata[ind].name
//             })
//         }


//     },1000)

// })
let ar =[
    "./image/slide1.png","./image/slide2.png"
]
let slide = document.getElementById("slide")
let img = document.createElement("img")
let c=-1
setInterval(()=>{
   
    c++
    if(c==ar.length)
    {
        c=0
    }

   slide.src=ar[c] 
   
},1000)


let data =JSON.parse(localStorage.getItem("added"))||[]
let sign=document.getElementById("signbtn")
let ip=document.getElementById("ip")
// ip.innerText=data[0].name
ip.addEventListener("click",(()=>{
    max(data)
    console.log("sagar");
}))
// setInterval(() => {
//     max(data)
// }, 1000)

function max(data)
{
    let sort = data.sort((a,b)=>{
        return b.quantity - a.quantity

    })
    let name=sort[data.length-1].name
    ip.innerText=name
    let spans=document.querySelector("span")
    sign.style.display="none"
    spans.innerText=""
    let anchor= document.getElementById("create")
    anchor.innerText="signout"
    

}

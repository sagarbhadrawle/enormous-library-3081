
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

// // })
// let a = document.querySelector(a)
// a.style.color="black"



// let ar =[
//     "./image/slide1.png","./image/slide2.png"
// ]
// let slide = document.getElementById("slide")
// let img = document.createElement("img")
// let c=-1
// setInterval(()=>{
   
//     c++
//     if(c==ar.length)
//     {
//         c=0
//     }

//    slide.src=ar[c] 
   
// },1000)


let data =JSON.parse(localStorage.getItem("added"))||[]

if(data!==null)
{
    max(data[data.length-1])
    let createAc=document.getElementById("create")
    // createAc.innerText=null
    let dropip=document.getElementById("dropip")
    let anchor= document.createElement("a")
    anchor.setAttribute("id","remove")
    anchor.innerText="signout"
    // anchor.setAttribute("href",)
    dropip.append(anchor)

}
// ip.innerText=data[0].name

let remove=document.getElementById("remove")
remove.addEventListener("click",(()=>{
    
    
    // localStorage.clear()
    display(data[data.length-1])
    // window.relode
    location.reload()

}))

let sign=document.getElementById("signbtn")
sign.addEventListener("click",(()=>{
    max(data[data.length-1])
    // console.log(data.name)
    console.log("sagar");
}))
let createAc=document.getElementById("create")
createAc.addEventListener("click",(()=>{
    // localStorage.clear()
    max(data[data.length-1])
    console.log("sagar");
}))
// setInterval(() => {
//     max(data)
// }, 1000)
let anchor= document.getElementById("create")
anchor.innerText="signout"
anchor.addEventListener("click",(()=>{
    let ip=document.getElementById("ip")
    // ip.innerText=null
}))
if(anchor.innerText==="signout")
{
    let ip=document.getElementById("ip")
    // ip.innerText=null
    
}

function max(data)
{  
    //  console.log(data.name)
    let sign=document.getElementById("signbtn")
    let ip=document.getElementById("ip")
    let name=data.name
    ip.innerText=name
    let spans=document.querySelector("span")
    sign.style.display="none"
    spans.innerText=""
    let anchor= document.getElementById("create")
  
    


}

// setInterval(()=>{
// location.reload()
// console.log("sagar");
// },1000)
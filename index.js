
let lsdata = JSON.parse(localStorage.getItem("added"))||[]
let sign = document.getElementById("signbtn")
let myip=  document.getElementById("myip>a")
sign.addEventListener("click",()=>{
  
    setInterval(()=>{
        if(lsdata!==null)
        {
            lsdata.forEach((el,ind)=>{
              myip.innerText=lsdata[ind].name
            })
        }


    },1000)

})
let data =JSON.parse(localStorage.getItem("product"))||[]
 



let total = document.getElementById("price")
let quant = document.getElementById("quant")
let sum = 0
for (let i = 0; i < data.length; i++) {
    sum += data[i].price
    console.log("Sagar")
   }
   total.innerText = sum
   quant.innerText = data.length


display(data)


function display(data){
    let content = document.getElementById("content")
    let cont = document.getElementById("cont")
    let img= document.getElementById("img")
    let titles= document.getElementById("tittle")
    let colors= document.getElementById("color")
    let prices= document.getElementById("price")
    
    content.innerText=""
    // let sum=0
    data.forEach((el,ind)=>{
        let div1=document.createElement("div")
        let div3=document.createElement("div")
        let div2=document.createElement("div")
        let title = document.createElement("h5")
        title.setAttribute("id","title")
        let image=document.createElement("img")
        let price = document.createElement("p")
        let color = document.createElement("p")
        let quantity = document.createElement("p")
        quantity.innerText="Quantity"+el.quantity

        let incbutton =document.createElement("button")
        let decbutton =document.createElement("button")
        // titles.append(title)
        title.innerText=el.title
        image.src =el.image
        // img.append(image)
        price.innerText="Price:"+el.price
        price.style.fontSize="20px"
        // prices.append(price)
        color.innerText="Color:"+el.color
        color.style.fontSize="20px"
        quantity.style.fontSize="20px"
        // colors.append(color)
        incbutton.innerText="+"
        decbutton.innerText="-"
        incbutton.style.backgroundColor="green"
        decbutton.style.backgroundColor="yellow"
        incbutton.addEventListener("click",(()=>{
            el= el.quantity++
            localStorage.setItem("product",JSON.stringify(data))
            display(data)
        }))
        decbutton.addEventListener("click",(()=>{
            el = el.quantity--
            localStorage.setItem("product",JSON.stringify(data))
            display(data)
        }))

        let remove =document.createElement("button")
        remove.innerText="Delete"   
        remove.style.backgroundColor="red"
        remove.addEventListener("click",(()=>{
         data= data.filter((a,b)=>{
            return b!==ind
         })   
         //  for total price
         
            display(data)

         localStorage.setItem("product",JSON.stringify(data))
        }))
        let total = document.getElementById("price")
        let rupees = document.getElementById("rupees")
        let rupee = document.getElementById("rupee")
         let quant = document.getElementById("quant")
         let sum = 0
         for (let i = 0; i < data.length; i++) {
             sum += data[i].price*(data[i].quantity)
             console.log(data[i].quantity)
             console.log("Sagar")
            }
            total.innerText ="₹"+sum
            rupees.innerText="₹"+sum
            rupee.innerText="₹"+sum
            quant.innerText = data.length

            let totl=document.getElementById("total")
            if(data==null)
            {
                totl.innerText=""
            }
        // let button =document.createElement("button")
        // let button =document.createElement("button")
        
        div2.setAttribute("class","fit")
        div3.setAttribute("class","ffff")
        div1.setAttribute("class","fitted")
        div2.append(image)
        // content.style.display="flex"
        // img.append(image)
       div1.append(title,price,color,quantity,incbutton,decbutton,remove)
        div3.append(div2,div1)
        content.append(div3)
    })
    
    }
    
    // setInterval(()=>{
    //     display(data)
    // },2000)



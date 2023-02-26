let data = JSON.parse(localStorage.getItem("product")) || []




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


function display(data) {
    let content = document.getElementById("content")
    let cont = document.getElementById("cont")
    let img = document.getElementById("img")
    let titles = document.getElementById("tittle")
    let colors = document.getElementById("color")
    let prices = document.getElementById("price")

    content.innerText = ""
    // let sum=0
    data.forEach((el, ind) => {
        let div1 = document.createElement("div")
        let div3 = document.createElement("div")
        let div2 = document.createElement("div")
        let title = document.createElement("h5")
        title.setAttribute("id", "title")
        let image = document.createElement("img")
        let price = document.createElement("p")
        let color = document.createElement("p")
        let quantity = document.createElement("p")
        quantity.innerText = "Quantity" + el.quantity

        let incbutton = document.createElement("button")
        let decbutton = document.createElement("button")
        let continued = document.createElement("button")
        // titles.append(title)
        title.innerText = el.title
        image.src = el.image
        // img.append(image)
        price.innerText = "Price:" + el.price
        price.style.fontSize = "20px"
        // prices.append(price)
        color.innerText = "Color:" + el.color
        color.style.fontSize = "20px"
        quantity.style.fontSize = "20px"
        // colors.append(color)
        incbutton.innerText = "+"
        decbutton.innerText = "-"
        incbutton.style.backgroundColor = "green"
        decbutton.style.backgroundColor = "yellow"
        incbutton.addEventListener("click", (() => {
            el = el.quantity++
            localStorage.setItem("product", JSON.stringify(data))
            display(data)
        }))
        decbutton.addEventListener("click", (() => {
            el = el.quantity--
            localStorage.setItem("product", JSON.stringify(data))
            display(data)
        }))

        let remove = document.createElement("button")
        remove.innerText = "Delete"
        remove.style.backgroundColor = "red"
        remove.addEventListener("click", (() => {
            data = data.filter((a, b) => {
                return b !== ind
            })
            //  for total price

            display(data)

            localStorage.setItem("product", JSON.stringify(data))
        }))
        let total = document.getElementById("price")
        let rupees = document.getElementById("rupees")
        let rupee = document.getElementById("rupee")
        let quant = document.getElementById("quant")
        let sum = 0
        for (let i = 0; i < data.length; i++) {
            sum += data[i].price * (data[i].quantity)
            console.log(data[i].quantity)
            console.log("Sagar")
        }
        total.innerText = "₹" + sum
        rupees.innerText = "₹" + sum
        rupee.innerText = "₹" + sum
        quant.innerText = data.length

        let totl = document.getElementById("total")
        if (data == null) {
            totl.innerText = ""
        }
        // let button =document.createElement("button")
        // let button =document.createElement("button")

        // div2.setAttribute("class", "fit")
        div3.setAttribute("class", "ffff")
        div1.setAttribute("class", "fitted")
       
        // content.style.display="flex"
        // img.append(image)
        div1.append(title, price, color, quantity, incbutton, decbutton, remove)
        div3.append(image, div1)
        content.append(div3)
    })

}

let cancel = document.getElementById("cancel")
cancel.addEventListener("click", (() => {
    let content = document.getElementById("content")
    content.style.display = "none"

}))

let btn = document.getElementById("btn")
btn.addEventListener("click", (() => {
    let click = document.getElementById("edit")
    let content = document.getElementById("content")
    click.style.display = "block"
    content.style.display = "block"
    content.style.width = "200%"
    let fit = document.getElementsByClassName("fit")[0]
    fit.style.width = "300%"
}))

// setInterval(()=>{
//     display(data)
// },2000)
let addbtn = document.getElementById("address")
addbtn.addEventListener("click",(()=>{
   form.style.display="block"
}))

// show adddress
let form = document.querySelector("form")
let lsadd = JSON.parse(localStorage.getItem("detail"))||[]
let lsaddress = []

displayadd(lsadd)
let flag=0;
form.addEventListener("submit", ((e) => {
    flag++
    form.style.display="none"
    if(flag==1){
    e.preventDefault()
    let pincode = document.getElementById("pincode")
    let Fn = document.getElementById("Fn")
    let Ln = document.getElementById("Ln")
    let mo = document.getElementById("mo")
    let adddressline = document.getElementById("Addressline1")
    let landmark = document.getElementById("Landmark")
    let city = document.getElementById("city")
    let state = document.getElementById("state")

    let obj = {
        name: Fn.value + Ln.value,
        mobile: mo.value,
        address: adddressline.value,
        landmark: landmark.value,
        city: city.value,
        state: state.value,
        pincode: pincode.value
    }
    lsaddress.push(obj)
    localStorage.setItem("detail",JSON.stringify(lsaddress))
    console.log(lsaddress);
    displayadd(lsaddress)

    }

}))
console.log(lsaddress)
let count=0
function displayadd(ar) {
    
    let showaddress = document.getElementById("showaddress")

    ar.forEach((el)=>{


    let div = document.createElement("div")
    let h6 = document.createElement("h4")
    let mob = document.createElement("p")
    let addr = document.createElement("p")
    let cit = document.createElement("p")
    let stat = document.createElement("p")
    let land = document.createElement("p")
    let pinc = document.createElement("p")

    h6.innerText="Name :"+" "+el.name
    mob.innerText= "Mobile  "+el.mobile
    addr.innerText="Adrress  "+el.address
    cit.innerText="City  "+el.city
    land.innerText="landmark  "+el.landmark
    stat.innerText="State  "+el.state
    pinc.innerText="Pin Code  "+el.pincode


    div.append(h6, mob, addr, cit, land, stat, pinc)
    showaddress.append(div)
})

}
let payment = document.getElementById("payment")
payment.addEventListener("click",(()=>{
    window.location.href="./payment.html"
})) 
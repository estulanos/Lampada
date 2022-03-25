let body = document.querySelector("body")
let div = document.querySelector("div")
let lamp = document.createElement("img")
let inter = document.createElement("img")
let btn = document.createElement("btn")

body.style.backgroundColor = "black"
body.style.marginLeft = "600px"
body.style.marginTop = "150px"
inter.style.width = "100px"
lamp.style.width = "200px"

lamp.src = "./imagens/Off.png"
inter.src = "./imagens/turnOff.png"
btn.onclick = function (){ 
    console.log(lamp.src)
    if(lamp.src.match("On"))
    lamp.src = "./imagens/Off.png"
   
    else
    lamp.src = "./imagens/On.png" 
    
    console.log(inter.src)

    if(inter.src.match("turnOn"))
    inter.src = "./imagens/turnOff.png"
    
    else
    inter.src = "./imagens/turnOn.png" 
   
    if(lamp.src.match("On"))
    body.style.backgroundColor = "orange"
    else
    body.style.backgroundColor = "black"  

}

btn.append(inter)
btn.append(lamp)
div.append(btn)
div.append(btn)
body.append(div)


let gayebElement =  document.body.querySelectorAll(".line , .clickPara")
gayebElement.forEach(function(items){
items.classList.toggle("gayeb")
});

let btn1 = document.body.querySelector(".btn1");
let btn2 = document.body.querySelector(".btn2");
let btn3 = document.body.querySelector(".btn3");

let gyeb1 = document.body.querySelectorAll(".line1 , .clickPara1")
let gyeb2 = document.body.querySelectorAll(".line2 , .clickPara2")
let gyeb3 = document.body.querySelectorAll(".line3 , .clickPara3")


btn1.addEventListener("click",function(){
    gyeb1.forEach(function(items){
        items.classList.toggle("gayeb")
    })
})

btn2.addEventListener("click",function(){
    gyeb2.forEach(function(items){
        items.classList.toggle("gayeb")
    })
})

btn3.addEventListener("click",function(){
    gyeb3.forEach(function(items){
        items.classList.toggle("gayeb")
    })
})
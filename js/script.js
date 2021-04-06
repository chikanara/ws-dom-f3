// console.log(document)
// var totalTag = document.getElementById("total")
// var totalTag = document.querySelector("#total")
// var imgs = document.getElementsByTagName("img")
// var imgs = document.querySelectorAll("img")
var btnsAddTag = document.getElementsByClassName("add")
var checkTags = document.querySelectorAll(".check")
console.log(btnsAddTag)

for (var j= 0 ; j < checkTags.length ; j++){
    checkTags[j].addEventListener("click",total)
}

for (var i = 0; i < btnsAddTag.length; i++) {
    // btnsAddTag[i].addEventListener("click",add)
    btnsAddTag[i].onclick = add
    
}
function add(event) {
    // console.log(event.target)
    var btnAdd =event.target
    var tdElt = btnAdd.parentElement 
    // console.log(tdElt)
    var inputTag = tdElt.querySelector(".quantity")
    var quantity = Number(inputTag.value)
    quantity++
    inputTag.value = quantity
    var trElt = btnAdd.parentElement.parentElement
    var unitPriceTag = trElt.querySelector(".unitPrice")
    var priceTag = trElt.querySelector(".price")
    var price = Number(priceTag.innerHTML)
    var unitPrice = Number(unitPriceTag.innerHTML)
    price = quantity * unitPrice
    priceTag.innerHTML = price

    
}

function total(event) {
    var currentCheck = event.target
    var totalTag = document.getElementById("total")
    var total = Number(totalTag.innerHTML)
    var trElt = currentCheck.parentElement.parentElement
    var priceTag = trElt.querySelector(".price")
    var price = Number(priceTag.innerHTML)
    var btnAddTag = trElt.querySelector(".add")
    var btnRemoveTag = trElt.querySelector(".remove")

    if (currentCheck.checked === true) {
        total+=price
        btnAddTag.setAttribute("disabled",true)
        btnRemoveTag.setAttribute("disabled",true)
    }
    else {
        total-=price
        btnAddTag.removeAttribute("disabled")
        btnRemoveTag.removeAttribute("disabled")
    }
    totalTag.innerHTML = total
}

let watchTeaser = document.querySelector(".watchTeaser")
let slides = document.querySelectorAll(".slide")
let watches = document.querySelector(".watches")
let nonselect = document.querySelectorAll(".nonselect")
let navbar = document.querySelector(".navbar")
let pageUpBtn = document.querySelector(".pageUpBtn")
let pageUp = document.querySelector(".pageUp")

let advertise = document.querySelector(".advertise")
let advertiseClose = document.querySelector(".advertiseClose")
let showAdvertise = document.querySelector(".showAdvertise")

let profile = document.querySelector(".profile")
let login = document.querySelector(".login")
let menuLogin = document.querySelector(".menuLogin")
let blur = document.querySelector(".blur") 
let closeMenu = document.querySelector(".closeMenu")
let menu = document.querySelector(".menu")
let closeLogin = document.querySelector(".closeLogin")

let watcheS = document.querySelectorAll(".watch")

let addToCard = document.querySelectorAll(".addCard")

let menuAdded = document.querySelector(".menu_added")
let totalPrice = document.querySelector(".totalPrice")

let loadingScreen = document.querySelector(".loading")
let theme = localStorage.getItem("theme")
let darkButton = document.querySelector(".darkButton")
let container = document.querySelector(".container")

let borderColor = "black"


if(theme ==="dark"){
    container.classList.add("dark")
   borderColor = "red"

}

function loading(){
    
    function clear(){
        clearInterval(interval)
    }

    let opacity = 1
    // disableScroll()
    loadingScreen.classList.remove("hidden")
    let interval = setInterval(()=>{
        opacity -= 0.53
        loadingScreen.style.opacity = opacity        

    },1000)
    

    setTimeout(()=>{
        loadingScreen.classList.add("hidden")
        clear()
        
    },2400)
}

loading()


darkButton.addEventListener("click",()=>{
    container.classList.toggle("dark")
    if(theme == "dark"){
        localStorage.setItem("theme","light") 
    }else{
        localStorage.setItem("theme","dark") 
    }
})




function setSlidesPosition(currentslide = 0){
    if(currentslide>slides.length -3){
        currentslide = slides.length -3
    }
    if(currentslide<0){
        currentslide = 0
    }
    slides.forEach((slide,index)=>{
        slide.style.transform = `translateX(${(index - currentslide)*101}%)`
    })

}



// function disableScroll(){
//     window.onscroll = function(){
//         window.scrollTo(0.0)
//     }
// }




let setpose = 0

watches.onmousedown = function() {
    
    watches.onmousemove = function(){
        
        
        if(event.movementX<0){

            setSlidesPosition(setpose)
        }else if(event.movementX>0){
            setSlidesPosition(setpose*(-1))
        }
        setpose +=0.09
        
    }

}
watches.onmouseup = function() {
    
    watches.onmousemove = function(){
        // console.log(event.clientX)
    }
}

nonselect.forEach((nonselect)=>{
    nonselect.onmouseenter = function(){
        nonselect.parentNode.childNodes[3].style.transform = `scale(${1.1})`
    }
    nonselect.onmouseleave = function(){
        nonselect.parentNode.childNodes[3].style.transform = `scale(${1})`
    }
})



setSlidesPosition()





slides.forEach((slide)=>{
    slide.addEventListener("click",(x)=>{
        console.log(x.target.parentNode.parentNode.innerText.split("\n"))
    })
})

window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        navbar.style.backgroundColor = "rgba(35, 34, 34, 0.66)"
        navbar.style.opacity = 1
        pageUp.classList.remove("hidden")
        navbar.addEventListener("mouseenter",()=>{
            navbar.style.backgroundColor = "white"
        })
        navbar.addEventListener("mouseleave",()=>{
            navbar.style.backgroundColor = "rgba(35, 34, 34, 0.66)"
        })
        
    }
    if(window.scrollY<100){
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.008)"
        pageUp.classList.add("hidden")

        navbar.addEventListener("mouseenter",()=>{
            navbar.style.backgroundColor = "white"
        })
        navbar.addEventListener("mouseleave",()=>{
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.008)"
        })

    }
})


pageUpBtn.addEventListener("click",()=>{
    console.log("skdfjsdf")
    // for(let a = window.scrollY;a >=0;a--){
    //     setTimeout(()=>{
    //         console.log(a)
    //         window.scrollTo(0,a)
    //     },3000)
    // }
    let a = window.scrollY
    let interval = setInterval(() => {
    window.scrollTo(0,a)
    a-=5
    if(a <=1){
        clearInterval(interval)
    }
        
    }, 1);
})



setTimeout(()=>{
    advertise.classList.remove("hiddenAdvertise")
    setTimeout(()=>{
        advertise.classList.add("hiddenAdvertise")
        showAdvertise.classList.remove("hidden")
    },3000)
    showAdvertise.classList.add("hidden")
},3000)

advertiseClose.addEventListener("click",()=>{
    advertise.classList.add("hiddenAdvertise")
    showAdvertise.classList.remove("hidden")
})

showAdvertise.addEventListener("click",()=>{
    showAdvertise.classList.add("hidden")
    advertise.classList.remove("hiddenAdvertise")
})

menuLogin.addEventListener("click",()=>{
    login.classList.remove("hidden")
    blur.classList.remove("hidden")
})

closeMenu.addEventListener("click",()=>{
    menu.classList.add("menuHidden")
})

profile.addEventListener("click",()=>{
    menu.classList.remove("menuHidden")
})

closeLogin.addEventListener("click",()=>{
    login.classList.add("hidden")
    blur.classList.add("hidden")
})

watcheS.forEach((watch)=>{
    watch.addEventListener("mouseenter",()=>{
        watch.childNodes[1].childNodes[3].classList.remove("addCardHidden")
        
        // console.log(watch.childNodes[1].childNodes[3].classList.remove)
    })
    watch.addEventListener("mouseleave",()=>{
        watch.childNodes[1].childNodes[3].classList.add("addCardHidden")

    })
})

function makePrice(num){
    let result = ""
    for(let a =0;a<num.length;a++){
        if(+num[a]){
            result+=num[a]
        }
    }
    return +result
}

addToCard.forEach((card)=>{
    card.addEventListener("click",()=>{
        let name = card.parentNode.parentNode.childNodes[3].innerText.split("\n")[0]
        let price = makePrice(card.parentNode.parentNode.childNodes[3].innerText.split("\n")[1].split(" ")[1])
        console.log(name)
        addWatchFunc(name,price)
    })
})


function addWatchFunc(name,price){
    let addedWatch = document.createElement("div")
    addedWatch.style.width = "100%"
    addedWatch.style.height = "50px"
    addedWatch.style.backgroundColor = "white"
    addedWatch.style.display = "flex"
    addedWatch.style.position = "relative"
    addedWatch.style.borderBottom = `1px solid ${borderColor}`

    let close = document.createElement("i")
    addedWatch.appendChild(close)

    close.classList.add("fa-solid")
    close.classList.add("fa-xmark")
    close.classList.add("removePurchase")
    close.style.position = "absolute"
    close.style.top = "18px"
    close.style.right = "5px"
    close.addEventListener("click",()=>{
        
        let temp = (+totalPrice.innerHTML)
        let removedPrice = makePrice(close.parentNode.childNodes[2].innerText)
        let currentPrice = temp -removedPrice
        totalPrice.innerHTML = currentPrice
        close.parentNode.remove()
    })
    


    addedWatch.style.alignItems = "center"
    let addedWatchName = document.createElement("h4")
    let addedWatchPrice = document.createElement("h3")
    addedWatchName.innerHTML = name +" "
    addedWatchPrice.innerHTML = price
    addedWatch.appendChild(addedWatchName)
    addedWatch.appendChild(addedWatchPrice)
    let temp = (+totalPrice.innerHTML)
    console.log("temp",temp)
    temp += price
    
    totalPrice.innerHTML = temp
    
    menuAdded.appendChild(addedWatch)
}


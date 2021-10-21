var magnifying_area = document.getElementById("magnifying_area");
var magnifying_img = document.getElementById("magnifying_img");

magnifying_area.addEventListener("mouseleave",  Demagnify);

magnifying_area.addEventListener("mousemove", Magnifyer);

function Demagnify() {
    magnifying_img.style.transform = 'translate(-50%,-50%) scale(1)'}

function Magnifyer (event){
    clientX = event.clientX - magnifying_area.offsetLeft
    clientY = event.clientY - magnifying_area.offsetTop
    
    mWidth = magnifying_area.offsetHeight 
    mHeight = magnifying_area.offsetHeight
    
    clientX = clientX/mWidth * 100
    clientY = clientY/mHeight * 100
    
    magnifying_img.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(2)'
}


function bolder(id) {
    var list = document.getElementsByClassName("nav-list")[0];
    if (id == 0) {
        list.getElementsByClassName("test")[0].style.fontWeight = 900;
    } else if(id == 1) {
        list.getElementsByClassName("test")[1].style.fontWeight = 900;      
    } else {
        list.getElementsByClassName("test")[2].style.fontWeight = 900;
    }                
}

function unbolder(id) {
    var list = document.getElementsByClassName("nav-list")[0];
    if (id == 0) {
        list.getElementsByClassName("test")[0].style.fontWeight = 400;
    } else if(id == 1) {
        list.getElementsByClassName("test")[1].style.fontWeight = 400;      
    } else {
        list.getElementsByClassName("test")[2].style.fontWeight = 400;
    }  
}
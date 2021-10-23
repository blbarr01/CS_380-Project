if(document.readyState== 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    var addToCartButtons = document.getElementsByClassName('add-to-cart-btn')
    for (let i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }
}


function addToCartClicked(event){
    var button = event.target
    console.log('clicked')
}
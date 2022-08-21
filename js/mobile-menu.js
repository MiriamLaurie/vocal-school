function toggle_class( array ){
    array.forEach(function(element){
        element.classList.toggle('is-active');
    })
};
document.addEventListener('DOMContentLoaded', function(){ 
    
    let button = document.querySelector('.button-burger--js');
    let menu   = document.querySelector('.menu--js');
    let menu__items = document.querySelectorAll(".menu .menu-item a")

    menu__items.forEach(function(menu_item) {
        menu_item.addEventListener('click',function(e){
            if(menu.classList.contains('is-active')){
                toggle_class([menu,button])
            }
        })
    });

    button.addEventListener('click',function(e){
        toggle_class([menu,button])
    })
});
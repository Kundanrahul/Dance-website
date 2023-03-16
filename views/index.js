
window.addEventListener('scroll',reveal);
window.addEventListener('scroll',explore);


function explore(){
    var reveals=document.querySelectorAll(".explore");

    for(var i=0;i<reveals.length;i++){
        var wh=window.innerHeight;
        var rt=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;
        if(rt<wh-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
function reveal(){
    var reveals=document.querySelectorAll(".reveal");

    for(var i=0;i<reveals.length;i++){
        var wh=window.innerHeight;
        var rt=reveals[i].getBoundingClientRect().top;
        var revealpoint=150;
        if(rt<wh-revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
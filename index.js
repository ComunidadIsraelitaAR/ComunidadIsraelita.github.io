function apareceScroll(){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function(){
        var currentScrollpos = window.pageYOffset;
        if(prevScrollpos > currentScrollpos){
            document.getElementsByClassName("navbar").style.top = "0";
        }else{
            document.getElementsByClassName("navbar").style.top = "-100px";
        }

        prevScrollpos = currentScrollpos;
    }
}

apareceScroll();
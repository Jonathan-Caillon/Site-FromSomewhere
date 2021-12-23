window.onload = function(){
    document.querySelectorAll(".fs-games__item").forEach(function(e){
        let enlarge = true;
        e.addEventListener("click", function(){
            e.classList.toggle("active");
            document.querySelectorAll(".fs-games__item").forEach(function(element){
                if(enlarge == true){
                    if(element.classList.contains("active")){
                        document.querySelector(".fs-games").style.transform = "translate(-10%)"
                        element.classList.remove("hovered");
                        element.style.width = "100vw";
                        element.querySelector("img").style.transform = "skewX(0) translate(-50%, -50%)";
                        element.querySelector("img").style.filter = "grayscale(0)";
                        element.querySelector(".title").style.opacity = "100%";
                        element.querySelector(".title").style.filter = "grayscale(0)";
                        element.querySelector(".title").style.transform = "skewX(0) translateY(-50%) scale(1.3)";
                        element.querySelector(".title").style.top = "40%";
                        element.querySelector(".title").style.left = "8%";
                        if(element.classList.contains("game1")){
                            element.style.transform = "skewX(0) translate(19.58%)";
                            element.querySelector("img").style.transform = "translate(-50%, -50%)"
                        }
                        else if(element.classList.contains("game2")){
                            element.style.transform = "skewX(0) translate(-4.38%)";
                            element.querySelector("img").style.transform = "translate(-50%, -50%)"
                        }
                        else if(element.classList.contains("game3")){
                            element.style.transform = "skewX(0) translate(-28.38%)";
                            element.querySelector("img").style.transform = "translate(-50%, -50%)"
                        }
                        else if(element.classList.contains("game4")){
                            element.style.transform = "skewX(0) translate(-52.38%)";
                            element.querySelector("img").style.transform = "translate(-50%, -50%)"
                        }
                        else if(element.classList.contains("game5")){
                            element.style.transform = "skewX(0) translate(-76.38%)";
                            element.querySelector("img").style.transform = "translate(-50%, -50%)"
                        }
                        enlarge = false;
                    }else{
                        element.style.opacity = "0";
                    }
                }
            });
        })
        e.addEventListener("mouseenter", function(){
            if(!e.classList.contains("active")){
                if(e.classList.contains("game1")){
                    document.querySelector(".fs-games").style.transform = "translate(-7%)"
                }
                else if(e.classList.contains("game2")){
                    document.querySelector(".fs-games").style.transform = "translate(-8.5%)"
                }
                else if(e.classList.contains("game4")){
                    document.querySelector(".fs-games").style.transform = "translate(-12.5%)"
                }
                else if(e.classList.contains("game5")){
                    document.querySelector(".fs-games").style.transform = "translate(-15%)"
                }
                document.querySelectorAll(".fs-games__item").forEach(function(el){
                    el.classList.remove("hovered");
                    document.querySelector(".fs-games").style.transform = "translate(-10%)"
                });
                e.classList.add("hovered");
            }
        })
        
    })
};
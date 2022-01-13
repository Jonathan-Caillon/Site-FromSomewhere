window.onload = function(){
    document.querySelectorAll(".fs-games__item").forEach(function(e){
        let enlarge = false;
        e.querySelector('img').addEventListener("click", function(){
            if(enlarge == false){
                e.classList.toggle("active");
                document.querySelectorAll(".fs-games__item").forEach(function(element){
                    if(element.classList.contains("active")){
                        document.querySelector(".fs-games").style.transform = "translateX(-10%)";
                        element.classList.remove("hovered");
                        setTimeout(function(){
                            element.querySelector(".fs-games__item__close").style.display = "block";
                        }, 200);
                        element.classList.add('large');
                        enlarge = true;
                    }else{
                        element.classList.add("mobile");
                        element.style.opacity = "0";
                    }
                });
            }
        })
        e.querySelector(".fs-games__item__close").addEventListener('click', function(){
            document.querySelectorAll(".fs-games__item").forEach(function(element){
                if(element.classList.contains("active")){
                    document.querySelector(".fs-games").style.transform = "translateX(-10%)";
                    element.querySelector(".fs-games__item__close").style.display = "none";
                    element.classList.remove("large");
                    element.classList.remove("active");
                    element.classList.add("hovered");
                }else{
                    enlarge = false;
                    element.style.opacity = "1";
                }
            });
        });
        e.addEventListener("mouseenter", function(){
            if(!e.classList.contains("active")){
                
            }
        })
        
    })
};
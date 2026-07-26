// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// Fade Animation on Scroll
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card,.service-card,.about,.contact").forEach((el)=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// ===============================
// Sticky Header Shadow
// ===============================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

    }
    else{

        header.style.boxShadow="0 2px 10px rgba(0,0,0,.08)";

    }

});


// ===============================
// Button Click Animation
// ===============================

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(.95)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },150);

    });

});
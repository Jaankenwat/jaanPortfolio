var menubtn = document.querySelector("#menubtn")
var menubar = document.querySelector("#menubar")
var menuclosebtn = document.querySelector("#menuclosebtn")

menubtn.addEventListener("click",function(){
    menubar.style.position ="absolute";
    menubar.style.visibility="visible";
    menubtn.style.visibility="collapse";
    gsap.to("#menubar",{
        transform:"translateX(0%)",
        duration:1
    })
})
menuclosebtn.addEventListener("click",async function(){
    menubar.style.position ="absolute";
    // menubar.style.visibility="collapse";
    menubtn.style.visibility="visible";
    await gsap.to("#menubar",{
        transform:"translateX(100%)",
        // visibility:"collapse",
        duration:1
    })

})
tl1= gsap.timeline()
tl1.from("#name h1",{
    y:15,
    opacity:0,
    duration:0.4,
})
tl1.from("#options h2",{
    y:15,
    opacity:0,
    duration:0.5,
    stagger:0.3
})
tl1.from("#titleName h1",{
    y:30,
    opacity:0,
    duration:1,
})
gsap.from(".skills",{
    duration:1,
    x:1500,
    stagger:0.2,
})
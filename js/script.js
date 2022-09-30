const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      modeSwitch = body.querySelectorAll(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
     let welcome=document.querySelector(".cc1 h3");
/*--------------vars click body to work cloes to manu----- */
      myhome=body.querySelector(".home");
      mylists=body.querySelectorAll(".pointer");
 /*------set section- about me -----*/
      about=body.querySelector(".about-my");
      let s=0
      let items_about=Array.from(document.querySelectorAll(".call p"));
/*---------services--------------------------*/
      items_services=body.querySelectorAll(".row-0 .on");
 /* -------scroll down-------*/
      let down=document.querySelector(".scroll");

/*   library animation ===> aos */
AOS.init({
duraction:800,
}) 
/*------ click and open sidebar --------*/

 mylists.forEach((li)=>{
   li.addEventListener("click",function dis(){
     sidebar.classList.toggle("close");
        let clas=sidebar.getAttribute("class");
        if( clas=="sidebar")
         {
             li.style.cssText="display:none" 
             body.classList.add("not_scroll");
           
         }
         else 
          {
               
                mylists[0].style.cssText="display:block";
                body.classList.remove("not_scroll");  
          }
        myhome.onclick=()=>{
        if( clas=="sidebar")
        {
           sidebar.classList.add("close");
           mylists[0].style.cssText="display:block";
            body.classList.remove("not_scroll");
 }}})})
 /*-----------------------------*/

let mylists_small=document.querySelectorAll(".menu .nav-link a");
mylists_small.forEach((li)=>{
 li.addEventListener("click",()=>{
    sidebar.classList.toggle("close");
  let clas=sidebar.getAttribute("class");
    if( clas=="sidebar")
         {
             li.style.cssText="display:none" 
             body.classList.add("not_scroll");
           
         }
         else 
          {
               
                mylists[0].style.cssText="display:block";
                body.classList.remove("not_scroll");  
          }
})
})

/**--------------------------------------------------- */
/* dark mode and sun mode*/

modeSwitch[0].addEventListener("click" , () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode"; 
    }
});
modeSwitch[1].addEventListener("click" , () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
    }
});
/*----------------------*/

/* -------------animation scroll down------------*/
let scroll_down=()=>{
setTimeout(()=>{
down.style.cssText="opacity:1";
},6500)
}
scroll_down();
/**------------------------------------------- */

/**----------------textload----------------- */
let text_transform=document.querySelector(".text_2");
let text_3=document.querySelector(".text-3");
let textload=()=>{

setTimeout(()=>{
text_transform.textContent="I AM Ahmed abdel nabi";
},0)
setTimeout(()=>{
text_3.style.cssText="opacity:1;transform: scale(1);";
},6100)
}
textload();
/*******navbar----------------- */
let navbar=document.querySelector(".nvv");

window.onscroll=()=>{
if(scrollY==0)
{
navbar.style.cssText="background:var(--body-color)";
}
else
{
navbar.style.cssText="background:var(--sidebar-color)";
}
}

/*---------masseage of project */
let lin=document.querySelectorAll(".link-m");

let masseag=document.querySelectorAll(".manu .masseag");

lin[0].addEventListener("click",()=>{
masseag[0].style.cssText="opacity:1";
})
lin[2].addEventListener("click",()=>{
masseag[1].style.cssText="opacity:1";
})
lin[4].addEventListener("click",()=>{
masseag[2].style.cssText="opacity:1";
})

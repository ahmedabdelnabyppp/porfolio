//start variable 
let containsPage = document.querySelector(".The-contant-web");
let Contact = document.querySelector("#contact");
let MenuMobile = document.querySelector("#menuMobile");
let Paginationitems = document.querySelectorAll("#Showskills .item");
let footer_tilte=document.querySelectorAll("#click-main");
let show_inner_title=document.querySelectorAll(".show")
//end variable


// all function
function ShowContact() {
   //this function display menu is contain the contact item ex(facebook,..)
   Contact.addEventListener('click', () => {
      document.querySelector("#MenuContact").classList.toggle('hidden');
   })
}

function ShowMenuMobile() {
   function NoScroll() {
      if (document.body.getAttribute("class").includes("no-scroll") == true) {
         document.body.classList.remove("no-scroll");
      }
      else {
         if (document.querySelector(".mobile").getAttribute("class").includes("translate-x-[0%]") == true) {
            document.body.classList.add("no-scroll")
            console.log(document.body.getAttribute("class"))
         }
      }
   }
   MenuMobile.addEventListener('click', () => {
      document.querySelector(".mobile").classList.toggle('translate-x-[0%]');
      document.querySelector(".mobile").classList.toggle('-translate-x-[180%]');
      NoScroll()
   })
   document.querySelector('.The-contant-web').addEventListener('click', () => {
      document.querySelector(".mobile").classList.remove('translate-x-[0%]');
      document.querySelector(".mobile").classList.add('-translate-x-[180%]');
      NoScroll()

   })
}
function Pagination() {
   Paginationitems.forEach((element) => {
      element.addEventListener('click', (thisItem) => {
         Paginationitems.forEach((ele) => {
            ele.classList.remove("active")
         })
         thisItem.target.classList.add("active");
         document.querySelectorAll('[data-number]').forEach((ele) => {
            ele.classList.remove("actives")
            ele.classList.add("hidden")
         })
         document.querySelector(`[data-number="${element.innerHTML}"]`).classList.add("actives");
         document.querySelector(`[data-number="${element.innerHTML}"]`).classList.remove("hidden");


      })
   })
}

function RunCarousel() {
   let glide02 = new Glide('.glide-02', {
      type: 'carousel',
      focusAt: '',
      perView: 4,
      autoplay: 4000,
      animationDuration: 600,
      gap: 15,
      classes: {
         activeNav: '[&>*]:bg-slate-700',
      },
      breakpoints: {
         1024: {
            perView: 1.6
         },
         640: {
            perView: 1.2
         }
      },
   });
   glide02.mount();
}

function RunReivew() {
   var glide07 = new Glide('.glide-08', {
      type: 'carousel',
      focusAt: 1,
      animationDuration: 3000,
      autoplay: 6600,
      autoplay: true,
      rewind: true,
      perView: 1,
      gap: 12,
      classes: {
          activeNav: '[&>*]:bg-slate-700',
      },
      breakpoints: {
          1024: {
              perView: 1
          },
          640: {
              perView: 1
          }
      },
  });

  glide07.mount();
}

function runshowInnertilte(){
let targetIndex = -1;
footer_tilte.forEach(ele=>{
   ele.addEventListener('click',(elementTarget)=>{
    show_inner_title.forEach(eles=>{
      eles.classList.add('max-sm:hidden');
    })
// Loop through the NodeList
for (var i = 0; i < footer_tilte.length; i++) {
  // Compare each element with the target element
  if (footer_tilte[i] === ele) {
    targetIndex = i;
    break; // Exit the loop once found
  }
}
let targetelement=document.querySelector(`#show-main-${targetIndex}`);
targetelement.classList.remove('max-sm:hidden')
   })
})   
}
// end function

//call function
runshowInnertilte()
RunReivew()
ShowMenuMobile()
ShowContact()
Pagination()
RunCarousel()




// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

 next.addEventListener('click', function (){  
let i=0;
 
  function changepic()
   {

      if (i>=gallery.length-1){
         i=0;
      }
      i=i+1;
     document.gallery.src=gallery[1];
   }

});

})();

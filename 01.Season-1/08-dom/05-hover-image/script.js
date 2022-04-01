// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

   let image = document.querySelector("img")
    
    let data_hover = image.getAttribute("data-hover")

    image.addEventListener("mouseenter",() => {
        image.setAttribute("src",data_hover)
    })

})();

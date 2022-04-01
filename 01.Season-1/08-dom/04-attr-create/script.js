// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

  
     let span = document.querySelector("#source")

    let data_image = span.getAttribute("data-image")

    let target = document.querySelector("#target")

    let image = document.createElement("img")

    image.setAttribute("src",data_image)

    target.append(image)
 
})();

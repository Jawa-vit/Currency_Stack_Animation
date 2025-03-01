

document.addEventListener("mousemove", effect);

const layers = document.querySelectorAll(".layer");

function effect(e){
    layers.forEach(layer => {
        
        const movement = layer.getAttribute("data-speed");


          const x = (window.innerWidth - e.pageX * movement) / 250;
          const y = (window.innerHeight - e.pageX * movement) / 250;

          layer.style.transform = `translatex(${-x}px) translateY(${y}px)`;

        });
}
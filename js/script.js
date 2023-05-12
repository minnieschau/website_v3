/* make navbar header disappear on scroll down, appear on scroll up 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-nav").style.top = "0";
  } else {
    document.getElementById("header-nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
} */


const toast = document.getElementById('toast');
const animate = document.getElementsByClassName('footer--animate');


addEventListener()



/* horizontally drag media gallery images */
const sliders = document.querySelectorAll('.media-scroller');

sliders.forEach(slider=>{
    let startX, scrollLeft;

    let startDragging = function(e) {
        e.preventDefault();
        mouseDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    };

    let stopDragging = function(event) {
        slider.classList.remove('active');
        mouseDown = false;
    };

    slider.addEventListener('mousemove', (e)=>{
        e.preventDefault();
        if (!mouseDown) {
            return;
        }
        const x = e.pageX - slider.offsetLeft;
        const scroll = x - startX;
        slider.scrollLeft = scrollLeft - scroll;
    }
    );
    
    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);
}
);

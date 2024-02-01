export const header = () => {
    let header = document.getElementById('navbar');
    let menu = document.getElementById('menu');
    let body = document.querySelector('body');
    let links = document.querySelectorAll('.link__container')
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
          menu.classList.toggle('show');
          body.classList.toggle('hidden')
        }, false);
      });
    }

    window.addEventListener('scroll', () => {
        let y = window.scrollY
        if(y > 0){
          header.classList.add('scroll')
        }else{
          header.classList.remove('scroll')
        }
 
    })

    links.forEach(link => {
      link.addEventListener('click', e => {
        menu.classList.remove('show');
        body.classList.remove('hidden')
        if (hamburgers.length > 0) {
          forEach(hamburgers, function(hamburger) {
            hamburger.classList.remove("is-active");

          });
        }
      })
    });


}
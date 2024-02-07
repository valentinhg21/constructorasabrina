export const map = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const iframe = document.createElement("iframe");
            iframe.src = entry.target.dataset.src;
    
            entry.target.appendChild(iframe);
            observer.unobserve(entry.target);
          }
        });
      });
    
      const lazyLoadMapElements = document.querySelectorAll(".lazy-load-map");
      lazyLoadMapElements.forEach((element) => {
        observer.observe(element);
      });
    
      document.addEventListener("touchstart", touchStartHandler, { passive: true });
      document.addEventListener("touchmove", touchMoveHandler, { passive: true });
      document.addEventListener("wheel", wheelHandler, { passive: true });
    
      function touchStartHandler(event) {
      }
    
      function touchMoveHandler(event) {
      }
    
      function wheelHandler(event) {
      }
}
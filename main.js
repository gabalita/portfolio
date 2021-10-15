
function callback(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('slideIn');
      } else {
        entry.target.classList.remove('slideIn');
      }
    });
  }
  function initObserver() {
    var observer = new IntersectionObserver(callback);
    var items = document.querySelectorAll('.slideIn');
    for(var i in items) {
      if(!items.hasOwnProperty(i)) {
        continue;
      }
      observer.observe(items[i]);
    }
  }
  if (window.IntersectionObserver) {
    initObserver();
  } else {
    console.log("IntersectionObserver not supported.");
  }
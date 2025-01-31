const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

document.addEventListener('DOMContentLoaded', ready)

function ready() {
  // disqus
  if (window.isPost) {
    disqus()
    makeZoom()
  }
  if (window.hexoLayout === 'page') {
    makeZoom()
  }
  function disqus() {
    var d = document, s = d.createElement('script');
    s.src = "//egoistian.disqus.com/embed.js";
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }
  function makeZoom() {
    Array.prototype.forEach.call($$('.post-content img'), el => {
      zoom(el)
    })
  }
}

/* ONYX — animaciones compartidas (aparición al hacer scroll + barra de progreso) */
(function () {
  if (window.__onyxInit) return;
  window.__onyxInit = true;

  var io = 'IntersectionObserver' in window
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '-40px' })
    : null;

  function observe(root) {
    (root || document).querySelectorAll('.onyx .fade-in:not(.in)').forEach(function (el) {
      if (io) io.observe(el); else el.classList.add('in');
    });
  }

  function onScroll() {
    var bar = document.querySelector('.onyx-progress');
    if (!bar) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  }

  document.addEventListener('DOMContentLoaded', function () { observe(); onScroll(); });
  window.addEventListener('scroll', onScroll, { passive: true });
  // Editor de temas: re-observar al añadir/editar secciones
  document.addEventListener('shopify:section:load', function (e) { observe(e.target); });
  if (document.readyState !== 'loading') { observe(); onScroll(); }
})();

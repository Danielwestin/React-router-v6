export function ObserveElements(selector, options) {
  function callback(entries) {
    entries.forEach((n) => {
      // console.log(n);
      if (n.isIntersecting) {
        n.target.src = n.target.dataset.src;
        observer.unobserve(n.target);
      }
    });
  }
  // example on options
  // const options = { rootMargin: "-10px", threshold: 1.0 }
  const observer = new IntersectionObserver(callback, options);
  const nodes = document.querySelectorAll(selector);
  if (nodes) nodes.forEach((n) => observer.observe(n));
  return observer;
}

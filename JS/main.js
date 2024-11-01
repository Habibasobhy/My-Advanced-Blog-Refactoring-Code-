window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
  const btn = document.querySelector("#backToTopBtn");
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


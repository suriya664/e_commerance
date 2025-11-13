/* The Gild Store – Core Scripts */

(function ($) {
  "use strict";

  const docReady = (fn) => {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  };

  docReady(() => {
    // Lazy load images
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, imgObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src || img.src;
              imgObserver.unobserve(img);
            }
          });
        },
        { rootMargin: "120px" }
      );
      lazyImages.forEach((img) => observer.observe(img));
    }

    // AOS init
    if (window.AOS) {
      AOS.init({
        duration: 900,
        once: true,
        offset: 120,
        easing: "ease-out-cubic",
      });
    }

    // Smooth scroll for internal links
    $("a[href^='#']").on("click", function (event) {
      const target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          700
        );
      }
    });

    // Mobile navigation
    $(".rm-mobile-toggle").on("click", function () {
      $(".rm-nav-links").toggleClass("active");
      $(this).toggleClass("active");
    });

    $(".rm-nav-links a").on("click", function () {
      $(".rm-nav-links").removeClass("active");
      $(".rm-mobile-toggle").removeClass("active");
    });

    // Product filter (Isotope fallback)
    const filterButtons = document.querySelectorAll("[data-filter]");
    if (filterButtons.length) {
      let isoInstance = null;
      const grid = document.querySelector(".rm-isotope-grid");

      if (grid && window.Isotope) {
        isoInstance = new Isotope(grid, {
          itemSelector: ".rm-isotope-item",
          layoutMode: "fitRows",
        });
      }

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const target = button.getAttribute("data-filter");
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");

          if (isoInstance) {
            isoInstance.arrange({
              filter: target === "all" ? "*" : `[data-category*="${target}"]`,
            });
          } else {
            const items = document.querySelectorAll("[data-category]");
            items.forEach((item) => {
              const categories = item.getAttribute("data-category").split(",");
              if (target === "all" || categories.includes(target)) {
                item.style.display = "block";
                requestAnimationFrame(() => {
                  item.style.opacity = "1";
                  item.style.transform = "translateY(0)";
                });
              } else {
                item.style.opacity = "0";
                item.style.transform = "translateY(20px)";
                setTimeout(() => {
                  item.style.display = "none";
                }, 200);
              }
            });
          }
        });
      });
    }

    // Countdown
    const countdownElement = document.querySelector(".rm-countdown");
    if (countdownElement) {
      const launchDate = new Date(countdownElement.dataset.launch || "2025-12-01T12:00:00Z").getTime();
      const labels = countdownElement.querySelectorAll("[data-count]");

      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
          countdownElement.innerHTML = "<p class='rm-muted'>We have launched! Thank you for your anticipation.</p>";
          clearInterval(countdownTimer);
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        labels.forEach((label) => {
          const type = label.dataset.count;
          if (type === "days") label.querySelector("strong").textContent = String(days).padStart(2, "0");
          if (type === "hours") label.querySelector("strong").textContent = String(hours).padStart(2, "0");
          if (type === "minutes") label.querySelector("strong").textContent = String(minutes).padStart(2, "0");
          if (type === "seconds") label.querySelector("strong").textContent = String(seconds).padStart(2, "0");
        });
      };

      const countdownTimer = setInterval(updateCountdown, 1000);
      updateCountdown();
    }

    // Back to top button
    const topBtn = document.querySelector(".rm-back-top");
    if (topBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 420) {
          topBtn.classList.add("visible");
        } else {
          topBtn.classList.remove("visible");
        }
      });

      topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
})(jQuery);
/* The Gild Store – Core Scripts */

(function ($) {
  "use strict";

  const docReady = (fn) => {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  };

  docReady(() => {
    // Lazy load images
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, imgObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src || img.src;
              imgObserver.unobserve(img);
            }
          });
        },
        { rootMargin: "120px" }
      );
      lazyImages.forEach((img) => observer.observe(img));
    }

    // AOS init
    if (window.AOS) {
      AOS.init({
        duration: 900,
        once: true,
        offset: 120,
        easing: "ease-out-cubic",
      });
    }

    // Smooth scroll for internal links
    $("a[href^='#']").on("click", function (event) {
      const target = $(this.getAttribute("href"));
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 80,
          },
          700
        );
      }
    });

    // Mobile navigation
    $(".rm-mobile-toggle").on("click", function () {
      $(".rm-nav-links").toggleClass("active");
      $(this).toggleClass("active");
    });

    $(".rm-nav-links a").on("click", function () {
      $(".rm-nav-links").removeClass("active");
      $(".rm-mobile-toggle").removeClass("active");
    });

    // Product filter
    const filterButtons = document.querySelectorAll("[data-filter]");
    if (filterButtons.length) {
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const target = button.getAttribute("data-filter");
          const items = document.querySelectorAll("[data-category]");

          filterButtons.forEach((btn) => btn.classList.remove("active"));
          button.classList.add("active");

          items.forEach((item) => {
            const categories = item.getAttribute("data-category").split(",");
            if (target === "all" || categories.includes(target)) {
              item.style.display = "block";
              requestAnimationFrame(() => {
                item.style.opacity = "1";
                item.style.transform = "translateY(0)";
              });
            } else {
              item.style.opacity = "0";
              item.style.transform = "translateY(20px)";
              setTimeout(() => {
                item.style.display = "none";
              }, 200);
            }
          });
        });
      });
    }

    // Countdown
    const countdownElement = document.querySelector(".rm-countdown");
    if (countdownElement) {
      const launchDate = new Date(countdownElement.dataset.launch || "2025-12-01T12:00:00Z").getTime();
      const labels = countdownElement.querySelectorAll("[data-count]");

      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance < 0) {
          countdownElement.innerHTML = "<p class='rm-muted'>We have launched! Thank you for your anticipation.</p>";
          clearInterval(countdownTimer);
          return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        labels.forEach((label) => {
          const type = label.dataset.count;
          if (type === "days") label.querySelector("strong").textContent = String(days).padStart(2, "0");
          if (type === "hours") label.querySelector("strong").textContent = String(hours).padStart(2, "0");
          if (type === "minutes") label.querySelector("strong").textContent = String(minutes).padStart(2, "0");
          if (type === "seconds") label.querySelector("strong").textContent = String(seconds).padStart(2, "0");
        });
      };

      const countdownTimer = setInterval(updateCountdown, 1000);
      updateCountdown();
    }

    // Back to top button
    const topBtn = document.querySelector(".rm-back-top");
    if (topBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 420) {
          topBtn.classList.add("visible");
        } else {
          topBtn.classList.remove("visible");
        }
      });

      topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });
})(jQuery);



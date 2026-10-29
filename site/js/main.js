/*
 * Victor Renteria — Portfolio scripts
 * Every feature here is a progressive enhancement: the pages remain fully
 * readable and navigable with JavaScript turned off.
 */
(function () {
  "use strict";

  /* ---------- Mobile navigation toggle ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".fa-solid").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    toggle.querySelector(".visually-hidden").textContent = open ? "Close menu" : "Open menu";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close the menu after a link is chosen or Escape is pressed
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Reveal sections as they scroll into view ---------- */
  var revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -60px 0px", threshold: 0.1 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  /* ---------- Project filters (projects page only) ---------- */
  var filterBar = document.querySelector(".filters");

  if (filterBar) {
    var filterButtons = filterBar.querySelectorAll("button");
    var cards = document.querySelectorAll(".project-card[data-tags]");
    var status = document.getElementById("filter-status");

    filterBar.hidden = false;

    filterBar.addEventListener("click", function (event) {
      var button = event.target.closest("button");
      if (!button) {
        return;
      }

      var filter = button.getAttribute("data-filter");
      var shown = 0;

      filterButtons.forEach(function (btn) {
        btn.setAttribute("aria-pressed", String(btn === button));
      });

      cards.forEach(function (card) {
        var tags = card.getAttribute("data-tags").split(" ");
        var match = filter === "all" || tags.indexOf(filter) !== -1;
        card.hidden = !match;
        if (match) {
          shown += 1;
        }
      });

      status.textContent = "Showing " + shown + " of " + cards.length + " projects";
    });
  }

  /* ---------- Contact form: open the visitor's email app ---------- */
  var form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();
      var subject = "Portfolio message from " + name;
      var body = message + "\n\n— " + name + " (" + email + ")";

      window.location.href = "mailto:vmrenter@uci.edu?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      document.getElementById("form-status").textContent =
        "Thanks, " + name + "! Your email app should open with the message ready to send.";
    });
  }
}());

const SECRET_CODE = "hello";

      const landing = document.getElementById("landing");
      const welcome = document.getElementById("welcome");
      const mainSite = document.getElementById("main-site");
      const secretInput = document.getElementById("secretCode");
      const enterBtn = document.getElementById("enterBtn");
      const errorMsg = document.getElementById("errorMsg");
      const heartJourneyBtn = document.getElementById("heartJourneyBtn");

      function checkCode() {
        const value = secretInput.value.trim().toLowerCase();
        if (value === SECRET_CODE) {
          errorMsg.textContent = "";
          landing.classList.add("hidden");
          welcome.classList.add("visible");
          return true;
        }
        errorMsg.textContent =
          "That's not the right code,babe💋! Don't give up, just try again 💕";
        return false;
      }

      heartJourneyBtn.addEventListener("click", function () {
        welcome.classList.remove("visible");
        welcome.classList.add("hidden");
        mainSite.classList.add("visible");
        window.location.hash = "letter";
        setActive();
      });

      heartJourneyBtn.addEventListener(
        "touchstart",
        function (e) {
          e.preventDefault();
          welcome.classList.remove("visible");
          welcome.classList.add("hidden");
          mainSite.classList.add("visible");
          window.location.hash = "letter";
          setActive();
        },
        { passive: false },
      );

      enterBtn.addEventListener("click", checkCode);
      secretInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") checkCode();
      });

      
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav a");

      function setActive() {
        const hash = window.location.hash.slice(1) || "letter";
        sections.forEach((s) => {
          s.classList.toggle("active", s.id === hash);
        });
        navLinks.forEach((a) => {
          a.classList.toggle("active", a.getAttribute("data-section") === hash);
        });
      }

      navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const section = this.getAttribute("data-section");
          window.location.hash = section;
          setActive();
        });
      });

      window.addEventListener("hashchange", setActive);
      window.addEventListener("load", setActive);

      
      var letterWrapper = document.getElementById("letterWrapper");
      var letterTrigger = document.getElementById("letterTrigger");
      if (letterWrapper && letterTrigger) {
        letterTrigger.addEventListener("click", function () {
          letterWrapper.classList.toggle("open");
        });
      }

      
      document
        .querySelectorAll(".music-category-header")
        .forEach(function (header) {
          header.addEventListener("click", function () {
            var cat = this.closest(".music-category");
            if (cat) cat.classList.toggle("open");
          });
        });

      
      var galleryItems = document.querySelectorAll(".gallery-item");
      var galleryNextWrap = document.getElementById("galleryNextWrap");
      var btnNext = document.getElementById("btnNext");
      var lastPage = document.getElementById("last-page");

      function checkAllRevealed() {
        if (!galleryNextWrap || !galleryItems.length) return;
        var all = true;
        galleryItems.forEach(function (item) {
          if (!item.classList.contains("revealed")) all = false;
        });
        if (all) galleryNextWrap.classList.add("visible");
      }

      galleryItems.forEach(function (item) {
        item.addEventListener("click", function () {
          this.classList.add("revealed");
          checkAllRevealed();
        });
      });

      
      if (btnNext && lastPage && mainSite) {
        btnNext.addEventListener("click", function () {
          mainSite.style.display = "none";
          lastPage.classList.add("visible");
        });
      }

      
      var kissFillTimer = null;
      function checkKissAllBurst() {
        var kissBalloons = document.querySelectorAll(".kiss-balloon");
        if (!kissBalloons || !kissBalloons.length) return;
        var all = true;
        kissBalloons.forEach(function (b) {
          if (!b.classList.contains("burst")) all = false;
        });
        if (all) {
          if (kissFillTimer) clearTimeout(kissFillTimer);
          kissFillTimer = setTimeout(function () {
            triggerKissFill();
            kissFillTimer = null;
          }, 3000);
        }
      }

      function triggerKissFill() {
        if (document.getElementById("kissOverlay")) return; 
        var overlay = document.createElement("div");
        overlay.id = "kissOverlay";
        overlay.className = "kiss-overlay";
        document.body.appendChild(overlay);

        var emojiCount = 0;
        var stampCount = 0;
        
        var maxEmojis = 220;
        var maxStamps = 40;
        var emojiIntervalMs = 14; 
        var stampIntervalMs = 120; 

        var emojiInterval = setInterval(function () {
          if (emojiCount >= maxEmojis) {
            clearInterval(emojiInterval);
            return;
          }
          var s = document.createElement("span");
          s.className = "kiss-emoji";
          s.textContent = Math.random() < 0.6 ? "💋" : "😘";
          s.style.left = Math.random() * 100 + "%";
          s.style.top = Math.random() * 100 + "%";
          var rot = Math.random() * 80 - 40;
          var startScale = 0.25 + Math.random() * 0.4;
          s.style.transform =
            "translate(-50%,-50%) rotate(" +
            rot +
            "deg) scale(" +
            startScale +
            ")";
          s.style.opacity = "0";
          overlay.appendChild(s);
          
          requestAnimationFrame(function () {
            s.style.transition =
              "transform 700ms cubic-bezier(.2,.9,.2,1), opacity 700ms ease";
            var endScale = 0.9 + Math.random() * 0.9;
            s.style.transform =
              "translate(-50%,-50%) rotate(" +
              (rot + (Math.random() * 20 - 10)) +
              "deg) scale(" +
              endScale +
              ")";
            s.style.opacity = (0.7 + Math.random() * 0.3).toString();
          });
          emojiCount++;
        }, emojiIntervalMs);

        var stampInterval = setInterval(function () {
          if (stampCount >= maxStamps) {
            clearInterval(stampInterval);
            return;
          }
          var st = document.createElement("span");
          st.className = "kiss-stamp";
          st.textContent = "KISSED";
          st.style.left = Math.random() * 100 + "%";
          st.style.top = Math.random() * 100 + "%";
          var rot = Math.random() * 90 - 45;
          var startScale = 0.35 + Math.random() * 0.5;
          st.style.transform =
            "translate(-50%,-50%) rotate(" +
            rot +
            "deg) scale(" +
            startScale +
            ")";
          st.style.opacity = "0";
          overlay.appendChild(st);
          requestAnimationFrame(function () {
            st.style.transition = "transform 900ms ease, opacity 900ms ease";
            var endScale = 0.9 + Math.random() * 1.4;
            st.style.transform =
              "translate(-50%,-50%) rotate(" +
              (rot + (Math.random() * 20 - 10)) +
              "deg) scale(" +
              endScale +
              ")";
            st.style.opacity = (0.12 + Math.random() * 0.8).toString();
          });
          stampCount++;
        }, stampIntervalMs);
        
        var finishTimeout =
          Math.max(maxEmojis * emojiIntervalMs, maxStamps * stampIntervalMs) +
          200;
        setTimeout(function () {
          overlay.classList.add("filled");
          
          setTimeout(showFinalKiss, 80);
        }, finishTimeout);
      }

      
      function showFinalKiss() {
        if (document.getElementById("finalKiss")) return;
        var wrapper = document.createElement("div");
        wrapper.id = "finalKiss";
        wrapper.className = "final-kiss";

        var btn = document.createElement("button");
        btn.className = "final-kiss-btn";
        var emoji = document.createElement("span");
        emoji.className = "emoji";
        emoji.textContent = "💋";
        var label = document.createElement("span");
        label.className = "label";
        label.textContent = "Last click";
        btn.appendChild(emoji);
        btn.appendChild(label);

        wrapper.appendChild(btn);
        document.body.appendChild(wrapper);

        btn.addEventListener("click", function () {
          clearAndShowILove();
        });
      }

      
      function clearAndShowILove() {
        
        document.body.innerHTML = "";
        var screen = document.createElement("div");
        screen.className = "i-love-screen";
        var txt = document.createElement("div");
        txt.className = "text";
        txt.textContent = "I love You!";
        var sub = document.createElement("div");
        sub.className = "sub";
        sub.textContent = "🤗 💋";
        screen.appendChild(txt);
        screen.appendChild(sub);
        document.body.appendChild(screen);
      }

      (function () {
        var hearts = document.querySelectorAll(".note-heart");
        hearts.forEach(function (btn) {
          btn.addEventListener("click", function () {
            var id = this.getAttribute("data-note");
            var card = document.getElementById(id);
            if (!card) return;
            document
              .querySelectorAll(".note-card.open")
              .forEach(function (opened) {
                if (opened.id !== id) opened.classList.remove("open");
              });
            card.classList.toggle("open");
            if (card.classList.contains("open")) {
              card.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          });
        });
        document.querySelectorAll(".close-note").forEach(function (btn) {
          btn.addEventListener("click", function () {
            var card = this.closest(".note-card");
            if (card) card.classList.remove("open");
          });
        });
      })();

      document.querySelectorAll(".balloon").forEach(function (el) {
        el.addEventListener("click", function () {
          if (this.classList.contains("burst")) return;
          var word = this.getAttribute("data-word");
          this.querySelector(".balloon-word").textContent = word;
          this.classList.add("burst");
          if (this.classList.contains("kiss-balloon")) checkKissAllBurst();
        });
        el.addEventListener(
          "touchstart",
          function (e) {
            if (this.classList.contains("burst")) return;
            e.preventDefault();
            var word = this.getAttribute("data-word");
            this.querySelector(".balloon-word").textContent = word;
            this.classList.add("burst");
            if (this.classList.contains("kiss-balloon")) checkKissAllBurst();
          },
          { passive: false },
        );
      });
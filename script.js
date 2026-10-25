const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuButton && mobileMenu) {
  const setMenuOpen = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );
    mobileMenu.hidden = !open;
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      menuButton.getAttribute("aria-expanded") === "true" &&
      !mobileMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });
}

const year = document.querySelector("#current-year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const lanyard = document.querySelector(".lanyard");
const lanyardSwing = lanyard?.querySelector(".lanyard-swing");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (lanyard && lanyardSwing) {
  let drag = null;

  const flipLanyard = () => {
    const flipped = lanyard.classList.toggle("is-flipped");
    lanyard.setAttribute("aria-pressed", String(flipped));
  };

  const setHoverTilt = (event) => {
    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    const bounds = lanyard.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    lanyard.style.transform =
      `rotateX(${y * -5}deg) rotateY(${x * 7}deg) translate3d(${-x * 3}px, ${-y * 3}px, 0)`;
  };

  const rebound = () => {
    lanyard.classList.remove("is-dragging");
    if (reducedMotion.matches) {
      lanyard.style.removeProperty("transform");
      return;
    }

    const currentTransform = lanyard.style.transform;
    lanyard.classList.add("is-rebounding");
    const animation = lanyard.animate(
      [
        { transform: currentTransform },
        { transform: "translate3d(-5px, -3px, 0) rotate(-2deg)", offset: 0.72 },
        { transform: "translate3d(2px, 1px, 0) rotate(0.8deg)", offset: 0.88 },
        { transform: "none" },
      ],
      { duration: 720, easing: "cubic-bezier(.2,.8,.2,1)" },
    );

    animation.addEventListener("finish", () => {
      lanyard.style.removeProperty("transform");
      lanyard.classList.remove("is-rebounding");
    }, { once: true });
  };

  lanyard.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0) {
      return;
    }

    const bounds = lanyard.getBoundingClientRect();
    drag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: 0,
      offsetY: 0,
      minX: Math.max(-64, 8 - bounds.left),
      maxX: Math.min(64, window.innerWidth - bounds.right - 8),
      maxY: Math.min(72, window.innerHeight - bounds.bottom - 8),
      moved: false,
    };
    lanyard.classList.add("is-dragging");
    lanyard.classList.remove("is-rebounding");
    lanyard.getAnimations({ subtree: false }).forEach((animation) => animation.cancel());
    lanyard.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  lanyard.addEventListener("pointermove", (event) => {
    if (!drag) {
      setHoverTilt(event);
      return;
    }

    const rawX = event.clientX - drag.startX;
    const rawY = event.clientY - drag.startY;
    drag.offsetX = Math.max(drag.minX, Math.min(drag.maxX, rawX));
    drag.offsetY = Math.max(-24, Math.min(drag.maxY, rawY));
    drag.moved ||= Math.hypot(rawX, rawY) > 7;

    const angle = Math.max(-14, Math.min(14, drag.offsetX * -0.16 + drag.offsetY * 0.035));
    lanyard.style.transform =
      `translate3d(${drag.offsetX}px, ${drag.offsetY}px, 0) rotate(${angle}deg)`;
  });

  const releaseLanyard = (event, cancelled = false) => {
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    const wasDragged = drag.moved;
    drag = null;
    if (lanyard.hasPointerCapture(event.pointerId)) {
      lanyard.releasePointerCapture(event.pointerId);
    }

    if (!cancelled && !wasDragged) {
      flipLanyard();
    }
    rebound();
  };

  lanyard.addEventListener("pointerup", (event) => releaseLanyard(event));
  lanyard.addEventListener("pointercancel", (event) => releaseLanyard(event, true));
  lanyard.addEventListener("lostpointercapture", (event) => releaseLanyard(event, true));
  lanyard.addEventListener("pointerleave", () => {
    if (!drag) {
      lanyard.style.removeProperty("transform");
    }
  });
  lanyard.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && !event.repeat) {
      event.preventDefault();
      flipLanyard();
    }
  });
}

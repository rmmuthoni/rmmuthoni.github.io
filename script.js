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
  let dragStart = null;

  lanyard.addEventListener("pointermove", (event) => {
    if (dragStart) {
      const offsetX = Math.max(-42, Math.min(42, event.clientX - dragStart.x));
      const offsetY = Math.max(-36, Math.min(36, event.clientY - dragStart.y));
      const angle = Math.max(-12, Math.min(12, offsetX * 0.24 + offsetY * 0.04));

      lanyard.style.transform =
        `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${angle}deg)`;
      return;
    }

    if (finePointer.matches && !reducedMotion.matches) {
      const bounds = lanyard.getBoundingClientRect();
      const pointerOffset = (event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2);
      const tilt = Math.max(-1, Math.min(1, pointerOffset)) * -8;

      lanyardSwing.style.setProperty("--pointer-tilt", `${tilt}deg`);
    }
  });

  lanyard.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0 || reducedMotion.matches) {
      return;
    }

    dragStart = { x: event.clientX, y: event.clientY };
    lanyard.getAnimations().forEach((animation) => animation.cancel());
    lanyard.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  const releaseLanyard = (event) => {
    if (!dragStart) {
      return;
    }

    dragStart = null;
    lanyard.releasePointerCapture(event.pointerId);

    const rebound = lanyard.animate(
      [
        { transform: lanyard.style.transform },
        { transform: "translate3d(0, 0, 0) rotate(0deg)" },
      ],
      {
        duration: reducedMotion.matches ? 0 : 650,
        easing: "cubic-bezier(.2,.8,.2,1)",
      },
    );

    rebound.addEventListener("finish", () => {
      lanyard.style.removeProperty("transform");
    }, { once: true });
  };

  lanyard.addEventListener("pointerup", releaseLanyard);
  lanyard.addEventListener("pointercancel", releaseLanyard);

  lanyard.addEventListener("lostpointercapture", () => {
    if (dragStart) {
      dragStart = null;
      lanyard.style.removeProperty("transform");
    }
  });

  lanyard.addEventListener("pointerleave", () => {
    if (!dragStart) {
      lanyardSwing.style.setProperty("--pointer-tilt", "0deg");
    }
  });
}

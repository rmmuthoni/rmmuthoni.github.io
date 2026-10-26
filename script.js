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
  const spring = {
    x: 0,
    y: 0,
    velocityX: 0,
    velocityY: 0,
    targetX: 0,
    targetY: 0,
    frame: 0,
    lastTime: 0,
  };
  const strapLeft = lanyardSwing.querySelector("#strap-left");
  const strapRight = lanyardSwing.querySelector("#strap-right");
  const strapStrokes = lanyardSwing.querySelectorAll(".lanyard-stroke");

  const flipLanyard = () => {
    const flipped = lanyard.classList.toggle("is-flipped");
    lanyard.setAttribute("aria-pressed", String(flipped));
  };

  const drawSpring = () => {
    const { x, y } = spring;
    lanyardSwing.style.setProperty("--swing-x", `${x}px`);
    lanyardSwing.style.setProperty("--swing-y", `${y}px`);
    lanyardSwing.style.setProperty(
      "--swing-angle",
      `${Math.atan2(x, 490 + y) * 180 / Math.PI}deg`,
    );

    if (strapLeft && strapRight) {
      const leftPath =
        `M66 -8 C ${83 + x * 0.15} ${42 + y * 0.2} ${96 + x * 0.65} ${100 + y * 0.6} ${119 + x} ${178 + y}`;
      const rightPath =
        `M174 -8 C ${157 + x * 0.15} ${42 + y * 0.2} ${144 + x * 0.65} ${100 + y * 0.6} ${121 + x} ${178 + y}`;
      strapLeft.setAttribute("d", leftPath);
      strapRight.setAttribute("d", rightPath);
      strapStrokes.forEach((stroke) => {
        stroke.setAttribute("d", `${leftPath} ${rightPath}`);
      });
    }
  };

  const snapSpringHome = () => {
    spring.x = 0;
    spring.y = 0;
    spring.velocityX = 0;
    spring.velocityY = 0;
    spring.targetX = 0;
    spring.targetY = 0;
    drawSpring();
  };

  const runSpring = (time) => {
    const elapsed = Math.min((time - spring.lastTime) / 1000, 1 / 30);
    spring.lastTime = time;

    if (reducedMotion.matches) {
      spring.x = spring.targetX;
      spring.y = spring.targetY;
      spring.velocityX = 0;
      spring.velocityY = 0;
    } else {
      const steps = Math.max(1, Math.ceil(elapsed / (1 / 120)));
      const step = elapsed / steps;
      for (let index = 0; index < steps; index += 1) {
        const accelerationX = (spring.targetX - spring.x) * 190 - spring.velocityX * 21;
        const accelerationY = (spring.targetY - spring.y) * 190 - spring.velocityY * 21;
        spring.velocityX += accelerationX * step;
        spring.velocityY += accelerationY * step;
        spring.x += spring.velocityX * step;
        spring.y += spring.velocityY * step;
      }
    }

    drawSpring();
    const settled =
      Math.abs(spring.x) < 0.15 &&
      Math.abs(spring.y) < 0.15 &&
      Math.abs(spring.velocityX) < 0.2 &&
      Math.abs(spring.velocityY) < 0.2;

    if (drag || !settled) {
      spring.frame = window.requestAnimationFrame(runSpring);
      return;
    }

    spring.frame = 0;
    snapSpringHome();
  };

  const startSpring = () => {
    if (reducedMotion.matches) {
      snapSpringHome();
      return;
    }

    if (!spring.frame) {
      spring.lastTime = performance.now();
      spring.frame = window.requestAnimationFrame(runSpring);
    }
  };

  const setHoverTarget = (event) => {
    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    const bounds = lanyard.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    spring.targetX = x * 12;
    spring.targetY = y * 5;
    startSpring();
  };

  const releaseLanyard = (event, cancelled = false) => {
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    const wasDragged = drag.moved;
    drag = null;
    lanyard.classList.remove("is-dragging");
    if (lanyard.hasPointerCapture(event.pointerId)) {
      lanyard.releasePointerCapture(event.pointerId);
    }

    if (!cancelled && !wasDragged) {
      flipLanyard();
    }

    spring.targetX = 0;
    spring.targetY = 0;
    startSpring();
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
      originX: spring.x,
      originY: spring.y,
      minX: Math.max(-72, 8 - bounds.left),
      maxX: Math.min(72, window.innerWidth - bounds.right - 8),
      minY: Math.max(-24, 8 - bounds.top),
      maxY: Math.min(100, window.innerHeight - bounds.bottom - 8),
      moved: false,
    };
    lanyard.classList.add("is-dragging");
    if (spring.frame) {
      window.cancelAnimationFrame(spring.frame);
      spring.frame = 0;
    }
    lanyard.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  lanyard.addEventListener("pointermove", (event) => {
    if (!drag) {
      setHoverTarget(event);
      return;
    }
    if (drag.pointerId !== event.pointerId) {
      return;
    }

    const rawX = event.clientX - drag.startX;
    const rawY = event.clientY - drag.startY;
    spring.targetX = Math.max(drag.minX, Math.min(drag.maxX, drag.originX + rawX));
    spring.targetY = Math.max(drag.minY, Math.min(drag.maxY, drag.originY + rawY));
    drag.moved ||= Math.hypot(rawX, rawY) > 7;

    if (reducedMotion.matches) {
      spring.x = spring.targetX;
      spring.y = spring.targetY;
      drawSpring();
    } else {
      startSpring();
    }
  });

  lanyard.addEventListener("pointerup", (event) => releaseLanyard(event));
  lanyard.addEventListener("pointercancel", (event) => releaseLanyard(event, true));
  lanyard.addEventListener("lostpointercapture", (event) => releaseLanyard(event, true));
  lanyard.addEventListener("pointerleave", () => {
    if (!drag) {
      spring.targetX = 0;
      spring.targetY = 0;
      startSpring();
    }
  });
  lanyard.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && !event.repeat) {
      event.preventDefault();
      flipLanyard();
    }
  });
}

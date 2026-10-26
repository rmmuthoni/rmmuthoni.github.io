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

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const roleText = document.querySelector("[data-role-text]");
const roleAnnouncement = document.querySelector("[data-role-announcement]");
if (roleText instanceof HTMLElement && roleAnnouncement instanceof HTMLElement) {
  const roles = [
    "Data Analyst",
    "Business Intelligence Analyst",
    "Analytics Engineer",
  ];
  const typeDelay = 85;
  const deleteDelay = 42;
  const holdDelay = 1500;
  let roleIndex = 0;
  let characterIndex = roleText.textContent.length;
  let deleting = true;
  let roleTimer = 0;

  const animateRole = () => {
    if (reducedMotion.matches) {
      return;
    }

    const currentRole = roles[roleIndex];
    characterIndex += deleting ? -1 : 1;
    roleText.textContent = currentRole.slice(0, characterIndex);

    if (!deleting && characterIndex === currentRole.length) {
      roleAnnouncement.textContent = currentRole;
      deleting = true;
      roleTimer = window.setTimeout(animateRole, holdDelay);
      return;
    }

    if (deleting && characterIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    roleTimer = window.setTimeout(
      animateRole,
      deleting ? deleteDelay : typeDelay,
    );
  };

  if (!reducedMotion.matches) {
    roleTimer = window.setTimeout(animateRole, 1800);
  }

  reducedMotion.addEventListener("change", () => {
    window.clearTimeout(roleTimer);
    if (reducedMotion.matches) {
      roleText.textContent = roles[0];
      roleAnnouncement.textContent = "";
    } else {
      roleIndex = 0;
      characterIndex = roles[0].length;
      deleting = true;
      roleTimer = window.setTimeout(animateRole, 1800);
    }
  });
}

const lanyard = document.querySelector(".lanyard");
const lanyardSwing = lanyard?.querySelector(".lanyard-swing");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

if (lanyard && lanyardSwing) {
  let drag = null;
  let pointerHover = false;
  let fallAnimation = null;
  let revealTimer = 0;
  let returnTimer = 0;
  const spring = {
    angle: 0,
    velocity: 0,
    targetAngle: 0,
    cardAngle: 0,
    cardVelocity: 0,
    extension: 0,
    extensionVelocity: 0,
    targetExtension: 0,
    maxExtension: Infinity,
    frame: 0,
    lastTime: 0,
  };
  const strapCenter = lanyardSwing.querySelector("#strap-center");
  const strapStrokes = lanyardSwing.querySelectorAll(".lanyard-stroke");

  const clearRevealTimers = () => {
    window.clearTimeout(revealTimer);
    window.clearTimeout(returnTimer);
  };

  const cancelFall = () => {
    if (fallAnimation && fallAnimation.playState === "running") {
      fallAnimation.cancel();
    }
  };

  const flipLanyard = () => {
    const flipped = lanyard.classList.toggle("is-flipped");
    lanyard.setAttribute("aria-pressed", String(flipped));
  };

  const drawSwing = () => {
    lanyardSwing.style.setProperty(
      "--swing-angle",
      `${spring.angle * 180 / Math.PI}deg`,
    );
    lanyardSwing.style.setProperty(
      "--card-angle",
      `${spring.cardAngle * 180 / Math.PI}deg`,
    );
    lanyardSwing.style.setProperty("--strap-extension", `${spring.extension}px`);

    if (strapCenter) {
      const stretch = spring.extension;
      const sway = Math.sin(spring.angle) * 16;
      const path =
        `M120 -8 C ${120 + sway * 0.35 + stretch * 0.08} ${42 + stretch * 0.28} ${120 + sway - stretch * 0.06} ${100 + stretch * 0.68} 120 ${178 + stretch}`;
      strapCenter.setAttribute("d", path);
      strapStrokes.forEach((stroke) => {
        stroke.setAttribute("d", path);
      });
    }
  };

  const settleWithoutMotion = () => {
    spring.angle = 0;
    spring.velocity = 0;
    spring.targetAngle = 0;
    spring.cardAngle = 0;
    spring.cardVelocity = 0;
    spring.extension = 0;
    spring.extensionVelocity = 0;
    spring.targetExtension = 0;
    drawSwing();
  };

  const runSpring = (time) => {
    const elapsed = Math.min((time - spring.lastTime) / 1000, 1 / 30);
    spring.lastTime = time;

    if (reducedMotion.matches) {
      spring.frame = 0;
      settleWithoutMotion();
      return;
    }

    const steps = Math.max(1, Math.ceil(elapsed / (1 / 120)));
    const step = elapsed / steps;
    for (let index = 0; index < steps; index += 1) {
      const acceleration = drag || pointerHover
        ? (spring.targetAngle - spring.angle) * 80 - spring.velocity * 17
        : -13 * Math.sin(spring.angle) - 1.5 * spring.velocity +
          0.16 * Math.sin(time * 0.00075);
      const extensionAcceleration = drag
        ? (spring.targetExtension - spring.extension) * 180 - spring.extensionVelocity * 24
        : -82 * spring.extension - 8.5 * spring.extensionVelocity;
      spring.velocity += acceleration * step;
      spring.angle += spring.velocity * step;
      const cardAcceleration =
        (-spring.angle * 0.32 - spring.cardAngle) * 48 - spring.cardVelocity * 12;
      spring.cardVelocity += cardAcceleration * step;
      spring.cardAngle += spring.cardVelocity * step;
      spring.extensionVelocity += extensionAcceleration * step;
      spring.extension += spring.extensionVelocity * step;
      if (spring.extension < 0) {
        spring.extension = 0;
        if (spring.extensionVelocity < 0) {
          spring.extensionVelocity *= -0.36;
        }
      }
      if (spring.extension > spring.maxExtension) {
        spring.extension = spring.maxExtension;
        if (spring.extensionVelocity > 0) {
          spring.extensionVelocity *= -0.36;
        }
      }
    }

    drawSwing();
    spring.frame = window.requestAnimationFrame(runSpring);
  };

  const startSpring = () => {
    if (reducedMotion.matches) {
      settleWithoutMotion();
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
    pointerHover = true;
    spring.targetAngle = -x * 0.035;
    startSpring();
  };

  const interruptIntroduction = () => {
    clearRevealTimers();
    cancelFall();
  };

  const releaseLanyard = (event, cancelled = false) => {
    if (!drag || drag.pointerId !== event.pointerId) {
      return;
    }

    const releasedDrag = drag;
    const wasDragged = releasedDrag.moved;
    drag = null;
    lanyard.classList.remove("is-dragging");
    if (lanyard.hasPointerCapture(event.pointerId)) {
      lanyard.releasePointerCapture(event.pointerId);
    }

    spring.targetAngle = 0;
    spring.targetExtension = 0;
    spring.maxExtension = releasedDrag.maxExtension;
    spring.velocity -= releasedDrag.velocityX * 0.35;
    spring.extensionVelocity = Math.max(
      -1600,
      Math.min(1600, releasedDrag.velocityY * 0.45),
    );
    if (!cancelled && !wasDragged) {
      interruptIntroduction();
      flipLanyard();
    }
    startSpring();
  };

  lanyard.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.button !== 0) {
      return;
    }

    interruptIntroduction();
    pointerHover = false;
    const scale = Number.parseFloat(getComputedStyle(lanyard).scale) || 1;
    const cardBounds = lanyard.querySelector(".lanyard-card").getBoundingClientRect();
    drag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      lastX: event.clientX,
      startY: event.clientY,
      originAngle: spring.angle,
      originExtension: spring.extension,
      dragLength: 400 * scale,
      scale,
      maxExtension: spring.extension + Math.max(
        0,
        (window.innerHeight - 12 - cardBounds.bottom) / scale,
      ),
      lastY: event.clientY,
      lastTime: event.timeStamp,
      velocityX: 0,
      velocityY: 0,
      moved: false,
    };
    spring.maxExtension = drag.maxExtension;
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
    spring.targetAngle = Math.max(
      -0.3,
      Math.min(0.3, drag.originAngle - rawX / drag.dragLength),
    );
    spring.targetExtension = Math.min(
      drag.maxExtension,
      Math.max(0, drag.originExtension + rawY / drag.scale),
    );

    const elapsed = event.timeStamp - drag.lastTime;
    if (elapsed > 0) {
      drag.velocityX = (event.clientX - drag.lastX) / elapsed * 1000 / drag.dragLength;
      drag.velocityY = (event.clientY - drag.lastY) / elapsed * 1000 / drag.scale;
      drag.lastX = event.clientX;
      drag.lastY = event.clientY;
      drag.lastTime = event.timeStamp;
    }
    drag.moved ||= Math.hypot(rawX, rawY) > 7;

    if (reducedMotion.matches) {
      spring.angle = spring.targetAngle;
      spring.extension = spring.targetExtension;
      drawSwing();
    } else {
      startSpring();
    }
  });

  lanyard.addEventListener("pointerup", (event) => releaseLanyard(event));
  lanyard.addEventListener("pointercancel", (event) => releaseLanyard(event, true));
  lanyard.addEventListener("lostpointercapture", (event) => releaseLanyard(event, true));
  lanyard.addEventListener("pointerleave", () => {
    if (!drag) {
      pointerHover = false;
      startSpring();
    };
  });
  lanyard.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && !event.repeat) {
      event.preventDefault();
      interruptIntroduction();
      flipLanyard();
    }
  });

  if (!reducedMotion.matches) {
    fallAnimation = lanyard.animate(
      [
        { transform: "translateY(-620px)" },
        { transform: "translateY(18px)", offset: 0.8 },
        { transform: "translateY(-7px)", offset: 0.92 },
        { transform: "translateY(0)" },
      ],
      {
        duration: 1450,
        easing: "cubic-bezier(.18,.76,.32,1)",
      },
    );

    revealTimer = window.setTimeout(() => {
      if (drag || lanyard.classList.contains("is-flipped")) {
        return;
      }

      flipLanyard();
      returnTimer = window.setTimeout(() => {
        if (lanyard.classList.contains("is-flipped")) {
          flipLanyard();
        }
      }, 950);
    }, 1800);
  }

  startSpring();
}

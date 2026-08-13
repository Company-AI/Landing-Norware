/**
 * Orquestación de movimiento del sitio.
 *
 * Reglas de la casa:
 *  - Sin JS o con `prefers-reduced-motion`, todo el contenido queda visible y
 *    en su posición final. El movimiento es decoración, nunca requisito.
 *  - Un elemento con `data-reveal` NO puede tener `data-tilt`: los dos escriben
 *    `transform`. El patrón es wrapper con reveal, hijo con tilt.
 *  - Todo lo pesado (pin, deck horizontal) vive dentro de `gsap.matchMedia`.
 *
 * Patrones tomados de la skill `gsap-scrolltrigger`.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const rnd = (i: number, salt: number) => {
  const x = Math.sin(i * 91.7 + salt * 47.13) * 43758.5453;
  return x - Math.floor(x);
};

/* ------------------------------------------------------------------ reveals */

function initReveals() {
  const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (!items.length) return;

  const finish = (el: HTMLElement) => {
    el.removeAttribute('data-reveal');
    gsap.set(el, { clearProps: 'all' });
  };

  items.forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay || '0');
    gsap.to(el, {
      opacity: 1,
      y: 0,
      z: 0,
      rotateX: 0,
      duration: 0.95,
      delay,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onComplete: () => finish(el),
    });
  });

  // Red de seguridad: si algo no disparó en 3.5 s, se muestra igual.
  window.setTimeout(() => {
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      const st = ScrollTrigger.getAll().find((t) => t.trigger === el);
      if (st && st.progress > 0) return;
      if (el.getBoundingClientRect().top < window.innerHeight) {
        gsap.killTweensOf(el);
        finish(el);
      }
    });
  }, 3500);
}

/* --------------------------------------------------------------------- tilt */

function initTilt() {
  const cards = gsap.utils.toArray<HTMLElement>('[data-tilt]');
  if (!cards.length) return;

  const coarse = window.matchMedia('(pointer: coarse)').matches;
  if (coarse) return; // en touch el tilt de puntero no aporta nada

  cards.forEach((card) => {
    const max = parseFloat(card.dataset.tiltMax || '9');
    const lift = parseFloat(card.dataset.tiltLift || '26');
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--ry', `${(px - 0.5) * 2 * max}deg`);
        card.style.setProperty('--rx', `${(0.5 - py) * 2 * max}deg`);
        card.style.setProperty('--tz', `${lift}px`);
        card.style.setProperty('--mx', `${px * 100}%`);
        card.style.setProperty('--my', `${py * 100}%`);
      });
    };

    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      card.style.setProperty('--ry', '0deg');
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--tz', '0px');
      card.style.setProperty('--mx', '50%');
      card.style.setProperty('--my', '0%');
    };

    card.addEventListener('pointermove', onMove);
    card.addEventListener('pointerleave', onLeave);
  });
}

/* ----------------------------------------------------------------- parallax */

function initParallax() {
  gsap.utils.toArray<HTMLElement>('[data-par]').forEach((el) => {
    const speed = parseFloat(el.dataset.par || '0.12');
    gsap.to(el, {
      yPercent: -speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
}

/* --------------------------------------------------- problema: caos → orden */

function initChaos() {
  const items = gsap.utils.toArray<HTMLElement>('.chaos-item');
  if (!items.length) return;
  const section = document.getElementById('problema');
  if (!section) return;

  items.forEach((el, i) => {
    gsap.fromTo(
      el,
      {
        x: (rnd(i, 1) - 0.5) * 260,
        y: (rnd(i, 2) - 0.5) * 150,
        z: -160 - rnd(i, 3) * 320,
        rotateX: (rnd(i, 4) - 0.5) * 56,
        rotateY: (rnd(i, 5) - 0.5) * 74,
        rotateZ: (rnd(i, 6) - 0.5) * 26,
        opacity: 0.18,
      },
      {
        x: 0,
        y: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          end: 'center 42%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      }
    );
  });

  // El marcador de estado pasa de "desorden" a "sistema".
  const badge = section.querySelector<HTMLElement>('[data-chaos-badge]');
  if (badge) {
    ScrollTrigger.create({
      trigger: section,
      start: 'center 55%',
      onEnter: () => badge.classList.add('is-ordered'),
      onLeaveBack: () => badge.classList.remove('is-ordered'),
    });
  }
}

/* ---------------------------------------------- soluciones: deck horizontal */

function initDeck() {
  const pin = document.getElementById('sol-pin');
  const track = document.getElementById('sol-track');
  if (!pin || !track) return;

  const cards = gsap.utils.toArray<HTMLElement>('.sol-card', track);
  const mm = gsap.matchMedia();

  mm.add('(min-width: 1024px) and (min-height: 620px)', () => {
    const distance = () => Math.max(track.scrollWidth - window.innerWidth + 80, 1);

    const shape = () => {
      const cx = window.innerWidth / 2;
      cards.forEach((c) => {
        const r = c.getBoundingClientRect();
        const d = Math.max(-1.6, Math.min(1.6, (r.left + r.width / 2 - cx) / cx));
        c.style.setProperty('--ry', `${-d * 22}deg`);
        c.style.setProperty('--tz', `${-Math.abs(d) * 190}px`);
        c.style.setProperty('--card-dim', String(Math.min(Math.abs(d) * 0.5, 0.5)));
      });
    };

    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: pin,
        start: 'top top',
        end: () => `+=${distance() + window.innerHeight * 0.5}`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefresh: shape,
        onUpdate: shape,
      },
    });

    shape();

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(track, { clearProps: 'all' });
      cards.forEach((c) => {
        c.style.removeProperty('--ry');
        c.style.removeProperty('--tz');
        c.style.removeProperty('--card-dim');
      });
    };
  });

  // Mobile / viewport bajo: pila vertical con enderezado al entrar.
  mm.add('(max-width: 1023px), (max-height: 619px)', () => {
    const tweens = cards.map((c) =>
      gsap.fromTo(
        c,
        { rotateX: 14, z: -120, opacity: 0.45 },
        {
          rotateX: 0,
          z: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: c, start: 'top 92%', end: 'center 58%', scrub: 1 },
        }
      )
    );
    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
      cards.forEach((c) => gsap.set(c, { clearProps: 'all' }));
    };
  });
}

/* ------------------------------------------------ diagnóstico: escalera 3D  */

function initStairs() {
  const steps = gsap.utils.toArray<HTMLElement>('.stair-step');
  if (!steps.length) return;

  steps.forEach((el, i) => {
    gsap.fromTo(
      el,
      { z: -240 - i * 90, x: 46 + i * 14, opacity: 0.25, rotateY: 16 },
      {
        z: 0,
        x: 0,
        opacity: 1,
        rotateY: 0,
        ease: 'power2.out',
        duration: 1,
        scrollTrigger: { trigger: el, start: 'top 90%', end: 'center 60%', scrub: 1 },
      }
    );
  });
}

/* --------------------------------------------------- caso real: tríptico 3D */

function initTriptych() {
  const panels = gsap.utils.toArray<HTMLElement>('.tri-panel');
  if (!panels.length) return;

  panels.forEach((el, i) => {
    gsap.fromTo(
      el,
      { rotateY: i === 0 ? -34 : i === 2 ? 34 : 0, z: -180, opacity: 0.3 },
      {
        rotateY: 0,
        z: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section'),
          start: 'top 72%',
          end: 'center 48%',
          scrub: 1,
        },
      }
    );
  });
}

/* ------------------------------------------------------- proceso: camino 3D */

function initPath() {
  const nodes = gsap.utils.toArray<HTMLElement>('.path-node');
  if (!nodes.length) return;

  nodes.forEach((el, i) => {
    gsap.fromTo(
      el,
      { z: -300 - i * 120, y: 40, opacity: 0.2 },
      {
        z: 0,
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%', end: 'center 62%', scrub: 1 },
      }
    );
  });

  const rail = document.querySelector<HTMLElement>('[data-path-rail]');
  if (rail) {
    gsap.fromTo(
      rail,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        transformOrigin: 'left center',
        scrollTrigger: {
          trigger: rail.closest('section'),
          start: 'top 70%',
          end: 'center 45%',
          scrub: 1,
        },
      }
    );
  }
}

/* --------------------------------------------------------- barra de scroll  */

function initProgressRail() {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!bar) return;
  gsap.to(bar, {
    scaleX: 1,
    ease: 'none',
    transformOrigin: 'left center',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
  });
}

/* ----------------------------------------------------------- navbar estados */

function initNavState() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  ScrollTrigger.create({
    start: 60,
    end: 'max',
    onToggle: (self) => nav.classList.toggle('is-stuck', self.isActive),
  });
}

/* -------------------------------------------------------------------- boot  */

function boot() {
  initNavState();
  initProgressRail();

  if (REDUCED) {
    // Sin movimiento: el CSS ya dejó todo visible; solo refrescamos medidas.
    ScrollTrigger.refresh();
    return;
  }

  initReveals();
  initTilt();
  initParallax();
  initChaos();
  initDeck();
  initStairs();
  initTriptych();
  initPath();

  // Las fuentes cambian alturas: recalcular cuando terminan de cargar.
  if ('fonts' in document) {
    (document as Document & { fonts: FontFaceSet }).fonts.ready.then(() =>
      ScrollTrigger.refresh()
    );
  }
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}

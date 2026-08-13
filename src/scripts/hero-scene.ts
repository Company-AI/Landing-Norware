/**
 * Escena 3D del hero — "desorden → sistema".
 *
 * Un InstancedMesh de cubos arranca disperso (color coral = caos operativo) y
 * se ensambla en una retícula de tres planos alineados (color verde = orden).
 * El progreso lo maneja: (a) una entrada animada al cargar, (b) el scroll.
 *
 * Basado en los patrones de la skill `threejs-webgl` (InstancedMesh, reuso de
 * geometría, DynamicDrawUsage, dispose) + `gsap-scrolltrigger` (scrub).
 */
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Cleanup = () => void;

const smoothstep = (t: number) => t * t * (3 - 2 * t);
const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);

/** Pseudo-aleatorio determinista: la misma escena en cada carga. */
function rand(i: number, salt: number) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function initHeroScene(canvas: HTMLCanvasElement): Cleanup {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSmall = window.matchMedia('(max-width: 767px)').matches;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isSmall,
      alpha: true,
      powerPreference: 'high-performance',
    });
  } catch {
    // Sin WebGL el hero conserva sus degradados CSS: no hay nada que hacer.
    return () => {};
  }

  const COUNT = isSmall ? 300 : 860;

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmall ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 160);
  camera.position.set(0, 1.9, 15.5);

  // --- Luz: clave verde, contra violeta, base fría ---
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  scene.add(new THREE.HemisphereLight(0xa8bcff, 0x05060a, 0.75));
  const key = new THREE.DirectionalLight(0xd9c6ff, 2.6);
  key.position.set(7, 10, 8);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x7f9dff, 2.1);
  rim.position.set(-9, -2, -7);
  scene.add(rim);

  // --- Retícula ordenada (estado final) ---
  const LAYERS = 3;
  const perLayer = Math.ceil(COUNT / LAYERS);
  const cols = Math.max(6, Math.round(Math.sqrt(perLayer * 2.1)));
  const rows = Math.ceil(perLayer / cols);
  const sp = isSmall ? 0.42 : 0.5;
  const layerGap = isSmall ? 1.15 : 1.32;

  const geo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
  const mat = new THREE.MeshStandardMaterial({ roughness: 0.32, metalness: 0.5 });
  const mesh = new THREE.InstancedMesh(geo, mat, COUNT);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;

  const group = new THREE.Group();
  group.rotation.x = -0.2;
  group.add(mesh);
  scene.add(group);

  type Inst = {
    ox: number; oy: number; oz: number; // orden
    cx: number; cy: number; cz: number; // caos
    rx: number; ry: number; rz: number; // rotación en caos
    delay: number;
    hue: number;
  };

  const insts: Inst[] = new Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    const layer = Math.floor(i / perLayer);
    const idx = i % perLayer;
    const c = idx % cols;
    const r = Math.floor(idx / cols);
    const offX = (layer - 1) * sp * 1.6;
    const offZ = (layer - 1) * -sp * 1.4;

    const rr = 5.5 + rand(i, 1) * 5.5;
    const th = rand(i, 2) * Math.PI * 2;
    const ph = Math.acos(2 * rand(i, 3) - 1);

    insts[i] = {
      ox: (c - (cols - 1) / 2) * sp + offX,
      oy: (layer - (LAYERS - 1) / 2) * layerGap,
      oz: (r - (rows - 1) / 2) * sp + offZ,
      cx: rr * Math.sin(ph) * Math.cos(th),
      cy: rr * Math.cos(ph) * 0.72,
      cz: rr * Math.sin(ph) * Math.sin(th) * 0.72,
      rx: (rand(i, 4) - 0.5) * Math.PI * 2,
      ry: (rand(i, 5) - 0.5) * Math.PI * 2,
      rz: (rand(i, 6) - 0.5) * Math.PI * 2,
      delay: rand(i, 7),
      hue: rand(i, 8),
    };
  }

  const colChaos = new THREE.Color('#FF6A45');
  const colChaos2 = new THREE.Color('#C24428');
  const colOrder = new THREE.Color('#9B5CFF');
  const colOrder2 = new THREE.Color('#4C6EF5');

  const dummy = new THREE.Object3D();
  const tmp = new THREE.Color();
  const tmpB = new THREE.Color();

  // --- Polvo de fondo: profundidad barata ---
  const dustCount = isSmall ? 220 : 520;
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (rand(i, 21) - 0.5) * 44;
    dustPos[i * 3 + 1] = (rand(i, 22) - 0.5) * 26;
    dustPos[i * 3 + 2] = (rand(i, 23) - 0.5) * 30 - 6;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dustMat = new THREE.PointsMaterial({
    color: 0xdfe7ff,
    size: 0.055,
    transparent: true,
    opacity: 0.42,
    sizeAttenuation: true,
    depthWrite: false,
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  scene.add(dust);

  // --- Estado ---
  const state = { intro: 0, scroll: 0 };
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let lastP = -1;

  function writeInstances(p: number) {
    for (let i = 0; i < COUNT; i++) {
      const s = insts[i];
      // Cada cubo entra en orden con un pequeño desfase → efecto de ensamblado.
      const t = smoothstep(clamp01((p - s.delay * 0.34) / 0.66));

      dummy.position.set(
        s.cx + (s.ox - s.cx) * t,
        s.cy + (s.oy - s.cy) * t,
        s.cz + (s.oz - s.cz) * t
      );
      dummy.rotation.set(s.rx * (1 - t), s.ry * (1 - t), s.rz * (1 - t));
      const sc = 0.72 + t * 0.42;
      dummy.scale.set(sc, sc, sc);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      tmp.copy(s.hue > 0.5 ? colChaos : colChaos2);
      tmpB.copy(s.hue > 0.78 ? colOrder2 : colOrder);
      tmp.lerp(tmpB, t);
      mesh.setColorAt(i, tmp);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }

  writeInstances(0);

  // --- Resize sobre el contenedor real del canvas ---
  function resize() {
    const parent = canvas.parentElement;
    const w = parent?.clientWidth || window.innerWidth;
    const h = parent?.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(h, 1);
    // En pantallas angostas hay que alejarse para que la retícula entre.
    camera.position.z = camera.aspect < 0.95 ? 21 : camera.aspect < 1.4 ? 18 : 15.5;
    camera.updateProjectionMatrix();
  }
  resize();
  const ro = new ResizeObserver(resize);
  if (canvas.parentElement) ro.observe(canvas.parentElement);

  // --- Puntero: paralaje de cámara ---
  function onMove(e: PointerEvent) {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
  }
  if (!isSmall) window.addEventListener('pointermove', onMove, { passive: true });

  // --- Loop ---
  const clock = new THREE.Clock();
  let running = false;

  function frame() {
    const dt = Math.min(clock.getDelta(), 0.05);
    const el = clock.getElapsedTime();

    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;

    const p = clamp01(state.intro + state.scroll * 0.42);
    if (Math.abs(p - lastP) > 0.0015) {
      writeInstances(p);
      lastP = p;
    }

    // El grupo se aquieta a medida que se ordena: el caos gira, el sistema no.
    const wobble = 1 - p * 0.82;
    group.rotation.y = el * 0.055 * wobble + pointer.x * 0.14;
    group.rotation.x = -0.2 + Math.sin(el * 0.22) * 0.05 * wobble - pointer.y * 0.06;
    group.position.y = Math.sin(el * 0.35) * 0.14 * wobble;

    dust.rotation.y = el * 0.012;

    camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.04;
    camera.position.y += (1.9 - pointer.y * 1.0 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    void dt;
  }

  function start() {
    if (running) return;
    running = true;
    clock.getDelta();
    renderer.setAnimationLoop(frame);
  }
  function stop() {
    if (!running) return;
    running = false;
    renderer.setAnimationLoop(null);
  }

  // Solo renderizamos si el hero está a la vista.
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
    },
    { rootMargin: '120px' }
  );
  io.observe(canvas);

  // --- Entrada + scroll ---
  const introTween = reduce
    ? gsap.set(state, { intro: 0.34 })
    : gsap.to(state, { intro: 0.34, duration: 2.6, ease: 'power2.out', delay: 0.15 });

  const trigger = ScrollTrigger.create({
    trigger: canvas.closest('section') || canvas,
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      state.scroll = self.progress;
    },
  });

  if (reduce) {
    writeInstances(0.52);
    renderer.render(scene, camera);
  }

  return () => {
    stop();
    io.disconnect();
    ro.disconnect();
    trigger.kill();
    if (introTween && 'kill' in introTween) (introTween as gsap.core.Tween).kill();
    window.removeEventListener('pointermove', onMove);
    geo.dispose();
    mat.dispose();
    dustGeo.dispose();
    dustMat.dispose();
    mesh.dispose();
    renderer.dispose();
  };
}

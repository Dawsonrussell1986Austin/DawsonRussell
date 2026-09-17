"use client";

import { useEffect, useRef, useState } from "react";

const modes = ["Orbit", "Flow", "Stack"];

export function IdeaSculpture() {
  const mount = useRef<HTMLDivElement>(null);
  const controls = useRef({ mode: 0, paused: false, burst: 0 });
  const [mode, setMode] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    controls.current.paused = media.matches;
    setPaused(media.matches);
    async function init() {
      const THREE = await import("three");
      const { RoomEnvironment } = await import("three/addons/environments/RoomEnvironment.js");
      const host = mount.current;
      if (!host || disposed) return;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x101210, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.55;
      host.appendChild(renderer.domElement);
      renderer.domElement.setAttribute("aria-hidden", "true");
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      const environment = pmrem.fromScene(room, 0.04);
      scene.environment = environment.texture;
      room.dispose();
      pmrem.dispose();
      const camera = new THREE.PerspectiveCamera(36, 1, .1, 50);
      camera.position.set(0, 0, 11.2);
      const group = new THREE.Group();
      group.rotation.set(.35, -.25, -.4);
      scene.add(group);
      const geometry = new THREE.CapsuleGeometry(.12, .34, 4, 8);
      const material = new THREE.MeshStandardMaterial({ color: 0xc4cdc1, metalness: 1, roughness: .23 });
      const count = 460;
      const pieces = new THREE.InstancedMesh(geometry, material, count);
      pieces.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      pieces.frustumCulled = false;
      group.add(pieces);
      const dummy = new THREE.Object3D();
      const positions = Array.from({ length: count }, () => new THREE.Vector3());
      const color = new THREE.Color();
      for (let i = 0; i < count; i++) {
        color.set(i % 11 < 2 ? 0xd8ff39 : i % 17 === 0 ? 0xf2f5ec : 0xa2aba6);
        pieces.setColorAt(i, color);
      }
      const light = new THREE.DirectionalLight(0xe1ffc0, 4);
      light.position.set(3, 4, 5); scene.add(light);
      const fill = new THREE.PointLight(0x6b8eff, 35);
      fill.position.set(-4, -2, 3); scene.add(fill);
      const orbitGeometry = new THREE.TorusGeometry(3.18, .008, 4, 160);
      const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0x6b7856, transparent: true, opacity: .4 });
      const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
      orbit.rotation.set(.7, .4, 0); group.add(orbit);
      let visible = true, frame = 0, time = 0, last = 0, modeValue = 0;
      let pointerX = 0, pointerY = 0, burst = 0;
      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        renderer.setSize(width, height, false);
        camera.aspect = width / Math.max(height, 1);
        camera.position.z = camera.aspect < .9 ? 13 : 11.2;
        camera.updateProjectionMatrix();
      };
      const resizeObserver = new ResizeObserver(resize); resizeObserver.observe(host); resize();
      const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }); observer.observe(host);
      const move = (event: PointerEvent) => {
        const r = host.getBoundingClientRect();
        pointerX = (event.clientX - r.left) / r.width - .5;
        pointerY = (event.clientY - r.top) / r.height - .5;
      };
      const leave = () => { pointerX = 0; pointerY = 0; };
      const reduced = () => { controls.current.paused = media.matches; setPaused(media.matches); };
      host.addEventListener("pointermove", move);
      host.addEventListener("pointerleave", leave);
      media.addEventListener("change", reduced);
      const target = new THREE.Vector3();
      const animate = (now: number) => {
        if (disposed) return;
        frame = requestAnimationFrame(animate);
        if (!visible || document.hidden || now - last < 1000 / 30) return;
        const dt = Math.min((now - last) / 1000, .05); last = now;
        if (!controls.current.paused) time += dt;
        modeValue += (controls.current.mode - modeValue) * .08;
        burst += (controls.current.burst - burst) * .065;
        controls.current.burst *= .96;
        const active = controls.current.mode;
        for (let i = 0; i < count; i++) {
          const u = (i % 46) / 46 * Math.PI * 2;
          const v = Math.floor(i / 46) / 10 * Math.PI * 2;
          if (active === 0) {
            const r = 1.95 + .7 * Math.cos(v + u * 1.5);
            target.set(r * Math.cos(u), r * Math.sin(u), .7 * Math.sin(v + u * 1.5));
          } else if (active === 1) {
            const x = (i % 23 - 11) * .235;
            const y = (Math.floor(i / 23) - 9.5) * .22;
            target.set(x, y, Math.sin(x * 1.6 + time * .8) * .8 + Math.cos(y * 1.9 + time * .4) * .55);
          } else {
            const a = i * 2.39996;
            const y = (i / count - .5) * 4.8;
            const r = 1.15 + .48 * Math.sin(y * 2 + time * .5);
            target.set(Math.cos(a) * r, y, Math.sin(a) * r);
          }
          target.multiplyScalar(1 + burst * (.3 + (i % 7) * .06));
          positions[i].lerp(target, media.matches ? 1 : .085);
          dummy.position.copy(positions[i]);
          dummy.rotation.set(v + time * .1, u, u + modeValue * .8);
          dummy.scale.setScalar(active === 2 ? .8 : 1);
          dummy.updateMatrix(); pieces.setMatrixAt(i, dummy.matrix);
        }
        pieces.instanceMatrix.needsUpdate = true;
        if (!controls.current.paused) {
          group.rotation.y += (.2 + pointerX * .75 + Math.sin(time * .15) * .2 - group.rotation.y) * .025;
          group.rotation.x += (.4 + pointerY * .4 - group.rotation.x) * .025;
          group.rotation.z = -.35 + Math.sin(time * .2) * .1;
        }
        renderer.render(scene, camera);
      };
      frame = requestAnimationFrame(animate);
      const contextLost = (e: Event) => { e.preventDefault(); setFailed(true); };
      renderer.domElement.addEventListener("webglcontextlost", contextLost);
      setReady(true);
      cleanup = () => {
        cancelAnimationFrame(frame); observer.disconnect(); resizeObserver.disconnect();
        host.removeEventListener("pointermove", move); host.removeEventListener("pointerleave", leave);
        media.removeEventListener("change", reduced);
        renderer.domElement.removeEventListener("webglcontextlost", contextLost);
        geometry.dispose(); material.dispose(); orbitGeometry.dispose(); orbitMaterial.dispose(); environment.dispose();
        pieces.dispose(); renderer.dispose(); renderer.domElement.remove();
      };
    }
    init().catch(() => { if (!disposed) setFailed(true); });
    return () => { disposed = true; cleanup(); };
  }, []);

  return <div className="sculpture" data-scene-ready={ready && !failed}>
    <div className="sculpture-fallback" aria-hidden="true" style={{ opacity: ready && !failed ? 0 : 1 }}><span /><span /><span /></div>
    <div ref={mount} className="sculpture-canvas" role="img" aria-label="An interactive sculpture of chrome and lime pieces that transforms between an orbit, a wave, and a twisting stack" />
    <div className="scene-label"><span className="live-dot" /> IDEAS IN MOTION <span>001—003</span></div>
    <div className="scene-controls">
      <div className="scene-modes" aria-label="Sculpture shape">{modes.map((name, i) => <button key={name} disabled={failed} aria-pressed={mode === i} onClick={() => { setMode(i); controls.current.mode = i; }}>{name}</button>)}</div>
      <button className="scatter" disabled={failed} onClick={() => { controls.current.burst = 1.8; }} aria-label="Scatter the sculpture">↗ Scatter</button>
      <button className="scene-pause" disabled={failed} aria-label={paused ? "Resume sculpture animation" : "Pause sculpture animation"} aria-pressed={paused} onClick={() => { controls.current.paused = !paused; setPaused(!paused); }}>{paused ? "Play" : "Pause"}</button>
    </div>
    <p className="scene-help">{failed ? "A still moment. Explore the work below." : "Move your cursor. Change its shape. See what happens."}</p>
  </div>;
}

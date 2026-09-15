import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { 
  ArrowRight, 
  Award, 
  Terminal, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  Calendar,
  Gamepad2,
  Layers
} from 'lucide-react';

interface Hero3DProps {
  lang: Language;
  onExploreProjects: () => void;
  onViewTrophy: () => void;
  onOpenTerminal: () => void;
  onContact: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({
  lang,
  onExploreProjects,
  onViewTrophy,
  onOpenTerminal,
  onContact,
}) => {
  const t = TRANSLATIONS[lang];
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Stars / Constellation
    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const purpleColor = new THREE.Color(0x8b5cf6);
    const emeraldColor = new THREE.Color(0x10b981);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const mixed = Math.random();
      const col = mixed < 0.4 ? cyanColor : mixed < 0.8 ? purpleColor : emeraldColor;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
      size: 0.8,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(geometry, pMaterial);
    scene.add(particleSystem);

    // Floating Geometric 3D Objects
    // 1. Torus Knot (Cyan wireframe glow)
    const torusGeo = new THREE.TorusKnotGeometry(4.5, 1.2, 100, 16);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      wireframe: true,
      emissive: 0x002d44,
      roughness: 0.2,
      metalness: 0.8,
    });
    const torusKnot = new THREE.Mesh(torusGeo, torusMat);
    torusKnot.position.set(16, 2, -5);
    scene.add(torusKnot);

    // 2. Icosahedron (Purple glass/solid)
    const icoGeo = new THREE.IcosahedronGeometry(3.5, 0);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea,
      wireframe: true,
      emissive: 0x2e0854,
      roughness: 0.1,
    });
    const icosahedron = new THREE.Mesh(icoGeo, icoMat);
    icosahedron.position.set(-18, -4, -4);
    scene.add(icosahedron);

    // 3. Voxel Cube (Minecraft motif)
    const cubeGeo = new THREE.BoxGeometry(3, 3, 3);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      wireframe: true,
      emissive: 0x064e3b,
    });
    const voxelCube = new THREE.Mesh(cubeGeo, cubeMat);
    voxelCube.position.set(-12, 12, -8);
    scene.add(voxelCube);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 2.5);
    dirLight1.position.set(20, 20, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xec4899, 2);
    dirLight2.position.set(-20, -20, -10);
    scene.add(dirLight2);

    // Mouse interactive movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle floating rotations
      torusKnot.rotation.x = elapsedTime * 0.35;
      torusKnot.rotation.y = elapsedTime * 0.45;

      icosahedron.rotation.x = elapsedTime * 0.25;
      icosahedron.rotation.z = elapsedTime * 0.3;

      voxelCube.rotation.y = elapsedTime * 0.5;
      voxelCube.rotation.x = elapsedTime * 0.3;

      particleSystem.rotation.y = elapsedTime * 0.03;

      // Smooth mouse easing
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 15;
      camera.position.y = -targetY * 15;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* 3D WebGL Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      />

      {/* Cyberpunk Radial Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-br from-cyan-600/15 via-indigo-600/10 to-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badges Ribbon */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 pr-4 rounded-full bg-[#12141f]/80 border border-white/10 backdrop-blur-xl shadow-xl shadow-cyan-500/10 mb-8 animate-in fade-in zoom-in duration-500">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold shadow-md shadow-amber-500/30">
            <Award className="w-3.5 h-3.5" />
            <span>Mars Hackathon 2026: 2-o'rin (92.1 ball)</span>
          </span>
          <span className="hidden sm:flex items-center gap-1 text-xs text-gray-300 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>IT Imtihoni: 20/20 (100%)</span>
          </span>
        </div>

        {/* Hero Title */}
        <div className="space-y-4 mb-8">
          <p className="text-sm sm:text-base font-mono tracking-widest text-cyan-400 uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>{t.hero.greeting}</span>
          </p>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight break-words">
            Gafurov <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-fuchsia-400">Muhammad Ali</span>
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-200 tracking-tight">
            {t.hero.role}
          </p>
        </div>

        {/* Dynamic Subtitle & Architecture Summary */}
        <p className="max-w-3xl mx-auto text-xs sm:text-base md:text-lg text-gray-300 leading-relaxed mb-8 px-2">
          {t.hero.subtitle}
        </p>

        {/* Developer Info Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-mono text-gray-300 mb-10">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
            <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>13 yosh (15.01.2013)</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-fuchsia-400 shrink-0" />
            <span>Toshkent, Mirzo Ulug'bek</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
            <Layers className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>IELTS 7.5+ Nomzod</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
            <Gamepad2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Steam: m0NESY · London System</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
          <button
            onClick={() => {
              sounds.playClick();
              onExploreProjects();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onViewTrophy();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold text-sm hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{t.hero.trophyBtn} (92.1)</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onOpenTerminal();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono text-sm hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>{t.hero.terminalBtn}</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onContact();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-medium text-sm hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <span>{t.hero.contactBtn}</span>
          </button>
        </div>

        {/* Developer Philosophy Quote Card */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-gray-300 text-xs sm:text-sm font-sans italic relative">
          <span className="text-cyan-400 text-lg font-mono font-bold mr-1">“</span>
          {lang === 'uz' ? PERSONAL_INFO.quoteUz : PERSONAL_INFO.quoteEn}
          <span className="text-cyan-400 text-lg font-mono font-bold ml-1">”</span>
        </div>
      </div>
    </section>
  );
};

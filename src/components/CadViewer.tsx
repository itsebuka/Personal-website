"use client";

import { useEffect, useRef, useState } from "react";
import { Grid3X3, Download } from "lucide-react";

interface CadViewerProps {
  url: string;
  name: string;
  height?: number;
}

export default function CadViewer({ url, name, height = 340 }: CadViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [wireframe, setWireframe] = useState(false);
  const materialRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    let cancelled = false;
    const container = mountRef.current;
    let cleanupFn: (() => void) | undefined;

    async function init() {
      const THREE = await import("three");
      const { STLLoader } = await import(
        /* webpackChunkName: "stl-loader" */
        "three/examples/jsm/loaders/STLLoader.js"
      );
      const { OrbitControls } = await import(
        /* webpackChunkName: "orbit-controls" */
        "three/examples/jsm/controls/OrbitControls.js"
      );

      if (cancelled) return;

      const W = container.clientWidth || 600;
      const H = height;

      // ── Scene ───────────────────────────────────────────────
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#0d0d0d");

      // ── Camera ──────────────────────────────────────────────
      const camera = new THREE.PerspectiveCamera(45, W / H, 0.001, 5000);
      camera.position.set(0, 5, 10);

      // ── Renderer ────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);

      // ── Lighting ────────────────────────────────────────────
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));

      const sun = new THREE.DirectionalLight(0xffffff, 1.4);
      sun.position.set(10, 20, 15);
      sun.castShadow = true;
      sun.shadow.mapSize.set(2048, 2048);
      scene.add(sun);

      const fill = new THREE.DirectionalLight(0x8899ff, 0.5);
      fill.position.set(-10, -5, -10);
      scene.add(fill);

      const rim = new THREE.DirectionalLight(0xffcc66, 0.3);
      rim.position.set(0, -8, 5);
      scene.add(rim);

      // ── Controls ────────────────────────────────────────────
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.07;
      controls.minDistance = 0.01;
      controls.maxDistance = 2000;

      // ── Load STL ────────────────────────────────────────────
      const loader = new STLLoader();
      loader.load(
        url,
        (geometry) => {
          if (cancelled) return;

          geometry.computeVertexNormals();
          geometry.center();
          geometry.computeBoundingBox();

          const box = geometry.boundingBox!;
          const size = new THREE.Vector3();
          box.getSize(size);
          const maxDim = Math.max(size.x, size.y, size.z) || 1;

          // Fit camera
          const fov = camera.fov * (Math.PI / 180);
          const dist = Math.abs(maxDim / Math.sin(fov / 2)) * 0.9;
          camera.near = dist / 200;
          camera.far = dist * 50;
          camera.updateProjectionMatrix();
          camera.position.set(dist * 0.6, dist * 0.8, dist);
          camera.lookAt(0, 0, 0);
          controls.update();

          // Material
          const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color("#b8bcc8"),
            specular: new THREE.Color("#555577"),
            shininess: 70,
            side: THREE.DoubleSide,
          });
          materialRef.current = material;

          const mesh = new THREE.Mesh(geometry, material);
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          scene.add(mesh);

          // Shadow plane
          const planeGeo = new THREE.PlaneGeometry(maxDim * 6, maxDim * 6);
          const planeMat = new THREE.ShadowMaterial({ opacity: 0.18 });
          const plane = new THREE.Mesh(planeGeo, planeMat);
          plane.rotation.x = -Math.PI / 2;
          plane.position.y = -size.y / 2 - 0.01;
          plane.receiveShadow = true;
          scene.add(plane);

          // Grid
          const grid = new THREE.GridHelper(
            maxDim * 5,
            24,
            new THREE.Color("#2a2a2a"),
            new THREE.Color("#1a1a1a")
          );
          grid.position.y = -size.y / 2 - 0.01;
          scene.add(grid);

          setLoading(false);
        },
        (evt) => {
          if (evt.total > 0) {
            setProgress(Math.round((evt.loaded / evt.total) * 100));
          }
        },
        (err) => {
          if (!cancelled) {
            console.error("[CadViewer] STL load error:", err);
            setError("Could not load 3D model");
            setLoading(false);
          }
        }
      );

      // ── Animation loop ──────────────────────────────────────
      let animId: number;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // ── Resize ──────────────────────────────────────────────
      const onResize = () => {
        if (!container) return;
        const W = container.clientWidth;
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        renderer.setSize(W, H);
      };
      window.addEventListener("resize", onResize);

      cleanupFn = () => {
        window.removeEventListener("resize", onResize);
        cancelAnimationFrame(animId);
        controls.dispose();
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    init().catch(console.error);

    return () => {
      cancelled = true;
      cleanupFn?.();
    };
  }, [url, height]);

  // Wireframe toggle
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.wireframe = wireframe;
    }
  }, [wireframe]);

  return (
    <div
      className="relative rounded-xl overflow-hidden bg-[#0d0d0d] border border-[#262626]"
      style={{ height }}
    >
      <div ref={mountRef} className="w-full h-full" />

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d0d] gap-3">
          <div className="w-9 h-9 border-2 border-zinc-700 border-t-zinc-300 rounded-full animate-spin" />
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[11px] text-zinc-400 font-sans">Loading {name}…</span>
            {progress > 0 && (
              <>
                <div className="w-36 h-[3px] bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-[9px] text-zinc-600">{progress}%</span>
              </>
            )}
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0d0d] gap-3">
          <span className="text-[11px] text-red-400/80 font-sans">{error}</span>
          <a
            href={url}
            download
            className="font-sans text-[10px] text-zinc-500 hover:text-zinc-300 underline transition-colors"
          >
            Download file instead
          </a>
        </div>
      )}

      {/* Toolbar */}
      {!loading && !error && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <button
            onClick={() => setWireframe((w) => !w)}
            className={`p-1.5 rounded-lg border text-xs transition-all ${
              wireframe
                ? "bg-white text-black border-white"
                : "bg-black/60 border-white/10 text-zinc-400 hover:text-white"
            }`}
            title="Toggle wireframe"
          >
            <Grid3X3 className="w-3.5 h-3.5" />
          </button>
          <a
            href={url}
            download
            className="p-1.5 rounded-lg border bg-black/60 border-white/10 text-zinc-400 hover:text-white transition-colors"
            title="Download STL"
          >
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Hint label */}
      {!loading && !error && (
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span className="font-sans text-[9px] text-zinc-600 uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded">
            Drag · Scroll to zoom · Right-drag to pan
          </span>
        </div>
      )}
    </div>
  );
}

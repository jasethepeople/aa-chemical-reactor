import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Compound } from "../../types";
import { ELEMENTS } from "../../data/elements";

interface Props {
  compound: Compound;
  width?: number;
  height?: number;
}

export const BallStick3D: React.FC<Props> = ({ compound, width = 400, height = 400 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight.position.set(5, 5, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0x4444ff, 0.3);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    const moleculeGroup = new THREE.Group();
    scene.add(moleculeGroup);

    let cx = 0, cy = 0, cz = 0;
    compound.atoms.forEach(a => { cx += a.x; cy += a.y; cz += a.z; });
    cx /= compound.atoms.length; cy /= compound.atoms.length; cz /= compound.atoms.length;

    const atomMeshes = new Map<string, THREE.Mesh>();

    compound.atoms.forEach(atom => {
      const element = ELEMENTS[atom.element];
      const radius = element ? (element.radius / 100) * 0.5 : 0.3;
      const color = element ? element.color : "#888888";

      const geometry = new THREE.SphereGeometry(radius, 32, 32);
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color),
        metalness: 0.2, roughness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.1,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(atom.x - cx, atom.y - cy, atom.z - cz);
      mesh.castShadow = true; mesh.receiveShadow = true;
      moleculeGroup.add(mesh);
      atomMeshes.set(atom.id, mesh);

      if (atom.lonePairs > 0) {
        for (let i = 0; i < atom.lonePairs; i++) {
          const lpGeom = new THREE.SphereGeometry(0.08, 8, 8);
          const lpMat = new THREE.MeshBasicMaterial({ color: 0x88ccff, transparent: true, opacity: 0.6 });
          const lp = new THREE.Mesh(lpGeom, lpMat);
          const angle = (i / atom.lonePairs) * Math.PI * 2;
          lp.position.set(
            mesh.position.x + Math.cos(angle) * (radius + 0.2),
            mesh.position.y + Math.sin(angle) * (radius + 0.2),
            mesh.position.z
          );
          moleculeGroup.add(lp);
        }
      }
    });

    compound.bonds.forEach(bond => {
      const atomA = compound.atoms.find(a => a.id === bond.from);
      const atomB = compound.atoms.find(a => a.id === bond.to);
      if (!atomA || !atomB) return;

      const posA = new THREE.Vector3(atomA.x - cx, atomA.y - cy, atomA.z - cz);
      const posB = new THREE.Vector3(atomB.x - cx, atomB.y - cy, atomB.z - cz);
      const distance = posA.distanceTo(posB);
      const mid = posA.clone().add(posB).multiplyScalar(0.5);
      const bondRadius = bond.type === "double" ? 0.06 : bond.type === "triple" ? 0.05 : 0.08;
      const geometry = new THREE.CylinderGeometry(bondRadius, bondRadius, distance, 12);
      const material = new THREE.MeshPhysicalMaterial({ color: 0x888888, metalness: 0.5, roughness: 0.4 });
      const cylinder = new THREE.Mesh(geometry, material);
      cylinder.position.copy(mid);
      cylinder.lookAt(posB);
      cylinder.rotateX(Math.PI / 2);
      cylinder.castShadow = true;
      moleculeGroup.add(cylinder);

      if (bond.type === "double" || bond.type === "triple") {
        const offset = 0.12;
        const perp = new THREE.Vector3(0, 1, 0).applyQuaternion(
          new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), posB.clone().sub(posA).normalize())
        );
        for (let i = 0; i < (bond.type === "triple" ? 2 : 1); i++) {
          const dir = i === 0 ? 1 : -1;
          const geom2 = new THREE.CylinderGeometry(0.04, 0.04, distance, 8);
          const cyl2 = new THREE.Mesh(geom2, material);
          cyl2.position.copy(mid).add(perp.clone().multiplyScalar(offset * dir));
          cyl2.lookAt(posB.clone().add(perp.clone().multiplyScalar(offset * dir)));
          cyl2.rotateX(Math.PI / 2);
          moleculeGroup.add(cyl2);
        }
      }
    });

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const onMouseDown = (e: MouseEvent) => { isDragging = true; previousMousePosition = { x: e.clientX, y: e.clientY }; };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaMove = { x: e.clientX - previousMousePosition.x, y: e.clientY - previousMousePosition.y };
      moleculeGroup.rotation.y += deltaMove.x * 0.01;
      moleculeGroup.rotation.x += deltaMove.y * 0.01;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => { isDragging = false; };
    const onWheel = (e: WheelEvent) => {
      camera.position.z += e.deltaY * 0.01;
      camera.position.z = Math.max(3, Math.min(20, camera.position.z));
    };

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("wheel", onWheel);

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      if (!isDragging) moleculeGroup.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameRef.current);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      renderer.domElement.removeEventListener("wheel", onWheel);
      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [compound, width, height]);

  return (
    <div ref={mountRef} style={{
      width, height, borderRadius: "12px", overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.4)", border: "1px solid #333"
    }} />
  );
};

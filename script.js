// Import necessary libraries
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 20);

// Load the colosseum_rome_italy model
const loader = new GLTFLoader();
loader.load(
  'models/colosseum_rome_italy/scene.gltf',
  function (gltf) {
    const object = gltf.scene;
    object.scale.set(2, 2, 2); // Adjust scale as needed
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);


// Create the renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

// Add lights
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 100, 100);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xC0C0C0);
scene.add(ambientLight);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Resize handling
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Interaction: Rotate model on click 
document.addEventListener("click", function () {
    if (scene.children.length > 0) {
      const object = scene.children[0];
      object.rotation.y += Math.PI / 4;
    }
  });
  
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  document.addEventListener('mousedown', onDocumentMouseDown, false);
  
  function onDocumentMouseDown(event) {
    event.preventDefault();
  
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    raycaster.setFromCamera(mouse, camera);
  
    const intersects = raycaster.intersectObjects(scene.children, true);
  
    if (intersects.length > 0) {
      const object = intersects[0].object;
      object.scale.set(1.2, 1.2, 1.2);
    }
  }
  
  // Add Background Music 
  const listener = new THREE.AudioListener();
  camera.add(listener);
  
  const sound = new THREE.Audio(listener);
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load('bg_music.mp3', function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.5);
    sound.play();
  });
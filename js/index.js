import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";
import InitialSetupper from "./InitialSetupper.js";

console.log("Script connected!");

const canvas = document.querySelector("#c");

const world = new InitialSetupper(canvas);

const cubeGeometry = new THREE.BoxGeometry();
const cubeTexture = new THREE.TextureLoader().load(
	"./js/textures/stone_mine.png"
);
const cubeMaterial = new THREE.MeshBasicMaterial({ map: cubeTexture });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

world.scene.add(cube);

world.camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);
	world.renderer.render(world.scene, world.camera);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}
animate();

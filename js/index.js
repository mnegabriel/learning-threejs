import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";
import InitialSetupper from "./classes/InitialSetupper.js";
import MyBoxGeometry from "./classes/MyBoxGeometry.js";

console.log("🙌 Script connected!");

function main() {
	
	// const canvas = document.querySelector("#c");
	
	const world = new InitialSetupper();	
	const cubes = [
		new MyBoxGeometry(0x000fff, true),
		new MyBoxGeometry("./js/textures/stone_mine.png", true),
		new MyBoxGeometry(0xccc000, true)
	]

	const lightingColor = 0xFFFFFF;
	const lightingIntensity = 1;
	const light = new THREE.DirectionalLight(lightingColor, lightingIntensity);
	light.position.set(-1, 2, 4);
	
	cubes.forEach( (cube, index) => {
		let yPosition = (index - 1) * 2
		cube.changeYPosition(yPosition)
	})

	const arrayOfItemsInTheScene = [
		light,
		...cubes.map(cubeInstance => cubeInstance.cubeMesh)
	]

	world.scene.add(...arrayOfItemsInTheScene);
	world.camera.position.z = 5;
	
	function animate(animationTime) {
		animationTime *= 0.001
		
		cubes.forEach( (cube, index) => {
			const speed = 1 + index * .2
			const rot = animationTime * speed
			
			cube.changeRotationXY(rot)
		})
		
		world.renderer.render(world.scene, world.camera);
		requestAnimationFrame(animate);
	}

	animate();
}

main()

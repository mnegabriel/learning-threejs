import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	_FOV = 75; // Field Of View in degrees
	_NEAR_CLIPPING_PLANE = 0.01;
	_FAR_CLIPPING_PLANE = 1000;

	constructor() {
		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(
			this._FOV,
			window.innerWidth / window.innerHeight,
			this._NEAR_CLIPPING_PLANE,
			this._FAR_CLIPPING_PLANE
		);

		this.renderer = new THREE.WebGLRenderer();

		this._appendRendererToBody();
		this._responsiveUpdateToRenderSizeAndCamera();
		this._addResizeEventListener();
	}

	_appendRendererToBody() {
		document.body.appendChild(this.renderer.domElement);
	}

	_responsiveUpdateToRenderSizeAndCamera() {
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
	}

	_addResizeEventListener() {
		window.addEventListener("resize", () =>
			this._responsiveUpdateToRenderSizeAndCamera()
		);
	}
}
